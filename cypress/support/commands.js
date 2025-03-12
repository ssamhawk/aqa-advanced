const { username_site, password_site, email_account, password_account } = Cypress.env();

Cypress.Commands.add('PageLogin', (username_site, password_site) => {
  cy.wait(1000);
  cy.visit(`https://${username_site}:${password_site}@qauto.forstudy.space`, {
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('PageLogout', () => {});
