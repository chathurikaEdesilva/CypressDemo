const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  pageLoadTimeout: 60000,
  taskTimeout:60000,
  defaultCommandTimeout: 60000,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true,
    reportDir: "cypress/report/mochawesome-report"
  },
  env: {
      url: "https://gocity.com/boston/en-us"
  }, 
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
