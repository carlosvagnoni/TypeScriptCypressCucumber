/**
 * Class representing the header and footer of the application.
 */
export class BasePage {
	// Locators for elements on the page
    private readonly signupButtonLocator: string = "#signin2"
    private readonly signupTitleLocator: string = "#signInModalLabel"
    private readonly loginButtonLocator: string = "#login2"
    private readonly loginTitleLocator: string = "#logInModalLabel"
    private readonly signupUsernameInputLocator: string = "#sign-username"
    private readonly signupPasswordInputLocator: string = "#sign-password"
    private readonly loginUsernameInputLocator: string = "#loginusername"
    private readonly loginPasswordInputLocator: string = "#loginpassword"
    private readonly submitSignupButtonLocator: string = "#signInModal > div > div > div.modal-footer > button.btn.btn-primary"
    private readonly submitLoginButtonLocator: string = "#logInModal > div > div > div.modal-footer > button.btn.btn-primary"
    private readonly loggedInUsernameLocator: string = "#nameofuser"
    private readonly cartButtonLocator: string = "#cartur"

	// Methods to interact with page elements
    public clickSignupButton(): void {
        cy.clickElement(this.signupButtonLocator)
    }

    public waitForSignupTitle(): void {
        cy.waitForElementBeVisible(this.signupTitleLocator).wait(500)
    }

    public verifySignupTitle(): void {
        cy.verifyElementText(this.signupTitleLocator, "Sign up")
    }

    public clickLoginButton(): void {
        cy.clickElement(this.loginButtonLocator)
    }

    public waitForLoginTitle(): void {
        cy.waitForElementBeVisible(this.loginTitleLocator).wait(500)
    }

    public verifyLoginTitle(): void {
        cy.verifyElementText(this.loginTitleLocator, "Log in")
    }

    public enterLoginUsername(text: string): void {
        cy.enterText(this.loginUsernameInputLocator, text)
    }

    public enterLoginPassword(text: string): void {
        cy.enterText(this.loginPasswordInputLocator, text)
    }

    public enterSignupUsername(text: string): void {
        cy.enterText(this.signupUsernameInputLocator, text)
    }

    public enterSignupPassword(text: string): void {
        cy.enterText(this.signupPasswordInputLocator, text)
    }

    public verifyEnteredCredentials(username: string, password: string): void {
        cy.verifyElementTextValue(this.signupUsernameInputLocator, username)
        cy.verifyElementTextValue(this.signupPasswordInputLocator, password)
    }

    public submitSignup(): void {
        cy.clickElement(this.submitSignupButtonLocator).wait(1000)
    }

    public verifyAlertSuccessfulSignup(stub: void): void {
        cy.verifyAlertText(stub, 'Sign up successful.')
    }

    public submitLogin(): void {
        cy.clickElement(this.submitLoginButtonLocator)
    }

    public waitForLoggedInUsername(username: string): void {
        cy.waitForElementNotBeVisible(this.loginTitleLocator);
        cy.waitForElementInnerTextToBe(this.loggedInUsernameLocator, `Welcome ${username}`);
      }

    public verifyLoggedInUsername(username: string): void {
        cy.verifyElementText(this.loggedInUsernameLocator, `Welcome ${username}`)
    }

    public clickCartButton(): void {
        cy.clickElement(this.cartButtonLocator)
    }
}

