import 'cypress-shadow-dom';

describe('Verify page load and check console for errors', () => {


  it('On change Should Fire Again after reset for Native', () => {

    // Visit the page
    cy.visit('/bug1258')
    // Assert that the page has loaded by checking a visible element


    cy.get('#dropdown-native').shadow().find('select').select('opt1');
    cy.get('#dropdown-native').shadow().find('select').should('have.value', 'opt1');
    cy.get('#dropdown-native-value').should('have.text', 'Value for dropdown-native-value is opt1');


    cy.get('[data-testid="dropdown-native-reset-button-shadow"]').shadow().find('button').click({ force: true });

    cy.get('#dropdown-native').shadow().find('select').should('have.value', '');
    cy.get('#dropdown-native-value').should('have.text', 'Value for dropdown-native-value is ');

  //  cy.get('@consoleLog').should('be.calledWith', 'formControlNative Received value: ');

    cy.get('#dropdown-native').shadow().find('select').select('opt1');
    cy.get('#dropdown-native').shadow().find('select').should('have.value', 'opt1');
    cy.get('#dropdown-native-value').should('have.text', 'Value for dropdown-native-value is opt1');
  });

    it('On change Should Fire Again after reset for Non Native', () => {
      cy.visit('/bug1258')

    // Assert no console errors occurred

    cy.get('#dropdown-non-native').shadow().find('input').click();

    cy.get('#dropdown-non-native').shadow().find('goa-popover').find('li#opt1').click();

    cy.get('#dropdown-non-native').shadow().find('input').should('have.value', 'Option 1');

    cy.get('#dropdown-non-native-value').should('have.text', 'Value for dropdown-non-native-value is opt1');

    cy.get('[data-testid="dropdown-non-native-reset-button-shadow"]').shadow().find('button').click({ force: true });

    cy.get('#dropdown-non-native').shadow().find('input').should('have.value', '');
    cy.get('#dropdown-non-native-value').should('have.text', 'Value for dropdown-non-native-value is ');


    cy.get('#dropdown-non-native').shadow().find('input').click();

    cy.get('#dropdown-non-native').shadow().find('goa-popover').find('li#opt1').click();

    cy.get('#dropdown-non-native').shadow().find('input').should('have.value', 'Option 1');
    cy.get('#dropdown-non-native-value').should('have.text', 'Value for dropdown-non-native-value is opt1');

  });
});
