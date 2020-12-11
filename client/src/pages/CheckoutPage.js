import MainWrap from '../components/MainWrap';
import CartItem from '../components/CartItem';
import { useCartContext } from '../contexts/CartContext';

const CheckoutPage = () => {
    const { cartItems, total, totalPrice } = useCartContext();

    return (
        <MainWrap>
            <h3 className='text-gray-700 text-xl font-medium'>Checkout</h3>

            <div className='flex flex-col lg:flex-row mt-8'>
                <div className='w-full lg:w-1/2 lg:order-2 mb-8 lg:mb-0 flex-shrink-0 '>
                    <div className='flex justify-center lg:justify-end'>
                        <div className='w-full border rounded-md max-w-md px-4 py-3'>
                            <h3 className='text-gray-600 font-medium'>
                                {total > 0
                                    ? `Order total (${total} items): ${totalPrice}$`
                                    : 'Your cart is empty'}
                            </h3>

                            {cartItems.map((cartItem) => (
                                <CartItem
                                    key={cartItem._id}
                                    cartItem={cartItem}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-1/2'>Ship</div>
            </div>
        </MainWrap>
    );
};

export default CheckoutPage;
