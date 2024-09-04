import 'cypress-shadow-dom';
import "cypress-real-events";

describe('GoAInputNumber - The number shown in the input is the decimal, but only the integer value is passed back in the onChange event', () => {


  it('goa-input - The number shown in the input is the decimal, but only the integer value is passed back in the onChange event', () => {


    cy.visit('/bug1532')
    cy.wait(1000)
    cy.get('#input').shadow().find('input').type('0.99');
    cy.get('#input-value').should('have.text', 'For Value for input is 0.99');
    cy.get('#input').shadow().find('input').clear().type('1.99');
    cy.get('#input-value').should('have.text', 'For Value for input is 1.99');
    cy.get('#input').shadow().find('input').clear().type('2.09923123123');
    cy.get('#input-value').should('have.text', 'For Value for input is 2.09923123123');
    cy.get('#input').shadow().find('input').clear().type('abc');
    cy.get('#input-value').should('have.text', 'For Value for input is ');
    cy.get('#input').shadow().find('input').clear().type('10e-4');
    cy.get('#input-value').should('have.text', 'For Value for input is 10e-4');


  });




});
