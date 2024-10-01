import 'cypress-shadow-dom';

describe('Verify Test Id for component', () => {
  it('GoAAppHeader Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-app-header[testid="GoAAppHeader-TestId"]').should('be.visible');
    cy.get('goa-app-header[testid="GoAAppHeader-TestId"]').shadow().find('div[data-testid="GoAAppHeader-TestId"]').should('be.visible');

  });
  it('GoABlock Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-block[testid="GoABlock-TestId"]').should('be.visible');
    cy.get('goa-block[testid="GoABlock-TestId"]').shadow().find('div[data-testid="GoABlock-TestId"]').should('be.visible');

  });
  it('GoAContainer Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-container[testid="GoAContainer-TestId"]').should('be.visible');
    cy.get('goa-container[testid="GoAContainer-TestId"]').shadow().find('div[data-testid="GoAContainer-TestId"]').should('be.visible');

  });
  it('GoACircularProgress Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-circular-progress[testid="GoACircularProgress-TestId"]').should('be.visible');
    cy.get('goa-circular-progress[testid="GoACircularProgress-TestId"]').shadow().find('div[data-testid="GoACircularProgress-TestId"]').should('be.visible');

  });
  it('GoADetails Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-details[testid="GoADetails-TestId"]').click();
    cy.get('goa-details[testid="GoADetails-TestId"]').shadow().find('details[data-testid="GoADetails-TestId"]').should('be.visible');

  });
  it('GoADropdown Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-dropdown[testid="GoADropdown-TestId"]').should('be.visible');
    cy.get('goa-dropdown[testid="GoADropdown-TestId"]').shadow().find('div[data-testid="GoADropdown-TestId"]').should('be.visible');

  });
  it('GoAFileUploadInput Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-file-upload-input[testid="GoAFileUploadInput-TestId"]').should('be.visible');
    cy.get('goa-file-upload-input[testid="GoAFileUploadInput-TestId"]').shadow().find('div[data-testid="GoAFileUploadInput-TestId"]').should('be.visible');

  });
  it('GoAAppFooter Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-app-footer[testid="GoAAppFooter-TestId"]').should('be.visible');
    cy.get('goa-app-footer[testid="GoAAppFooter-TestId"]').shadow().find('div[data-testid="GoAAppFooter-TestId"]').should('be.visible');

  });
  it('GoAAppFooterNavSection Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-app-footer-nav-section[testid="GoAAppFooterNavSection-TestId"]').should('be.visible');
    cy.get('goa-app-footer-nav-section[testid="GoAAppFooterNavSection-TestId"]').shadow().find('section[data-testid="GoAAppFooterNavSection-TestId"]').should('be.visible');

  });
  it('GoAAppFooterMetaSection Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-app-footer-meta-section[testid="GoAAppFooterMetaSection-TestId"]').should('be.visible');
    cy.get('goa-app-footer-meta-section[testid="GoAAppFooterMetaSection-TestId"]').shadow().find('section[data-testid="GoAAppFooterMetaSection-TestId"]').should('be.visible');

  });
  it('GoAGrid Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-grid[testid="GoAGrid-TestId"]').should('be.visible');
    cy.get('goa-grid[testid="GoAGrid-TestId"]').shadow().find('div[data-testid="GoAGrid-TestId"]').should('be.visible');

  });
  it('GoAHeroBanner Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-hero-banner[testid="GoAHeroBanner-TestId"]').should('be.visible');
    cy.get('goa-hero-banner[testid="GoAHeroBanner-TestId"]').shadow().find('div[data-testid="GoAHeroBanner-TestId"]').should('be.visible');

  });
  it('GoAMicrositeHeader Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-microsite-header[testid="GoAMicrositeHeader-TestId"]').should('be.visible');
    cy.get('goa-microsite-header[testid="GoAMicrositeHeader-TestId"]').shadow().find('div[data-testid="GoAMicrositeHeader-TestId"]').should('be.visible');

  });
  it('GoAButton Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-button[testid="GoAButton-TestId"]').should('be.visible');
    cy.get('goa-button[testid="GoAButton-TestId"]').shadow().find('button[data-testid="GoAButton-TestId"]').should('be.visible');

  });

  it('GoAModal Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-button[testid="GoAButton-TestId"]').shadow().find('button').click({force: true});
    cy.get('goa-modal[testid="GoAModal-TestId"]').should('be.visible');
    cy.get('goa-modal[testid="GoAModal-TestId"]').shadow().find('div[data-testid="GoAModal-TestId"]').should('be.visible');

  });
  it('GoAButtonGroup Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-button[testid="GoAButton-TestId"]').shadow().find('button').click({force: true});
    cy.get('goa-button-group[testid="GoAButtonGroup-TestId"]').should('be.visible');
    cy.get('goa-button-group[testid="GoAButtonGroup-TestId"]').shadow().find('div[data-testid="GoAButtonGroup-TestId"]').should('be.visible');

  });
  it('GoANotification Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-notification[testid="GoANotification-TestId"]').should('be.visible');
    cy.get('goa-notification[testid="GoANotification-TestId"]').shadow().find('div[data-testid="GoANotification-TestId"]').should('be.visible');

  });
  it('GoATable Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-table[testid="GoATable-TestId"]').should('be.visible');
    cy.get('goa-table[testid="GoATable-TestId"]').shadow().find('div[data-testid="GoATable-TestId"]').should('be.visible');

  });
  it('GoABlock Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-block[testid="GoABlock-TestId"]').should('be.visible');
    cy.get('goa-block[testid="GoABlock-TestId"]').shadow().find('div[data-testid="GoABlock-TestId"]').should('be.visible');

  });
  it('GoASpacer Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-spacer[testid="GoASpacer-TestId"]').should('be.visible');
    cy.get('goa-spacer[testid="GoASpacer-TestId"]').shadow().find('div[data-testid="GoASpacer-TestId"]').should('be.visible');

  });
  it('GoAPagination Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-pagination[testid="GoAPagination-TestId"]').should('be.visible');
    cy.get('goa-pagination[testid="GoAPagination-TestId"]').shadow().find('div[data-testid="GoAPagination-TestId"]').should('be.visible');

  });
  it('GoASideMenu Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-side-menu[testid="GoASideMenu-TestId"]').should('be.visible');
    cy.get('goa-side-menu[testid="GoASideMenu-TestId"]').shadow().find('div[data-testid="GoASideMenu-TestId"]').should('be.visible');

  });
  it('GoASideMenuHeading Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-side-menu-heading[testid="GoASideMenuHeading-TestId"]').should('be.visible');
    cy.get('goa-side-menu-heading[testid="GoASideMenuHeading-TestId"]').shadow().find('h2[data-testid="GoASideMenuHeading-TestId"]').should('be.visible');

  });
  it('GoASideMenuGroup Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-side-menu-group[testid="GoASideMenuGroup-TestId"]').should('be.visible');
    cy.get('goa-side-menu-group[testid="GoASideMenuGroup-TestId"]').shadow().find('div[data-testid="GoASideMenuGroup-TestId"]').should('be.visible');

  });
  it('GoATable Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-table[testid="GoATable-TestId"]').should('be.visible');
    cy.get('goa-table[testid="GoATable-TestId"]').shadow().find('div[data-testid="GoATable-TestId"]').should('be.visible');

  });
  it('GoATabs Should Have Tesd Id, Shodow Component Should have Tesd Id', () => {
    // Visit the test page
    cy.visit('/bugs/2111');
    cy.get('goa-tabs[testid="GoATabs-TestId"]').should('be.visible');
    cy.get('goa-tabs[testid="GoATabs-TestId"]').shadow().find('div[data-testid="GoATabs-TestId"]').should('be.visible');

  });
});
