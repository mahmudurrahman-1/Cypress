import { CommonMethods } from "../utilities/commonMethods";
const methods = new CommonMethods();
const data = require("../../fixtures/data.json");
export class SignupPage {
  registrationProcess() {
    //Locators
    const menuButton =
      "nav > div > div.navbar-brand > a.navbar-burger.burger.has-text-black";
    const signUpBtn = '//a[normalize-space()="Sign up"]';
    const email = "#email";
    const password = "#pass";
    const userName = "#name";
    const checkAgree = "#agree";
    const submit = '//button[normalize-space()="SIGN UP"]';
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
    //check
    methods.findBy(checkAgree).should("not.be.checked").check();
    //click to submit
    methods.findByXpath(submit).click();
  }
}
