import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';
import { useUserContext } from '../contexts/UserContext';
import { useOrderContext } from '../contexts/OrderContext';
import { ArrowLeftIcon, ArrowRightIcon } from '../svg';

const PlaceOrder = ({ handleStep }) => {
    const {
        cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        clearCart,
    } = useCartContext();

    const history = useHistory();

    const { currentUser } = useUserContext();

    const {
        order,
        loading,
        error,
        success,
        createOrder,
        resetMessage,
    } = useOrderContext();

    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`);
        }
        // eslint-disable-next-line
    }, [success, history]);

    useEffect(() => {
        return () => resetMessage();
    }, [resetMessage]);

    const handlePlaceOrder = () => {
        if (!currentUser) {
            history.push('/login');
        } else {
            createOrder({
                orderItems: cartItems,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                shippingPrice,
                taxPrice,
                totalPrice,
            });

            clearCart();
        }
    };
    return (
        <div className='mt-8 w-96'>
            <h2 className='text-gray-500 text-sm mt-6 mb-2'>Place Order</h2>

            {loading && <h1>...Loading</h1>}
            {error && <span className='text-sm text-red-400'>{error}</span>}

            <div className='text-gray-700 mb-4'>
                <h3 className='uppercase'>Shipping</h3>
                <p className=' text-sm mt-3'>
                    To address:{' '}
                    <span>
                        {shippingAddress.address}, {shippingAddress.city},{' '}
                        {shippingAddress.postalCode}, {shippingAddress.country}
                    </span>
                </p>
            </div>
            <hr className='mb-4' />

            <div className='text-gray-700 mb-4'>
                <h3 className='uppercase'>Payment method</h3>
                <p className=' text-sm mt-3'>
                    Method: <span>{paymentMethod}</span>
                </p>
            </div>

            <hr className='mb-4' />

            <div className='text-gray-700 mb-4'>
                <h3 className='uppercase'>Order summary</h3>
                <table className='text-sm mt-3 w-full'>
                    <tbody className='w-full'>
                        <tr>
                            <td className='w-4/5'>Items:</td>
                            <td>${itemsPrice}</td>
                        </tr>
                        <tr>
                            <td>Shipping:</td>
                            <td>${shippingPrice}</td>
                        </tr>
                        <tr>
                            <td>Tax:</td>
                            <td>${taxPrice}</td>
                        </tr>
                        <tr>
                            <td>Total:</td>
                            <td>${totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='flex items-center mt-8 justify-between'>
                <button
                    onClick={() => handleStep('back')}
                    className='flex items-center text-gray-700 text-sm font-medium rounded hover:underline focus:outline-none'
                >
                    <ArrowLeftIcon />
                    <span className='mx-2'>Back step</span>
                </button>

                <button
                    onClick={handlePlaceOrder}
                    className='flex items-center px-3 py-2 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-500 focus:outline-none'
                >
                    <span>Place Order</span>
                    <ArrowRightIcon />
                </button>
            </div>
        </div>
    );
};

export default PlaceOrder;
