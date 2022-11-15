// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'tf8rrr5c77'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-5fe0d8eb.us.auth0.com',            // Auth0 domain
  clientId: 'i2KF12HYiFvSoBqzfKbx4fAMrejgZGNG',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
