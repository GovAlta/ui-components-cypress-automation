import 'cypress-shadow-dom';

describe('When dropdown is at the bottom of the screen, popover will display on top', () => {

  function getRandomPoints(rect, numberOfPoints = 20) {
    const points = [];
    for (let i = 0; i < numberOfPoints; i++) {
      const x = Math.floor(rect.left + Math.random() * rect.width);
      const y = Math.floor(rect.top + Math.random() * rect.height);
      points.push({ x, y });
    }
    return points;
  }

  it('When dropdown is at the bottom of the screen, popover will display on top', () => {
    // Visit the page
    cy.visit('/bug1739');

    // Click the dropdown input to trigger the popover
    cy.get('#dropdown').shadow().find('input').click();

    // Ensure all list items are visible
    cy.get('#dropdown').shadow().find('goa-popover ul#menu-item').should('be.visible');
    cy.get('#dropdown').shadow().find('goa-popover li#red').should('be.visible');
    cy.get('#dropdown').shadow().find('goa-popover li#blue').should('be.visible');
    cy.get('#dropdown').shadow().find('goa-popover li#green').should('be.visible');

    // Get the bounding box of the popover's UL element
    cy.get('#dropdown').then(($elementA) => {
      cy.wrap($elementA).should('be.visible');

      const rectA = $elementA[0].getBoundingClientRect();

      // Debugging: Log the rectA to ensure it's correct
      console.log('Bounding rect of element A:', rectA);

      // Get 20 random points within the bounding box
      const randomPoints = getRandomPoints(rectA, 20);

      // Debugging: Log the random points to verify their correctness
      console.log('Random points:', randomPoints);

      // Check each random point to ensure element A is on top
      cy.document().then((doc) => {
        randomPoints.forEach(point => {
          const elements = doc.elementsFromPoint(point.x, point.y);
          expect(elements[0]).to.equal($elementA[0], `Element A should be on top at point (${point.x}, ${point.y})`);
        });
      });
    });
  });
});
