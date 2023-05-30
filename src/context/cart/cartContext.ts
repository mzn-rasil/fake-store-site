import { createContext } from 'react';
import { IProduct } from '../../api/productsApi';

export type ICartItem = Pick<IProduct, 'id' | 'image' | 'title' | 'price'> & {
  quantity: number;
};

export enum ECartOperation {
  'inc',
  'dec',
}

interface ICartContext {
  cart: ICartItem[] | [];
  onAddToCart: (item: ICartItem) => void;
  onRemoveFromCart: (id: ICartItem['id']) => void;
  getNumberOfItems: () => number;
  getTotalPrice: () => number;
  updateProductCount: (operation: ECartOperation, id: ICartItem['id']) => void;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  onAddToCart: () => {},
  onRemoveFromCart: () => {},
  getNumberOfItems: () => 0,
  getTotalPrice: () => 0,
  updateProductCount: () => {},
});
