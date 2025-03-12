describe('Create Account', () => {
  const { username_site, password_site, email_account, password_account } =
    Cypress.env();

  before(() => {
    cy.PageLogin(username_site, password_site);
  });

  it('Create Account', () => {
    cy.get('button.hero-descriptor_btn', { timeout: 1000 }).click();
    cy.get('input[name="name"]').type('Homer');
    cy.get('input[name="lastName"]').type('Simpson');
    cy.get('input[name="email"]').type(email_account);
    cy.get('input[name="password"]').type(password_account);
    cy.get('input[name="repeatPassword"]').type(password_account);
    cy.contains('button.btn.btn-primary', 'Register', {
      timeout: 1000,
    }).click();
    cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
  });
});
