import { ClientData } from './interfaces';

const baseUrl = import.meta.env.VITE_API_URL;

export const getClients = async () => {
  try {
    const response = await fetch(baseUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('🚀 ~ file: clients.tsx:9 ~ getClients ~ error:', error);
  }
};

export const getClientById = async (id: number) => {
  try {
    const url = `${baseUrl}/${id}`;

    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('🚀 ~ file: clients.tsx:9 ~ getClients ~ error:', error);
  }
};

export const createClient = async (data: ClientData) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(baseUrl, options);

    return response.ok;
  } catch (error) {
    console.log('🚀 ~ file: clients.tsx:19 ~ createClient ~ error:', error);
  }
};

export const updateClient = async (data: ClientData, id: number) => {
  try {
    const url = `${baseUrl}/${id}`;

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, options);

    return response.ok;
  } catch (error) {
    console.log('🚀 ~ file: clients.tsx:19 ~ createClient ~ error:', error);
  }
};

export const deleteClient = async (id: number) => {
  try {
    const url = `${baseUrl}/${id}`;
    const options = {
      method: 'DELETE',
    };

    const response = await fetch(url, options);

    return response.ok;
  } catch (error) {
    console.log('🚀 ~ file: clients.tsx:9 ~ getClients ~ error:', error);
  }
};
