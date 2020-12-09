import { MinusIcon, PlusIcon } from '../svg';
import { useCartContext } from '../contexts/CartContext';

const CartItem = ({ cartItem }) => {
    const { addToCart, removeFromCart } = useCartContext();

    return (
        <div className='flex mt-6'>
            <img
                className='h-20 w-20 object-cover rounded'
                src={cartItem.image}
                alt={cartItem.name}
            />
            <div className='ml-6'>
                <h3 className='text-sm text-gray-400'>{cartItem.name}</h3>
                <div className='flex items-center mt-2'>
                    <button
                        onClick={() => removeFromCart(cartItem)}
                        className='text-gray-500 focus:outline-none focus:text-gray-600'
                    >
                        <MinusIcon />
                    </button>
                    <span className='text-gray-500 mx-2'>{cartItem.qty}</span>
                    <button
                        onClick={() => addToCart(cartItem)}
                        className='text-gray-500 focus:outline-none focus:text-gray-600'
                    >
                        <PlusIcon />
                    </button>
                </div>
            </div>
            <span className='text-sm text-gray-400 flex-grow text-right'>
                {cartItem.price}$
            </span>
        </div>
    );
};

export default CartItem;
