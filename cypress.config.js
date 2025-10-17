const { defineConfig } = require("cypress");
// const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/tests/**/*.cy.js',
    baseUrl: 'http://localhost:3000', // optional
  },
  // reporter: 'cypress-mochawesome-reporter',
  // reporterOptions: {
  //   charts: true,
  //   reportPageTitle: 'Cypress Test Report',
  //   embeddedScreenshots: true,
  //   inlineAssets: true
  // },
});
