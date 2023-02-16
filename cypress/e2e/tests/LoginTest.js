const base = require("../base/OpenUrl");
const { LoginPage } = require("../pages/LoginPage");

describe("login functionality test", () => {
  context("Tablet", () => {
    it("starts this first", () => {
      base.open_url();
      //objects
      const login = new LoginPage();
      //actions
      login.loginProcess();
    });
  });
});
