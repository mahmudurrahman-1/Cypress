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

    //verifies title
    methods.titleVerify("LetCode with Koushik");
    //clicks menu button
    methods.findBy(menuButton).click();
    //waits for 2 seconds
    methods.waitforthePageLoad(2000);
    //find login button and clicks
    methods.findByXpath(loginButton).click();
    //enter values in the input fields
    methods.sendDatabyGet(inputEmail, data.email);
    methods.sendDatabyGet(inputPass, data.password);
    //click login button to submit
    methods.findByXpath(submit).click();
    //waits for 2 seconds
    methods.waitforthePageLoad(2000);
    // a toaster would pop up
    methods.findBy(close).should("be.visible");
    //verify titler after login
    methods.titleVerify("LetCode with Koushik");
    //close popup
    methods.findBy(close).click();
    //
    methods.findBy(menuButton).click();
    methods.findByContains("a", "Sign out").click();
  }
}
