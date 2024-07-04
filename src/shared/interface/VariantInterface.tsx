import VariantOption from './VariantOptionInterface';

export default interface Variant {
  id: number;
  title: string;
  options: VariantOption[];
}
