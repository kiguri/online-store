import { createContext, useContext, useReducer } from 'react';
import { cartReducer } from '../reducers/cartReducer';

const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
};

const initialState = {
    cartItems: [],
    hidden: true,
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const { cartItems, hidden } = state;

    const addToCart = (item, qty) => {
        dispatch({
            type: 'CART_ADD_ITEM',
            payload: {
                ...item,
                qty,
            },
        });
    };

    const toggleCart = () => {
        dispatch({ type: 'TOGGLE_CART' });
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, hidden, toggleCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
