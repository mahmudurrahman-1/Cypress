import { CommonMethods } from "../utilities/CommonMethods";

//require("../utilities/CommonMethods");
const data = require("../../fixtures/data.json");
export class LoginPage {
  loginProcess() {
    //locators
    const menuButton =
      "nav > div > div.navbar-brand > a.navbar-burger.burger.has-text-black";
    const inputEmail = 'input[name="email"]';
    const inputPass = 'input[name="password"]';
    const loginButton = '//a[normalize-space()="Log in"]';
    const submit = '//button[normalize-space()="LOGIN"]';
    const close = "button.toast-close-button.ng-tns-c41-1";
    const Signout = '//a[normalize-space()="Sign out"]';

    //objects
    const methods = new CommonMethods();

    //actions
    methods.titleVerify("LetCode with Koushik");
    methods.findBy(menuButton).click();
    methods.waitforthePageLoad(2000);
    methods.findByXpath(loginButton).click();
    methods.sendDatabyGet(inputEmail, data.email);
    methods.sendDatabyGet(inputPass, data.password);
    methods.findByXpath(submit).click();
    methods.waitforthePageLoad(2000);
    methods.findBy(close).should("be.visible");
    methods.titleVerify("LetCode with Koushik");
    methods.findBy(close).click();
    methods.findBy(menuButton).click();
    methods.findByContains("a", "Sign out").click();
  }
}
