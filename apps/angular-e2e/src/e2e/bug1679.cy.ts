import 'cypress-shadow-dom';

describe('No Console Error when come from page with dropdown', () => {



    // Visit the page

  it('onChange should not be fire on initial page load', () => {


    // Visit the page
    cy.on('window:before:load', (win) => {
      cy.stub(win.console, 'error').as('consoleError');
    });

    cy.visit('/bug1244')
    // Assert that the page has loaded by checking a visible element
    cy.get('#dropdown-target').shadow().find('select').should('be.visible');

    cy.visit('/bug1679')
    cy.get('#text').should('be.visible');

    // Assert no console errors occurred
    cy.get('@consoleError').should('not.have.been.called');
  });

});
