/// <reference types="cypress" />

export default class open_url {
  openUrl() {
    cy.visit("https://letcode.in/");
    cy.viewport(1200, 800);
  }
}
