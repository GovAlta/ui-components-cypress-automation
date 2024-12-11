import 'cypress-shadow-dom';

describe('dropdown dynamic items not updating', () => {

  it('Update the dropdown item at front', () => {
    // Visit the test page
    cy.visit('/bug2114');

    // Open the dropdown by clicking the input field
    cy.get('goa-input[name="item"]').shadow().find('input').type("End One", { delay: 100 });
    cy.get('[testid="newItem"]').shadow().find('button').click({ force: true });
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('input').click({ force: true });
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(-1).should('have.attr', 'id', 'end-one');
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(-1).click({ force: true });

    cy.get('goa-input[name="item"]').shadow().find('input').clear();
    cy.wait(500)
    cy.get('goa-input[name="item"]').shadow().find('input').type("End Two", { delay: 100 });
    cy.get('[testid="newItem"]').shadow().find('button').click({ force: true });
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('input').click({ force: true });
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(-1).should('have.attr', 'id', 'end-two');
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(-2).should('have.attr', 'id', 'end-one');
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(-1).click({ force: true });

cy.get('goa-input[name="item"]').shadow().find('input').clear();
cy.wait(500)

    cy.get('goa-input[name="item"]').shadow().find('input').type("Start One", { delay: 100 });
    cy.get('goa-radio-item[value="prepend"]').shadow().find('input').click({ force: true });


    cy.get('[testid="newItem"]').shadow().find('button').click({ force: true });
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('input').click({ force: true });
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(0).should('have.attr', 'id', 'start-one');
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(-1).should('have.attr', 'id', 'end-two');
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(-2).should('have.attr', 'id', 'end-one');
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(0).click({ force: true });

cy.get('goa-input[name="item"]').shadow().find('input').clear();
cy.wait(500)

    cy.get('goa-input[name="item"]').shadow().find('input').type("Start Two", { delay: 100 });
    cy.get('[testid="newItem"]').shadow().find('button').click({ force: true });
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').should('have.length', 7);
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('input').click({ force: true });
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(0).should('have.attr', 'id', 'start-two');
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(1).should('have.attr', 'id', 'start-one');
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(-1).should('have.attr', 'id', 'end-two');
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(-2).should('have.attr', 'id', 'end-one');
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(0).click({ force: true });

    cy.get('[testid="resetItem"]').shadow().find('button').click({ force: true });
    cy.get('goa-radio-item[value="prepend"]').shadow().find('input').click({ force: true });

    //cy.get('goa-dropdown[name="selectedTask"]').shadow().find('input').click({ force: true });
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').should('have.length', 0);
cy.get('goa-input[name="item"]').shadow().find('input').clear();
cy.wait(500)

    cy.get('goa-input[name="item"]').shadow().find('input').type("Start One", { delay: 100 });
    cy.get('[testid="newItem"]').shadow().find('button').click({ force: true });
cy.get('goa-input[name="item"]').shadow().find('input').clear();
cy.wait(500)

    cy.get('goa-input[name="item"]').shadow().find('input').type("Start Two", { delay: 100 });
    cy.get('[testid="newItem"]').shadow().find('button').click({ force: true });
    cy.get('goa-radio-item[value="append"]').shadow().find('input').click({ force: true });

cy.get('goa-input[name="item"]').shadow().find('input').clear();
cy.wait(500)

    cy.get('goa-input[name="item"]').shadow().find('input').type("End One", { delay: 100 });
    cy.get('[testid="newItem"]').shadow().find('button').click({ force: true });
cy.get('goa-input[name="item"]').shadow().find('input').clear();
cy.wait(500)

    cy.get('goa-input[name="item"]').shadow().find('input').type("End Two", { delay: 100 });
    cy.get('[testid="newItem"]').shadow().find('button').click({ force: true });
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('input').click({ force: true });
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').should('have.length', 4);
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(0).should('have.attr', 'id', 'start-two');
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(1).should('have.attr', 'id', 'start-one');
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(-1).should('have.attr', 'id', 'end-two');
    cy.get('goa-dropdown[name="selectedTask"]').shadow().find('goa-popover li').eq(-2).should('have.attr', 'id', 'end-one')

  });

});
