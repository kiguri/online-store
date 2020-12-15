import { createContext, useCallback, useContext, useReducer } from 'react';
import { paymentReducer } from '../reducers/paymentReducer';
import { paymentActionType } from '../constants/paymentConstant';
import { useUserContext } from '../contexts/UserContext';
import axios from 'axios';

const PaymentContext = createContext();
export const usePaymentContext = () => {
    return useContext(PaymentContext);
};

const initialState = {
    loading: false,
    error: null,
    success: false,
};

export const PaymentProvider = ({ children }) => {
    const [state, dispatch] = useReducer(paymentReducer, initialState);

    const { loading, error, success } = state;

    const { currentUser } = useUserContext();

    const payOrder = useCallback(
        async (id, paymentResult) => {
            try {
                dispatch({ type: paymentActionType.PAY_ORDER });

                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${currentUser.token}`,
                    },
                };

                await axios.put(`/api/orders/${id}/pay`, paymentResult, config);

                dispatch({
                    type: paymentActionType.PAY_ORDER_SUCCESS,
                });
            } catch (error) {
                dispatch({
                    type: paymentActionType.PAY_ORDER_FAILED,
                    payload:
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
                });
            }
        },
        [dispatch, currentUser]
    );

    const resetPayOrder = useCallback(() => {
        dispatch({ type: paymentActionType.PAY_ORDER_RESET });
    }, [dispatch]);

    return (
        <PaymentContext.Provider
            value={{
                loading,
                error,
                success,
                payOrder,
                resetPayOrder,
            }}
        >
            {children}
        </PaymentContext.Provider>
    );
};
