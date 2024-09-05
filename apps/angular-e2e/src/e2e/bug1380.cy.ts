import 'cypress-shadow-dom';

describe('Issues with Input Time Handling', () => {

  it('should accept a string as the default value for the input date, but reject a Date object as the value', () => {

    // Navigate to the test page
    cy.visit('/bug1380');

    // Wait for the page to fully load
    cy.wait(1000);

    // Verify the input accepts the string date and displays it correctly
    cy.get('#input-string').shadow().find('input').should('have.value', '2020-09-12');
    cy.get('#input-value').should('have.text', 'For Value for input is 2020-09-12');

    // Verify that the input date does not accept a Date object and remains empty
    cy.get('#input-date').shadow().find('input').should('have.value', '');

    // Input a new date as a string and verify the value changes accordingly
    cy.get('#input-string').shadow().find('input').type('2020-05-18');
    cy.get('#input-value').should('have.text', 'For Value for input is 2020-05-18');

    // Input a date into the date field and verify it updates with the correct value
    cy.get('#input-date').shadow().find('input').type('1988-05-18');
    cy.get('#input-date').shadow().find('input').should('have.value', '1988-05-18');
  });

});
