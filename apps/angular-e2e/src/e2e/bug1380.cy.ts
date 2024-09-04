import 'cypress-shadow-dom';

describe('Verify dropdown width', () => {



    // Visit the page

  it('onChange should not be fire on initial page load', () => {



    // Visit the page
    cy.visit('/bug1380')
    // Assert that the page has loaded by checking a visible element
    cy.wait(1000)

    cy.get('#input-string').shadow().find('input').should('have.value', '2020-09-12');
    cy.get('#input-value').should('have.text', 'For Value for input is 2020-09-12');

    cy.get('#input-date').shadow().find('input').should('have.value', '');
    cy.get('#input-string').shadow().find('input').type('2020-05-18')
    cy.get('#input-value').should('have.text', 'For Value for input is 2020-05-18');
    cy.get('#input-date').shadow().find('input').type('1988-05-18')
    cy.get('#input-date').shadow().find('input').should('have.value', '1988-05-18');

  });

});
