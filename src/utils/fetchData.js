import { parseCookies } from 'nookies';
import authConfig from '../configs/authConfig';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const fetchData = async (url, options = {}) => {
  try {
    const cookies = parseCookies();
    const token = cookies[authConfig.storageTokenKeyName];

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers
      },
      ...options
    });

    return handleResponse(response);
  } catch (error) {
    console.error('Error in fetchData:', error);
    throw error;
  }
};

export const postData = async (url, data, headers = {}) => {
  try {
    const cookies = parseCookies();
    const token = cookies[authConfig.storageTokenKeyName];

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...headers
      },
      body: JSON.stringify(data)
    });

    return handleResponse(response);
  } catch (error) {
    console.error('Error in postData:', error);
    throw error;
  }
};

export const putData = async (url, data, headers = {}) => {
  try {
    const cookies = parseCookies();
    const token = cookies[authConfig.storageTokenKeyName];

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...headers
      },
      body: JSON.stringify(data)
    });

    return handleResponse(response);
  } catch (error) {
    console.error('Error in putData:', error);
    throw error;
  }
};

export const deleteData = async (url, headers = {}) => {
  try {
    const cookies = parseCookies();
    const token = cookies[authConfig.storageTokenKeyName];

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...headers
      }
    });

    return handleResponse(response);
  } catch (error) {
    console.error('Error in deleteData:', error);
    throw error;
  }
};