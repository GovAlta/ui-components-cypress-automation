import { getGreeting } from '../support/app.po';
import 'cypress-shadow-dom';
import "cypress-real-events";

describe('Use Keyboard to Control Dropdown 1237', () => {


  it('Dropdown Native Arrow Down will change the selected option', () => {
    // Custom command example, see `../support/commands.ts` file
      cy.visit('/bug1237')
      cy.wait(1000)
      cy.get('#dropdown-native').shadow().find('select').focus();
      cy.realPress("ArrowDown"); // native tab click switches the focus
      cy.realPress("ArrowDown"); // native tab click switches the focus
      cy.realPress("ArrowDown"); // native tab click switches the focus
      cy.realPress("ArrowDown"); // native tab click switches the focus
      cy.get('#dropdown-native').shadow().find('select').should('have.value', 'opt4');
  });
  it('Dropdown Non Native Arrow Down will change the selected option', () => {
    // Custom command example, see `../support/commands.ts` file
      cy.visit('/bug1237')
      cy.wait(1000)
      cy.get('#dropdown-non-native').shadow().find('input').focus();
      cy.realPress("ArrowDown"); // native tab click switches the focus
      cy.realPress("ArrowDown"); // native tab click switches the focus
      cy.realPress("ArrowDown"); // native tab click switches the focus
      cy.realPress("ArrowDown"); // native tab click switches the focus
    //  cy.realPress("Space"); // native tab click switches the focus
    //  cy.get('#dropdown-non-native').shadow().find('input').should('have.value', 'Option 3');
    //  cy.get('#dropdown-non-native').shadow().find('goa-popover').find('ul#menu-dropdown-non-native').should('be.visible');
      cy.realPress("Enter"); // native tab click switches the focus
      cy.get('#dropdown-non-native').shadow().find('input').should('have.value', 'Option 3');
      cy.get('#dropdown-non-native').shadow().find('goa-popover').find('ul#menu-dropdown-non-native').should('not.be.visible');
  });

});
