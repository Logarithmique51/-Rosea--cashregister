import axios from 'axios';

const API_URL = 'localhost:3000';

// eslint-disable-next-line import/prefer-default-export
export const getPizza = async () => {
  try {
    const response = await axios.get(`${API_URL}/item`);
    return response.data;
  } catch (error) {
    console.error('Error fetching');
  }
};

export const getMenu = async () => {
  try {
    const response = await axios.get(`${API_URL}/menu`);
    return response.data;
  } catch (error) {
    console.error('Error fetching');
  }
};
