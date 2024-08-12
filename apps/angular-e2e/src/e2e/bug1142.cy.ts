import { getGreeting } from '../support/app.po';
import 'cypress-shadow-dom';

describe('angular-e2e', () => {
  it('dropdown should reset', () => {
    // Custom command example, see `../support/commands.ts` file
      cy.visit('/bug1142')
      cy.wait(1000)
      cy.get('#dropdown-empty').shadow().find('select').select('opt1');
      cy.get('#dropdown-empty').shadow().find('select').should('have.value', 'opt1');
      cy.wait(1000)
      cy.get('#reset-button').shadow().find('[data-testid="reset-button-shadow"]').click({ force: true });
      cy.get('#dropdown-empty').shadow().find('select').should('have.value', '');

    // Function helper example, see `../support/app.po.ts` file
  });
});
