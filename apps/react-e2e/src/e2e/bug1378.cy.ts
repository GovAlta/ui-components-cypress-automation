import 'cypress-shadow-dom';

describe('Initial change event on Dropdown', () => {




    it('should verify that onChange is not triggered on initial page load', () => {



    // Visit the page
    cy.visit('/bug1378')
    // Assert that the page has loaded by checking a visible element
    cy.wait(1000)


    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 2');


  cy.wait(1000)
  cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 2');

  });

});
