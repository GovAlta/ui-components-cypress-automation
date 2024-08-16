import { getGreeting } from '../support/app.po';
import 'cypress-shadow-dom';

describe('angular-e2e', () => {
  it('dropdown should reset', () => {
    // Custom command example, see `../support/commands.ts` file
      cy.visit('/bug1237')
      cy.wait(1000)
      cy.get('#select').focus();
      cy.wait(1000)
      cy.get('#select').trigger("keypress","bottom");
      cy.wait(1000)
      cy.get('#select').type('{downarrow}');
      cy.get('#select').should('have.value', 'option2');
/*
      cy.wait(1000)
      cy.get('#dropdown').shadow().find('select').focus();
      cy.wait(1000)
      cy.get('#dropdown').shadow().find('select').type('{downarrow}');
      cy.wait(1000)
      cy.get('#dropdown').shadow().find('select').type('{downarrow}');
      cy.get('#mySelect').should('have.value', 'option2');
*/


    // Function helper example, see `../support/app.po.ts` file
  });
});
