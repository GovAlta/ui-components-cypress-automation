import 'cypress-shadow-dom';

describe('Bug 1598: Unable to visually reset FormControl value in Angular', () => {

  it('should verify that the FormControl value can be visually cleared', () => {
    // Set the viewport size for the test
    cy.viewport(1280, 720);

    // Navigate to the test page
    cy.visit('/bug1598');
    cy.wait(100);

    // Type a value into the input field and verify it is displayed
    cy.get('#input').shadow().find('input').type('this value should reset');
    cy.get('#input').shadow().find('input').should('have.value', 'this value should reset');

    // Click the reset icon button and verify the input value is cleared
    cy.get('#input').shadow().find('goa-icon-button').click();
    cy.get('#input').shadow().find('input').should('have.value', '');
  });

});
