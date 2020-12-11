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
                currentUser: action.payload,
            };
        case userActionType.USER_SIGNUP_FAILED:
        case userActionType.USER_LOGIN_FAILED:
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
        case userActionType.USER_LOGOUT:
            return {};
        default:
            return state;
    }
};
