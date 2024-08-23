import 'cypress-shadow-dom';

describe('Verify dropdown width', () => {



    // Visit the page

  it('onChange should not be fire on initial page load', () => {



    // Visit the page
    cy.visit('/bug1960')
    // Assert that the page has loaded by checking a visible element


    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 2');

    cy.get('#dropdown-on-change').shadow().find('select').select('red');
    cy.get('#dropdown-on-change').shadow().find('select').should('have.value', 'red');

    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 2');
    cy.get('#dropdown-on-change').shadow().find('select').select('red');
    cy.get('#dropdown-on-change').shadow().find('select').should('have.value', 'red');
    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 2');
    cy.get('#dropdown-on-change').shadow().find('select').select('blue');
    cy.get('#dropdown-on-change').shadow().find('select').should('have.value', 'blue');
    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 4');
    cy.get('#dropdown-on-change').shadow().find('select').select('blue');
    cy.get('#dropdown-on-change').shadow().find('select').should('have.value', 'blue');
    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 4');
    cy.get('#dropdown-on-change').shadow().find('select').select('red');
    cy.get('#dropdown-on-change').shadow().find('select').should('have.value', 'red');
    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 8');
    cy.get('#dropdown-on-change').shadow().find('select').select('blue');
    cy.get('#dropdown-on-change').shadow().find('select').should('have.value', 'blue');
    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 16');
    cy.get('#dropdown-on-change').shadow().find('select').select('green');
    cy.get('#dropdown-on-change').shadow().find('select').should('have.value', 'green');
    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 32');
  });

});
