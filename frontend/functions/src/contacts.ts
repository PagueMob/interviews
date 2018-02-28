export const userInfo = {
	type: 'object',
	properties: {
		name: {
			type: 'string',
			required: true
		},
		cpf: {
			type: 'string',
			required: false,
			minLength: 11
		},
		cnpj: {
			type: 'string',
			required: false,
			minLength: 14
		},
		gender: {
			type: 'string',
			required: true,
			enum: ['M', 'm', 'F', 'f']
		},
		website: {
			type: 'string',
			required: true
		},
		email: {
			type: 'string',
			required: true
		},
		telephone: {
			type: 'string',
			required: true
		}
	}
}

export const address = {
    type: 'object',
    properties: {
        streetName: {
            type: 'string',
			required: true
        },
        number: {
            type: 'number',
			required: true
        },
        neighborhood: {
            type: 'string',
            required: true
        },
        complement: {
            type: 'string',
            required: true
        },
        zip: {
            type: 'string',
			required: true,
			minLength: 8
        },
        city: {
            type: 'string',
            required: true
        },
        state: {
            type: 'string',
			required: true,
			maxLength: 2
        },
        country: {
            type: 'string',
            required: true
        }
    }
}

export const postSchema = {
	type: 'object',
	properties: {
		userInfo: {
			type: userInfo,
			required: true
		},
		address: {
			type: address,
			required: false
		}
	}
}