import 'cypress-shadow-dom';

describe('Dropdown input styling and focus issues', () => {


  it('When dropdown open it should have arrow down, and close should have arrow up', () => {

    // Visit the page
    cy.visit('/bug1307')

    cy.get('#dropdown').shadow().find('goa-popover').find('goa-icon').shadow().find('ion-icon').shadow().find('title').should('have.text', 'Chevron Down');
    cy.get('#dropdown').shadow().find('input').click();
    cy.get('#dropdown').shadow().find('goa-popover').find('goa-icon').shadow().find('ion-icon').shadow().find('title').should('have.text', 'Chevron Up');
    cy.get('#dropdown').shadow().find('goa-popover').find('li#red').click();
    cy.get('#dropdown').shadow().find('goa-popover').find('goa-icon').shadow().find('ion-icon').shadow().find('title').should('have.text', 'Chevron Down');


  });
});
