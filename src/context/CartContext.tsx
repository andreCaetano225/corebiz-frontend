import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

interface CartContextType {
  quantity: number;
  addItemToCart: () => void;
  getTotalQuantity: () => number;
}

const initialCartContextValue: CartContextType = {
  quantity: 0,
  addItemToCart: () => {},
  getTotalQuantity: () => 0,
};

const CartContext = createContext<CartContextType>(initialCartContextValue);

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

const loadCartFromLocalStorage = (): number => {
  const storedQuantity = localStorage.getItem('cartQuantity');
  return storedQuantity ? JSON.parse(storedQuantity) : 0;
};

const saveCartToLocalStorage = (quantity: number) => {
  localStorage.setItem('cartQuantity', JSON.stringify(quantity));
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [quantity, setQuantity] = useState(loadCartFromLocalStorage());

  useEffect(() => {
    saveCartToLocalStorage(quantity);
    console.log(quantity);
  }, [quantity]);

  const addItemToCart = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const getTotalQuantity = () => {
    return quantity;
  };

  return (
    <CartContext.Provider value={{ quantity, addItemToCart, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
