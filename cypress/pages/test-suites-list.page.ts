import { BasePage } from "./base.page";

export class TestSuitesListPage extends BasePage {
  INTRO_PAGE = "div[class^='HomeIntro_integrate']";
  DELETE_LINK = "a[class^='DeleteTestSuiteLink_deleteTestSuiteLink']";
  EDIT_LINK = "a[class^='EditTestSuiteLink_editLink']";
  ADD_TEST_SUITE_BUTTON = "[class^='svg-inline--fa fa-plus-circle']";
  TEST_SUITE_ID = "input[class='MuiInputBase-input MuiFilledInput-input']";

  public deleteTestSuite(): void {
    cy.get(this.DELETE_LINK)
      .first()
      .click();
  }

  public editTestSuite(): void {
    cy.get(this.EDIT_LINK)
      .first()
      .click();
  }
}
