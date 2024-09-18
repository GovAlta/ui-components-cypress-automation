import 'cypress-shadow-dom';

describe('Initial change event on Dropdown', () => {

  it('should verify that onChange is not triggered on initial page load', () => {

    // Navigate to the test page
    cy.visit('/bug1378');

    // Wait for the page to fully load
    cy.wait(1000);

    // Verify that the initial value for the 'on-change' element is correctly set and no change event has been triggered
    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 2');

    // Verify that the initial value for the 'form-control' element is correctly set
    cy.get('#form-control-initial-value').should('have.text', 'form control initial value is 3');

    // Wait for a short period to confirm no additional changes occur
    cy.wait(1000);

    // Recheck the values to ensure no change event has been triggered after page load
    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 2');
    cy.get('#form-control-initial-value').should('have.text', 'form control initial value is 3');
  });

});
