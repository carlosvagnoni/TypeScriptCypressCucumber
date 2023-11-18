 /**
 * ProductPage class represents the product page functionalities and elements for the application.
 */
 export class ProductPage {
	// Locators for elements on the page
    private readonly macbookTitleLocator: string = "#tbodyid > h2"
    private readonly addToCartButtonLocator: string = "#tbodyid > div.row > div > a"

	// Methods to interact with page elements
    public waitForMacbookTitle(): void {
        cy.waitForElementExist(this.macbookTitleLocator)
    }

    public clickAddToCart(): void {
        cy.clickElement(this.addToCartButtonLocator).wait(1000)
    }

    public verifyAlertSuccessfulAddedToCart(stub: void): void {
        cy.verifyAlertText(stub, 'Product added.')
    }

 }