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
    productDeleteState: {
        loading: false,
        success: false,
        error: null,
    },
    productCreateState: {
        loading: false,
        success: false,
        error: null,
        product: {},
    },
    productUpdateState: {
        loading: false,
        success: false,
        error: null,
    },
};

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);
    const {
        products,
        loading,
        error,
        product,
        productDeleteState,
        productCreateState,
        productUpdateState,
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

    const createProduct = useCallback(async () => {
        try {
            dispatch({ type: productActionType.CREATE_PRODUCT });

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${currentUser.token}`,
                },
            };

            const { data } = await axios.post(`/api/products`, {}, config);

            dispatch({
                type: productActionType.CREATE_PRODUCT_SUCCESS,
                payload: data,
            });

            dispatch({ type: productActionType.CREATE_PRODUCT_RESET });
        } catch (error) {
            dispatch({
                type: productActionType.CREATE_PRODUCT_FAILED,
                payload: error.response.data.message
                    ? error.response.data.message
                    : error.message,
            });
        }
    }, [dispatch, currentUser]);

    const updateProduct = useCallback(
        async (product) => {
            try {
                dispatch({ type: productActionType.UPDATE_PRODUCT });

                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${currentUser.token}`,
                    },
                };

                await axios.put(
                    `/api/products/${product._id}`,
                    product,
                    config
                );

                dispatch({
                    type: productActionType.UPDATE_PRODUCT_SUCCESS,
                });
            } catch (error) {
                dispatch({
                    type: productActionType.UPDATE_PRODUCT_FAILED,
                    payload: error.response.data.message
                        ? error.response.data.message
                        : error.message,
                });
            }
        },
        [dispatch, currentUser]
    );

    const resetProduct = useCallback(() => {
        dispatch({ type: productActionType.UPDATE_PRODUCT_RESET });
    }, []);

    return (
        <ProductContext.Provider
            value={{
                products,
                product,
                loading,
                error,
                fetchProducts,
                fetchProductById,
                productDeleteState,
                deleteProduct,
                productCreateState,
                createProduct,
                productUpdateState,
                updateProduct,
                resetProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
