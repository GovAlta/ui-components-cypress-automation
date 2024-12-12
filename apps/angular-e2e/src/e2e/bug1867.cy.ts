import 'cypress-shadow-dom';

describe('Block: 100% width of inputs not working #1867', () => {

  it('should verify the input widths at viewport 1280x720', () => {
    cy.viewport(1280, 720);

    // Visit the test page
    cy.visit('/bug1867');
    cy.wait(100);

    // Verify the full-width input has a width of 1280px
    cy.get('goa-input[name="full"]').shadow().find('input').invoke('outerWidth').should('equal', 1280);

    // Verify the half-width input has a width of 640px
    cy.get('goa-input[name="half"]').shadow().find('input').invoke('outerWidth').should('equal', 640);

    // Verify the fixed-width input has a width of 260px
    cy.get('goa-input[name="fix"]').shadow().find('input').invoke('outerWidth').should('equal', 260);
  });
});
