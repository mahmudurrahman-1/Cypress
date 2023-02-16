import { open_url } from "../base/openUrl";
import { SignupPage } from "../pages/SignupPage";
const signup = new SignupPage();
describe("Registration Process goes here", function () {
  context("Registration for a user", () => {
    it("Starts registration process here", () => {
      open_url();
      signup.registrationProcess();
    });
  });
});
