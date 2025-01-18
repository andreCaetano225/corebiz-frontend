import { useCart } from '../context/CartContext';

export const useCartItems = () => {
  const { quantity, addItemToCart, getTotalQuantity } = useCart();
  return { quantity, addItemToCart, getTotalQuantity };
};
