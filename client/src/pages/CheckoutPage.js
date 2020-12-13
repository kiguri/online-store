import MainWrap from '../components/MainWrap';
import CheckoutCart from '../components/CheckoutCart';
import ProcessPayment from '../components/ProcessPayment';

const CheckoutPage = () => {
    return (
        <MainWrap>
            <h3 className='text-gray-700 text-xl font-medium'>Checkout</h3>

            <div className='flex flex-col lg:flex-row mt-8'>
                <CheckoutCart />
                <ProcessPayment />
            </div>
        </MainWrap>
    );
};

export default CheckoutPage;
