import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import MainWrap from '../components/MainWrap';
import Input from '../components/Input';

const ProfilePage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPsw, setRepeatPsw] = useState('');

    const history = useHistory();

    const {
        error,
        setError,
        loading,
        currentUser,
        updateProfile,
        updateSuccess,
        setSuccess,
    } = useUserContext();

    useEffect(() => {
        if (!currentUser) {
            history.push('/login');
        } else {
            setName(currentUser.name);
            setEmail(currentUser.email);
        }
    }, [history, currentUser]);

    // Set error to null when component unmount
    useEffect(() => {
        return () => {
            setError(null);
            setSuccess(false);
        };
    }, [setError, setSuccess]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim().length === 0) {
            return setError('Name must be filled out');
        }
        if (email.trim().length === 0) {
            return setError('Email must be filled out');
        }
        if (password.trim().length > 0 || repeatPsw.trim().length > 0) {
            if (password !== repeatPsw) {
                return setError('Password do not match');
            }
            if (password.trim().includes(' ')) {
                return setError('Password cannot contain spaces');
            }
        }

        updateProfile({ id: currentUser._id, name, email, password });
    };

    return (
        <MainWrap>
            <form onSubmit={handleSubmit}>
                <h3 className='text-gray-700 font-bold text-4xl mt-6 mb-5'>
                    Profile
                </h3>

                {loading && <h1>...Loading</h1>}
                {error && <span className='text-sm text-red-400'>{error}</span>}
                {updateSuccess && (
                    <span className='text-sm text-green-400'>
                        Profile updated
                    </span>
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
                            label='email'
                            type='email'
                            holder='Ex: kiguri@gmail.com'
                            disabled={true}
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

                    <button
                        type='submit'
                        className='uppercase py-3 text-white rounded-lg bg-gradient-to-r from-teal-400 to-teal-500 focus:outline-none'
                    >
                        Update
                    </button>
                </div>
            </form>
        </MainWrap>
    );
};

export default ProfilePage;
