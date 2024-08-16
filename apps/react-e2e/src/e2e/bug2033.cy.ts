import 'cypress-shadow-dom';

describe('react-e2e', () => {
  it('first page should be visible', () => {
      cy.visit('/bug2033');
      cy.wait(1000);
      cy.contains('Page 1 content with status: incomplete').should('be.visible');
  });
});
