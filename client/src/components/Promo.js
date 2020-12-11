import { Link } from 'react-router-dom';
const Promo = () => {
    return (
        <div className='hidden lg:flex lg:flex-col lg:w-1/2 lg:order-1'>
            <h3 className='uppercase text-2xl font-bold mb-7'>Special Promo</h3>
            <span className='mb-4'>Get your spring collection</span>
            <div className='text-black font-medium text-5xl w-96'>
                Up to <span className='text-teal-400'>90% Discount</span> on
                This Christmas Days
            </div>
            <span className='text-sm mt-8 mb-2'>From 20th Dec to 31st Dec</span>
            <p className='w-96 mb-10 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis maiores cum, mollitia eaque tempore minima officia non
                illo incidunt quos corrupti accusamus itaque consequuntur
                provident ad nobis aperiam aspernatur doloremque?
            </p>
            <Link
                to='/'
                className='text-white text-center font-medium rounded-3xl w-44 px-4 py-3 bg-teal-400 hover:bg-teal-500 focus:outline-none'
            >
                SHOP NOW
            </Link>
        </div>
    );
};

export default Promo;
