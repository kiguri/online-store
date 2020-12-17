import { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import { useOrderContext } from '../contexts/OrderContext';
import MainWrap from '../components/MainWrap';
import { TimeIcon } from '../svg';
const ListOrderPage = () => {
    const { currentUser } = useUserContext();
    const { allOrderState, getAllOrder } = useOrderContext();

    const { loading, error, orders } = allOrderState;

    const history = useHistory();

    useEffect(() => {
        if (currentUser && currentUser.isAdmin) {
            getAllOrder();
        } else {
            history.push('/login');
        }
    }, [getAllOrder, currentUser, history]);

    return (
        <MainWrap>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h3 className='text-red-400'>{error}</h3>
            ) : orders ? (
                <>
                    <h3 className='text-gray-700 text-xl font-medium'>
                        List order
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
                                                    USER
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    ORDERED
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-7 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    TOTAL
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-7 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    PAID
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-7 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    DELIVERED
                                                </th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg-white divide-y divide-gray-200'>
                                            {orders.map((order) => (
                                                <tr
                                                    className='hover:bg-gray-100'
                                                    key={order._id}
                                                >
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-sm font-medium text-gray-900'>
                                                            {order._id}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-sm text-gray-900'>
                                                            {order.user.name}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-sm text-gray-900'>
                                                            {order.createdAt.substring(
                                                                0,
                                                                10
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-sm text-gray-900'>
                                                            ${order.totalPrice}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-sm text-gray-900'>
                                                            {order.isPaid ? (
                                                                order.paidAt.substring(
                                                                    0,
                                                                    10
                                                                )
                                                            ) : (
                                                                <TimeIcon />
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-sm text-gray-900'>
                                                            {order.isDelivered ? (
                                                                order.deliveredAt.substring(
                                                                    0,
                                                                    10
                                                                )
                                                            ) : (
                                                                <TimeIcon />
                                                            )}
                                                        </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </MainWrap>
    );
};

export default ListOrderPage;
