export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                cartItems: addItem(state.cartItems, action.payload),
            };
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload),
            };
        case 'TOGGLE_CART':
            return {
                ...state,
                hidden: !state.hidden,
            };

        default:
            return state;
    }
};

const addItem = (cart, item) => {
    const existItem = cart.find((cartItem) => cartItem._id === item._id);
    if (!existItem) {
        return [...cart, { ...item, qty: 1 }];
    }
    return cart.map((cartItem) =>
        cartItem._id === item._id && cartItem.qty < cartItem.countInStock
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
    );
};

const removeItem = (cart, item) => {
    const existItem = cart.find((cartItem) => cartItem._id === item._id);

    if (existItem.qty === 1) {
        return cart.filter((cartItem) => cartItem._id !== item._id);
    }

    return cart.map((cartItem) =>
        cartItem._id === item._id
            ? { ...cartItem, qty: cartItem.qty - 1 }
            : cartItem
    );
};
