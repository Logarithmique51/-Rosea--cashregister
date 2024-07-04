import Option from './OptionInterface';

export default interface Combo {
  id: number;
  title: string;
  price: number;
  slug: string;
  options: Option[];
}
