import 'cypress-shadow-dom';

describe('Bug: Cant visually empty a FormControl value (Angular) 1598', () => {



  it('Bug: Cant visually empty a FormControl value (Angular) 1598', () => {
    cy.viewport(1280, 720)


    cy.visit('/bug1598')
    cy.wait(100)
    cy.get('#input').shadow().find('input').type("this value should reset")
    cy.get('#input').shadow().find('input').should('have.value', 'this value should reset');

    cy.get('#input').shadow().find('goa-icon-button').click()
    cy.get('#input').shadow().find('input').should('have.value', '');

  });



});
