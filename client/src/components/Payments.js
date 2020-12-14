import { useState, useEffect } from 'react';
import { useCartContext } from '../contexts/CartContext';
import { ArrowLeftIcon, ArrowRightIcon } from '../svg';
const Payments = ({ handleStep }) => {
    const { paymentMethod, savePaymentMethod } = useCartContext();
    const [method, setMethod] = useState(paymentMethod);

    useEffect(() => {
        savePaymentMethod(method);
    }, [savePaymentMethod, method]);

    return (
        <div className='mt-8 w-96'>
            <h3 className='text-gray-500 text-sm mt-6 mb-2'>Payment methods</h3>
            <div
                className={`${
                    method === 'PayPal' ? 'border-2 border-teal-500' : 'border'
                } flex items-center justify-between w-full bg-white rounded-md p-4 focus:outline-none`}
            >
                <label className='flex items-center'>
                    <input
                        type='radio'
                        name='payment'
                        id='paypal'
                        defaultChecked={paymentMethod === 'PayPal'}
                        className='form-radio h-5 w-5 text-teal-600'
                        value='PayPal'
                        onChange={(e) => setMethod(e.target.value)}
                    />
                    <span className='ml-2 text-sm text-gray-700'>PayPal</span>
                </label>
            </div>
            {/* <div
                className={`${
                    method === 'Stripe' ? 'border-2 border-teal-500' : 'border'
                } mt-6 flex items-center justify-between w-full bg-white rounded-md p-4 focus:outline-none`}
            >
                <label className='flex items-center'>
                    <input
                        type='radio'
                        name='payment'
                        id='stripe'
                        defaultChecked={paymentMethod === 'Stripe'}
                        value='Stripe'
                        onChange={(e) => setMethod(e.target.value)}
                        className='form-radio h-5 w-5 text-teal-600'
                    />
                    <span className='ml-2 text-sm text-gray-700'>Stripe</span>
                </label>
            </div> */}

            <div className='flex items-center mt-2 justify-between'>
                <button
                    onClick={() => handleStep('back')}
                    className='flex items-center text-gray-700 text-sm font-medium rounded hover:underline focus:outline-none'
                >
                    <ArrowLeftIcon />
                    <span className='mx-2'>Back step</span>
                </button>
                <button
                    onClick={() => handleStep('next')}
                    className='flex items-center px-3 py-2 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-500 focus:outline-none'
                >
                    <span>Next</span>
                    <ArrowRightIcon />
                </button>
            </div>
        </div>
    );
};

export default Payments;
