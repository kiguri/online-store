import { useCartContext } from '../contexts/CartContext';
import CartItem from './CartItem';

const CheckoutCart = () => {
    const { cartItems, total, totalPrice } = useCartContext();
    return (
        <div className='w-full lg:w-1/2 flex-shrink-0 lg:order-2 mb-8 lg:mb-0'>
            <div className='flex justify-center lg:justify-end'>
                <div className='w-full border rounded-md max-w-md px-4 py-3'>
                    <h3 className='text-gray-600 font-medium'>
                        {total > 0
                            ? `Order total (${total} items): ${totalPrice}$`
                            : 'Your cart is empty'}
                    </h3>

                    {cartItems.map((cartItem) => (
                        <CartItem key={cartItem._id} cartItem={cartItem} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CheckoutCart;
