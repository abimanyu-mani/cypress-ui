const { defineConfig } = require("cypress");
// const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/tests/**/*.cy.js',
    baseUrl: 'http://localhost:3000', // optional
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // reporter: 'cypress-mochawesome-reporter',
  // reporterOptions: {
  //   charts: true,
  //   reportPageTitle: 'Cypress Test Report',
  //   embeddedScreenshots: true,
  //   inlineAssets: true
  // },
});
