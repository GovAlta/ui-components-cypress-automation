import 'cypress-shadow-dom';

describe('Verify dropdown arrow', () => {


  it('When dropdown open it should have arrow down, and close should have arrow up', () => {

    // Visit the page
    cy.visit('/bug1307')
    // Assert that the page has loaded by checking a visible element

    cy.get('#dropdown').shadow().find('goa-popover').find('goa-icon').shadow().find('ion-icon').shadow().find('title').should('have.text', 'Chevron Down');

    cy.get('#dropdown').shadow().find('input').click();
    cy.get('#dropdown').shadow().find('goa-popover').find('goa-icon').shadow().find('ion-icon').shadow().find('title').should('have.text', 'Chevron Up');
    cy.get('#dropdown').shadow().find('goa-popover').find('li#red').click();
    cy.get('#dropdown').shadow().find('goa-popover').find('goa-icon').shadow().find('ion-icon').shadow().find('title').should('have.text', 'Chevron Down');

    //cy.get('#dropdown').shadow().find('goa-popover').find('ion-icon').should('have.class', 'expected-class');
          // Verify the left position

  });
});
