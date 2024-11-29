const baseURL = 'http://3.142.124.132:3232/api';

const authConfig = {
  baseURL,
  loginEndpoint: `${baseURL}/auth/login`,
  registerEndpoint: `${baseURL}/auth/register`,
  meEndpoint: `${baseURL}/auth/me`,
  storageTokenKeyName: 'authToken',
  logoutEndpoint: `${baseURL}/auth/logout`,
  usersEndpoints: {
    get: `${baseURL}/users`,
    create: `${baseURL}/users`,
    update: `${baseURL}/users`,
    delete: `${baseURL}/users`
  }
};

export default authConfig;