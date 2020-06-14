export function graphQLRequest(authToken: string, query: string, variables?: any): Promise<any> {
  return new Promise((resolve) => {
    cy.request({
      method: "POST",
      url: Cypress.env("api_url"),
      headers:
      {
        "Accept": "application/vnd.deepcrawl.meridian-preview",

        "X-Auth-Token": authToken
      }
      ,
      body: {
        variables: variables,
        query: query
      }
    }).then(resolve)
  });
}

