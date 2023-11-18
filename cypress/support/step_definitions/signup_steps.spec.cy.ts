import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { BasePage } from '../pages/BasePage'

const basePage: BasePage = new BasePage;
let username: string | undefined;
let password: string | undefined;
let msg: any;

// Step definitions using Cucumber syntax
Given(/^the user is on the Registration Page.$/, () => {
	cy.visit("/")
	basePage.clickSignupButton()
	basePage.waitForSignupTitle()
	basePage.verifySignupTitle()
	//cy.screenshot()
});

When(/^the user provides the following registration details: "([^"]*)", "([^"]*)".$/, (user: string,pass: string) => {
	username = user
	password = pass
	basePage.enterSignupUsername(username)
	basePage.enterSignupPassword(password)
	basePage.verifyEnteredCredentials(username, password)
	//cy.screenshot()
});

When(/^the user clicks on the Sign Up button.$/, () => {
	msg = cy.stub()
	cy.on('window:alert', msg)
	basePage.submitSignup()
});

Then(/^the user should be registered successfully.$/, () => {
	basePage.verifyAlertSuccessfulSignup(msg)
	cy.submitAlert()
});
