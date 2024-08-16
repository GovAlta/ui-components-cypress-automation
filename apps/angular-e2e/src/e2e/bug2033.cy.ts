import 'cypress-shadow-dom';

describe('Stepper First Page should Show', () => {


  it('Stepper First Page should Show when current step is -1', () => {

    // Visit the page
    cy.visit('/bug2033')
    // Assert that the page has loaded by checking a visible element
    cy.contains('Page 1 content with status: incomplete').should('not.be.visible');
    cy.get('goa-form-step[text="Personal details"]').click();
    cy.contains('Page 1 content with status: incomplete').should('be.visible');


    // Assert no console errors occurred
  });
});
