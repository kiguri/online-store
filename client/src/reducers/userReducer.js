import { userActionType } from '../constants/userConstant';

export const userReducer = (state, action) => {
    switch (action.type) {
        case userActionType.SIGNUP:
        case userActionType.LOGIN:
        case userActionType.GET_DETAILS:
            return {
                ...state,
                loading: true,
            };
        case userActionType.SIGNUP_SUCCESS:
        case userActionType.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
            };
        case userActionType.GET_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case userActionType.SIGNUP_FAILED:
        case userActionType.LOGIN_FAILED:
        case userActionType.GET_DETAILS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case userActionType.SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case userActionType.LOGOUT:
            return {};
        default:
            return state;
    }
};
