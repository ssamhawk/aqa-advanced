const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'yg6ewr',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://qauto.forstudy.space/',
    env: {
      username_site: 'guest',
      password_site: 'welcome2qauto',
      email_account: 'testqaau@test.com',
      password_account: 'Qq121212',
    },
  },
});
