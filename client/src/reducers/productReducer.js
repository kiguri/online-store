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

        case productActionType.FETCH_PRODUCTS_FAILED:
        case productActionType.FETCH_PRODUCT_DETAILS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        // DELETE PRODUCT
        case productActionType.DELETE_PRODUCT:
            return {
                ...state,
                productDeleteState: {
                    loading: true,
                    error: null,
                },
            };
        case productActionType.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                productDeleteState: {
                    loading: false,
                    success: true,
                },
            };
        case productActionType.DELETE_PRODUCT_FAILED:
            return {
                ...state,
                productDeleteState: {
                    loading: false,
                    error: action.payload,
                },
            };

        //CREATE PRODUCT
        case productActionType.CREATE_PRODUCT:
            return {
                ...state,
                productCreateState: {
                    loading: true,
                    error: null,
                },
            };
        case productActionType.CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                productCreateState: {
                    loading: false,
                    success: true,
                    product: action.payload,
                },
            };
        case productActionType.CREATE_PRODUCT_FAILED:
            return {
                ...state,
                productCreateState: {
                    loading: false,
                    error: action.payload,
                },
            };
        case productActionType.CREATE_PRODUCT_RESET:
            return {
                ...state,
                productCreateState: {},
            };

        //UPDATE PRODUCT
        case productActionType.UPDATE_PRODUCT:
            return {
                ...state,
                productUpdateState: {
                    loading: true,
                    error: null,
                },
            };
        case productActionType.UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                productUpdateState: {
                    loading: false,
                    success: true,
                },
            };
        case productActionType.UPDATE_PRODUCT_FAILED:
            return {
                ...state,
                productUpdateState: {
                    loading: false,
                    error: action.payload,
                },
            };
        case productActionType.UPDATE_PRODUCT_RESET:
            return {
                ...state,
                product: {},
                productUpdateState: {
                    success: false,
                },
            };

        default:
            return state;
    }
};
