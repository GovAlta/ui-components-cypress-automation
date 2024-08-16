import { getGreeting } from '../support/app.po';
import 'cypress-shadow-dom';

describe('angular-e2e', () => {
  it('dropdown should reset', () => {
    // Custom command example, see `../support/commands.ts` file
      cy.visit('/bug1142')

      cy.wait(1000)
      cy.get('#dropdown-empty-native').shadow().find('select').select('opt1');
      cy.get('#dropdown-empty-native').shadow().find('select').should('have.value', 'opt1');
      cy.wait(1000)
      cy.get('#dropdown-empty-native-reset-button').shadow().find('[data-testid="dropdown-empty-native-reset-button-shadow"]').click({ force: true });
      cy.get('#dropdown-empty-native').shadow().find('select').should('have.value', '');
      cy.wait(1000)

      cy.get('#dropdown-empty-non-native').shadow().find('input').click();
      cy.wait(1000)
      cy.get('#dropdown-empty-non-native').shadow().find('goa-popover').find('li#opt1').click();
      cy.wait(1000)
      cy.get('#dropdown-empty-non-native').shadow().find('input').should('have.value', 'Option 1');

      cy.get('#dropdown-empty-non-native-reset-button').shadow().find('[data-testid="dropdown-empty-non-native-reset-button-shadow"]').click({ force: true });
      cy.get('#dropdown-empty-non-native').shadow().find('input').should('have.value', '');
/*
      cy.wait(1000)
      cy.get('#dropdown-null-native').shadow().find('select').select('opt1');
      cy.get('#dropdown-null-native').shadow().find('select').should('have.value', 'opt1');
      cy.wait(1000)
      cy.get('#dropdown-null-native-reset-button').shadow().find('[data-testid="dropdown-null-native-reset-button-shadow"]').click({ force: true });
      cy.get('#dropdown-null-native').shadow().find('select').should('have.value', '');
      cy.wait(1000)
*/
      cy.get('#dropdown-null-non-native').shadow().find('input').click();
      cy.wait(1000)
      cy.get('#dropdown-null-non-native').shadow().find('goa-popover').find('li#opt1').click();
      cy.wait(1000)
      cy.get('#dropdown-null-non-native').shadow().find('input').should('have.value', 'Option 1');

      cy.get('#dropdown-null-non-native-reset-button').shadow().find('[data-testid="dropdown-null-non-native-reset-button-shadow"]').click({ force: true });
      cy.get('#dropdown-null-non-native').shadow().find('input').should('have.value', '');
    // Function helper example, see `../support/app.po.ts` file
  });
});
