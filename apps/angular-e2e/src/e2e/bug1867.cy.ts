import 'cypress-shadow-dom';

describe('Block: 100% width of inputs not working #1867', () => {



  it('Block: 100% width of inputs not working - view point 1280', () => {
    cy.viewport(1280, 720)


    cy.visit('/bug1867')
    cy.wait(100)
    cy.get('goa-input[name="full"]').shadow().find('input').invoke('outerWidth').should('equal', 1278);
    cy.get('goa-input[name="half"]').shadow().find('input').invoke('outerWidth').should('equal', 638);
    cy.get('goa-input[name="fix"]').shadow().find('input').invoke('outerWidth').should('equal', 258);

  });

  it('Block: 100% width of inputs not working - view point iphone 14 Pro Max', () => {
    cy.viewport(430, 932)


    cy.visit('/bug1867')
    cy.wait(100)
    cy.get('goa-input[name="full"]').shadow().find('input').invoke('outerWidth').should('equal', 428);
    cy.get('goa-input[name="half"]').shadow().find('input').invoke('outerWidth').should('equal', 213);
    cy.get('goa-input[name="fix"]').shadow().find('input').invoke('outerWidth').should('equal', 258);

  });

});
