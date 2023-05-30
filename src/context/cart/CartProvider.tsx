import React, { ReactNode, useState } from 'react';
import { CartContext, ECartOperation, ICartItem } from './cartContext';

type CartProviderProps = {
  children: ReactNode;
};

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  console.log(cart);

  const onAddToCart = (item: ICartItem) => {
    const itemAlreadyExists = !!cart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (itemAlreadyExists) {
      let updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
      setCart(updatedCart);
    }

    setCart((prev) => [...prev, item]);
  };

  const onRemoveFromCart = (id: ICartItem['id']) => {
    const filteredCart = cart.filter((cartItem) => cartItem.id !== id);
    setCart(filteredCart);
  };

  const updateProductCount = (
    operation: ECartOperation,
    id: ICartItem['id']
  ) => {
    let selectedItem = cart.find((item) => item.id === id);

    if (!selectedItem) return;

    let updatedItem = {
      ...selectedItem,
      quantity:
        operation === ECartOperation.dec
          ? selectedItem.quantity - 1
          : selectedItem.quantity + 1,
    };

    if (updatedItem.quantity === 0) {
      return onRemoveFromCart(updatedItem.id);
    }

    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const getNumberOfItems = () => {
    return cart.length;
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.quantity * parseFloat(item.price),
      0
    );

    return Number(totalPrice.toFixed(2));
  };

  const value = {
    cart,
    onAddToCart,
    onRemoveFromCart,
    getNumberOfItems,
    getTotalPrice,
    updateProductCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
