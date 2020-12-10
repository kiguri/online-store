import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { CloseIcon, ArrowRightIcon, ShoppingIcon } from '../svg';
import { useCartContext } from '../contexts/CartContext';

const Cart = () => {
    const {
        cartItems,
        total,
        totalPrice,
        hidden,
        toggleCart,
    } = useCartContext();

    return (
        <div
            className={`${
                hidden ? 'translate-x-full ease-in' : 'translate-x-0 ease-out'
            } flex flex-col fixed top-0 right-0 max-w-xs w-full h-full px-6 py-4 overflow-y-auto bg-white shadow-2xl transform transition duration-300`}
        >
            <div className='flex items-center justify-between'>
                <div className='flex'>
                    <ShoppingIcon />
                    <span className='text-teal-600 font-medium ml-2'>
                        {total} items
                    </span>
                </div>
                <button
                    onClick={toggleCart}
                    className='text-gray-600 focus:outline-none'
                >
                    <CloseIcon />
                </button>
            </div>

            <hr className='mt-3' />

            <div className='flex-grow text-center mt-16'>
                {total === 0 && (
                    <span className=' text-gray-700 font-medium'>
                        No products found
                    </span>
                )}

                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem._id} cartItem={cartItem} />
                ))}
            </div>

            <Link
                onClick={toggleCart}
                to='/checkout'
                className='flex items-center justify-end h-14 px-1 mb-2 bg-teal-600 text-white text-sm font-medium rounded-2xl hover:bg-teal-500 focus:outline-none'
            >
                <span>Chechout</span>
                <ArrowRightIcon />
                <span className='h-12 w-20 inline-flex items-center justify-center bg-white ml-3 text-teal-600 rounded-xl'>
                    {totalPrice}$
                </span>
            </Link>
        </div>
    );
};

export default Cart;
