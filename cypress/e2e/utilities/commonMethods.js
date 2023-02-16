require("cypress-xpath");

export class CommonMethods {
  //title verification
  titleVerify(expectedTitle) {
    return cy.title().should("eq", expectedTitle);
  }
  //find an element
  findBy(path) {
    return cy.get(path);
  }
  //find an element by xpath
  findByXpath(path) {
    return cy.xpath(path);
  }
  //find an element by contians
  findByContains(selector, descriptor) {
    return cy.contains(selector, descriptor);
  }
  //send keys
  sendDatabyGet(path, value) {
    return cy.get(path).clear().type(value, { delay: 100 });
  }
  sendDatabyXpath(path, value) {
    return cy.xpath(path).clear().type(value, { delay: 100 });
  }
  //select values from select
  selectdatabyindex(path, index, value) {
    return cy.get(path).select(index).invoke("val").should("eq", value);
  }
  selectdatabyvalue(path, value) {
    return cy.get(path).select(value).invoke("val").should("eq", value);
  }
  //take screenshot
  screenShot() {
    return cy.screenshot();
  }
  screenShotSpecific(path) {
    return cy.get(path).screenshot();
  }
  //load pages
  waitforthePageLoad(miliseconds) {
    return cy.wait(miliseconds);
  }
  //scroll to element
  scrollToElement(path, direction) {
    return cy.get(path).scrollTo(direction);
  }
}
