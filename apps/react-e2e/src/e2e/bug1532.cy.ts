import 'cypress-shadow-dom';
import 'cypress-real-events';

describe('GoAInputNumber - The number displayed in the input is a decimal, but only the integer value is passed in the onChange event', () => {

  it('should verify that the input correctly displays decimals, but only the integer value is returned in the onChange event', () => {

    // Navigate to the test page
    cy.visit('/bug1532');
    cy.wait(1000);

    // Type a decimal value into the input field and verify it is displayed correctly
    cy.get('#input').shadow().find('input').type('0.99');
    cy.get('#input-value').should('have.text', 'For Value for input is 0.99');

    // Clear the input, type another decimal, and verify the displayed value
    cy.get('#input').shadow().find('input').clear().type('1.99');
    cy.get('#input-value').should('have.text', 'For Value for input is 1.99');

    // Enter a longer decimal value and verify the input displays it correctly
    cy.get('#input').shadow().find('input').clear().type('2.09923123123');
    cy.get('#input-value').should('have.text', 'For Value for input is 2.09923123123');

    // Enter an invalid input (letters) and verify that no value is displayed
    cy.get('#input').shadow().find('input').clear().type('abc');
    cy.get('#input-value').should('have.text', 'For Value for input is ');

    // Enter a scientific notation and verify it is displayed correctly
    cy.get('#input').shadow().find('input').clear().type('10e-4');
    cy.get('#input-value').should('have.text', 'For Value for input is 10e-4');

  });

});
