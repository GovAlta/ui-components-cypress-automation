import { getGreeting } from '../support/app.po';
import 'cypress-shadow-dom';

describe('goa-input with pre/suffix disabled border issue', () => {
  it('LeadingContent and trailingContent has border grey out', () => {
    cy.visit('/bug976');

    cy.wait(1000);
    cy.get('goa-input[name="tuition"]').find('div[slot="leadingContent"]')
      .should('have.css', 'border-right', '1px solid rgb(220, 220, 220)');  // Adjust to the expected border style
    cy.get('goa-input[name="tuition"]').find('div[slot="trailingContent"]')
      .should('have.css', 'border-left', '1px solid rgb(220, 220, 220)');  // Adjust to the expected border style


  });


});
