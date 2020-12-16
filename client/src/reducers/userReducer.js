import { userActionType } from '../constants/userConstant';

export const userReducer = (state, action) => {
    switch (action.type) {
        case userActionType.SIGNUP:
        case userActionType.LOGIN:
        case userActionType.UPDATE_PROFILE:
        case userActionType.GET_LIST_USER:
        case userActionType.DELETE_USER:
            return {
                ...state,
                error: null,
                loading: true,
                updateSuccess: false,
                deleteSuccess: false,
            };
        case userActionType.SIGNUP_SUCCESS:
        case userActionType.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
            };

        case userActionType.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                updateSuccess: true,
                currentUser: action.payload,
            };
        case userActionType.GET_LIST_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                listUser: action.payload,
            };
        case userActionType.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                deleteSuccess: true,
            };
        case userActionType.GET_LIST_USER_FAILED:
        case userActionType.SIGNUP_FAILED:
        case userActionType.LOGIN_FAILED:
        case userActionType.UPDATE_PROFILE_FAILED:
        case userActionType.DELETE_USER_FAILED:
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
        case userActionType.SET_SUCCESS:
            return {
                ...state,
                updateSuccess: false,
                deleteSuccess: false,
            };
        case userActionType.LOGOUT:
            return {};
        default:
            return state;
    }
};
