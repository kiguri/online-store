import {
    createContext,
    useEffect,
    useContext,
    useReducer,
    useCallback,
} from 'react';
import { userActionType } from '../constants/userConstant';
import { userReducer } from '../reducers/userReducer';
import axios from 'axios';

const UserContext = createContext();
export const useUserContext = () => {
    return useContext(UserContext);
};

const initialState = {
    currentUser: localStorage.getItem('currentUser')
        ? JSON.parse(localStorage.getItem('currentUser'))
        : null,
    loading: false,
    error: null,
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    const { loading, error, currentUser } = state;

    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        if (currentUser === undefined) {
            localStorage.removeItem('currentUser');
        }
    }, [currentUser]);

    const signup = async (name, email, password) => {
        try {
            dispatch({ type: userActionType.USER_SIGNUP });

            const config = { headers: { 'Content-Type': 'application/json' } };

            const { data } = await axios.post(
                'api/users',
                { name, email, password },
                config
            );

            dispatch({
                type: userActionType.USER_SIGNUP_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: userActionType.USER_SIGNUP_FAILED,
                payload: error.response.data.message
                    ? error.response.data.message
                    : error.message,
            });
        }
    };

    const login = async (email, password) => {
        try {
            dispatch({ type: userActionType.USER_LOGIN });

            const config = { headers: { 'Content-Type': 'application/json' } };

            const { data } = await axios.post(
                'api/users/login',
                { email, password },
                config
            );

            dispatch({
                type: userActionType.USER_LOGIN_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: userActionType.USER_LOGIN_FAILED,
                payload: error.response.data.message
                    ? error.response.data.message
                    : error.message,
            });
        }
    };

    const logout = () => {
        dispatch({ type: userActionType.USER_LOGOUT });
    };

    const setError = useCallback(
        (error) => {
            dispatch({ type: userActionType.SET_ERROR, payload: error });
        },
        [dispatch]
    );

    return (
        <UserContext.Provider
            value={{
                loading,
                error,
                currentUser,
                signup,
                login,
                logout,
                setError,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
