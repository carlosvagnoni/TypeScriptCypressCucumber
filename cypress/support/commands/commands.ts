/**
 * This file defines custom Cypress commands to interact with elements and perform assertions in tests.
 * These commands enhance readability, maintainability, and reusability of test code.
 */

// Definition of custom types
type CustomChainable = Cypress.Chainable<string | number | string[]>;

// Custom commands
Cypress.Commands.add('clickElement', (elementLocator: string): Cypress.Chainable<JQuery<HTMLElement>> => {
    return cy.get(elementLocator).should('be.visible').click() as Cypress.Chainable<JQuery<HTMLElement>>;
});

Cypress.Commands.add('waitForElementBeVisible', (elementLocator: string): Cypress.Chainable<JQuery<HTMLElement>> => {
    return cy.get(elementLocator).should('be.visible') as Cypress.Chainable<JQuery<HTMLElement>>;
});

Cypress.Commands.add('waitForElementExist', (elementLocator: string): Cypress.Chainable<JQuery<HTMLElement>> => {
    return cy.get(elementLocator).should('exist') as Cypress.Chainable<JQuery<HTMLElement>>;
});

Cypress.Commands.add('waitForElementNotBeVisible', (elementLocator: string): Cypress.Chainable<JQuery<HTMLElement>> => {
    return cy.get(elementLocator).should('not.be.visible') as Cypress.Chainable<JQuery<HTMLElement>>;
});

Cypress.Commands.add('waitForElementInnerTextToBe', (elementLocator: string, expectedText: string): Cypress.Chainable<JQuery<HTMLElement>> => {
    return cy.get(elementLocator).should('have.text', expectedText, { timeout: 1000 }) as Cypress.Chainable<JQuery<HTMLElement>>;
});

Cypress.Commands.add('verifyElementText', (elementLocator: string, expectedText: string): Cypress.Chainable<string> => {
    return cy.get(elementLocator).invoke('text').should('equal', expectedText) as Cypress.Chainable<string>;
});

Cypress.Commands.add('verifyElementTextValue', (elementLocator: string, expectedText: string): Cypress.Chainable<string | number | string[]> => {
    return cy.get(elementLocator).invoke('val').should('equal', expectedText) as CustomChainable;
});

Cypress.Commands.add('verifyAlertText', (stub: void, expectedText: string) => {
    expect(stub).to.have.been.calledWith(expectedText)
})

Cypress.Commands.add('submitAlert', () => {
    cy.window().then((win) => {
        cy.stub(win, 'alert').returns(true);
    });
})

Cypress.Commands.add('enterText', (elementLocator: string, text: string): Cypress.Chainable<JQuery<HTMLElement>> => {
    return cy.get(elementLocator).type(text) as Cypress.Chainable<JQuery<HTMLElement>>;
})

Cypress.Commands.add('verifyCurrentUrl', (expectedUrl: string): Cypress.Chainable<string> => {
    return cy.url().should('eq', expectedUrl) as Cypress.Chainable<string>;
})

// Global declaration of custom commands for Cypress
declare global {
    namespace Cypress {
        interface Chainable {
            clickElement(elementLocator: string): Chainable<JQuery<HTMLElement>>
            waitForElementBeVisible(elementLocator: string): Chainable<JQuery<HTMLElement>>
            waitForElementExist(elementLocator: string): Chainable<JQuery<HTMLElement>>
            waitForElementNotBeVisible(elementLocator: string): Chainable<JQuery<HTMLElement>>
            waitForElementInnerTextToBe(elementLocator: string, expectedText: string): Chainable<JQuery<HTMLElement>>
            verifyElementText(elementLocator: string, expectedText: string): Chainable<string>
            verifyElementTextValue(elementLocator: string, expectedText: string): CustomChainable
            verifyAlertText(stub: void, expectedText: string): Chainable<void>
            submitAlert(): Chainable<void>
            enterText(elementLocator: string, text: string): Chainable<JQuery<HTMLElement>>
            verifyCurrentUrl(expectedUrl: string): Chainable<string>
        }
    }
}