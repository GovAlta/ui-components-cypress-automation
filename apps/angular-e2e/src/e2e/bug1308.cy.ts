import 'cypress-shadow-dom';

describe('LeadingContent and TrailingContent have visible margin-bottom inside the Input', () => {


  it('verifies that LeadingContent does not have visible margin-bottom inside the Input', () => {

    // Visit the page
    cy.visit('/bug1308')
    // Assert that the page has loaded by checking a visible element


    cy.get('goa-input[name="tuition"]').shadow().find('.goa-input').then(($firstEl) => {
      const firstRect = $firstEl[0].getBoundingClientRect();

      cy.get('goa-input[name="tuition"]').shadow().find('div.leading-content-slot').then(($secondEl) => {
        const secondRect = $secondEl[0].getBoundingClientRect();

        // Verify if the bottom of the first element touches the top of the second element
        expect(firstRect.bottom-1).to.equal(secondRect.bottom);
      });
    });

  });

  it('verifies that TrailingContent does not have visible margin-bottom inside the Input', () => {

    // Visit the page
    cy.visit('/bug1308')
    // Assert that the page has loaded by checking a visible element


    cy.get('goa-input[name="tuition"]').shadow().find('.goa-input').then(($firstEl) => {
      const firstRect = $firstEl[0].getBoundingClientRect();

      cy.get('goa-input[name="tuition"]').shadow().find('div.trailing-content-slot').then(($secondEl) => {
        const secondRect = $secondEl[0].getBoundingClientRect();

        // Verify if the bottom of the first element touches the top of the second element
        expect(firstRect.bottom-1).to.equal(secondRect.bottom);
      });
    });

  });


});
