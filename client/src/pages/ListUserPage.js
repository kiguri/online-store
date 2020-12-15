import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import MainWrap from '../components/MainWrap';
const ListUserPage = () => {
    const {
        loading,
        error,
        listUser,
        getListUser,
        currentUser,
    } = useUserContext();

    const history = useHistory();

    useEffect(() => {
        if (currentUser && currentUser.isAdmin) {
            getListUser();
        } else {
            history.push('/login');
        }
    }, [getListUser, currentUser, history]);

    const handleDelete = () => {};

    return (
        <MainWrap>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h3 className='text-red-400'>{error}</h3>
            ) : listUser ? (
                <>
                    <h3 className='text-gray-700 text-xl font-medium'>
                        List user
                    </h3>
                    <div className='flex flex-col'>
                        <div className='overflow-x-auto mt-4 sm:-mx-6 lg:-mx-8'>
                            <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                                <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                                    <table className='min-w-full divide-y divide-gray-200'>
                                        <thead className='bg-gray-50'>
                                            <tr>
                                                <th
                                                    scope='col'
                                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    ID
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-7 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    Role
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='relative px-6 py-3'
                                                >
                                                    <span className='sr-only'>
                                                        Edit and Delete
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg-white divide-y divide-gray-200'>
                                            {listUser.map((user) => (
                                                <tr
                                                    className='hover:bg-gray-100'
                                                    key={user._id}
                                                >
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-sm font-medium text-gray-900'>
                                                            {user._id}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-sm text-gray-900'>
                                                            {user.name}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-sm text-gray-900'>
                                                            {user.email}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <span
                                                            className={`${
                                                                user.isAdmin
                                                                    ? 'bg-green-100 text-teal-800'
                                                                    : 'bg-gray-100 text-gray-900'
                                                            } px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}
                                                        >
                                                            {user.isAdmin
                                                                ? 'Admin'
                                                                : 'User'}
                                                        </span>
                                                    </td>
                                                    <td className='px-6 py-4 flex justify-end whitespace-nowrap'>
                                                        <button className='text-indigo-600 hover:text-indigo-900 text-sm font-medium focus:outline-none'>
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={
                                                                handleDelete
                                                            }
                                                            className='ml-2 text-red-600 hover:text-red-900 text-sm font-medium focus:outline-none'
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </MainWrap>
    );
};

export default ListUserPage;
