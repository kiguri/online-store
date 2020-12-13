import { createContext, useEffect, useContext, useReducer } from 'react';
import { cartReducer } from '../reducers/cartReducer';
import { cartActionType } from '../constants/cartConstant';

const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
};

const initialState = {
    cartItems: localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [],
    hidden: true,
    shippingAddress: localStorage.getItem('address')
        ? JSON.parse(localStorage.getItem('address'))
        : {},
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const { cartItems, hidden, shippingAddress } = state;
    const total = cartItems.reduce((total, item) => total + item.qty, 0);
    const totalPrice = cartItems
        .reduce((total, item) => total + item.qty * item.price, 0)
        .toFixed(2);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('address', JSON.stringify(shippingAddress));
    }, [shippingAddress]);

    const addToCart = (product) => {
        dispatch({
            type: cartActionType.ADD_ITEM_TO_CART,
            payload: product,
        });
    };

    const removeFromCart = (product) =>
        dispatch({
            type: cartActionType.REMOVE_ITEM_FROM_CART,
            payload: product,
        });

    const toggleCart = () => {
        dispatch({ type: cartActionType.TOGGLE_CART });
    };

    const saveAddress = (data) => {
        dispatch({ type: cartActionType.SAVE_ADDRESS, payload: data });
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
                saveAddress,
                shippingAddress,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
