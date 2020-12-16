import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import { useOrderContext } from '../contexts/OrderContext';

import MainWrap from '../components/MainWrap';
import Input from '../components/Input';
import { TimeIcon } from '../svg';

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

    const {
        loading: loadingOrders,
        error: errorOrders,
        listOrder,
        getListOrder,
    } = useOrderContext();

    useEffect(() => {
        if (!currentUser) {
            history.push('/login');
        } else {
            getListOrder();
            setName(currentUser.name);
            setEmail(currentUser.email);
        }
    }, [history, currentUser, getListOrder]);

    // Set error to null when component unmount
    useEffect(() => {
        return () => {
            setError(null);
            setSuccess();
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
            <div className='flex flex-col lg:flex-row'>
                <form className='' onSubmit={handleSubmit}>
                    <h3 className='text-gray-700 font-bold text-4xl mt-6 mb-5'>
                        Profile
                    </h3>

                    {loading && <h1>...Loading</h1>}
                    {error && (
                        <span className='text-sm text-red-400'>{error}</span>
                    )}
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

                <div className='mt-4 lg:w-9/12 lg:mt-0 lg:ml-20 overflow-x-scroll'>
                    <h3 className='text-gray-700 font-bold text-4xl mt-6 mb-5'>
                        My order
                    </h3>

                    {loadingOrders ? (
                        <h2>Loading ...</h2>
                    ) : errorOrders ? (
                        <span className='bg-red-200 text-red-700 text-sm py-2 pl-2 rounded'>
                            {errorOrders}
                        </span>
                    ) : listOrder.length === 0 ? (
                        <span>You do not have order before</span>
                    ) : (
                        <table className='text-sm min-w-full'>
                            <thead>
                                <tr className='border-b-2 border-gray-300'>
                                    <th className='pr-4 py-2 text-left leading-4 text-teal-500 tracking-wider'>
                                        ID
                                    </th>
                                    <th className='px-4 py-2 text-left leading-4 text-teal-500 tracking-wider'>
                                        ORDERED
                                    </th>
                                    <th className='px-4 py-2 text-left leading-4 text-teal-500 tracking-wider'>
                                        TOTAL ($)
                                    </th>
                                    <th className='px-4 py-2 text-left leading-4 text-teal-500 tracking-wider'>
                                        PAID
                                    </th>
                                    <th className='px-2 py-2 text-left leading-4 text-teal-500 tracking-wider'>
                                        DELIVERED
                                    </th>
                                    <th className='px-2 py-2 text-left leading-4 text-teal-500 tracking-wider'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {listOrder.map((order) => (
                                    <tr
                                        className='border-b border-gray-400'
                                        key={order._id}
                                    >
                                        <td className='pr-4 py-4 text-left leading-4 tracking-wider'>
                                            {order._id}
                                        </td>
                                        <td className='px-4 py-4 text-left leading-4 tracking-wider'>
                                            {order.createdAt.substring(0, 10)}
                                        </td>
                                        <td className='px-4 py-4 text-left leading-4 tracking-wider'>
                                            {order.totalPrice}
                                        </td>
                                        <td className='px-4 py-4 text-left leading-4 tracking-wider'>
                                            {order.isPaid ? (
                                                order.paidAt.substring(0, 10)
                                            ) : (
                                                <TimeIcon />
                                            )}
                                        </td>
                                        <td
                                            className={`${
                                                order.isDelivered
                                                    ? 'text-left'
                                                    : 'pl-10'
                                            } px-4 py-4 leading-4 tracking-wider`}
                                        >
                                            {order.isDelivered ? (
                                                order.deliveredAt.substring(
                                                    0,
                                                    10
                                                )
                                            ) : (
                                                <TimeIcon />
                                            )}
                                        </td>

                                        <td>
                                            <Link
                                                className='hover:underline px-4 py-2 rounded text-blue-400 border border-blue-400 hover:text-white hover:bg-blue-500 transition duration-300'
                                                to={`/order/${order._id}`}
                                            >
                                                Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </MainWrap>
    );
};

export default ProfilePage;
