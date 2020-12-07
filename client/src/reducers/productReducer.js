export const productReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
        case 'FETCH_PRODUCT_DETAILS':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case 'FETCH_PRODUCT_DETAILS_SUCCESS':
            return {
                ...state,
                loading: false,
                product: action.payload,
            };
        case 'FETCH_PRODUCTS_FAILED':
        case 'FETCH_PRODUCT_DETAILS_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
