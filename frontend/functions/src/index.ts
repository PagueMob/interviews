import * as contacts from './contacts'

const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const validate = require('express-jsonschema').validate
const bodyParser = require('body-parser')
const auth = require('basic-auth')
const base64 = require('js-base64').Base64;
const cors = require('cors')

admin.initializeApp(functions.config().firebase)

const app = express()
app.use(bodyParser.json())
app.use(cors({ origin: true }))

// ------------------------- REQUEST FILTER
const basicAuth = async (req, res, next) => {
	const credentials = auth(req)

	if(credentials) {
		const authentication = await checkAuth(credentials.name, credentials.pass)
		if(authentication) {
			return next()
		}
	}

	res.status(401)
	res.setHeader('WWW-Authenticate', 'Basic realm="Paguemob Interview"')
	return res.end('Access Denied')
}
app.use(basicAuth)

function checkAuth (username, password) {
	const b64user = base64.encode(username + ':' + password)
	return admin.database().ref('users').child(b64user).once('value').then(function(snap) {
		const userData = snap.val()
		return userData && (username === userData.username) && (password === userData.password)
	}).catch(() => {
		return false
	})
}

const acceptOnlyJson = (req, res, next) => {
	if(['PUT','POST'].indexOf(req.method) !== -1 ) {
		if(!req.headers['content-type'] ||
			req.headers['content-type'] !== 'application/json') {
			res.status(400)

			const responseData = {
				statusText: 'Bad Request',
				description: 'Invalid Content-Type'
			}
			res.status(400).json(responseData)
			return
		}
	}

	return next()
}
app.use(acceptOnlyJson)

// ------------------------- ENDPOINTS
app.get('/contacts', async (req, res) => {
	let {page = 1, size = 20} = req.query
	page = parseInt(page)
	size = parseInt(size)

	if(page < 0 || size < 0) return res.sendStatus(400)

	const contactList = [];
	const userToken = req.headers.authorization.split('Basic ')[1];
	
	let contactRef = admin.database().ref('contacts/' + userToken).orderByKey()

	if(page > 1) {
		const idArray = [];
		const previousResults = (page - 1 ) * size
		await contactRef.limitToFirst(previousResults).once('value', (snapshot) => {
			snapshot.forEach((snapshotItem) => {
				idArray.push(snapshotItem.key)
			})
		})
		const lastItem = idArray.pop()
		if(!lastItem) {
			res.status(404).json(contactList)
			return
		}
		contactRef = contactRef.startAt(lastItem).limitToFirst(size + 1)
	}
	else {
		contactRef = contactRef.limitToFirst(size)
	}

	await contactRef.once('value', (snapshot) => {
		return snapshot.forEach((snapshotItem) => {
			const contactData = snapshotItem.val()
			contactData.id = snapshotItem.key
			contactList.push(contactData)
		})
	})

	if(page > 1) {
		contactList.shift()
	}
	
	if(contactList.length === 0) {
		res.status(404)
	}
	res.json(contactList)
})

app.post('/contacts', validate({body: contacts.postSchema}), async (req, res) => {
	if(!req.body) return res.sendStatus(400)

	const contactData = req.body
	const userToken = req.headers.authorization.split('Basic ')[1];

	const newContactRef = admin.database().ref('contacts/' + userToken).push()
	newContactRef.set(contactData).then(() => {
		res.json({
			contactId: newContactRef.key
		})
	})
})

app.put('/contacts/:contactId', validate({body: contacts.postSchema}), async (req, res) => {
	if(!req.body) return res.sendStatus(400)

	const contactId = req.params.contactId
	const userToken = req.headers.authorization.split('Basic ')[1];

	const updates = {};
	updates['/contacts/' + userToken + '/' + contactId] = req.body

	admin.database().ref().update(updates).then(() => {
		res.sendStatus(200).json(req.body)
	})
})

app.delete('/contacts/:contactId', (req, res) => {
	const contactId = req.params.contactId
	const userToken = req.headers.authorization.split('Basic ')[1];

	admin.database().ref('contacts/' + userToken + '/' + contactId).remove()
	
	res.sendStatus(200)
})

// -------------------------- ERROR HANDLING
app.use(function(err, req, res, next) {
    if (err.name === 'JsonSchemaValidation') {
        console.log(err.message)
		res.status(400)
		
        const responseData = {
			statusText: 'Bad Request',
			description: 'JSON does not match the expected model'
        }
		res.status(400).json(responseData);
    } else {
        next(err);
    }
});

exports.api = functions.https.onRequest(app)