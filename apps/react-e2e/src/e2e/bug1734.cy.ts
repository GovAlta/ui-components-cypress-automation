import 'cypress-shadow-dom';

describe('Dropdown popover does not display correctly above the input at the screen edge', () => {

  it('should verify that the dropdown popover displays above the input when at the edge of the screen', () => {

    // Visit the test page
    cy.visit('/bug1734');

    // Capture the window height
    cy.window().then((win) => {
      return win.innerHeight;
    }).as('windowHeight');

    cy.get('@windowHeight').then((height) => {

      // Click to open the dropdown
      cy.get('#dropdown').shadow().find('input').click();

      // Get the position of the dropdown popover item (li#red)
      cy.get('#dropdown').shadow().find('goa-popover').find('li#red').then(($el) => {
        const rect = $el[0].getBoundingClientRect();

        // Calculate the expected top position for the popover
        const expectedY = height - 190;

        // Verify that the top position matches the expected position
        expect(rect.y).to.equal(expectedY);
      });


    });
  });

});
