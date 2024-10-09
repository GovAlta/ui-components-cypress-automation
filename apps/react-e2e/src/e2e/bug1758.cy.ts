import 'cypress-shadow-dom';

describe('Dropdown popover should display on top of goa components', () => {

  // Function to get random points within the bounding rectangle of an element
  function getRandomPoints(rect, numberOfPoints = 20) {
    const points = [];
    for (let i = 0; i < numberOfPoints; i++) {
      const x = Math.floor(rect.left + Math.random() * rect.width);
      const y = Math.floor(rect.top + Math.random() * rect.height);
      if (y > 0) {
        points.push({ x, y });
      }
    }
    return points;
  }

  it('should display dropdown on top of input in goa-container', () => {
    cy.viewport(1280, 720);
    cy.visit('/bug1758');

    // Trigger dropdown popover in goa-container
    cy.get('#container-dropdown').shadow().find('input').click();

    // Ensure list items in the dropdown are visible
    cy.get('#container-dropdown').shadow().find('goa-popover ul#menu-container-dropdown').should('be.visible');
    cy.get('#container-dropdown').shadow().find('goa-popover li#red').should('be.visible');
    cy.get('#container-dropdown').shadow().find('goa-popover li#blue').should('be.visible');
    cy.get('#container-dropdown').shadow().find('goa-popover li#green').should('be.visible');

    // Verify that the dropdown popover appears on top
    cy.get('#container-dropdown').then(($elementA) => {
      cy.wrap($elementA).should('be.visible');
      const rectA = $elementA[0].getBoundingClientRect();
      console.log('Bounding rect of element A:', rectA);

      const randomPoints = getRandomPoints(rectA, 20);
      console.log('Random points:', randomPoints);

      cy.document().then((doc) => {
        randomPoints.forEach(point => {
          const elements = doc.elementsFromPoint(point.x, point.y);
          expect(elements[0]).to.equal($elementA[0], `Element A should be on top at point (${point.x}, ${point.y})`);
        });
      });
    });
  });

  it('should display dropdown on top of input in goa-accordion', () => {
    cy.viewport(1280, 720);
    cy.visit('/bug1758');

    // Open accordion and trigger dropdown popover
    cy.get('goa-accordion').click();
    cy.get('#accordion-dropdown').shadow().find('input').click();

    // Ensure list items in the dropdown are visible
    cy.get('#accordion-dropdown').shadow().find('goa-popover ul#menu-accordion-dropdown').should('be.visible');
    cy.get('#accordion-dropdown').shadow().find('goa-popover li#red').should('be.visible');
    cy.get('#accordion-dropdown').shadow().find('goa-popover li#blue').should('be.visible');
    cy.get('#accordion-dropdown').shadow().find('goa-popover li#green').should('be.visible');

    // Verify that the dropdown popover appears on top
    cy.get('#accordion-dropdown').then(($elementA) => {
      cy.wrap($elementA).should('be.visible');
      const rectA = $elementA[0].getBoundingClientRect();
      console.log('Bounding rect of element A:', rectA);

      const randomPoints = getRandomPoints(rectA, 20);
      console.log('Random points:', randomPoints);

      cy.document().then((doc) => {
        randomPoints.forEach(point => {
          const elements = doc.elementsFromPoint(point.x, point.y);
          expect(elements[0]).to.equal($elementA[0], `Element A should be on top at point (${point.x}, ${point.y})`);
        });
      });
    });
  });

  it('should display dropdown on top of input in goa-callout', () => {
    cy.viewport(1280, 720);
    cy.visit('/bug1758');

    // Trigger dropdown popover in goa-callout
    cy.get('#callout-dropdown').shadow().find('input').click();

    // Ensure list items in the dropdown are visible
    cy.get('#callout-dropdown').shadow().find('goa-popover ul#menu-callout-dropdown').should('be.visible');
    cy.get('#callout-dropdown').shadow().find('goa-popover li#red').should('be.visible');
    cy.get('#callout-dropdown').shadow().find('goa-popover li#blue').should('be.visible');
    cy.get('#callout-dropdown').shadow().find('goa-popover li#green').should('be.visible');

    // Verify that the dropdown popover appears on top
    cy.get('#callout-dropdown').then(($elementA) => {
      cy.wrap($elementA).should('be.visible');
      const rectA = $elementA[0].getBoundingClientRect();
      console.log('Bounding rect of element A:', rectA);

      const randomPoints = getRandomPoints(rectA, 20);
      console.log('Random points:', randomPoints);

      cy.document().then((doc) => {
        randomPoints.forEach(point => {
          const elements = doc.elementsFromPoint(point.x, point.y);
          expect(elements[0]).to.equal($elementA[0], `Element A should be on top at point (${point.x}, ${point.y})`);
        });
      });
    });
  });

  it('should display dropdown on top of input in goa-details', () => {
    cy.viewport(1280, 720);
    cy.visit('/bug1758');
    cy.get('goa-details').click();

    // Trigger dropdown popover in goa-details
    cy.get('#details-dropdown').shadow().find('input').click();

    // Ensure list items in the dropdown are visible
    cy.get('#details-dropdown').shadow().find('goa-popover ul#menu-details-dropdown').should('be.visible');
    cy.get('#details-dropdown').shadow().find('goa-popover li#red').should('be.visible');
    cy.get('#details-dropdown').shadow().find('goa-popover li#blue').should('be.visible');
    cy.get('#details-dropdown').shadow().find('goa-popover li#green').should('be.visible');

    // Verify that the dropdown popover appears on top
    cy.get('#details-dropdown').then(($elementA) => {
      cy.wrap($elementA).should('be.visible');
      const rectA = $elementA[0].getBoundingClientRect();
      console.log('Bounding rect of element A:', rectA);

      const randomPoints = getRandomPoints(rectA, 20);
      console.log('Random points:', randomPoints);

      cy.document().then((doc) => {
        randomPoints.forEach(point => {
          const elements = doc.elementsFromPoint(point.x, point.y);
          expect(elements[0]).to.equal($elementA[0], `Element A should be on top at point (${point.x}, ${point.y})`);
        });
      });
    });
  });

  it('should display dropdown on top of input in goa-hero-banner', () => {
    cy.viewport(1280, 720);
    cy.visit('/bug1758');

    // Trigger dropdown popover in goa-hero-banner
    cy.get('#hero-banner-dropdown').shadow().find('input').click();

    // Ensure list items in the dropdown are visible
    cy.get('#hero-banner-dropdown').shadow().find('goa-popover ul#menu-hero-banner-dropdown').should('be.visible');
    cy.get('#hero-banner-dropdown').shadow().find('goa-popover li#red').should('be.visible');
    cy.get('#hero-banner-dropdown').shadow().find('goa-popover li#blue').should('be.visible');
    cy.get('#hero-banner-dropdown').shadow().find('goa-popover li#green').should('be.visible');

    // Verify that the dropdown popover appears on top
    cy.get('#hero-banner-dropdown').then(($elementA) => {
      cy.wrap($elementA).should('be.visible');
      const rectA = $elementA[0].getBoundingClientRect();
      console.log('Bounding rect of element A:', rectA);

      const randomPoints = getRandomPoints(rectA, 20);
      console.log('Random points:', randomPoints);

      cy.document().then((doc) => {
        randomPoints.forEach(point => {
          const elements = doc.elementsFromPoint(point.x, point.y);
          expect(elements[0]).to.equal($elementA[0], `Element A should be on top at point (${point.x}, ${point.y})`);
        });
      });
    });
  });

  it('should display dropdown on top of input in goa-modal', () => {
    cy.viewport(1280, 720);
    cy.visit('/bug1758');

    // Trigger dropdown popover in goa-modal
    cy.get('[testid="modal-button"]').shadow().find('[data-testid="modal-button"]').click({ force: true });

    cy.get('#modal-dropdown').shadow().find('input').click();

    // Ensure list items in the dropdown are visible
    cy.get('#modal-dropdown').shadow().find('goa-popover ul#menu-modal-dropdown').should('be.visible');
    cy.get('#modal-dropdown').shadow().find('goa-popover li#red').should('be.visible');
    cy.get('#modal-dropdown').shadow().find('goa-popover li#blue').should('be.visible');
    cy.get('#modal-dropdown').shadow().find('goa-popover li#green').should('be.visible');

    // Verify that the dropdown popover appears on top
    cy.get('#modal-dropdown').then(($elementA) => {
      cy.wrap($elementA).should('be.visible');
      const rectA = $elementA[0].getBoundingClientRect();
      console.log('Bounding rect of element A:', rectA);

      const randomPoints = getRandomPoints(rectA, 20);
      console.log('Random points:', randomPoints);

      cy.document().then((doc) => {
        randomPoints.forEach(point => {
          const elements = doc.elementsFromPoint(point.x, point.y);
          expect(elements[0]).to.equal($elementA[0], `Element A should be on top at point (${point.x}, ${point.y})`);
        });
      });
    });
  });
});
