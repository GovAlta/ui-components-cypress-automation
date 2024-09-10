import { getGreeting } from '../support/app.po';
import 'cypress-shadow-dom';
import "cypress-real-events";

describe('Bug: Inconsistent behaviour between input components', () => {


  it('Input should trigger onKeyUp with real typing', () => {
     cy.visit('/bug1703'); // Replace with the actual URL of your page
     cy.get('goa-input[name="item"]').shadow().find('input').focus().realPress('A');
     cy.get('#text').should('have.text', 'Verification text is onKeyUp function is called, value is abcdefg');

   });

  it('Input should trigger onChange with real typing', () => {
     cy.visit('/bug1703'); // Replace with the actual URL of your page
     cy.get('goa-input[name="item"]').shadow().find('input').focus().realType('abcdefg').realPress('Enter');
     cy.get('#text').should('have.text', 'Verification text is onChange function is called, value is abcdefg');

   });
  it('Input should trigger onChange with real typing', () => {
     cy.visit('/bug1703'); // Replace with the actual URL of your page
     cy.get('goa-input[name="item"]').shadow().find('input').focus().type('abcdefg').blur();
     cy.get('#text').should('have.text', 'Verification text is onChange function is called, value is abcdefg');
   });

  it('textarea should trigger onKeyUp with real typing', () => {
     cy.visit('/bug1703'); // Replace with the actual URL of your page
     cy.get('goa-textarea[name="textArea"]').shadow().find('textarea').focus().realPress('A');
     cy.get('#text').should('have.text', 'Verification text is onKeyUp function is called, value is abcdefg\n');

   });

  it('textarea should trigger onChange with real typing', () => {
     cy.visit('/bug1703'); // Replace with the actual URL of your page
     cy.get('goa-textarea[name="textArea"]').shadow().find('textarea').focus().realType('abcdefg').realPress('Enter');
     cy.get('#text').should('have.text', 'Verification text is onChange function is called, value is abcdefg\n');

   });
  it('textarea should trigger onChange with real typing', () => {
     cy.visit('/bug1703'); // Replace with the actual URL of your page
     cy.get('goa-textarea[name="textArea"]').shadow().find('textarea').focus().type('abcdefg').blur();
     cy.get('#text').should('have.text', 'Verification text is onChange function is called, value is abcdefg');
   });


});
