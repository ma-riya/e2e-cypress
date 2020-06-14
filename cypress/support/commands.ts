import { getAuthTokenQuery } from "../queries/getAuthToken.query";
import { getAccountQuery } from "../queries/getAccount.query";
import { Constants } from "../fixtures/constants";
import { createTestSuiteQuery } from "../queries/createTestSuite.query";
import { deleteTestSuiteQuery } from "../queries/deleteTestSuite.query";

import "cypress-file-upload";

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      setToken(username: string, password: string): Cypress.Chainable<Response>;
    }
  }
}

Cypress.Commands.add("setToken", (username: string, password: string) => {
  const tokenVariables = {
    username: username,
    password: password
  }
  cy.request({
    failOnStatusCode: false,
    method: "POST",
    url: Cypress.env("api_url"),
    body: {
      operationName: "getAuthToken",
      variables: tokenVariables,
      query: getAuthTokenQuery
    }
  }).then(resp => {
    window.localStorage.setItem("token", resp.body.data.createAuthToken.value);
    return resp
  });
});

