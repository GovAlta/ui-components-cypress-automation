import 'cypress-shadow-dom';

describe('Dropdown: Change event not firing for native variant', () => {

  it('should verify that the change event fires correctly for the native dropdown', () => {

    // Visit the test page
    cy.visit('/bug1960');

    // Verify the initial value before any change
    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 2');

    // Select 'red' and verify that the dropdown value is updated
    cy.get('#dropdown-on-change').shadow().find('select').select('red');
    cy.get('#dropdown-on-change').shadow().find('select').should('have.value', 'red');

    // The on-change event should not have fired yet
    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 2');

    // Select 'blue' and verify the value and the on-change event
    cy.get('#dropdown-on-change').shadow().find('select').select('blue');
    cy.get('#dropdown-on-change').shadow().find('select').should('have.value', 'blue');
    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 4');

    // Select 'red' again and verify the changes
    cy.get('#dropdown-on-change').shadow().find('select').select('red');
    cy.get('#dropdown-on-change').shadow().find('select').should('have.value', 'red');
    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 8');

    // Select 'blue' again and verify the changes
    cy.get('#dropdown-on-change').shadow().find('select').select('blue');
    cy.get('#dropdown-on-change').shadow().find('select').should('have.value', 'blue');
    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 16');

    // Select 'green' and verify the final changes
    cy.get('#dropdown-on-change').shadow().find('select').select('green');
    cy.get('#dropdown-on-change').shadow().find('select').should('have.value', 'green');
    cy.get('#on-change-initial-value').should('have.text', 'on change initial value is 32');
  });

});
