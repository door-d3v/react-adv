import { ReactElement } from 'react';

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  product: Product;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOC {
  ({ children, product }: ProductCardProps): JSX.Element;
  Button: () => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
}
