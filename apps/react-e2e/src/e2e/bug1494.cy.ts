import { getGreeting } from '../support/app.po';
import 'cypress-shadow-dom';
import "cypress-real-events";

describe('Dropdown inside Tab key bindings', () => {

  it('When Dropdown is tab, tab key works as expected', () => {
    // Custom command example, see `../support/commands.ts` file
      cy.visit('/bug1494')
      cy.wait(1000)
      cy.realPress("Tab"); // First Tab Focus
      cy.realPress("Tab"); // First Dropdown Focus
      cy.realPress("Tab"); // First Dropdown Lose Focus
      cy.realPress("Tab"); // Second Dropdown Focus
      cy.realPress("Enter"); // Second Dropdown Focus
      cy.realPress("ArrowDown"); // native tab click switches the focus
      cy.realPress("ArrowDown"); // native tab click switches the focus
      cy.realPress("Enter"); // Second Dropdown Focus
      cy.get('#dropdown-two').shadow().find('input').should('have.value', 'Green');
  });
  it('When Dropdown Filter is on, tab key works as expected', () => {
    // Custom command example, see `../support/commands.ts` file
      cy.visit('/bug1494')
      cy.wait(1000)
      cy.realPress("Tab"); // First Tab Focus
      cy.realPress("Tab"); // First Dropdown Focus
      cy.realPress("Enter"); // First Dropdown Focus
    //  cy.get('#dropdown-two').shadow().find('input').type('Bl', { force: true });
    //  cy.realPress("ArrowDown"); // native tab click switches the focus
    //  cy.realPress("ArrowDown"); // native tab click switches the focus
  //    cy.realPress("Enter"); // Second Dropdown Focus
    //  cy.get('#dropdown-two').shadow().find('input').should('have.value', 'Green');
  });


});
