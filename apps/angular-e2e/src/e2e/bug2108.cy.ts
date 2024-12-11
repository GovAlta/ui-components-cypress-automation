import 'cypress-shadow-dom';

describe('fix(#2108): dropdown width related issues', () => {


    it('should verify that the popover width matches the dropdown width for 1280x720 viewport', () => {
      // Set the viewport size
      cy.viewport(1280, 720);

      // Visit the test page
      cy.visit('/bug2108');
      cy.wait(1000)
      cy.get('goa-dropdown[name="dropdown-30ch"]').shadow().find('goa-popover').invoke('width').should('equal', 288.890625);
      cy.get('goa-dropdown[name="dropdown-30ch"]').shadow().find('input').click({ force: true });
      cy.get('goa-dropdown[name="dropdown-30ch"]').shadow().find('#menu-dropdown-30ch').invoke('width').should('equal', 289);
      cy.get('goa-dropdown[name="dropdown-30ch"]').shadow().find('goa-popover').find('li#none').click();
    });

  /*
    it('should verify that the popover width when there is no item', () => {
      // Set the viewport size
      cy.viewport(1280, 720);

      // Visit the test page
      cy.visit('/bug2108');
      cy.wait(1000)
      cy.get('goa-dropdown[name="dropdown-30ch-no-item"]').shadow().find('goa-popover').invoke('width').should('equal', 288.890625);

    });

    it('should verify dropdown with no width no item should take 100%', () => {
      // Set the viewport size
      cy.viewport(1280, 720);

      // Visit the test page
      cy.visit('/bug2108');
      cy.wait(1000)
      cy.get('goa-dropdown[name="dropdown-no-width-no-item"]').shadow().find('goa-popover').invoke('width').should('equal', 1280);

    });

    it('should verify dropdown with no width with item should take 100%', () => {
      // Set the viewport size
      cy.viewport(1280, 720);

      // Visit the test page
      cy.visit('/bug2108');
      cy.wait(1000)
      cy.get('goa-dropdown[name="dropdown-no-width-with-item"]').shadow().find('goa-popover').invoke('width').should('equal', 375.5625);
      cy.get('goa-dropdown[name="dropdown-no-width-with-item"]').shadow().find('input').click({ force: true });
      cy.get('goa-dropdown[name="dropdown-no-width-with-item"]').shadow().find('#menu-dropdown-no-width-with-item').invoke('width').should('equal', 375);
      cy.get('goa-dropdown[name="dropdown-no-width-with-item"]').shadow().find('goa-popover').find('li#none').click();
    });

    it('should verify dropdown with no width no item should take 100%', () => {
      // Set the viewport size
      cy.viewport(1280, 720);

      // Visit the test page
      cy.visit('/bug2108');
      cy.wait(1000)
      cy.get('goa-dropdown[name="dropdown-no-width-no-item"]').shadow().find('goa-popover').invoke('width').should('equal', 1280);

    });
*/
    it('should verify dropdown witdh small', () => {
      // Set the viewport size
      cy.viewport(1280, 720);

      // Visit the test page
      cy.visit('/bug2108');
      cy.wait(1000)
      cy.get('goa-dropdown[name="dropdown-10ch"]').shadow().find('goa-popover').invoke('width').should('equal', 96.296875);
      cy.get('goa-dropdown[name="dropdown-10ch"]').shadow().find('input').click({ force: true });
      cy.get('goa-dropdown[name="dropdown-10ch"]').shadow().find('#menu-dropdown-10ch').invoke('width').should('equal', 96);
      cy.get('goa-dropdown[name="dropdown-10ch"]').shadow().find('goa-popover').find('li#none').click();
    });

    it('should verify dropdown witdh 50%', () => {
      // Set the viewport size
      cy.viewport(1280, 720);

      // Visit the test page
      cy.visit('/bug2108');
      cy.wait(1000)
      cy.get('goa-dropdown[name="dropdown-50"]').shadow().find('goa-popover').invoke('width').should('equal', 640);
      cy.get('goa-dropdown[name="dropdown-50"]').shadow().find('input').click({ force: true });
      cy.get('goa-dropdown[name="dropdown-50"]').shadow().find('#menu-dropdown-50').invoke('width').should('equal', 640);
      cy.get('goa-dropdown[name="dropdown-50"]').shadow().find('goa-popover').find('li#none').click();
    });
    it('should verify dropdown witdh 100%', () => {
      // Set the viewport size
      cy.viewport(1280, 720);

      // Visit the test page
      cy.visit('/bug2108');
      cy.wait(1000)
      cy.get('goa-dropdown[name="dropdown-100"]').shadow().find('goa-popover').invoke('width').should('equal', 1280);
      cy.get('goa-dropdown[name="dropdown-100"]').shadow().find('input').click({ force: true });
      cy.get('goa-dropdown[name="dropdown-100"]').shadow().find('#menu-dropdown-100').invoke('width').should('equal', 1280);
      cy.get('goa-dropdown[name="dropdown-100"]').shadow().find('goa-popover').find('li#none').click();
    });

});
