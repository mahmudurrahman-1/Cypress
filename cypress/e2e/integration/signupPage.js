/// <reference types="cypress" />
const data = require("../../fixtures/data.json");
describe("registration", () => {
  //start before each method
  beforeEach(() => {
    cy.visit("https://letcode.in/");
    //the screen resolution
    cy.viewport(1200, 850);
    //waits for 2 seconds
    cy.wait(2000);
  });
  //start actions
  it("User Registration", () => {
    //locators and actions
    cy.contains("a", "Sign up").click();
    cy.get("#name").clear().type(data.name);
    cy.get("#email").clear().type(data.email);
    cy.get("#pass").clear().type(data.password);
    cy.get("#agree").should("not.be.checked").check();
    cy.contains("button", "SIGN UP").click();
  });
});
