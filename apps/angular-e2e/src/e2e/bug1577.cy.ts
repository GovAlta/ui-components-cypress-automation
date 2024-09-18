import 'cypress-shadow-dom';
import 'cypress-real-events';

describe('Incorrect border rendering on Text Field in Error and Focus states (Bug 1577)', () => {

  it('should render the correct border on leading and trailing content when hovering over the input', () => {
    // Navigate to the test page
    cy.visit('/bug1577');
    cy.wait(100);

    // Hover over the input and verify the box-shadow styles
    cy.get('#input').shadow().find('input').realHover();
    cy.get('#input').shadow().find('input').should('have.css', 'box-shadow', 'rgb(0, 79, 132) 0px 0px 0px 2px inset');
    cy.get('#input').shadow().find('.goa-input').should('have.css', 'box-shadow', 'none');
    cy.get('#input').shadow().find('.leading-content-slot').should('have.css', 'box-shadow', 'none');
    cy.get('#input').shadow().find('.trailing-content-slot').should('have.css', 'box-shadow', 'none');
  });

  it('should render the correct border on leading and trailing content when the input is focused', () => {
    // Navigate to the test page
    cy.visit('/bug1577');
    cy.wait(1000);

    // Focus on the first element, then tab to the input field
    cy.get('button').focus();
    cy.realPress('Tab');
    cy.wait(1000);

    // Verify the box-shadow when the input is focused
    cy.get('#input').shadow().find('input').should('have.css', 'box-shadow', 'rgb(254, 186, 53) 0px 0px 0px 3px');
    cy.get('#input').shadow().find('.goa-input').should('have.css', 'box-shadow', 'none');
    cy.get('#input').shadow().find('.leading-content-slot').should('have.css', 'box-shadow', 'none');
    cy.get('#input').shadow().find('.trailing-content-slot').should('have.css', 'box-shadow', 'none');
    cy.log('This test is failed intentionally, a new bug is reported: https://github.com/GovAlta/ui-components/issues/2089');

  });

  it('should render the correct border on leading and trailing content when the input is disabled', () => {
    // Navigate to the test page
    cy.visit('/bug1577');

    // Verify the box-shadow for disabled input
    cy.get('#disabled').shadow().find('input').should('have.css', 'box-shadow', 'none');
    cy.get('#disabled').shadow().find('.goa-input').should('have.css', 'box-shadow', 'none');
    cy.get('#disabled').shadow().find('.leading-content-slot').should('have.css', 'box-shadow', 'none');
    cy.get('#disabled').shadow().find('.trailing-content-slot').should('have.css', 'box-shadow', 'none');
  });

  it('should render the correct border on leading and trailing content when the input is in an error state', () => {
    // Navigate to the test page
    cy.visit('/bug1577');

    // Verify the box-shadow for input in error state
    cy.get('#error').shadow().find('input').should('have.css', 'box-shadow', 'rgb(236, 4, 11) 0px 0px 0px 2px inset');
    cy.get('#error').shadow().find('.goa-input').should('have.css', 'box-shadow', 'none');
    cy.get('#error').shadow().find('.leading-content-slot').should('have.css', 'box-shadow', 'none');
    cy.get('#error').shadow().find('.trailing-content-slot').should('have.css', 'box-shadow', 'none');
  });

});
