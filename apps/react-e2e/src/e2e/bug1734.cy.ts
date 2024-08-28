import 'cypress-shadow-dom';

describe('When dropdonw is at bottom of the screen, popover will display on top', () => {


  it('When dropdonw is at bottom of the screen, popover will display on top', () => {

    // Visit the page
    cy.visit('/bug1734')
    // Assert that the page has loaded by checking a visible element
    cy.window().then((win) => {
      return win.innerHeight;
    }).as('windowHeight');

    cy.get('@windowHeight').then((height) => {
        console.log(height)
      cy.get('#dropdown').shadow().find('input').click();
        cy.get('#dropdown').shadow().find('goa-popover').find('li#red').then($el => {
          const rect = $el[0].getBoundingClientRect();
          // Verify the top position
          const expectedY = height - 190;

          expect(rect.y).to.equal(expectedY);
        });
          // Verify the left position

      });
    });
});
