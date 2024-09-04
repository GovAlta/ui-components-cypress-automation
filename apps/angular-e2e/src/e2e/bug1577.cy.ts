import 'cypress-shadow-dom';
import "cypress-real-events";

describe('Incorrect border rendering on Text Field in the Error and Focus state 1577', () => {


  it('Leading and trailing content with correct border when hovering over', () => {


    cy.visit('/bug1577')
    cy.wait(100)
    cy.get('#input').shadow().find('input').realHover();
    cy.get('#input').shadow().find('input').should('have.css', 'box-shadow', 'rgb(0, 79, 132) 0px 0px 0px 2px inset');
    cy.get('#input').shadow().find('.goa-input').should('have.css', 'box-shadow', 'none');
    cy.get('#input').shadow().find('.leading-content-slot').should('have.css',  'box-shadow', 'none');
    cy.get('#input').shadow().find('.trailing-content-slot').should('have.css',  'box-shadow', 'none');


  });
  it('Leading and trailing content with correct border when focused', () => {


    cy.visit('/bug1577')
    cy.wait(1000)
    cy.get('button').focus(); // Focus on the first input or element
    cy.realPress('Tab');
    cy.wait(1000)

    cy.get('#input').shadow().find('input').should('have.css', 'box-shadow', 'rgb(254, 186, 53) 0px 0px 0px 3px');
    cy.get('#input').shadow().find('.goa-input').should('have.css', 'box-shadow', 'none');
    cy.get('#input').shadow().find('.leading-content-slot').should('have.css',  'box-shadow', 'none');
    cy.get('#input').shadow().find('.trailing-content-slot').should('have.css',  'box-shadow', 'none');

  });
  it('Leading and trailing content with correct border when is disabled', () => {

    cy.visit('/bug1577')

    cy.get('#disabled').shadow().find('input').should('have.css', 'box-shadow', 'none');
    cy.get('#disabled').shadow().find('.goa-input').should('have.css', 'box-shadow', 'none');
    cy.get('#disabled').shadow().find('.leading-content-slot').should('have.css',  'box-shadow', 'none');
    cy.get('#disabled').shadow().find('.trailing-content-slot').should('have.css',  'box-shadow', 'none');

  });
  it('Leading and trailing content with correct border when is error', () => {

    cy.visit('/bug1577')
    cy.get('#error').shadow().find('input').should('have.css', 'box-shadow', 'rgb(236, 4, 11) 0px 0px 0px 2px inset');
    cy.get('#error').shadow().find('.goa-input').should('have.css', 'box-shadow', 'none');
    cy.get('#error').shadow().find('.leading-content-slot').should('have.css',  'box-shadow', 'none');
    cy.get('#error').shadow().find('.trailing-content-slot').should('have.css',  'box-shadow', 'none');

  });



});
