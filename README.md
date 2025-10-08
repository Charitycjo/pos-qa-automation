 -SauceDemo Automation Framework (Cypress + POM)
 -Overview

This project automates the end-to-end checkout workflow on the SauceDemo
 web application using Cypress and the Page Object Model (POM) design pattern.

It demonstrates how modular automation architecture can be applied to real-world e-commerce testing — covering login, product selection, cart management, and checkout completion.

- Tech Stack

Framework: Cypress 13+

Language: JavaScript (ES6)

Design Pattern: Page Object Model (POM)

Configuration: Environment variables for credentials

Additional Features: Custom Cypress Commands for login reusability

🧱 Project Structure
saucedemo-automation/
│
├── cypress/
│   ├── e2e/
│   │   └── workflow.cy.js         # Consolidated E2E test (Login → Checkout)
│   ├── support/
│   │   ├── commands.js            # Custom Cypress commands (e.g. cy.login)
│   │   └── pages/
│   │       ├── LoginPage.js
│   │       ├── ProductsPage.js
│   │       ├── CartPage.js
│   │       └── CheckoutPage.js
│   ├── fixtures/
│   │   └── testData.json          # Test data and constants
│
├── cypress.config.js
└── README.md




⚙️ Project Setup Note

In a standard Cypress POM structure, each workflow (Login, Product, Cart, Checkout) would have its own dedicated test file under /e2e/, importing POM files from /support/pages/.

During implementation, I encountered a Cypress path resolution issue where the test runner was unable to correctly locate imported POM files from nested directories.
After exploring multiple configuration options, I opted to consolidate the entire end-to-end flow into a single script — workflow.cy.js — placed directly inside the /e2e/ folder.

This adjustment allowed me to:

Maintain the use of modular POM files

Demonstrate a complete working automation flow

Showcase my ability to troubleshoot and adapt under technical constraints

Once the path configuration is resolved, this workflow can easily be split into multiple smaller suites (e.g., loginTests.cy.js, cartTests.cy.js, etc.) for scalable regression execution.

🚀 Running the Tests

1. Clone the Repository
   git clone https://github.com/<your-username>/saucedemo-automation.git
cd saucedemo-automation

2. Install Dependencies
   npm install

3. Set Environment Variables
   {
  "username": "standard_user",
  "password": "secret_sauce"
}

4. Run Tests
   npx cypress open
   npx cypress run

 - Highlights & Learnings

Implemented POM architecture for reusable and maintainable test components

Utilized custom commands to simplify repetitive actions (e.g., login)

Integrated fixtures and environment variables for flexible configuration

Debugged and adapted to Cypress path resolution limitations pragmatically

Showcased problem-solving mindset and structured approach to automation design  


   




