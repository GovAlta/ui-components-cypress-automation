import 'cypress-shadow-dom';

describe('Width property on Dropdown no longer behaving as expected', () => {

  it('verifies that the dropdown width is correctly set to 100%, 50%, and 200px', () => {

    // Navigate to the test page
    cy.visit('/bug1319');

    // Wait for a short period to ensure elements are rendered
    cy.wait(100);

    // Check the width for the dropdown set to 100%
    cy.get('#dropdown-full').shadow().find('goa-popover').invoke('outerWidth')
      .then((width) => {
        // Assert that the width matches the expected value of 800px
        expect(width).to.equal(800);
      });

    // Check the width for the dropdown set to 50%
    cy.get('#dropdown-half').shadow().find('goa-popover').invoke('outerWidth')
      .then((width) => {
        // Assert that the width matches the expected value of 400px
        expect(width).to.equal(400);
      });

    // Check the width for the dropdown with a fixed width of 200px
    cy.get('#dropdown-fix').shadow().find('goa-popover').invoke('outerWidth')
      .then((width) => {
        // Assert that the width matches the expected value of 200px
        expect(width).to.equal(200);
      });

  });
});
