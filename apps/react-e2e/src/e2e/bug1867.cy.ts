import 'cypress-shadow-dom';

describe('Block: 100% width of inputs not working #1867', () => {

  it('should verify the input widths at viewport 1280x720', () => {
    cy.viewport(1280, 720);

    // Visit the test page
    cy.visit('/bug1867');
    cy.wait(100);

    // Verify the full-width input has a width of 1278px
    cy.get('goa-input[name="full"]').shadow().find('input').invoke('outerWidth').should('equal', 1278);

    // Verify the half-width input has a width of 638px
    cy.get('goa-input[name="half"]').shadow().find('input').invoke('outerWidth').should('equal', 638);

    // Verify the fixed-width input has a width of 258px
    cy.get('goa-input[name="fix"]').shadow().find('input').invoke('outerWidth').should('equal', 258);
  });

  it('should verify the input widths on an iPhone 14 Pro Max viewport (430x932)', () => {
    cy.viewport(430, 932);

    // Visit the test page
    cy.visit('/bug1867');
    cy.log('This test is failed intentionally, a new bug is reported: https://github.com/GovAlta/ui-components/issues/2107');
    cy.wait(100);

    // Verify the full-width input has a width of 428px
    cy.get('goa-input[name="full"]').shadow().find('input').invoke('outerWidth').should('equal', 428);

    // Verify the half-width input has a width of 213px
    cy.get('goa-input[name="half"]').shadow().find('input').invoke('outerWidth').should('equal', 213);

    // Verify the fixed-width input has a width of 258px
    cy.get('goa-input[name="fix"]').shadow().find('input').invoke('outerWidth').should('equal', 258);

  });

});
