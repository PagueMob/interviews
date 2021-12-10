# PagueMob Backend Test

**Goal:** Create a **REST API** that registers and lists Companies and Employees

---
The following information is necessary for the **registration** and **response** of each entity.

Company:

- Name
- CNPJ
- Telephone
- Website
- Industry

Employee:
- Name *(populated by [RANDOM USER GENERATOR][] on registration)*
- Gender *(populated by [RANDOM USER GENERATOR][] on registration)*
- Email *(populated by [RANDOM USER GENERATOR][] on registration)*
- CPF
- Employer (Company)
- Job Title
- Seed

---
The following operations should be available through the API:

 - [ ] Should be able to **register** a `Company`
 - [ ] Should be able to return a list with all Companies
 - [ ] Should be able to search for Companies whose name **contains** a specified word
 - [ ] Should be able to return a list of Companies in a specified `Industry`
 - [ ] Should be able to return a single `Company` with a specified `id`
 - [ ] Should be able to return a list of employees that work at a specified `Company`
 - [ ] Should be able to **register** an `Employee`
 - [ ] Should be able to return a list of all Employees
 - [ ] Should be able to return a list of Employees whose `Job Title` **contains** a specified word
 - [ ] Should be able to return a single `Employee` with a specified `id`
 - [ ] Should be able to return a list with all supported Industries (List can have any entries, but at least 10 pre-definied items)
 - [ ] Authentication using OAuth2 and Spring Security (so you won't need to register user access, you could authenticate any username with a giving email domain while ignoring other domains.)

---
## Stack

For this task, we would like you to use the following tools:

 - Spring Framework (Boot, Data, WS, etc) preferably with Java8
 - Gradle
 - An in-memory database of your choice
 - Populate specified `Employee` fields using [RANDOM USER GENERATOR][] with **seed** feature.

## Bonus

 - Use pagination for list results
 - API tests
 - Validation errors
 - API documentation
 - Live version on [Heroku](https://heroku.com)
 - Access Roles
   - [ ] System admin authorized to create/list companies and employees of any company
   - [ ] Company admin authorized to create/list employes and data of his company
   - [ ] Company user authorized only to list companies and employes 
   - [ ] Unsigned user authorized only to list companies (no employee data)

## Test Submission

If you have **any** doubts please get in touch and clear them out before submiting your results.

Submit your code to a public Github repository with short instructions on how to setup the system.
Send the link of your repository to: [recruiting@vamoapp.com](mailto:recruiting@vamoapp.com)

[RANDOM USER GENERATOR]: https://randomuser.me
