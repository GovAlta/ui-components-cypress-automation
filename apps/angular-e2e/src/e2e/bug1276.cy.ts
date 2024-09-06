import { getGreeting } from '../support/app.po';
import 'cypress-shadow-dom';
import "cypress-real-events";

describe('Small padding adjustment padding-left on text area and text input inconsistent', () => {


  it('All Padding should be 12px for input', () => {
      cy.visit('/bug1276')
      cy.wait(1000)
      cy.get('goa-input[name="input"]').shadow().find('input').should('have.css', 'padding', '8px 12px');
  });
  it('All Padding should be 12px for textarea', () => {
      cy.visit('/bug1276')
      cy.wait(1000)
      cy.get('goa-textarea[name="textarea"]').shadow().find('textarea').should('have.css', 'padding', '10px 12px');

  });


});
