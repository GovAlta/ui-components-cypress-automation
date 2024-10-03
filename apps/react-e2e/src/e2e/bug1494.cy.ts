import { getGreeting } from '../support/app.po';
import 'cypress-shadow-dom';
import 'cypress-real-events';

describe('Dropdown inside Tab key bindings', () => {

  it('should verify that keyboard navigation works correctly when navigating through dropdowns using the Tab key', () => {
    // Navigate to the test page
    cy.visit('/bug1494');
    cy.wait(1000);

    // Simulate Tab key presses to navigate through the page
    cy.realPress("Tab"); // First Tab to focus on the first element
    cy.realPress("Tab"); // Tab to focus on the first dropdown
    cy.realPress("Tab"); // Tab to move focus away from the first dropdown
    cy.realPress("Tab"); // Tab to focus on the second dropdown
    cy.realPress("Enter"); // Open the second dropdown
    cy.realPress("ArrowDown"); // Navigate through dropdown options using ArrowDown
    cy.realPress("ArrowDown"); // Navigate to the desired option
    cy.realPress("Enter"); // Select the option
    cy.get('#dropdown-two').shadow().find('input').should('have.value', 'Green'); // Verify the selected value
  });
/*
  it('should verify that keyboard navigation works correctly when filtering within a dropdown', () => {
    // Navigate to the test page
    cy.visit('/bug1494');
    cy.wait(1000);

    // Simulate Tab and keyboard interaction to filter and select from the dropdown
    cy.realPress("Tab"); // First Tab to focus on the first element
    cy.realPress("Tab"); // Tab to focus on the first dropdown
    cy.realPress("Enter"); // Open the first dropdown
    cy.get('#dropdown-two').shadow().find('input').type('Bl', { force: true }); // Type 'Bl' to filter options
    cy.realPress("ArrowDown"); // Navigate through the filtered options
    cy.realPress("ArrowDown"); // Select the desired option
    cy.realPress("Enter"); // Confirm selection
    cy.log('This test is failed intentionally, a new bug is reported: https://github.com/GovAlta/ui-components/issues/1986');
    cy.get('#dropdown-two').shadow().find('input').should('have.value', 'Black'); // Verify the selected value

    // Log a note that the test is intentionally failed due to a reported bug
  });
*/
});
