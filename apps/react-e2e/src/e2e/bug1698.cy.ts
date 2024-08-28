import 'cypress-shadow-dom';

describe('No Console Error when come from page with dropdown', () => {



    // Visit the page

  it('onChange should not be fire on initial page load', () => {


    cy.viewport(1280, 720)
    cy.visit('/bug1698')
    // Assert that the page has loaded by checking a visible element
    cy.get('#dropdown-full').shadow().find('goa-popover').invoke('width').should('equal', 1158);
    cy.get('#dropdown-half').shadow().find('goa-popover').invoke('width').should('equal', 579);
    cy.get('#dropdown-quarter').shadow().find('goa-popover').invoke('width').should('equal', 289.5);

    cy.viewport(1440, 900)

    cy.get('#dropdown-full').shadow().find('goa-popover').invoke('width').should('equal', 1318);
    cy.get('#dropdown-half').shadow().find('goa-popover').invoke('width').should('equal', 659);
    cy.get('#dropdown-quarter').shadow().find('goa-popover').invoke('width').should('equal', 329.5);
  });

});
