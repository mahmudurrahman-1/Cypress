<referece types="cypress"></referece>;
require("cypress-xpath");
export default class utilities {
  titleVerify(expectedTitle) {
    return cy.title().should("eq", expectedTitle);
  }
  sendDatabyGet(path, value) {
    return cy.get(path).type(value);
  }

  selectdatabyindex(path, index, value) {
    return cy.get(path).select(index).invoke("val").should("eq", value);
  }
  selectdatabyvalue(path, value) {
    return cy.get(path).select(value).invoke("val").should("eq", value);
  }

  screenShot(name) {
    return cy.screenshot(name);
  }
  screenShotSpecific(path, name) {
    return cy.get(path).screenshot(name);
  }
  waitforthePageLoad(miliseconds) {
    return cy.wait(miliseconds);
  }

  scrollToElement(path, direction) {
    return cy.get(path).scrollTo(direction);
  }
}
