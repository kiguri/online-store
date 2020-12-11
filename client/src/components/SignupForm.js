import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import Input from '../components/Input';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPsw, setRepeatPsw] = useState('');
    const history = useHistory();

    const {
        signup,
        loading,
        errorSignup,
        setSignupError,
        currentUser,
    } = useUserContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim().length === 0) {
            return setSignupError('Name must be filled out');
        }
        if (password !== repeatPsw) {
            return setSignupError('Password do not match');
        }
        if (password.trim().includes(' ')) {
            return setSignupError('Password cannot contain space');
        }
        signup(name, email, password);
    };

    useEffect(() => {
        return () => {
            setSignupError(null);
        };
    }, [setSignupError]);

    useEffect(() => {
        if (currentUser) {
            history.push('/');
        }
    }, [currentUser, history]);

    return (
        <form onSubmit={handleSubmit}>
            <h3 className='text-gray-700 font-bold text-4xl mt-6 mb-5'>
                Sign up
            </h3>

            {loading && <h1>...Loading</h1>}
            {errorSignup && (
                <span className='text-sm text-red-400'>{errorSignup}</span>
            )}

            <div className='flex flex-col w-96'>
                <div className='mb-4'>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label='full name'
                        type='text'
                        holder='Ex: Kiguri'
                    />
                </div>

                <div className='mb-4'>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label='email'
                        type='email'
                        holder='Ex: kiguri@gmail.com'
                    />
                </div>

                <div className='mb-4'>
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label='password'
                        type='password'
                        holder='*******'
                    />
                </div>

                <div className='mb-4'>
                    <Input
                        value={repeatPsw}
                        onChange={(e) => setRepeatPsw(e.target.value)}
                        label='repeat password'
                        type='password'
                        holder='*******'
                    />
                </div>

                <p className='text-sm mb-4'>
                    By clicking you agree with our{' '}
                    <a className='text-blue-500 hover:underline' href='/login'>
                        Term of use.
                    </a>{' '}
                </p>

                <button
                    type='submit'
                    className='uppercase py-3 text-white rounded-lg bg-gradient-to-r from-teal-400 to-teal-500 focus:outline-none'
                >
                    Sign up
                </button>
            </div>
        </form>
    );
};

export default SignupForm;
