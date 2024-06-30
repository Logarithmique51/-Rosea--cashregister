import axios from "axios";

const API_URL = 'localhost:3000'

export const getPizza = async () => {
  try {
    const response = await axios.get(`${API_URL}/item`)
    return response.data;
  } catch (error) {
    console.error('Error fetching');
  }
}
