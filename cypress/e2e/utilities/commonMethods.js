require("cypress-xpath");

export class CommonMethods {
  titleVerify(expectedTitle) {
    return cy.title().should("eq", expectedTitle);
  }
  findBy(path) {
    return cy.get(path);
  }
  findByXpath(path) {
    return cy.xpath(path);
  }
  findByContains(selector, descriptor) {
    return cy.contains(selector, descriptor);
  }
  sendDatabyGet(path, value) {
    return cy.get(path).clear().type(value, { delay: 100 });
  }
  sendDatabyXpath(path, value) {
    return cy.xpath(path).clear().type(value, { delay: 100 });
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
