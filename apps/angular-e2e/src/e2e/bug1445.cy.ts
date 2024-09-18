import 'cypress-shadow-dom';

describe('Error property not being removed from Dropdown', () => {

  it('should remove the error message and error class when the error condition is resolved', () => {

    // Navigate to the test page
    cy.visit('/bug1445');

    // Wait for the page to fully load
    cy.wait(1000);

    // Click the save button, triggering the error message
    cy.get('#dropdown-save-button').shadow().find('[data-testid="dropdown-save-button-shadow"]').click({ force: true });

    // Verify the error message is displayed
    cy.get('#form-item').shadow().find('.error-msg').should('have.text', ' You must select a color.');

    // Verify that the dropdown has the 'error' class
    cy.get('#dropdown').shadow().find('goa-popover').find('.dropdown-input-group').should('have.class', 'error');

    // Select a color option to resolve the error
    cy.get('#dropdown').shadow().find('goa-popover').find('li#red').click({ force: true });

    // Verify the error message is removed
    cy.get('#form-item').shadow().find('.error-msg').should('not.exist');

    // Verify the 'error' class is removed from the dropdown
    cy.get('#dropdown').shadow().find('goa-popover').find('.dropdown-input-group').should('not.have.class', 'error');

  });

});
