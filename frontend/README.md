#### PagueMob Frontend Test's API documentation

To accomplish the frontend test, your pages should communicate with our API to store and retrieve data

 - Host URL: 
   ```
   https://paguemob-interview-environment.firebaseapp.com/
   ```

 - Models

   ```
   enum Gender {
     Male('m'), Female('f')
   }
   ```

   ````
   Contact (
     userInfo: UserInfo,
     address: Address
   )
   ````
 
   ```
   UserInfo (
     name: String, //minLength: 3, maxLength: 100
     cpf: String, //length: 11
     cnpj: String, //length: 14
     gender: Char,
     website: String,
     email: String,
     telephone: String
   )
   ```
 
   ```
   Address (
     streetName: String,
     streetNumber: Int,
     neighborhood: String,
     complement: String,
     zip: String, //minLength: 8
     city: String,
     state: String, //length: 2
     country: String
   )
   ```

> Document numbers and Zip codes should **not** include special characters.

> All information exchanged between api and frontend must be in JSON format.

 - Login
   ```
   GET /auth
   ```

 - Register new contact
   ```
   POST /contacts
      body: Contact model
      response: the contact with a new field `id`
   ```

 - Get all contacts in a single request
   ```
   GET /contacts
     response: list of contacts 
   ```
 
 - Get paginated contacts (default values for page and size are 1 and 20, respectively)
   ```
   GET /contacts?page=<page_number>&size=<number_of_results_to_return>
     response: list of contacts
   ```
   
 - Edit a contact
   ```
   PUT /contacts/<contact_id>
     body: the entire contact model with modified fields
     response: updated contact
   ```
   
 - Delete a contact
   ```
   DELETE /contacts/<contact_id>
     body: nothing
     response: 200/Ok
   ```
