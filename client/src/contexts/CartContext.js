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

    const total = cartItems.reduce((total, item) => total + item.qty, 0);
    const totalPrice = cartItems
        .reduce((total, item) => total + item.qty * item.price, 0)
        .toFixed(2);

    const addToCart = (product) =>
        dispatch({
            type: 'ADD_ITEM_TO_CART',
            payload: product,
        });

    const removeFromCart = (product) =>
        dispatch({
            type: 'REMOVE_ITEM_FROM_CART',
            payload: product,
        });

    const toggleCart = () => {
        dispatch({ type: 'TOGGLE_CART' });
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                total,
                totalPrice,
                hidden,
                toggleCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
