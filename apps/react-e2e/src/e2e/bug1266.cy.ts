import { getGreeting } from '../support/app.po';
import 'cypress-shadow-dom';
import "cypress-real-events";

describe('Use Keyboard to Control Dropdown The Value should be correct', () => {

  it('When use mouse to select dropdown, the value should be correct', () => {
    // Custom command example, see `../support/commands.ts` file
      cy.visit('/bug1266')
      cy.wait(1000)
      cy.get('#monthCtrl').shadow().find('input').click();
      cy.get('#monthCtrl').shadow().find('goa-popover').find('li#4').click();
      cy.get('#monthCtrl').shadow().find('input').should('have.value', 'April');
      cy.get('#dropdown-item-value').should('have.text', 'The dropdown-item-value is 4');
  });

  it('When use keyboard to select dropdown, the value should be correct', () => {
    // Custom command example, see `../support/commands.ts` file
      cy.visit('/bug1266')
      cy.wait(1000)
      cy.get('#monthCtrl').shadow().find('input').focus();
      cy.realPress("ArrowDown"); // native tab click switches the focus
      cy.realPress("ArrowDown"); // native tab click switches the focus
      cy.realPress("ArrowDown"); // native tab click switches the focus
      cy.realPress("ArrowDown"); // native tab click switches the focus
      cy.realPress("ArrowDown"); // native tab click switches the focus
      cy.realPress("ArrowDown"); // native tab click switches the focus
    //  cy.get('#dropdown-non-native').shadow().find('input').should('have.value', 'Option 3');
    //  cy.get('#dropdown-non-native').shadow().find('goa-popover').find('ul#menu-dropdown-non-native').should('be.visible');
      cy.realPress("Enter"); // native tab click switches the focus
      cy.get('#monthCtrl').shadow().find('input').should('have.value', 'June');
      cy.get('#dropdown-item-value').should('have.text', 'The dropdown-item-value is 6');
  });
});
