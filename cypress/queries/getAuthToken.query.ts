export const getAuthTokenQuery = `
mutation getAuthToken($password: String!, $username: String!) {
  createAuthToken(password: $password, username: $username) {
    value
  }
}
`
