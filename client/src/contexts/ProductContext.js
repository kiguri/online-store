import { createContext, useContext, useReducer, useCallback } from 'react';
import { productReducer } from '../reducers/productReducer';
import { productActionType } from '../constants/productConstant';
import { useUserContext } from '../contexts/UserContext';
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
    deleteLoading: false,
    deleteSuccess: false,
    deleteError: null,
};

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);
    const {
        products,
        loading,
        error,
        product,
        deleteLoading,
        deleteSuccess,
        deleteError,
    } = state;

    const { currentUser } = useUserContext();

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
                payload: error.response.data.message
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
                    payload: error.response.data.message
                        ? error.response.data.message
                        : error.message,
                });
            }
        },
        [dispatch]
    );

    const deleteProduct = useCallback(
        async (id) => {
            try {
                dispatch({ type: productActionType.DELETE_PRODUCT });

                const config = {
                    headers: {
                        Authorization: `Bearer ${currentUser.token}`,
                    },
                };

                await axios.delete(`/api/products/${id}`, config);

                dispatch({
                    type: productActionType.DELETE_PRODUCT_SUCCESS,
                });
            } catch (error) {
                dispatch({
                    type: productActionType.DELETE_PRODUCT_FAILED,
                    payload: error.response.data.message
                        ? error.response.data.message
                        : error.message,
                });
            }
        },
        [dispatch, currentUser]
    );

    return (
        <ProductContext.Provider
            value={{
                products,
                product,
                loading,
                error,
                deleteLoading,
                deleteError,
                deleteSuccess,
                fetchProducts,
                fetchProductById,
                deleteProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
