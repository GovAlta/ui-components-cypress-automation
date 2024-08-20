import 'cypress-shadow-dom';

describe('Verify dropdown width', () => {



    // Visit the page

  it('onChange should not be fire on initial page load', () => {


    // Visit the page
    cy.visit('/bug1445')
    // Assert that the page has loaded by checking a visible element
    cy.wait(1000)

    cy.get('#dropdown-save-button').shadow().find('[data-testid="dropdown-save-button-shadow"]').click({ force: true });
    cy.get('#form-item').shadow().find('.error-msg').should('have.text', ' You must select a color.');;
    cy.get('#dropdown').shadow().find('goa-popover').find('.dropdown-input-group').should('have.class', 'error');
    cy.get('#dropdown').shadow().find('goa-popover').find('li#red').click({ force: true });
    cy.get('#form-item').shadow().find('.error-msg').should('not.exist');
    cy.get('#dropdown').shadow().find('goa-popover').find('.dropdown-input-group').should('not.have.class', 'error');



/*
    cy.get('#dropdown').shadow().find('input').click();
    cy.wait(1000)
    cy.get('#dropdown').shadow().find('goa-popover').find('li#opt1').click();

    // Assert no console errors occurred
    cy.get('@consoleError').should('not.have.been.called');
*/
  });

});
