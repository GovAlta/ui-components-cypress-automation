import { getGreeting } from '../support/app.po';
import 'cypress-shadow-dom';

describe('Icon button position in input', () => {
  it('trailingicon should have 12px to the end of input', () => {
    cy.visit('/bug1149');

    cy.wait(1000);

    cy.get('goa-input[name="item"]').shadow().find('.goa-input').then(($firstEl) => {
      const firstRect = $firstEl[0].getBoundingClientRect();

      cy.get('goa-input[name="item"]').shadow().find('goa-icon').then(($secondEl) => {
        const secondRect = $secondEl[0].getBoundingClientRect();


        // Verify that the second element is 12px to the left of the first element
        const leftDistance = firstRect.right - secondRect.right - 1;
        expect(leftDistance).to.equal(12);
      });
    });

  });


});
