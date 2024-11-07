# Cypress E2E Testing Project

This project contains end-to-end (E2E) tests for a web application using Cypress. The tests cover various user actions and scenarios to ensure the application's functionality.

## Why We Use Cypress

Cypress is a powerful and easy-to-use testing framework that allows for fast, reliable, and efficient end-to-end testing. It provides a rich set of features, including:

- Real-time reloads
- Automatic waiting
- Time travel debugging
- Network traffic control
- Consistent results across different environments

## Technology Used

- **Cypress**: For end-to-end testing.
- **JavaScript**: The programming language used for writing test scripts.
- **Node.js**: For running Cypress and managing dependencies.

## Scenario

The scenario covered in this project includes user registration, login, updating contact information, transferring funds, checking account balance, making bill payments, and requesting loans.

## Test Case Checklist Based on the Scenario

1. **User Registration**
   - Verify that a user can successfully register a new account.

2. **User Login and Logout**
   - Verify that a user can successfully log in and log out of the application.

3. **Update Contact Information**
   - Verify that a user can update their contact information.

4. **Transfer Funds**
   - Verify that a user can successfully transfer money between accounts after registration.

5. **Check Account Balance**
   - Verify that a user can successfully check the account balance after registration.

6. **Bill Payment**
   - Verify that a user can successfully make a bill payment after registration and login.

7. **Request Loan**
   - Verify that a user can successfully request a loan after registration.
  
8. **check Balance**
   -Verify that the tatal amount for allcount equal sum of balance in each account .
   
9. **Logout**
   - Verify that a user can successfully Logout from the websit .
   

## How to Run This Project

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd <project-directory>
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running Tests

To run the Cypress tests, use the following command:
```sh
npx cypress run
