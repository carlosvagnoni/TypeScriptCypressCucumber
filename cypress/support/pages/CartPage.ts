/**
 * CartPage class represents the cart page functionalities and elements for the application.
 */
export class CartPage {
	// Locators for elements on the page
    private readonly macbookTitleInCartLocator: string = "table > tbody > tr:first-child > td:nth-child(2)"
	
	// Methods to interact with page elements
    public waitForMacbookTitleInCart(): void {
        cy.waitForElementExist(this.macbookTitleInCartLocator)
        cy.waitForElementInnerTextToBe(this.macbookTitleInCartLocator, "MacBook air")
    }

    public verifyMacbookTitleInCart(): void {
        cy.verifyElementText(this.macbookTitleInCartLocator, "MacBook air")
    }
}