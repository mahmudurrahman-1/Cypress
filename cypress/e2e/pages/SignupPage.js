import { CommonMethods } from "../utilities/commonMethods";
const methods = new CommonMethods();
const data = require("../../fixtures/data.json");
export class SignupPage {
  registrationProcess() {
    //Locators
    const menuButton =
      "nav > div > div.navbar-brand > a.navbar-burger.burger.has-text-black";
    const signUpBtn = '//a[normalize-space()="Log in"]';
    const email = "#email";
    const password = "#pass";
    const userName = "#name";
    const submit = '//button[normalize-space()="SIGNUP"]';
    //actions
    methods.titleVerify("LetCode with Koushik");
    //click menu icon button
    methods.findBy(menuButton).click();
    //click to sign up button
    methods.findByXpath(signUpBtn).click();
    //enter values
    methods.sendDatabyGet(email, data.email);
    methods.sendDatabyGet(password, data.password);
    methods.sendDatabyGet(userName, data.name);
    //click to submit
    methods.findByXpath(submit).click();
  }
}
