import { paymentActionType } from '../constants/paymentConstant';

export const paymentReducer = (state, action) => {
    switch (action.type) {
        case paymentActionType.PAY_ORDER:
            return {
                ...state,
                loadingPay: true,
            };

        case paymentActionType.PAY_ORDER_SUCCESS:
            return {
                ...state,
                loadingPay: false,
                successPay: true,
            };

        case paymentActionType.PAY_ORDER_FAILED:
            return {
                ...state,
                loadingPay: false,
                errorPay: action.payload,
            };
        case paymentActionType.PAY_ORDER_RESET:
            return {};

        default:
            return state;
    }
};
