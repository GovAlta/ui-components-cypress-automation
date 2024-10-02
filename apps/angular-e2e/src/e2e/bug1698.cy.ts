import 'cypress-shadow-dom';

describe('width not respecting parent container', () => {




      it('Block: 100%, 50% and 25% width of dropdown not working - view point 1280', () => {


      cy.viewport(1280, 720)
      cy.visit('/bug1698')
      // Assert that the page has loaded by checking a visible element
      cy.get('#dropdown-full').shadow().find('goa-popover').invoke('width').should('equal', 1158);
      cy.get('#dropdown-half').shadow().find('goa-popover').invoke('width').should('equal', 579);
      cy.get('#dropdown-quarter').shadow().find('goa-popover').invoke('width').should('equal', 289.5);

    });

    it('Block: 100%, 50% and 25% width of dropdown not working - view point 1440 Pro Max', () => {


      cy.viewport(1440, 900)
      cy.visit('/bug1698')
      cy.get('#dropdown-full').shadow().find('goa-popover').invoke('width').should('equal', 1318);
      cy.get('#dropdown-half').shadow().find('goa-popover').invoke('width').should('equal', 659);
      cy.get('#dropdown-quarter').shadow().find('goa-popover').invoke('width').should('equal', 329.5);
    });


/*
it('Block: 100% width of inputs not working - view point iphone 14 Pro Max', () => {
      cy.viewport(430, 932)
  cy.visit('/bug1698')
  cy.log('This test is failed intentionally, a new bug is reported: https://github.com/GovAlta/ui-components/issues/2107');
  cy.get('#dropdown-full').shadow().find('goa-popover').invoke('width').should('equal', 308);
  cy.get('#dropdown-half').shadow().find('goa-popover').invoke('width').should('equal', 150);
  cy.get('#dropdown-quarter').shadow().find('goa-popover').invoke('width').should('equal', 75);
});
*/
});
