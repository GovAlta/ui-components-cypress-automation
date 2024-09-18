import 'cypress-shadow-dom';

describe('No Console Error when navigating from a page with a dropdown', () => {

  it('should ensure no console errors occur when redirecting from a page with a dropdown', () => {

    // Stub the console error to capture any errors during navigation
    cy.on('window:before:load', (win) => {
      cy.stub(win.console, 'error').as('consoleError');
    });

    // Visit the page with the dropdown component
    cy.visit('/bug1244');
    cy.get('#dropdown-target').shadow().find('select').should('be.visible'); // Ensure the dropdown is visible

    // Navigate to another page
    cy.visit('/bug1679');
    cy.get('#text').should('be.visible'); // Ensure the new page has loaded

    // Verify that no console errors were logged during navigation
    cy.get('@consoleError').should('not.have.been.called');
  });

});
