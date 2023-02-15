# Cypress for the first time

- npm install cypress --save-dev
- npm install cypress-xpath --save-dev
- npm install cypress-mochawesome-reporter --save-dev

# Configure Cypress files

On `cypress.config.js` under `e2e` object wite this property `specPattern: "cypress/e2e/**/*.*",`

# open and run tests

- npx cypress open

# Writting locators in cypress

- cy.get("Write here")
  -- under get method we can write `css selectors`, `#ids`,`.classes`,`[attribute="value"]`,`'selector[attribute="value"]'`,
  -- right after every locators we can do one or many actions
- cy.contains("Write 1st arg here","write 2nd arg here","write 3rd args as optional")
  -- the first `arg` is `selector` and the second arg is `texts`
