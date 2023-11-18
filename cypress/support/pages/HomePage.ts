/**
 * HomePage class represents the home page functionalities and elements for the application.
 */
export class HomePage {
	// Locators for elements on the page
    private readonly laptopsCategoryButtonLocator: string = "div:nth-of-type(1) > a#itemc.list-group-item:nth-of-type(3)"
    private readonly macbookButtonLocator: string = "#tbodyid > div:nth-child(3) > div > div > h4 > a"

	// Methods to interact with page elements
    public clickLaptopsCategoryButton(): void {
        cy.clickElement(this.laptopsCategoryButtonLocator)
    }

    public waitForMacbookButton(): void {
        cy.waitForElementInnerTextToBe(this.macbookButtonLocator, "MacBook air")
    }

    public clickMacbookButton(): void {
        cy.clickElement(this.macbookButtonLocator)
    }
}