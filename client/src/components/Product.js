import { Link } from 'react-router-dom';
import { CartIcon } from '../svg';
import Rating from './Rating';

const Product = ({ product }) => {
    const { _id, name, image, price, rating, numReviews } = product;

    return (
        <div className='w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden'>
            <Link to={`/product/${_id}`}>
                <div
                    className='flex items-end justify-end h-56 w-full bg-cover'
                    style={{ backgroundImage: `url(${image})` }}
                />
            </Link>

            <div className='px-5 mt-4'>
                <Rating rating={rating} numReviews={numReviews} />
            </div>

            <div className='flex px-5 py-3 items-center justify-between'>
                <div className='flex flex-col'>
                    <Link
                        to={`/product/${_id}`}
                        className='text-gray-700 uppercase hover:underline'
                    >
                        {name}
                    </Link>
                    <span className='text-gray-500 mt-2'>${price}</span>
                </div>
                <button className='p-2 rounded-full bg-green-400 text-white hover:bg-green-500 focus:outline-none focus:bg-green-500'>
                    <CartIcon />
                </button>
            </div>
        </div>
    );
};

export default Product;
