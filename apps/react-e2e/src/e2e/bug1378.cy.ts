import 'cypress-shadow-dom';

describe('Verify dropdown width', () => {



    // Visit the page

  it('onChange should not be fire on initial page load', () => {



    // Visit the page
    cy.visit('/bug1378')
    // Assert that the page has loaded by checking a visible element
    cy.wait(1000)


    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 2');


  cy.wait(1000)
  cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 2');

  });

});
