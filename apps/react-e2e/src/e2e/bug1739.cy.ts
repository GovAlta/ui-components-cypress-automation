import 'cypress-shadow-dom';

describe('Dropdown z-index issue between two goa-containers', () => {

  // Function to get random points within the bounding rectangle of an element
  function getRandomPoints(rect, numberOfPoints = 20) {
    const points = [];
    for (let i = 0; i < numberOfPoints; i++) {
      const x = Math.floor(rect.left + Math.random() * rect.width);
      const y = Math.floor(rect.top + Math.random() * rect.height);
      points.push({ x, y });
    }
    return points;
  }

  it('should verify that the dropdown popover appears on top of a second container when positioned at the bottom of the first container', () => {
    // Visit the test page
    cy.visit('/bug1739');

    // Open the dropdown by clicking the input field
    cy.get('#dropdown').shadow().find('input').click();

    // Ensure all list items within the dropdown popover are visible
    cy.get('#dropdown').shadow().find('goa-popover ul#menu-item').should('be.visible');
    cy.get('#dropdown').shadow().find('goa-popover li#red').should('be.visible');
    cy.get('#dropdown').shadow().find('goa-popover li#blue').should('be.visible');
    cy.get('#dropdown').shadow().find('goa-popover li#green').should('be.visible');

    // Get the bounding rectangle of the dropdown popover
    cy.get('#dropdown').then(($elementA) => {
      cy.wrap($elementA).should('be.visible');

      const rectA = $elementA[0].getBoundingClientRect();

      // Debugging: Log the bounding rectangle of the dropdown popover
      console.log('Bounding rect of element A:', rectA);

      // Generate 20 random points within the bounding rectangle
      const randomPoints = getRandomPoints(rectA, 20);

      // Debugging: Log the random points for verification
      console.log('Random points:', randomPoints);

      // Check each random point to ensure the dropdown popover is on top
      cy.document().then((doc) => {
        randomPoints.forEach(point => {
          const elements = doc.elementsFromPoint(point.x, point.y);
          expect(elements[0]).to.equal($elementA[0], `Popover should be on top at point (${point.x}, ${point.y})`);
        });
      });
    });
  });
});
