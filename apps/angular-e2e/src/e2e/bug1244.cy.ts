import 'cypress-shadow-dom';

describe('Toggling the native property on a dropdown results in null errors', () => {


  it('dropdown with native property should load the page without console errors', () => {
    cy.on('window:before:load', (win) => {
      cy.stub(win.console, 'error').as('consoleError');
    });
    // Visit the page
    cy.visit('/bug1244')
    // Assert that the page has loaded by checking a visible element
    cy.get('#dropdown-target').shadow().find('select').should('be.visible');

    // Assert no console errors occurred
    cy.get('@consoleError').should('not.have.been.called');
  });
});
