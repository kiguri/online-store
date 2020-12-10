import { createContext, useEffect, useContext, useReducer } from 'react';
import { userActionType } from '../constants/userConstant';
import { userReducer } from '../reducers/userReducer';
import axios from 'axios';

const UserContext = createContext();
export const useUserContext = () => {
    return useContext(UserContext);
};

const initialState = {
    userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    loading: false,
    error: null,
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    const { userInfo } = state;

    useEffect(() => {
        localStorage.setItem('userInfo', userInfo);
    }, [userInfo]);

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
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };

    return (
        <UserContext.Provider value={{ state, login }}>
            {children}
        </UserContext.Provider>
    );
};
