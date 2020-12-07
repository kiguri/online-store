import { createContext, useContext, useReducer, useCallback } from 'react';
import { productReducer } from '../reducers/productReducer';
import axios from 'axios';

const ProductContext = createContext();

export const useProductContext = () => {
    return useContext(ProductContext);
};

const initialState = {
    products: [],
    loading: false,
    error: null,
};

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);
    const { products, loading, error } = state;

    const fetchProducts = useCallback(async () => {
        try {
            dispatch({ type: 'FETCH_PRODUCTS' });

            const { data } = await axios.get('/api/products');

            dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data });
        } catch (error) {
            dispatch({
                type: 'FETCH_PRODUCTS_FAILED',
                payload: error.response.data.message,
            });
        }
    }, [dispatch]);

    return (
        <ProductContext.Provider
            value={{ products, loading, error, fetchProducts }}
        >
            {children}
        </ProductContext.Provider>
    );
};
