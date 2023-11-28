# Automated Web Testing with TypeScript, Cypress, and Cucumber 🤖🆃🆂

This project provides a structure and tools for automated web testing using TypeScript, Cypress, and Cucumber, following Behavior-Driven Development (BDD) best practices and employing the Page Object Model design pattern.

## Testing demoblaze.com Features 🧪

This suite of tests is specifically designed to validate and test features on the [demoblaze.com](https://www.demoblaze.com) website. You'll find feature files under the `e2e/features` directory related to signup, login and adding products to the cart.

![Typescript2](https://github.com/carlosvagnoni/TypeScriptCypressCucumber/assets/106275103/0d808d2e-8b10-408e-8d00-9d3b25ecc5fe)

## Table of Contents 📑
- [Requirements](#requirements)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Test Execution](#test-execution)
- [Contact](#contact)

## <a id="requirements">Requirements 📋</a>

- Node.js 21.2.0
- TypeScript 5.2.2
- Cypress 13.5.1
- @badeball/cypress-cucumber-preprocessor 19.1.1
- @cypress/browserify-preprocessor 3.0.2

## <a id="folder-structure">Folder Structure 📂</a>

- **cypress.config.ts:** Configuration file for Cypress.
- **package-lock.json:** Specific details about exact dependency versions for the project.
- **package.json:** Project configuration file for Node.js.
- **run.bat:** Script specifically designed for execution in Windows environments.
- **tsconfig.json:** Configuration file for TypeScript compilation.

### Directory "cypress"

- **e2e:** Directory for end-to-end test files and configuration.
  - **features:** Subdirectory containing specification files in Gherkin format.

- **support:** Directory with support files for tests.
  - **e2e.ts:** Support file for end-to-end tests.
  - **commands:** Folder with custom commands for Cypress.
  - **pages:** Directory containing Page Object Model classes.
  - **step_definitions:** Directory with step definitions for the specifications.

## <a id="installation">Installation 🛠️</a>

1. Clone this repository:

    ```bash
    git clone https://github.com/carlosvagnoni/TypeScriptCypressCucumber.git
    cd TypeScriptCypressCucumber
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## <a id="configuration">Configuration ⚙️</a>

- Make sure you have a browser installed and configured in the script (Chrome, Edge, or Firefox).
- You can configure the cypress.config.ts file to adjust parameters such as the base URL(url).

## <a id="test-execution">Test Execution ▶️</a>

Run all the tests:

```bash
npx cypress run -b chrome --headed
```

Open report:

```bash
start "" "cypress\reports\report.html"
```

**NOTE:**

- Set up the respective environment variables beforehand.
- On Windows environments, you can directly execute the `run.bat` file.
- For more command-line parameters and options, refer to the Cypress documentation on [Command Line](https://docs.cypress.io/guides/guides/command-line).

## <a id="contact">Contact 📧</a>

If you have any questions or suggestions, feel free to contact me through my social media accounts.

Thank you for your interest in this project!
