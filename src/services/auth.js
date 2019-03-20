import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  clientID: process.env.AUTH0_CLIENT_ID,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT,
  responseType: 'token id_token',
  scope: 'profile openid'
});

export const login = () => {
  auth0.authorize();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((err, results) => {
      if(results && results.accessToken && results.idToken) {
        auth0.client.userinfo(results.accessToken, (err, info) => {
          if(err) return reject(err);
          console.log('info', info);
          resolve({
            token: results.idToken,
            name: info.name,
            id: info.sub,
          });
        });
      } else {
        reject(err || 'AUTHENTICATION ERROR');
      }
    });
  });
};
