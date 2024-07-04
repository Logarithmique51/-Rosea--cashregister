import Item from "./ItemInterface";

export default interface Option {
  id: number;
  title: string;
  items: Item[];
}
