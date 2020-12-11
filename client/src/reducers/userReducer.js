import { userActionType } from '../constants/userConstant';

export const userReducer = (state, action) => {
    switch (action.type) {
        case userActionType.USER_SIGNUP:
        case userActionType.USER_LOGIN:
            return {
                ...state,
                loading: true,
            };
        case userActionType.USER_SIGNUP_SUCCESS:
        case userActionType.USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                errorLogin: null,
                errorSignup: null,
                currentUser: action.payload,
            };
        case userActionType.USER_SIGNUP_FAILED:
            return {
                ...state,
                loading: false,
                errorSignup: action.payload,
            };
        case userActionType.USER_LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                errorLogin: action.payload,
            };
        case userActionType.SET_SIGNUP_ERROR:
            return {
                ...state,
                errorSignup: action.payload,
            };
        case userActionType.USER_LOGOUT:
            return {};
        default:
            return state;
    }
};
