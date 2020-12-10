import { userActionType } from '../constants/userConstant';

export const userReducer = (state, action) => {
    switch (action.type) {
        case userActionType.USER_LOGIN:
            return {
                ...state,
                loading: true,
            };
        case userActionType.USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload,
            };
        case userActionType.USER_LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case userActionType.USER_LOGOUT:
            return {};
        default:
            return state;
    }
};
