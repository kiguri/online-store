import { addItem, removeItem } from '../utils';
import { cartActionType } from '../constants/cartConstant';

export const cartReducer = (state, action) => {
    switch (action.type) {
        case cartActionType.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItem(state.cartItems, action.payload),
            };
        case cartActionType.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload),
            };
        case cartActionType.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden,
            };

        case cartActionType.SAVE_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload,
            };

        default:
            return state;
    }
};
