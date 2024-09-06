import { getGreeting } from '../support/app.po';
import 'cypress-shadow-dom';
import "cypress-real-events";

describe('Keyboard behaviour on dropdown 1237', () => {


  it('Dropdown Native Arrow Down will change the selected option', () => {
      cy.visit('/bug1237')
      cy.wait(1000)
      cy.get('#dropdown-native').shadow().find('select').focus();
      cy.realPress("ArrowDown");
      cy.realPress("ArrowDown");
      cy.realPress("ArrowDown");
      cy.realPress("ArrowDown");
      cy.get('#dropdown-native').shadow().find('select').should('have.value', 'opt4');
  });
  it('Dropdown Non Native Arrow Down will change the selected option', () => {
      cy.visit('/bug1237')
      cy.wait(1000)
      cy.get('#dropdown-non-native').shadow().find('input').focus();
      cy.realPress("ArrowDown");
      cy.realPress("ArrowDown");
      cy.realPress("ArrowDown");
      cy.realPress("ArrowDown");
      cy.realPress("Enter");
      cy.get('#dropdown-non-native').shadow().find('input').should('have.value', 'Option 3');
      cy.get('#dropdown-non-native').shadow().find('goa-popover').find('ul#menu-dropdown-non-native').should('not.be.visible');
  });
  it('Dropdown Non Native Arrow Down will change the selected option, Space key should not make selection or close the dropdown', () => {
      cy.visit('/bug1237')
      cy.wait(1000)
      cy.get('#dropdown-non-native').shadow().find('input').focus();
      cy.realPress("ArrowDown");
      cy.realPress("ArrowDown");
      cy.realPress("ArrowDown");
      cy.realPress("ArrowDown");
      cy.realPress("Space");
      cy.get('#dropdown-non-native').shadow().find('input').should('have.value', 'Option 3');
      cy.get('#dropdown-non-native').shadow().find('goa-popover').find('ul#menu-dropdown-non-native').should('not.be.visible');

  });

});
