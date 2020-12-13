import { useState } from 'react';
import { useCartContext } from '../contexts/CartContext';
import Input from '../components/Input';
const ProcessPayment = () => {
    const { shippingAddress, saveAddress } = useCartContext();

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const handleSubmit = (e) => {
        e.preventDefault();
        saveAddress({ address, city, postalCode, country });
    };
    return (
        <div className='w-full lg:w-1/2 order-2 lg:order-1'>
            <div class='flex items-center'>
                <button class='flex text-sm text-teal-500 focus:outline-none'>
                    <span class='flex items-center justify-center text-white bg-teal-500 rounded-full h-5 w-5 mr-2'>
                        1
                    </span>{' '}
                    Shipping
                </button>
                <button class='flex text-sm text-gray-700 ml-8 focus:outline-none'>
                    <span class='flex items-center justify-center border-2 border-teal-500 rounded-full h-5 w-5 mr-2'>
                        2
                    </span>{' '}
                    Payments
                </button>
                <button
                    class='flex text-sm text-gray-500 ml-8 focus:outline-none'
                    disabled
                >
                    <span class='flex items-center justify-center border-2 border-gray-500 rounded-full h-5 w-5 mr-2'>
                        3
                    </span>{' '}
                    Place Order
                </button>
            </div>

            <div class='mt-8'>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-gray-500 text-sm mt-6 mb-2'>
                        Delivery address
                    </h3>

                    {/* {loading && <h1>...Loading</h1>}
                            {error && (
                                <span className='text-sm text-red-400'>
                                    {error}
                                </span>
                            )} */}

                    <div className='flex flex-col w-96'>
                        <div className='mb-4'>
                            <Input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                label='address'
                                type='text'
                            />
                        </div>

                        <div className='mb-4'>
                            <Input
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                label='city'
                                type='text'
                            />
                        </div>

                        <div className='mb-4'>
                            <Input
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                label='postal code'
                                type='text'
                            />
                        </div>

                        <div className='mb-4'>
                            <Input
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                label='country'
                                type='text'
                            />
                        </div>
                        <div class='flex items-center justify-between mt-2'>
                            <button class='flex items-center text-gray-700 text-sm font-medium rounded hover:underline focus:outline-none'>
                                <svg
                                    class='h-5 w-5'
                                    fill='none'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path d='M7 16l-4-4m0 0l4-4m-4 4h18'></path>
                                </svg>
                                <span class='mx-2'>Back step</span>
                            </button>
                            <button class='flex items-center px-3 py-2 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-500 focus:outline-none'>
                                <span>Next</span>
                                <svg
                                    class='h-5 w-5 mx-2'
                                    fill='none'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path d='M17 8l4 4m0 0l-4 4m4-4H3'></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProcessPayment;
