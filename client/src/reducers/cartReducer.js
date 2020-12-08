export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'CART_ADD_ITEM':
            const existItem = state.cartItems.find(
                (cartItem) => cartItem._id === action.payload._id
            );
            if (!existItem) {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                };
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.map((cartItem) =>
                        cartItem._id === existItem._id
                            ? {
                                  ...action.payload,
                                  qty: cartItem.qty + action.payload.qty,
                              }
                            : cartItem
                    ),
                };
            }
        case 'TOGGLE_CART':
            return {
                ...state,
                hidden: !state.hidden,
            };

        default:
            return state;
    }
};
