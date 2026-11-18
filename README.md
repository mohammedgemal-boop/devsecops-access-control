# DineDesk — DevSecOps Access Control

## Project Overview
DineDesk is a restaurant management API demonstrating
secure authentication, role-based access control,
and branch-level authorization.

## Technologies
- Node.js
- Express.js
- JWT Authentication
- bcryptjs Password Hashing
- Jest
- Supertest

## Security Features
1. Password hashing
2. JWT authentication
3. Role-based permissions
4. Branch-level access control
5. Protected API endpoints
6. Input validation
7. Unauthorized access protection

## Demo Accounts
All demo accounts use the assignment demo password:
DineDeskDemo2026!

- waiter.bole@dinedesk.test
- cashier.bole@dinedesk.test
- manager.bole@dinedesk.test
- waiter.piassa@dinedesk.test
- cashier.piassa@dinedesk.test
- manager.piassa@dinedesk.test
- admin@dinedesk.test

## Running the Application

Install dependencies:

npm install

Start the API:

npm start

Health endpoint:

http://localhost:4000/api/health

## Security Test Evidence

See evidence/security-test-results.txt.

Seven manual security checks were recorded:
- Branch isolation
- Administrator access
- Cross-branch access denial
- Invalid password rejection
- Missing authentication rejection
- Role permission enforcement

## Important
Demo credentials and secrets are for local assignment
testing only. Never use them in production.

## Conclusion
The recorded security tests demonstrate the intended
authentication, authorization, and branch-access controls.
