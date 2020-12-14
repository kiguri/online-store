import { orderActionType } from '../constants/orderConstant';

export const orderReducer = (state, action) => {
    switch (action.type) {
        case orderActionType.CREATE_ORDER:
            return {
                ...state,
                loading: true,
            };
        case orderActionType.CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                order: action.payload,
            };
        case orderActionType.CREATE_ORDER_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
            };
        case orderActionType.RESET_MESSAGE:
            return {
                ...state,
                success: false,
                error: null,
            };

        default:
            return state;
    }
};
