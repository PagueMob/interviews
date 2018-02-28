#### PagueMob Frontend Test's API documentation

To accomplish the frontend test, your pages should communicate with our API to store and retrieve data

 - Host URL: 
   ```
   https://www.paguemob.com/interviews/frontend
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
     name: String,
     cpf: String,
     cnpj: String,
     gender: Char,
     website: String,
     email: String,
     telephone: String,
     address: Address
   )
   ```
 
   ```
   Address (
     streetName: String,
     streetNumber: Int,
     neighborhood: String,
     complement: String,
     cep: String,
     city: String,
     state: String,
     country: String
   )
   ```
   
 - Some information is not allowed to change when editing
 
   - On UserInfo you only can change:
     - `name`
     - `website`
     - `email`
     - `telephone`
     - `address`
     
   - On Address, all information can change 

 - Login
   ```
   GET /auth
   ```

 - Register new user
   ```
   POST /contacts
      body: Contact model
      response: the contact with a new field `id`
   ```

 - Get all users in a single request
   ```
   GET /contacts
     response: list of contacts 
   ```
 
 - Get all users paginated
   ```
   GET /contacts?page=<page_number>&size=<number_of_results_to_return>
     response: list of contacts 
   ```
   
 - Edit a contact
   ```
   PUT /contacts/<contact_id>
     body: the Contact model only with the fields that need to change
     response: the updated contact 
   ```
   
 - Delete a contact
   ```
   DELETE /contacts/<contact_id>
     body: nothing
     response: the deleted contact
   ```
