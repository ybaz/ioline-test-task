const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1000,
    viewportHeight: 660,
    chromeWebSecurity: false,
    baseUrl: 'https://iodinesoftware.com/',
    screenshotOnRunFailure: true,
    screenshotsFolder: './screenshots',
    setupNodeEvents(on, config) {
    },
  },
  env: {
    uk: {
      validationMessage: 'Please fill in this field.'
    },
    ua: {
      validationMessage: 'Please fill out this field.'
    }
  }
});
