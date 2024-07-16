import createStore from 'react-auth-kit/createStore';
export const authstore = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false,
});
