describe('template spec', () => {
  it('passes', () => {

    cy.visit('https://example.cypress.io')
    
    cy.url()
      .should('eq', 'https://example.cypress.io/')

    cy.contains('h2', 'Commands')

  //si mai fac si alte chestii pe aici

  });

});
