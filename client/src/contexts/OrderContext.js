import { createContext, useCallback, useContext, useReducer } from 'react';
import { orderReducer } from '../reducers/orderReducer';
import { orderActionType } from '../constants/orderConstant';
import { useUserContext } from '../contexts/UserContext';
import axios from 'axios';

const OrderContext = createContext();

export const useOrderContext = () => {
    return useContext(OrderContext);
};

const initialState = {
    order: null,
    loading: false,
    error: null,
    success: false,
    orderDetails: null,
};

export const OrderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(orderReducer, initialState);

    const { order, loading, error, success, orderDetails } = state;

    const { currentUser } = useUserContext();

    const createOrder = useCallback(
        async (order) => {
            try {
                dispatch({ type: orderActionType.CREATE_ORDER });

                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${currentUser.token}`,
                    },
                };

                const { data } = await axios.post('/api/orders', order, config);

                dispatch({
                    type: orderActionType.CREATE_ORDER_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                dispatch({
                    type: orderActionType.CREATE_ORDER_FAILED,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
            }
        },
        [dispatch, currentUser]
    );

    const getOrder = useCallback(
        async (id) => {
            try {
                dispatch({ type: orderActionType.GET_ORDER });

                const config = {
                    headers: {
                        Authorization: `Bearer ${currentUser.token}`,
                    },
                };

                const { data } = await axios.get(`/api/orders/${id}`, config);

                dispatch({
                    type: orderActionType.GET_ORDER_SUCCESS,
                    payload: data,
                });
            } catch (error) {
                dispatch({
                    type: orderActionType.GET_ORDER_FAILED,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
            }
        },
        [dispatch, currentUser]
    );

    const resetMessage = useCallback(() => {
        dispatch({ type: orderActionType.RESET_MESSAGE });
    }, [dispatch]);

    return (
        <OrderContext.Provider
            value={{
                order,
                loading,
                error,
                success,
                createOrder,
                getOrder,
                resetMessage,
                orderDetails,
            }}
        >
            {children}
        </OrderContext.Provider>
    );
};