import { BasePage } from './base.page';


export class LoginPage extends BasePage {
  public USER_NAME = "[class^='LoginForm_loginForm__'] [name='username']";
  public USER_PASSWORD = "[class^='LoginForm_loginForm__'] [name='password']";
  public SUBMIT_BUTTON = "[class^= 'LoginForm_loginForm__'] button[type = 'submit']";
  public LOGOUT_BUTTON = "a[class^='AccountSelect_logout']";

  public enterUsername(username: string) {
    cy.get(this.USER_NAME).type(username);
  }

  public enterPassword(password: string) {
    cy.get(this.USER_PASSWORD).type(password);
  }

  public clickLogin() {
    cy.get(this.SUBMIT_BUTTON).click();
  }

  public clickLogout() {
    cy.get(this.LOGOUT_BUTTON).click();
  }

}





