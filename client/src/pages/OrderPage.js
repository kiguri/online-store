import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { useOrderContext } from '../contexts/OrderContext';
import { usePaymentContext } from '../contexts/PaymentContext';
import MainWrap from '../components/MainWrap';

const OrderPage = () => {
    const [sdkReady, setSdkReady] = useState(false);
    const { id } = useParams();
    const { orderDetails, loading, error, getOrder } = useOrderContext();

    const {
        successPay,
        loadingPay,
        resetPayOrder,
        payOrder,
    } = usePaymentContext();

    useEffect(() => {
        const addPayPalScript = async () => {
            const { data: clientId } = await axios.get('/api/config/paypal');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
            };
            document.body.appendChild(script);
        };

        if (!orderDetails || successPay) {
            resetPayOrder();
            getOrder(id);
        } else if (!orderDetails.isPaid) {
            if (!window.paypal) {
                addPayPalScript();
            } else {
                setSdkReady(true);
            }
        }
    }, [getOrder, id, successPay, orderDetails, resetPayOrder]);

    const handleSuccessPayment = (paymentResult) => {
        payOrder(id, paymentResult);
    };

    return (
        <MainWrap>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h3 className='text-red-400'>{error}</h3>
            ) : orderDetails ? (
                <>
                    <h3 className='text-black text-2xl font-medium'>
                        Order {orderDetails._id}
                    </h3>

                    <div className='mt-8 flex flex-col lg:flex-row lg:justify-between'>
                        <div className='flex flex-col'>
                            <div className='text-gray-700 mb-4'>
                                <h3 className='uppercase mb-3'>Shipping</h3>
                                <p className='text-sm'>
                                    Name: {orderDetails.user.name}
                                </p>
                                <p className='text-sm'>
                                    Email:{' '}
                                    <a
                                        className='hover:underline'
                                        href={`mailto:${orderDetails.user.email}`}
                                    >
                                        {orderDetails.user.email}
                                    </a>
                                </p>
                                <p className='text-sm mb-3'>
                                    To address:{' '}
                                    <span>
                                        {orderDetails.shippingAddress.address},{' '}
                                        {orderDetails.shippingAddress.city},{' '}
                                        {
                                            orderDetails.shippingAddress
                                                .postalCode
                                        }
                                        , {orderDetails.shippingAddress.country}
                                    </span>
                                </p>
                                {orderDetails.isDelivered ? (
                                    <p className='bg-green-200 text-green-700 text-sm py-2 pl-2 rounded'>
                                        Delivered on {orderDetails.deliveredAt}
                                    </p>
                                ) : (
                                    <p className='bg-red-200 text-red-700 text-sm py-2 pl-2 rounded'>
                                        Not Delivered
                                    </p>
                                )}
                            </div>
                            <hr className='mb-4' />
                            <div className='text-gray-700 mb-4'>
                                <h3 className='uppercase'>Payment method</h3>

                                <p className=' text-sm my-3'>
                                    Method:{' '}
                                    <span>{orderDetails.paymentMethod}</span>
                                </p>
                                {orderDetails.isPaid ? (
                                    <p className='bg-green-200 text-green-700 text-sm py-2 pl-2 rounded'>
                                        Paid on {orderDetails.paidAt}
                                    </p>
                                ) : (
                                    <p className='bg-red-200 text-red-700 text-sm py-2 pl-2 rounded'>
                                        Not Paid
                                    </p>
                                )}
                            </div>

                            <hr className='mb-4' />

                            <div className='text-gray-700 mb-4'>
                                <h3 className='uppercase'>ORDERED ITEMS</h3>
                                <div className='text-sm mt-3'>
                                    {orderDetails.orderItems.map((item) => (
                                        <div
                                            className='flex items-center justify-between mb-2'
                                            key={item._id}
                                        >
                                            <div className='flex items-center'>
                                                <img
                                                    className='w-10 h-10'
                                                    src={item.image}
                                                    alt={item.name}
                                                />
                                                <span className='ml-10'>
                                                    {item.name}
                                                </span>
                                            </div>

                                            <span className='mr-32'>
                                                {item.qty} x ${item.price}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <hr className='mb-4' />
                        </div>

                        <div className='text-gray-700 mb-4 lg:w-1/2'>
                            <h3 className='uppercase'>Order summary</h3>
                            <table className='text-sm mt-3 w-full lg:w-3/5 border-collapse border'>
                                <tbody className='w-full'>
                                    <tr>
                                        <td className='w-3/5 lg:w-2/5 border'>
                                            Items:
                                        </td>
                                        <td className='border'>
                                            ${orderDetails.itemsPrice}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border'>Shipping:</td>
                                        <td className='border'>
                                            ${orderDetails.shippingPrice}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border'>Tax:</td>
                                        <td className='border'>
                                            ${orderDetails.taxPrice}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border'>Total:</td>
                                        <td className='border'>
                                            ${orderDetails.totalPrice}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {!orderDetails.isPaid && (
                                <div>
                                    {loadingPay && <h2>Loading pay...</h2>}
                                    {!sdkReady ? (
                                        <h2>Loading...</h2>
                                    ) : (
                                        <PayPalButton
                                            onSuccess={handleSuccessPayment}
                                            amount={orderDetails.totalPrice}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </>
            ) : null}
        </MainWrap>
    );
};

export default OrderPage;
