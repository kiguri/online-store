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
        loading,
        user,
        currentUser,
        getUserDetails,
    } = useUserContext();

    useEffect(() => {
        if (!currentUser) {
            history.push('/login');
        } else {
            if (!user) {
                getUserDetails();
            } else {
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [history, currentUser, user, getUserDetails]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <MainWrap>
            <form onSubmit={handleSubmit}>
                <h3 className='text-gray-700 font-bold text-4xl mt-6 mb-5'>
                    Profile
                </h3>

                {loading && <h1>...Loading</h1>}
                {error && <span className='text-sm text-red-400'>{error}</span>}

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
