import 'cypress-shadow-dom';

describe('Verify page load and check console for errors', () => {
  cy.on('window:before:load', (win) => {
    cy.stub(win.console, 'error').as('consoleError');
  });

  it('should load the page without console errors', () => {
    // Visit the page
    cy.visit('/bug1244')
    // Assert that the page has loaded by checking a visible element
    cy.get('#dropdown-target').shadow().find('select').should('be.visible');


    // Assert no console errors occurred
    cy.get('@consoleError').should('not.have.been.called');
  });
});
