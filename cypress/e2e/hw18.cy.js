describe('Select buttons', () => {
  const { username, password } = Cypress.env();
  beforeEach(() => {
    cy.wait(2000);
    cy.visit(`https://${username}:${password}@qauto.forstudy.space`, {
      failOnStatusCode: false,
    });
  });

  it('select Sing up button', () => {
    cy.get('button.hero-descriptor_btn', { timeout: 3000 }).click();
    cy.get('div.modal-content').should('be.visible');
  });

  it('select facebook button', () => {
    cy.get('a.socials_link[href*="facebook"]')
      .should('have.attr', 'href', 'https://www.facebook.com/Hillel.IT.School')
      .and('have.attr', 'target', '_blank');
  });

  it('select telegram button', () => {
    cy.get('a.socials_link[href*="t.me"]')
      .should('have.attr', 'href', 'https://t.me/ithillel_kyiv')
      .and('have.attr', 'target', '_blank');
  });

  it('select youtube button', () => {
    cy.get('a.socials_link[href*="youtube"]')
      .should(
        'have.attr',
        'href',
        'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1'
      )
      .and('have.attr', 'target', '_blank');
  });

  it('select instagram button', () => {
    cy.get('a.socials_link[href*="instagram"]')
      .should('have.attr', 'href', 'https://www.instagram.com/hillel_itschool/')
      .and('have.attr', 'target', '_blank');
  });

  it('select linkedin button', () => {
    cy.get('a.socials_link[href*="linkedin"]')
      .should('have.attr', 'href', 'https://www.linkedin.com/school/ithillel/')
      .and('have.attr', 'target', '_blank');
  });
});
