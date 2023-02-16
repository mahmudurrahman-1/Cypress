const base = require("../base/OpenUrl");
const { LoginPage } = require("../pages/LoginPage");

describe("login functionality test", () => {
  context("Tablet", () => {
    it("starts this first", () => {
      base.open_url();
      //object
      const login = new LoginPage();
      login.loginProcess();
    });
  });
});
