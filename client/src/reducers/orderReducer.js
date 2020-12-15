import { orderActionType } from '../constants/orderConstant';

export const orderReducer = (state, action) => {
    switch (action.type) {
        case orderActionType.CREATE_ORDER:
        case orderActionType.GET_ORDER:
        case orderActionType.GET_ORDER_LIST:
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
        case orderActionType.GET_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orderDetails: action.payload,
            };
        case orderActionType.GET_ORDER_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                listOrder: action.payload,
            };
        case orderActionType.CREATE_ORDER_FAILED:
        case orderActionType.GET_ORDER_FAILED:
        case orderActionType.GET_ORDER_LIST_FAILED:
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

        case orderActionType.CLEAR_ORDER_DETAILS: {
            return {
                ...state,
                orderDetails: null,
            };
        }

        default:
            return state;
    }
};
