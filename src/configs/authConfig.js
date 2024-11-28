const baseURL = 'http://127.0.0.1:8000/api';

const authConfig = {
  baseURL,
  loginEndpoint: `${baseURL}/auth/login`,
  registerEndpoint: `${baseURL}/auth/register`,
  meEndpoint: `${baseURL}/auth/me`,
  storageTokenKeyName: 'authToken',
  logoutEndpoint: `${baseURL}/auth/logout`,
  usersEndpoints: {
    get: `${baseURL}/auth/get`,
    create: `${baseURL}/auth/post`,
    update: `${baseURL}/auth/put`,
    delete: `${baseURL}/auth/delete`
  }
};

export default authConfig;