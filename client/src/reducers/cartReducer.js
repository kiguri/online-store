export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            const existItem = state.cartItems.find(
                (cartItem) => cartItem._id === action.payload._id
            );
            if (!existItem) {
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems,
                        { ...action.payload, qty: 1 },
                    ],
                };
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.map((cartItem) =>
                        cartItem._id === action.payload._id
                            ? { ...cartItem, qty: cartItem.qty + 1 }
                            : cartItem
                    ),
                };
            }
        case 'REMOVE_ITEM_FROM_CART':
            const existedItem = state.cartItems.find(
                (cartItem) => cartItem._id === action.payload._id
            );
            if (existedItem.qty === 1) {
                return {
                    ...state,
                    cartItems: state.cartItems.filter(
                        (cartItem) => cartItem._id !== action.payload._id
                    ),
                };
            }
            return {
                ...state,
                cartItems: state.cartItems.map((cartItem) =>
                    cartItem._id === action.payload._id
                        ? { ...cartItem, qty: cartItem.qty - 1 }
                        : cartItem
                ),
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
