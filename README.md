Cypress Automation Testing Project
This repository contains an automated testing project using Cypress for e2e testing. It's designed as a collaborative project for junior QA developers to learn and implement automation testing practices.

Project Structure
Getting Started
Prerequisites
Node.js (v12 or higher)
npm (v6 or higher)
Installation
Clone this repository
Install dependencies:
Running Tests
To open the Cypress Test Runner:

To run tests headlessly:

Test Implementation
This project contains two main test suites:

homePageTests.cy.js - Tests for the online store home page functionality using Page Object Model pattern
primera_prueba.cy.js - Tests for search functionality on DuckDuckGo
Page Object Model
The project uses the Page Object Model (POM) design pattern for better test maintenance. Actions related to specific pages are implemented in separate files:

homePageActions.js - Contains methods for interacting with the home page elements
Contributing
As this is a collaborative project for junior QA engineers, please follow these guidelines:

Create a feature branch for your changes
Follow the existing coding patterns
Add proper comments to explain your test logic
Make sure all tests pass before submitting a pull request
Update documentation if necessary
Resources
Cypress Documentation
Page Object Model Pattern
License
This project is licensed under the ISC License - see the package.json file for details.