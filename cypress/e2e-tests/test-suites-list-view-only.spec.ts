import { TestSuitesListPage } from "../pages/test-suites-list.page";
const testSuiteListPage = new TestSuitesListPage();

const username = Cypress.env("viewer_username");
const password = Cypress.env("password");

describe("Test Suites List as a view-only user", () => {
  beforeEach(() => {
    cy.setToken(username, password);
    cy.visit("/test-suites");
  });

  it("should not be able to see 'Add test suite' button as a viewer", () => {
    testSuiteListPage
      .findByText("Add test suite")
      .should("not.exist");
  });

  it("should not be able to see delete/edit links as a viewer", () => {
    testSuiteListPage.find(testSuiteListPage.DELETE_LINK).should("not.exist");
    testSuiteListPage.find(testSuiteListPage.EDIT_LINK).should("not.exist");
  });

  it("should get redirected when trying to navigate to edit test suite URL", () => {
    testSuiteListPage
      .find(testSuiteListPage.TEST_SUITE_ID)
      .first()
      .then(testSuiteInput => {
        const testSuiteId = testSuiteInput.text;
        cy.visit(`/setup/${testSuiteId}`);
      });
    cy.url().should("include", "/test-suites");
  });

  it("should get redirected when trying to navigate to 'setup new testsuite' URL", () => {
    cy.visit("/setup/new");
    cy.url().should("include", "/test-suites");
  });
});
