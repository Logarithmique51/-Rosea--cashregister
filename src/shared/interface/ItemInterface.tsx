import Variant from './VariantInterface';

export default interface Item {
  id: number;
  title: string;
  price: number;
  slug: string;
  categorie: string;
  variant?: Variant;
}
