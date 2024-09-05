import 'cypress-shadow-dom';
import 'cypress-real-events';

describe('Disabled Input Appearance and Functionality', () => {

  it('should verify that the disabled input field appears and behaves as disabled', () => {

    // Navigate to the test page
    cy.visit('/bug1453');

    // Wait for the page to fully load
    cy.wait(1000);

    // Verify the background color of the disabled input
    cy.get('#disabled').shadow().find('.goa-input').should('have.css', 'background-color', 'rgb(241, 241, 241)');

    // Verify the border color of the disabled input
    cy.get('#disabled').shadow().find('.goa-input').should('have.css', 'border-color', 'rgb(220, 220, 220)');

    // Verify the box shadow is none for the disabled input
    cy.get('#disabled').shadow().find('.goa-input').should('have.css', 'box-shadow', 'none');

    // Verify that the input field is disabled
    cy.get('#disabled').shadow().find('input').should('be.disabled');

  });

});
