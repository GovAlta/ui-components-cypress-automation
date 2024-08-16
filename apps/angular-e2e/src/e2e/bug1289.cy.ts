import 'cypress-shadow-dom';

describe('Verify dropdown relative tag true and false', () => {


  it('When dropdown parent is absolute positioned, and dropdown have relative set to true, the dropdown option will not render far from the dropdown', () => {

    // Visit the page
    cy.visit('/bug1289')
    // Assert that the page has loaded by checking a visible element
    cy.window().then((win) => {
      return win.innerHeight;
    }).as('windowHeight');

    cy.get('@windowHeight').then((height) => {
        console.log(height)
      cy.get('#dropdown').shadow().find('input').click();
        cy.get('#dropdown').shadow().find('goa-popover').find('li#opt1').then($el => {
          const rect = $el[0].getBoundingClientRect();
          // Verify the top position

          expect(rect.y).to.be.lessThan(height);
        });
          // Verify the left position

      });
    });
});
