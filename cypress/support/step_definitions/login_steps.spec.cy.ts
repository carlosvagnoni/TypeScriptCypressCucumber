import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { BasePage } from '../pages/BasePage'

const basePage: BasePage = new BasePage;
let username: string | undefined;
let password: string | undefined;

// Step definitions using Cucumber syntax
Given(/^the user has signed up with credentials: "([^"]*)", "([^"]*)".$/, (user: string, pass: string) => {
	username = user
	password = pass
});

Then(/^the user is on the Login Page.$/, () => {
	cy.visit("/")
	basePage.clickLoginButton()
	basePage.waitForLoginTitle()
	basePage.verifyLoginTitle()
	//cy.screenshot()
});

When(/^the user inputs their username and password into the form.$/, () => {
	basePage.enterLoginUsername(username)
	basePage.enterLoginPassword(password)
});

When(/^the user clicks on the Submit button.$/, () => {
	basePage.submitLogin()
});

Then(/^the user should be logged in.$/, () => {
	basePage.waitForLoggedInUsername(username)
	basePage.verifyLoggedInUsername(username)
	//cy.screenshot()
});
