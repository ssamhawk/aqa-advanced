const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'yg6ewr',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://qauto.forstudy.space/',
    env: {
      username: 'guest',
      password: 'welcome2qauto',
    },
  },
});
