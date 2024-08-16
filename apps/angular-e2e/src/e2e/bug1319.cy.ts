import 'cypress-shadow-dom';

describe('Verify dropdown width', () => {


  it('When dropdown width is set to 100% 50% and 200px', () => {

    // Visit the page
    cy.visit('/bug1319')
    // Assert that the page has loaded by checking a visible element
    cy.wait(100)
    cy.get('#dropdown-full').shadow().find('goa-popover').invoke('outerWidth')
      .then((width) => {
        // Assert the width is as expected
        expect(width).to.equal(800); // Replace 100 with the expected width
      });
    cy.get('#dropdown-half').shadow().find('goa-popover').invoke('outerWidth')
      .then((width) => {
        // Assert the width is as expected
        expect(width).to.equal(400); // Replace 100 with the expected width
      });
    cy.get('#dropdown-fix').shadow().find('goa-popover').invoke('outerWidth')
      .then((width) => {
        // Assert the width is as expected
        expect(width).to.equal(200); // Replace 100 with the expected width
      });


    //cy.get('#dropdown').shadow().find('goa-popover').find('ion-icon').should('have.class', 'expected-class');
          // Verify the left position

  });
});
