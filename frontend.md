# PagueMob Frontend Test

**Goal:** Create a CRUD for users for our new contacts project

---
The following information is necessary for each contact **registered** on our database

 - Name
 - CPF or CNPJ *(contacts can be real person or companies)*
 - Gender *(only required if contact is a person)*
 - Website *(only required if contact is a company)*
 - Email
 - Telephone
 - Address

The address must have the following information.

 - Street Name
 - Street Number
 - Neighborhood
 - Complement
 - CEP
 - City
 - State
 - Country

---
Your website, being using our api [^1], should be able to:

 - [ ] Login with our service using OAuth 2 [^2]
 - [ ] Register a new contact with all the fields listed above
 - [ ] List all registered contacts
 - [ ] Edit a previously registered contact
 - [ ] Remove a previously registered contact
 - [ ] Send and retrieve all information about contacts to our web application*

---
## Stack

For this task, we would like you to use the following tools:

 - Javascript ECMAScript 6
 - Webpack
 - React
 - Redux or Mobx

## Bonus

 - Code using Typescript
 - Use pagination for list results
 - Validation errors
 - Correct mobile keyboard being shown for each field
 - Responsive pages
 - Automatically populate all address information related to the given CEP [^3]

## Test Submission

If you have **any** doubts please get in touch and clear them out before submiting your results.

Submit your code to a public Github repository with short instructions on how to setup the system.
Send the link of your repository to: [emanuella.souza@braspay.co](mailto:emanuella.souza@braspay.co)

[1]: The documentation for our web application is on <where?>.

[2]: Your login is the email used in the communication between you and us, and you should have received the password, if not, please ask.

[3]: We recommend using this service: https://viacep.com.br. But feel free to use the one you feel more comfortable with.
