import { useState } from 'react';
import { useCartContext } from '../contexts/CartContext';
import Input from '../components/Input';
import { ArrowRightIcon } from '../svg';

const DeliveryForm = ({ handleStep }) => {
    const { shippingAddress, saveAddress } = useCartContext();

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            address.trim().length === 0 ||
            city.trim().length === 0 ||
            postalCode.trim().length === 0 ||
            country.trim().length === 0
        ) {
            setError('All field must be fill out');
        } else {
            saveAddress({ address, city, postalCode, country });
            handleStep('next');
        }
    };
    return (
        <div className='mt-8'>
            <form onSubmit={handleSubmit}>
                <h3 className='text-gray-500 text-sm mt-6 mb-2'>
                    Delivery address
                </h3>
                {error && (
                    <span className='text-sm text-red-400 my-2'>{error}</span>
                )}
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
                    <div className='flex items-center mt-2 justify-end'>
                        <button
                            type='submit'
                            className='flex items-center px-3 py-2 bg-teal-600 text-white text-sm font-medium rounded-md hover:bg-teal-500 focus:outline-none'
                        >
                            <span>Next</span>
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DeliveryForm;
