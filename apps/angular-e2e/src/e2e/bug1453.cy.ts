import 'cypress-shadow-dom';
import "cypress-real-events";

describe('Disabled Input no longer appears disabled', () => {


  it('Disabled Input no longer appears disabled', () => {


    cy.visit('/bug1453')
    cy.wait(1000)
    cy.get('#disabled').shadow().find('.goa-input').should('have.css', 'background-color', 'rgb(241, 241, 241)');
    cy.get('#disabled').shadow().find('.goa-input').should('have.css', 'border-color', 'rgb(220, 220, 220)');
    cy.get('#disabled').shadow().find('.goa-input').should('have.css', 'box-shadow', 'none');
    cy.get('#disabled').shadow().find('input').should('be.disabled');

  });




});
