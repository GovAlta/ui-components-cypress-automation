import 'cypress-shadow-dom';

describe('Form Item Spacing Validation #1796', () => {

  it('should verify that the spacing between the label and input for regular-label is 0.5 rem / 8 px', () => {
    cy.visit('/bug1796');

    cy.get('#regular-label goa-form-item').shadow().find('label').then($label => {
      const labelBottom = $label[0].getBoundingClientRect().bottom - parseFloat(getComputedStyle($label[0]).paddingBottom);

      cy.get('#regular-label goa-form-item').shadow().find('.form-item-input').then($input => {
        const inputTop = $input[0].getBoundingClientRect().top;
        const vSpace = inputTop - labelBottom;
        expect(vSpace).to.equal(8);
      });
    });
  });

  it('should verify that the spacing between the input and help message for regular-label is 0.75 rem / 12 px', () => {
    cy.visit('/bug1796');

    cy.get('#regular-label-help goa-form-item').shadow().find('.form-item-input').then($input => {
      const inputBottom = $input[0].getBoundingClientRect().bottom;

      cy.get('#regular-label-help goa-form-item').shadow().find('.help-msg').then($helpMsg => {
        const helpMsgTop = $helpMsg[0].getBoundingClientRect().top;
        const vSpace = helpMsgTop - inputBottom;
        expect(vSpace).to.equal(12);
      });
    });
  });

  it('should verify that the spacing between the input and error message for regular-label with help is 0.75 rem / 12 px', () => {
    cy.visit('/bug1796');

    cy.get('#regular-label-help-error goa-form-item').shadow().find('.form-item-input').then($input => {
      const inputBottom = $input[0].getBoundingClientRect().bottom;

      cy.get('#regular-label-help-error goa-form-item').shadow().find('.error-msg').then($errorMsg => {
        const errorMsgTop = $errorMsg[0].getBoundingClientRect().top;
        const vSpace = errorMsgTop - inputBottom;
        expect(vSpace).to.equal(12);
      });
    });
  });

  it('should verify that the spacing between the error message and help message for regular-label with help is 0.5 rem / 8 px', () => {
    cy.visit('/bug1796');

    cy.get('#regular-label-help-error goa-form-item').shadow().find('.error-msg').then($errorMsg => {
      const errorMsgBottom = $errorMsg[0].getBoundingClientRect().bottom;

      cy.get('#regular-label-help-error goa-form-item').shadow().find('.help-msg').then($helpMsg => {
        const helpMsgTop = $helpMsg[0].getBoundingClientRect().top;
        const vSpace = helpMsgTop - errorMsgBottom;
        expect(vSpace).to.equal(8);
      });
    });
  });

  it('should verify that the spacing between the label and input for large-label is 0.75 rem / 12 px', () => {
    cy.visit('/bug1796');

    cy.get('#large-label goa-form-item').shadow().find('label').then($label => {
      const labelBottom = $label[0].getBoundingClientRect().bottom - parseFloat(getComputedStyle($label[0]).paddingBottom);

      cy.get('#large-label goa-form-item').shadow().find('.form-item-input').then($input => {
        const inputTop = $input[0].getBoundingClientRect().top;
        const vSpace = inputTop - labelBottom;
        expect(vSpace).to.equal(12);
      });
    });
  });

  it('should verify that the spacing between the input and help message for large-label is 0.75 rem / 12 px', () => {
    cy.visit('/bug1796');

    cy.get('#large-label-help goa-form-item').shadow().find('.form-item-input').then($input => {
      const inputBottom = $input[0].getBoundingClientRect().bottom;

      cy.get('#large-label-help goa-form-item').shadow().find('.help-msg').then($helpMsg => {
        const helpMsgTop = $helpMsg[0].getBoundingClientRect().top;
        const vSpace = helpMsgTop - inputBottom;
        expect(vSpace).to.equal(12);
      });
    });
  });

  it('should verify that the spacing between the input and error message for large-label with help is 0.75 rem / 12 px', () => {
    cy.visit('/bug1796');

    cy.get('#large-label-help-error goa-form-item').shadow().find('.form-item-input').then($input => {
      const inputBottom = $input[0].getBoundingClientRect().bottom;

      cy.get('#large-label-help-error goa-form-item').shadow().find('.error-msg').then($errorMsg => {
        const errorMsgTop = $errorMsg[0].getBoundingClientRect().top;
        const vSpace = errorMsgTop - inputBottom;
        expect(vSpace).to.equal(12);
      });
    });
  });

  it('should verify that the spacing between the error message and help message for large-label with help is 0.5 rem / 8 px', () => {
    cy.visit('/bug1796');

    cy.get('#large-label-help-error goa-form-item').shadow().find('.error-msg').then($errorMsg => {
      const errorMsgBottom = $errorMsg[0].getBoundingClientRect().bottom;

      cy.get('#large-label-help-error goa-form-item').shadow().find('.help-msg').then($helpMsg => {
        const helpMsgTop = $helpMsg[0].getBoundingClientRect().top;
        const vSpace = helpMsgTop - errorMsgBottom;
        expect(vSpace).to.equal(8);
      });
    });
  });

});
