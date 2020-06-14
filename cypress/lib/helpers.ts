import { graphQLRequest } from "./requestServices";
import { getAuthTokenQuery } from "../queries/getAuthToken.query";
import { Constants } from "../fixtures/constants";


export async function createToken() {
  const tokenVariables = {
    username: Cypress.env("second_username"),
    password: Cypress.env("password")
  }
  const response = await graphQLRequest("", getAuthTokenQuery, tokenVariables);
  return response.body.data.createAuthToken.value;
}

