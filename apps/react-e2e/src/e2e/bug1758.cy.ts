import 'cypress-shadow-dom';

describe('When dropdown is at the bottom of the screen, popover will display on top', () => {

  function getRandomPoints(rect, numberOfPoints = 20) {
    const points = [];
    for (let i = 0; i < numberOfPoints; i++) {
      const x = Math.floor(rect.left + Math.random() * rect.width);
      const y = Math.floor(rect.top + Math.random() * rect.height);
      if(y > 0){
      points.push({ x, y });
      }
    }
    return points;
  }

  it('dropdown will be displayed on top of input for goa-container', () => {
    // Visit the page
    cy.viewport(1280, 720)

    cy.visit('/bug1758');

    // Click the dropdown input to trigger the popover
    cy.get('#container-dropdown').shadow().find('input').click();

    // Ensure all list items are visible
    cy.get('#container-dropdown').shadow().find('goa-popover').find('ul#menu-container-dropdown').should('be.visible');
    cy.get('#container-dropdown').shadow().find('goa-popover li#red').should('be.visible');
    cy.get('#container-dropdown').shadow().find('goa-popover li#blue').should('be.visible');
    cy.get('#container-dropdown').shadow().find('goa-popover li#green').should('be.visible');

    // Get the bounding box of the popover's UL element
    cy.get('#container-dropdown').then(($elementA) => {
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

  it('dropdown will be displayed on top of input for goa-accordion', () => {
    // Visit the page
    cy.viewport(1280, 720)

    cy.visit('/bug1758');

    // Click the dropdown input to trigger the popover
    cy.get('goa-accordion').click();
    cy.get('#accordion-dropdown').shadow().find('input').click();

    // Ensure all list items are visible
    cy.get('#accordion-dropdown').shadow().find('goa-popover').find('ul#menu-accordion-dropdown').should('be.visible');
    cy.get('#accordion-dropdown').shadow().find('goa-popover li#red').should('be.visible');
    cy.get('#accordion-dropdown').shadow().find('goa-popover li#blue').should('be.visible');
    cy.get('#accordion-dropdown').shadow().find('goa-popover li#green').should('be.visible');

    // Get the bounding box of the popover's UL element
    cy.get('#accordion-dropdown').then(($elementA) => {
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

  it('dropdown will be displayed on top of input for goa-callout', () => {
    // Visit the page
    cy.viewport(1280, 720)

    cy.visit('/bug1758');

    // Click the dropdown input to trigger the popover
    cy.get('#callout-dropdown').shadow().find('input').click();

    // Ensure all list items are visible
    cy.get('#callout-dropdown').shadow().find('goa-popover').find('ul#menu-callout-dropdown').should('be.visible');
    cy.get('#callout-dropdown').shadow().find('goa-popover li#red').should('be.visible');
    cy.get('#callout-dropdown').shadow().find('goa-popover li#blue').should('be.visible');
    cy.get('#callout-dropdown').shadow().find('goa-popover li#green').should('be.visible');

    // Get the bounding box of the popover's UL element
    cy.get('#callout-dropdown').then(($elementA) => {
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

  it('dropdown will be displayed on top of input for goa-details', () => {
    // Visit the page
    cy.viewport(1280, 720)

    cy.visit('/bug1758');
    cy.get('goa-details').click();

    // Click the dropdown input to trigger the popover
    cy.get('#details-dropdown').shadow().find('input').click();

    // Ensure all list items are visible
    cy.get('#details-dropdown').shadow().find('goa-popover').find('ul#menu-details-dropdown').should('be.visible');
    cy.get('#details-dropdown').shadow().find('goa-popover li#red').should('be.visible');
    cy.get('#details-dropdown').shadow().find('goa-popover li#blue').should('be.visible');
    cy.get('#details-dropdown').shadow().find('goa-popover li#green').should('be.visible');

    // Get the bounding box of the popover's UL element
    cy.get('#details-dropdown').then(($elementA) => {
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

  it('dropdown will be displayed on top of input for goa-hero-banner', () => {
    // Visit the page
    cy.viewport(1280, 720)

    cy.visit('/bug1758');

    // Click the dropdown input to trigger the popover
    cy.get('#hero-banner-dropdown').shadow().find('input').click();

    // Ensure all list items are visible
    cy.get('#hero-banner-dropdown').shadow().find('goa-popover').find('ul#menu-hero-banner-dropdown').should('be.visible');
    cy.get('#hero-banner-dropdown').shadow().find('goa-popover li#red').should('be.visible');
    cy.get('#hero-banner-dropdown').shadow().find('goa-popover li#blue').should('be.visible');
    cy.get('#hero-banner-dropdown').shadow().find('goa-popover li#green').should('be.visible');

    // Get the bounding box of the popover's UL element
    cy.get('#hero-banner-dropdown').then(($elementA) => {
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
  it('dropdown will be displayed on top of input for goa-model', () => {
    // Visit the page
    cy.viewport(1280, 720)

    cy.visit('/bug1758');

    // Click the dropdown input to trigger the popover
cy.get('[data-testid="modal-button"]').shadow().find('button').click({ force: true });
    cy.get('#modal-dropdown').shadow().find('input').click();

    // Ensure all list items are visible
    cy.get('#modal-dropdown').shadow().find('goa-popover').find('ul#menu-modal-dropdown').should('be.visible');
    cy.get('#modal-dropdown').shadow().find('goa-popover li#red').should('be.visible');
    cy.get('#modal-dropdown').shadow().find('goa-popover li#blue').should('be.visible');
    cy.get('#modal-dropdown').shadow().find('goa-popover li#green').should('be.visible');

    // Get the bounding box of the popover's UL element
    cy.get('#modal-dropdown').then(($elementA) => {
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
