import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import Input from '../components/Input';

const SigninForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, errorLogin, currentUser, login } = useUserContext();
    const history = useHistory();

    useEffect(() => {
        if (currentUser) {
            history.push('/');
        }
    }, [currentUser, history]);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3 className='text-gray-700 font-bold text-4xl mt-6 mb-5'>
                Sign in
            </h3>

            {loading && <h1>...Loading</h1>}
            {errorLogin && (
                <span className='text-sm text-red-400'>{errorLogin}</span>
            )}

            <div className='flex flex-col w-96'>
                <div className='mb-4'>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label='email'
                        type='email'
                        holder='Enter your email'
                    />
                </div>

                <div className='mb-4'>
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label='password'
                        type='password'
                        holder='******'
                    />
                </div>

                <button className='uppercase py-3 text-white rounded-lg bg-gradient-to-r from-teal-400 to-teal-500 focus:outline-none'>
                    Sign in
                </button>
            </div>
        </form>
    );
};

export default SigninForm;
