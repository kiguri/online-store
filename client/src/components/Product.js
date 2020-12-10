import { Link } from 'react-router-dom';
import { CartIcon } from '../svg';
import Rating from './Rating';
import { useCartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
    const { _id, name, image, price, rating, numReviews } = product;

    const { addToCart } = useCartContext();

    return (
        <div className='w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden'>
            <Link to={`/product/${_id}`}>
                <div className='h-56'>
                    <img
                        className='h-full w-full object-cover'
                        src={image}
                        alt={name}
                    />
                </div>
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
                <button
                    onClick={() => addToCart(product)}
                    className='p-2 rounded-full bg-teal-400 text-white hover:bg-teal-500 focus:outline-none'
                >
                    <CartIcon />
                </button>
            </div>
        </div>
    );
};

export default Product;
