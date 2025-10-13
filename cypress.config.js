const { defineConfig } = require("cypress");
// const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // mochawesome(on);
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
