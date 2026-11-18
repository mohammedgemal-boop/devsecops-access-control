# DineDesk --- DevSecOps Access Control

## 1. Project Overview

DineDesk is a restaurant management API developed to demonstrate secure
authentication, role-based access control (RBAC), and branch-level
authorization.

The application protects restaurant operations by ensuring that users
can only access resources and perform actions permitted by their
assigned roles and branch permissions.

## 2. Technologies Used

-   Node.js
-   Express.js
-   JSON Web Tokens (JWT)
-   bcryptjs for password hashing
-   Jest for automated testing
-   Supertest for API testing

## 3. Security Features

The application implements the following security controls:

1.  **Password Hashing:** Uses bcryptjs to securely hash user passwords.
2.  **JWT Authentication:** Protects API endpoints using signed
    authentication tokens.
3.  **Role-Based Access Control:** Restricts operations according to
    user roles.
4.  **Branch-Level Authorization:** Prevents users from accessing
    unauthorized branch data.
5.  **Protected API Endpoints:** Requires authentication for restricted
    resources.
6.  **Input Validation:** Validates incoming request data.
7.  **Unauthorized Access Protection:** Rejects invalid credentials and
    unauthorized requests.

## 4. Demo User Accounts

The application includes seven demonstration accounts:

  User Role             Email
  --------------------- ------------------------------
  Bole Waiter           waiter.bole@dinedesk.test
  Bole Cashier          cashier.bole@dinedesk.test
  Bole Manager          manager.bole@dinedesk.test
  Piassa Waiter         waiter.piassa@dinedesk.test
  Piassa Cashier        cashier.piassa@dinedesk.test
  Piassa Manager        manager.piassa@dinedesk.test
  Chain Administrator   admin@dinedesk.test

Demo credentials are provided separately for local assignment testing.

## 5. Application Structure

The project contains the following main directories and files:

``` text
devsecops-access-control/
│
├── .github/
│   └── workflows/
│
├── evidence/
│   ├── security-test-results.txt
│   └── automated-test-results.txt
│
├── src/
│   ├── config/
│   ├── data/
│   ├── middleware/
│   ├── routes/
│   ├── app.js
│   └── server.js
│
├── tests/
│   └── security.test.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 6. Installation and Execution

### Install dependencies

``` bash
npm install
```

### Configure environment variables

Create a local `.env` file using `.env.example` as a reference.
Configure the required port and JWT settings.

Never commit `.env` or production secrets to GitHub.

### Start the application

``` bash
npm start
```

### API Health Check

Open:

<http://localhost:4000/api/health>

Expected response:

``` json
{
  "status": "DineDesk API running"
}
```

## 7. Security Testing and Evidence

Security testing was performed using manual API requests and automated
Jest tests.

### Recorded Manual Security Tests

1.  Bole Manager sees only Bole orders --- PASS.
2.  Piassa Manager sees only Piassa orders --- PASS.
3.  Chain Administrator sees all four orders --- PASS.
4.  Cross-branch access denied --- PASS (403).
5.  Invalid password rejected --- PASS (401).
6.  Missing authentication rejected --- PASS (401).
7.  Waiter cannot create orders --- PASS (403).

### Automated Test Results

Jest automated testing recorded:

-   Test suites: 1 passed.
-   Tests: 4 passed.
-   Failed tests: 0.

### Evidence Files

-   `evidence/security-test-results.txt`
-   `evidence/automated-test-results.txt`

## 8. Important Security Considerations

-   Demo credentials are intended for local assignment testing only.
-   Never publish passwords, JWT secrets, or private environment
    variables.
-   Keep `.env` excluded through `.gitignore`.
-   Use strong, unique secrets in production.
-   Apply appropriate access controls before deploying the application.

## 9. Conclusion

The DineDesk project demonstrates the implementation of authentication,
role-based permissions, and branch-level access control in a restaurant
management API.

The recorded manual and automated test results provide evidence of the
implemented security controls and their expected behavior.
