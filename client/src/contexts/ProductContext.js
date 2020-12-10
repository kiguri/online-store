import { createContext, useContext, useReducer, useCallback } from 'react';
import { productReducer } from '../reducers/productReducer';
import { productActionType } from '../constants/productConstant';
import axios from 'axios';

const ProductContext = createContext();

export const useProductContext = () => {
    return useContext(ProductContext);
};

const initialState = {
    products: [],
    loading: false,
    error: null,
    product: {
        reviews: [],
    },
};

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);
    const { products, loading, error, product } = state;

    const fetchProducts = useCallback(async () => {
        try {
            dispatch({ type: productActionType.FETCH_PRODUCTS });

            const { data } = await axios.get('/api/products');

            dispatch({
                type: productActionType.FETCH_PRODUCTS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: productActionType.FETCH_PRODUCTS_FAILED,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    }, [dispatch]);

    const fetchProductById = useCallback(
        async (id) => {
            try {
                dispatch({ type: productActionType.FETCH_PRODUCT_DETAILS });

                const { data } = await axios.get(`/api/products/${id}`);

                dispatch({
                    type: productActionType.FETCH_PRODUCT_DETAILS_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                dispatch({
                    type: productActionType.FETCH_PRODUCT_DETAILS_FAILED,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
            }
        },
        [dispatch]
    );

    return (
        <ProductContext.Provider
            value={{
                products,
                product,
                loading,
                error,
                fetchProducts,
                fetchProductById,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
