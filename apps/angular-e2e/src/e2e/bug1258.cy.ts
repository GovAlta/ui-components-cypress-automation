import 'cypress-shadow-dom';

describe('goa-dropdown: No change event triggered for previously selected option after reset', () => {

  it('Verify that the onchange function is called when reselecting the same option after reset for dropdown with native properties', () => {

    // Navigate to the test page
    cy.visit('/bug1258');

    // Select "Option 1" for the first time
    cy.get('#dropdown-native').shadow().find('select').select('opt1');
    cy.get('#dropdown-native').shadow().find('select').should('have.value', 'opt1');
    cy.get('#dropdown-native-value').should('have.text', 'For Value for dropdown-native-value is opt1');

    // Click the reset button to reset the dropdown
    cy.get('[testid="dropdown-native-reset-button-shadow"]').shadow().find('[data-testid="dropdown-native-reset-button-shadow"]').click({ force: true });

    // Verify that the dropdown value is reset
    cy.get('#dropdown-native').shadow().find('select').should('have.value', '');
    cy.get('#dropdown-native-value').should('have.text', 'For Value for dropdown-native-value is ');

    // Reselect "Option 1" after resetting
    cy.get('#dropdown-native').shadow().find('select').select('opt1');
    cy.get('#dropdown-native').shadow().find('select').should('have.value', 'opt1');

    // Verify that the onchange function is triggered correctly
    cy.get('#dropdown-native-value').should('have.text', 'For Value for dropdown-native-value is opt1');
  });

  it('Verify that the onchange function is called when reselecting the same option after reset for dropdown without native properties', () => {

    // Navigate to the test page
    cy.visit('/bug1258');

    // Select "Option 1" for the first time
    cy.get('#dropdown-non-native').shadow().find('input').click();
    cy.get('#dropdown-non-native').shadow().find('goa-popover').find('li#opt1').click();
    cy.get('#dropdown-non-native').shadow().find('input').should('have.value', 'Option 1');
    cy.get('#dropdown-non-native-value').should('have.text', 'For Value for dropdown-non-native-value is opt1');

    // Click the reset button to reset the dropdown
    cy.get('[testid="dropdown-non-native-reset-button-shadow"]').shadow().find('[data-testid="dropdown-non-native-reset-button-shadow"]').click({ force: true });

    // Verify that the dropdown value is reset
    cy.get('#dropdown-non-native').shadow().find('input').should('have.value', '');
    cy.get('#dropdown-non-native-value').should('have.text', 'For Value for dropdown-non-native-value is ');

    // Reselect "Option 1" after resetting
    cy.get('#dropdown-non-native').shadow().find('input').click();
    cy.get('#dropdown-non-native').shadow().find('goa-popover').find('li#opt1').click();
    cy.get('#dropdown-non-native').shadow().find('input').should('have.value', 'Option 1');

    // Verify that the onchange function is triggered correctly
    cy.get('#dropdown-non-native-value').should('have.text', 'For Value for dropdown-non-native-value is opt1');
  });
});
