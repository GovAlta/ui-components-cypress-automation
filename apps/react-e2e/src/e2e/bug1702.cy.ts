import 'cypress-shadow-dom';

describe('Dropdown: Width does not match when specifying width in the component', () => {

  it('should verify that the popover width matches the dropdown width for 1280x720 viewport', () => {
    // Set the viewport size
    cy.viewport(1280, 720);

    // Visit the test page
    cy.visit('/bug1702');
    cy.wait(1000)
    // Verify the width of the full-width dropdown and its popover
    // Verify the width of the full-width dropdown and its popover
    cy.get('#dropdown-full').shadow().find('goa-popover').invoke('width').should('equal', 1158);
    cy.get('#dropdown-full').shadow().find('input').click({ force: true });
    cy.get('#dropdown-full').shadow().find('#menu-item').invoke('width').should('equal', 1158);
    cy.get('#dropdown-full').shadow().find('goa-popover').find('li#red').click();

    // Verify the width of the half-width dropdown and its popover
    cy.get('#dropdown-half').shadow().find('goa-popover').invoke('width').should('equal', 579);
    cy.get('#dropdown-half').shadow().find('input').click({ force: true });
    cy.get('#dropdown-half').shadow().find('#menu-item').invoke('width').should('equal', 579);
    cy.get('#dropdown-half').shadow().find('goa-popover').find('li#red').click();

    // Verify the width of the quarter-width dropdown and its popover
    cy.get('#dropdown-quarter').shadow().find('goa-popover').invoke('width').should('equal', 289.5);
    cy.get('#dropdown-quarter').shadow().find('input').click({ force: true });
    cy.get('#dropdown-quarter').shadow().find('#menu-item').invoke('width').should('equal', 290);
    cy.get('#dropdown-quarter').shadow().find('goa-popover').find('li#red').click();
  });

  it('should verify that the popover width matches the dropdown width for 1440x900 viewport', () => {
    // Set the viewport size
    cy.viewport(1440, 900);
    cy.wait(1000)

    // Visit the test page
    cy.visit('/bug1702');

    // Verify the width of the full-width dropdown and its popover
    cy.get('#dropdown-full').shadow().find('goa-popover').invoke('width').should('equal', 1318);
    cy.get('#dropdown-full').shadow().find('input').click({ force: true });
    cy.get('#dropdown-full').shadow().find('#menu-item').invoke('width').should('equal', 1318);
    cy.get('#dropdown-full').shadow().find('goa-popover').find('li#red').click();

    // Verify the width of the half-width dropdown and its popover
    cy.get('#dropdown-half').shadow().find('goa-popover').invoke('width').should('equal', 659);
    cy.get('#dropdown-half').shadow().find('input').click({ force: true });
    cy.get('#dropdown-half').shadow().find('#menu-item').invoke('width').should('equal', 659);
    cy.get('#dropdown-half').shadow().find('goa-popover').find('li#red').click();

    // Verify the width of the quarter-width dropdown and its popover
    cy.get('#dropdown-quarter').shadow().find('goa-popover').invoke('width').should('equal', 329.5);
    cy.get('#dropdown-quarter').shadow().find('input').click({ force: true });
    cy.get('#dropdown-quarter').shadow().find('#menu-item').invoke('width').should('equal', 330);
    cy.get('#dropdown-quarter').shadow().find('goa-popover').find('li#red').click();
  });

});
