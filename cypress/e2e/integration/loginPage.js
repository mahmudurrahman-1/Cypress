/// <reference types="cypress" />
describe("Test devicewise", () => {
  context("Login page integration testing", function () {
    beforeEach(function () {
      cy.visit("https://letcode.in/");
      cy.viewport(1000, 666);
      cy.title().should("eq", "LetCode with Koushik");
    });

    it("Goes to login page", () => {
      //finds and clicks menu icon
      cy.get(
        "nav > div > div.navbar-brand > a.navbar-burger.burger.has-text-black"
      ).click();
      //waits for 3 seconds
      cy.wait(3000);
      //contains is used to select locators by text
      cy.contains("a", "Log in").click();
      //using css to find locators then clear field and type to send keys inside an input
      //beside input text another argument can be passed
      cy.get('input[name="email"]')
        .clear()
        .type("mahmudur.rahman.sqa@gmail.com", { delay: 100 });
      cy.get('input[name="password"]')
        .clear()
        .type("Mahmudur.rahman1", { delay: 100 });
      //submit

      cy.contains("button", "LOGIN").should("not.have.value").click();

      cy.wait(2000);
    });
  });

  context("Login page integration testing", function () {
    beforeEach(function () {
      cy.visit("https://letcode.in/");
      cy.viewport(1500, 1000);
      cy.title().should("eq", "LetCode with Koushik");
    });

    it("Goes to login page", () => {
      //finds and clicks login button
      //waits for 3 seconds
      cy.wait(3000);
      //contains is used to select locators by text
      cy.contains("a", "Log in").click();
      //using css to find locators then clear field and type to send keys inside an input
      //beside input text another argument can be passed
      cy.get('input[name="email"]')
        .clear()
        .type("mahmudur.rahman.sqa@gmail.com", { delay: 100 });
      cy.get('input[name="password"]')
        .clear()
        .type("Mahmudur.rahman1", { delay: 100 });
      //submit
      cy.contains("button", "LOGIN").should("not.have.value").click();
      //waits for 2 seconds
      cy.wait(2000);
    });
  });
});
