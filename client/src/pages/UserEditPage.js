import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import MainWrap from '../components/MainWrap';
import Input from '../components/Input';
const UserEditPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const { id } = useParams();
    const history = useHistory();

    const {
        loading,
        error,
        user,
        getUserDetails,
        updateUser,
        resetUser,
        updateUserState,
    } = useUserContext();

    const {
        loading: loadingUserUpdate,
        success: successUserUpdate,
        error: errorUserUpdate,
    } = updateUserState;

    useEffect(() => {
        if (successUserUpdate) {
            resetUser();
            history.push('/admin/users');
        } else {
            if (!user || user._id !== id) {
                getUserDetails(id);
            } else {
                setName(user.name);
                setEmail(user.email);
                setIsAdmin(user.isAdmin);
            }
        }
    }, [getUserDetails, id, user, successUserUpdate, history, resetUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser({ _id: id, name, email, isAdmin });
    };
    return (
        <MainWrap>
            <Link
                className='bg-gray-100 hover:bg-gray-200 text-gray-600 px-2 rounded py-1'
                to='/admin/users'
            >
                Go back
            </Link>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h3 className='text-red-400'>{error}</h3>
            ) : (
                <div className='flex justify-center'>
                    <form className='mt-10' onSubmit={handleSubmit}>
                        <h3 className='text-black text-2xl font-medium mb-4'>
                            Edit user
                        </h3>
                        {loadingUserUpdate && <h2>Loading user update...</h2>}{' '}
                        {errorUserUpdate && (
                            <h3 className='text-red-400'>{errorUserUpdate}</h3>
                        )}
                        <div className='flex flex-col w-96'>
                            <div className='mb-4'>
                                <Input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    label='name'
                                    type='text'
                                />
                            </div>
                            <div className='mb-4'>
                                <Input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    label='email'
                                    type='email'
                                />
                            </div>

                            <div className='mb-4 flex items-center'>
                                <label
                                    className='order-2 text-gray-600'
                                    htmlFor='isAdmin'
                                >
                                    Is Admin?
                                </label>
                                <input
                                    className='mr-2 order-1'
                                    type='checkbox'
                                    checked={isAdmin}
                                    onChange={(e) =>
                                        setIsAdmin(e.target.checked)
                                    }
                                />
                            </div>

                            <button className='uppercase py-3 text-white rounded-lg bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 focus:outline-none'>
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </MainWrap>
    );
};

export default UserEditPage;
