import 'cypress-shadow-dom';

describe('Dropdown Items block is detached from the actual Dropdown', () => {

  it('Dropdown options should render correctly when parent is absolutely positioned and relative is set to true', () => {

    // Navigate to the test page
    cy.visit('/bug1289');

    // Check that the page has loaded by capturing the window height
    cy.window().then((win) => {
      return win.innerHeight;
    }).as('windowHeight');

    // When the dropdown is positioned at the bottom of the window as absolute
    cy.get('@windowHeight').then((height) => {
      cy.get('#dropdown').shadow().find('input').click(); // Open the dropdown

      // Check the position of the first dropdown option
      cy.get('#dropdown').shadow().find('goa-popover').find('li#opt1').then(($el) => {
        const rect = $el[0].getBoundingClientRect(); // Get the popover's bounding rectangle

        // Verify the top position is within the window height
        expect(rect.y).to.be.lessThan(height);

      });
    });
  });
});
