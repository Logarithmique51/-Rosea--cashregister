import axios from 'axios';
import Item from '../../shared/interface/ItemInterface';
import Combo from '../../shared/interface/ComboInterface';
import Variant from '../../shared/interface/VariantInterface';
import VariantOption from '../../shared/interface/VariantOptionInterface';

const API_URL = 'localhost:3000';

// eslint-disable-next-line import/prefer-default-export
export const getPizza = async () => {
  try {
    const response = await axios.get<Item[]>(`${API_URL}/item`);
    const items = response.data;
    for (const item of items){
      if(item.variant !== undefined){
        const variant = (await axios.get<Variant>(`${API_URL}/variant/${item.variant.id}`)).data;
        item.variant = variant;
        const _variantoption  = item.variant.options;
        for ( const variantoption of _variantoption){

        }
      }
    }
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
