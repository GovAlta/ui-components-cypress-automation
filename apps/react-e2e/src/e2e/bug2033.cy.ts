import 'cypress-shadow-dom';
    // Assert no console errors occurred
describe('GoAFormStepper First page should load', () => {
  it('GoAFormStepper First page should load', () => {
      cy.visit('/bug2033');
      cy.wait(1000);
      cy.contains('Page 1 content with status: incomplete').should('be.visible');
  });
});
