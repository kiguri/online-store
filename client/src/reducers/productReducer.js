import { productActionType } from '../constants/productConstant';

export const productReducer = (state, action) => {
    switch (action.type) {
        case productActionType.FETCH_PRODUCTS:
        case productActionType.FETCH_PRODUCT_DETAILS:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case productActionType.DELETE_PRODUCT:
            return {
                ...state,
                deleteLoading: true,
                deleteError: null,
            };
        case productActionType.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case productActionType.FETCH_PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
            };
        case productActionType.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                deleteLoading: false,
                deleteSuccess: true,
            };
        case productActionType.FETCH_PRODUCTS_FAILED:
        case productActionType.FETCH_PRODUCT_DETAILS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case productActionType.DELETE_PRODUCT_FAILED:
            return {
                ...state,
                deleteLoading: false,
                deleteError: action.payload,
            };
        default:
            return state;
    }
};
