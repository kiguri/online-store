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
    user: null,
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    const { loading, error, currentUser, user } = state;

    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        if (currentUser === undefined) {
            localStorage.removeItem('currentUser');
        }
    }, [currentUser]);

    const signup = async (name, email, password) => {
        try {
            dispatch({ type: userActionType.SIGNUP });

            const config = { headers: { 'Content-Type': 'application/json' } };

            const { data } = await axios.post(
                'api/users',
                { name, email, password },
                config
            );

            dispatch({
                type: userActionType.SIGNUP_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: userActionType.SIGNUP_FAILED,
                payload: error.response.data.message
                    ? error.response.data.message
                    : error.message,
            });
        }
    };

    const login = async (email, password) => {
        try {
            dispatch({ type: userActionType.LOGIN });

            const config = { headers: { 'Content-Type': 'application/json' } };

            const { data } = await axios.post(
                'api/users/login',
                { email, password },
                config
            );

            dispatch({
                type: userActionType.LOGIN_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: userActionType.LOGIN_FAILED,
                payload: error.response.data.message
                    ? error.response.data.message
                    : error.message,
            });
        }
    };

    const logout = () => {
        dispatch({ type: userActionType.LOGOUT });
    };

    const setError = useCallback(
        (error) => {
            dispatch({ type: userActionType.SET_ERROR, payload: error });
        },
        [dispatch]
    );

    const getUserDetails = async () => {
        try {
            dispatch({ type: userActionType.GET_DETAILS });
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${currentUser.token}`,
                },
            };

            const { data } = await axios.get('api/users/profile', config);

            dispatch({
                type: userActionType.GET_DETAILS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: userActionType.GET_DETAILS_FAILED,
                payload: error.response.data.message
                    ? error.response.data.message
                    : error.message,
            });
        }
    };

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
                user,
                getUserDetails,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
