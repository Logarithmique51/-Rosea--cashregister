import axios from 'axios';
import Item from '../../shared/interface/ItemInterface';
import Combo from '../../shared/interface/ComboInterface';

const API_URL = 'localhost:3000';

// eslint-disable-next-line import/prefer-default-export
export const getPizza = async () => {
  try {
    const response = await axios.get<Item[]>(`${API_URL}/item`);
    return response.data;
  } catch (error) {
    console.error('Error fetching');
  }
};

export const getMenu :  async () => {
  try {
    const response = await axios.get<Combo[]>(`${API_URL}/menu`);
    return response.data;
  } catch (error) {
    console.error('Error fetching');
  }
};
