import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { BasePage } from '../pages/BasePage'
import { CartPage } from '../pages/CartPage'
import { HomePage } from '../pages/HomePage'
import { ProductPage } from '../pages/ProductPage'

const basePage: BasePage = new BasePage;
const cartPage: CartPage = new CartPage;
const homePage: HomePage = new HomePage;
const productPage: ProductPage = new ProductPage;
let msg: any;


// Step definitions using Cucumber syntax
Given(/^the user is browsing the list of available products.$/, () => {
	cy.verifyCurrentUrl('https://www.demoblaze.com/')
	//cy.screenshot()
});

When(/^the user selects a product from the "laptops" category.$/, () => {
	homePage.clickLaptopsCategoryButton()
	homePage.waitForMacbookButton()
	homePage.clickMacbookButton()
});

When(/^the user adds the selected product to the shopping cart.$/, () => {
	msg = cy.stub()
	cy.on('window:alert', msg)
	productPage.waitForMacbookTitle()
	productPage.clickAddToCart()
	productPage.verifyAlertSuccessfulAddedToCart(msg)
	cy.submitAlert()
});

Then(/^the product should be added to the user's shopping cart.$/, () => {
	basePage.clickCartButton()
	cartPage.waitForMacbookTitleInCart()
	cartPage.verifyMacbookTitleInCart()
	//cy.screenshot()
});