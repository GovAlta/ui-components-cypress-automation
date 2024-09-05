import { getGreeting } from '../support/app.po';
import 'cypress-shadow-dom';
import "cypress-real-events";

describe('Dropdown component does not respect the [value] binding when navigating with the keyboard', () => {

  it('When use mouse to select dropdown, the value should be correct', () => {
      cy.visit('/bug1266')
      cy.wait(1000)
      cy.get('#monthCtrl').shadow().find('input').click();
      cy.get('#monthCtrl').shadow().find('goa-popover').find('li#4').click();
      cy.get('#monthCtrl').shadow().find('input').should('have.value', 'April');
      cy.get('#dropdown-item-value').should('have.text', 'The dropdown-item-value is 4');
  });

  it('When use keyboard to select dropdown, the value should be correct', () => {
      cy.visit('/bug1266')
      cy.wait(1000)
      cy.get('#monthCtrl').shadow().find('input').focus();
      cy.realPress("ArrowDown");
      cy.realPress("ArrowDown");
      cy.realPress("ArrowDown");
      cy.realPress("ArrowDown");
      cy.realPress("ArrowDown");
      cy.realPress("ArrowDown");
      cy.realPress("Enter");
      cy.get('#monthCtrl').shadow().find('input').should('have.value', 'June');
      cy.get('#dropdown-item-value').should('have.text', 'The dropdown-item-value is 6');
  });
});
