import { getGreeting } from '../support/app.po';
import 'cypress-shadow-dom';

describe('Dropdown Reset', () => {
  it('dropdown-empty-native should reset', () => {
    // Custom command example, see `../support/commands.ts` file
      cy.visit('/bug1142')

      cy.wait(1000)
      cy.get('#dropdown-empty-native').shadow().find('select').select('opt1');
      cy.get('#dropdown-empty-native').shadow().find('select').should('have.value', 'opt1');
      cy.wait(1000)
      cy.get('[data-testid="dropdown-empty-native-reset-button-shadow"]').shadow().find('button').click({ force: true });
      cy.get('#dropdown-empty-native').shadow().find('select').should('have.value', '');
      cy.wait(1000)

  });

  it('dropdown-empty-non-native should reset', () => {
    cy.visit('/bug1142')

      cy.get('#dropdown-empty-non-native').shadow().find('input').click();
      cy.wait(1000)
      cy.get('#dropdown-empty-non-native').shadow().find('goa-popover').find('li#opt1').click();
      cy.wait(1000)
      cy.get('#dropdown-empty-non-native').shadow().find('input').should('have.value', 'Option 1');

      cy.get('[data-testid="dropdown-empty-non-native-reset-button-shadow"]').shadow().find('button').click({ force: true });
      cy.get('#dropdown-empty-non-native').shadow().find('input').should('have.value', '');
  });

  it('dropdown-null-non-native should reset', () => {
    cy.visit('/bug1142')

      cy.wait(1000)
      cy.get('#dropdown-null-native').shadow().find('select').select('opt1');
      cy.get('#dropdown-null-native').shadow().find('select').should('have.value', 'opt1');
      cy.wait(1000)
      cy.get('[data-testid="dropdown-null-native-reset-button-shadow"]').shadow().find('button').click({ force: true });
      cy.get('#dropdown-null-native').shadow().find('select').should('have.value', '');
      cy.wait(1000)

    });

it('dropdown-null-non-native should reset', () => {
  cy.visit('/bug1142')

      cy.get('#dropdown-null-non-native').shadow().find('input').click();
      cy.wait(1000)
      cy.get('#dropdown-null-non-native').shadow().find('goa-popover').find('li#opt1').click();
      cy.wait(1000)
      cy.get('#dropdown-null-non-native').shadow().find('input').should('have.value', 'Option 1');

      cy.get('[data-testid="dropdown-null-non-native-reset-button-shadow"]').shadow().find('button').click({ force: true });
      cy.get('#dropdown-null-non-native').shadow().find('input').should('have.value', '');
    // Function helper example, see `../support/app.po.ts` file
  });
});
