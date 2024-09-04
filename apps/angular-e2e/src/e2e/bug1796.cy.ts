import 'cypress-shadow-dom';

describe('Update to Form Item spacing #1796', () => {



  it('Form Item spacing for regular-label should be 0.5 rem / 8 px between label to input', () => {

    cy.visit('/bug1796')

    cy.get('#regular-label goa-form-item').shadow().find('label').then($first => {
      const firstBottom = $first[0].getBoundingClientRect().bottom - parseFloat(getComputedStyle($first[0]).paddingBottom);;

        cy.get('#regular-label goa-form-item').shadow().find('.form-item-input').then($second => {
        const secondTop = $second[0].getBoundingClientRect().top;

        const vSpace = secondTop - firstBottom;
        expect(vSpace).to.equal(8); // Replace 20 with the expected space in pixels
      });
    });

  });
  it('Form Item spacing for regular-label should be 0.75 rem / 12 px  input to help msg', () => {

    cy.visit('/bug1796')

    cy.get('#regular-label-help goa-form-item').shadow().find('.form-item-input').then($first => {
      const firstBottom = $first[0].getBoundingClientRect().bottom

        cy.get('#regular-label-help goa-form-item').shadow().find('.help-msg').then($second => {
        const secondTop = $second[0].getBoundingClientRect().top;

        const vSpace = secondTop - firstBottom;
        expect(vSpace).to.equal(12); // Replace 20 with the expected space in pixels
      });
    });

  });
  it('Form Item spacing for regular-label with help and error should be 0.75 rem / 12 px  input to error', () => {

    cy.visit('/bug1796')

    cy.get('#regular-label-help-error goa-form-item').shadow().find('.form-item-input').then($first => {
      const firstBottom = $first[0].getBoundingClientRect().bottom

        cy.get('#regular-label-help-error goa-form-item').shadow().find('.error-msg').then($second => {
        const secondTop = $second[0].getBoundingClientRect().top;


        const vSpace = secondTop - firstBottom;
        expect(vSpace).to.equal(12); // Replace 20 with the expected space in pixels
      });
    });

  });

  it('Form Item spacing for regular-label with help and error should be 0.5 rem / 8 px  error to help msg', () => {

    cy.visit('/bug1796')

    cy.get('#regular-label-help-error goa-form-item').shadow().find('.error-msg').then($first => {
      const firstBottom = $first[0].getBoundingClientRect().bottom

        cy.get('#regular-label-help-error goa-form-item').shadow().find('.help-msg').then($second => {
        const secondTop = $second[0].getBoundingClientRect().top;


        const vSpace = secondTop - firstBottom;
        expect(vSpace).to.equal(8); // Replace 20 with the expected space in pixels
      });
    });

  });


  it('Form Item spacing for large-label should be 0.75 rem / 12 px between label to input', () => {

    cy.visit('/bug1796')

    cy.get('#large-label goa-form-item').shadow().find('label').then($first => {
      const firstBottom = $first[0].getBoundingClientRect().bottom - parseFloat(getComputedStyle($first[0]).paddingBottom);;

        cy.get('#large-label goa-form-item').shadow().find('.form-item-input').then($second => {
        const secondTop = $second[0].getBoundingClientRect().top;

        const vSpace = secondTop - firstBottom;
        expect(vSpace).to.equal(12); // Replace 20 with the expected space in pixels
      });
    });

  });
  it('Form Item spacing for large-label should be 0.75 rem / 12 px  input to help msg', () => {

    cy.visit('/bug1796')

    cy.get('#large-label-help goa-form-item').shadow().find('.form-item-input').then($first => {
      const firstBottom = $first[0].getBoundingClientRect().bottom

        cy.get('#large-label-help goa-form-item').shadow().find('.help-msg').then($second => {
        const secondTop = $second[0].getBoundingClientRect().top;

        const vSpace = secondTop - firstBottom;
        expect(vSpace).to.equal(12); // Replace 20 with the expected space in pixels
      });
    });

  });
  it('Form Item spacing for large-label with help and error should be 0.75 rem / 12 px  input to error', () => {

    cy.visit('/bug1796')

    cy.get('#large-label-help-error goa-form-item').shadow().find('.form-item-input').then($first => {
      const firstBottom = $first[0].getBoundingClientRect().bottom

        cy.get('#large-label-help-error goa-form-item').shadow().find('.error-msg').then($second => {
        const secondTop = $second[0].getBoundingClientRect().top;


        const vSpace = secondTop - firstBottom;
        expect(vSpace).to.equal(12); // Replace 20 with the expected space in pixels
      });
    });

  });

  it('Form Item spacing for large-label with help and error should be 0.5 rem / 8 px  error to help msg', () => {

    cy.visit('/bug1796')

    cy.get('#large-label-help-error goa-form-item').shadow().find('.error-msg').then($first => {
      const firstBottom = $first[0].getBoundingClientRect().bottom

        cy.get('#large-label-help-error goa-form-item').shadow().find('.help-msg').then($second => {
        const secondTop = $second[0].getBoundingClientRect().top;


        const vSpace = secondTop - firstBottom;
        expect(vSpace).to.equal(8); // Replace 20 with the expected space in pixels
      });
    });

  });



});
