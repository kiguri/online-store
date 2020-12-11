import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../contexts/ProductContext';
import { useCartContext } from '../contexts/CartContext';

import { MinusIcon, PlusIcon } from '../svg';
import MainWrap from '../components/MainWrap';
import Rating from '../components/Rating';

const useQuantity = (item) => {
    const [qty, setQty] = useState(0);

    useEffect(() => {
        if (item) {
            setQty(item.qty);
        } else {
            setQty(0);
        }
    }, [item, setQty]);
    return qty;
};

const ProductPage = () => {
    const { product, loading, error, fetchProductById } = useProductContext();
    const { cartItems, addToCart, removeFromCart } = useCartContext();
    const { id } = useParams();
    const isInStock = product.countInStock > 0;
    const item = cartItems.find((cartItem) => cartItem._id === product._id);

    const qty = useQuantity(item);

    useEffect(() => {
        fetchProductById(id);
    }, [fetchProductById, id]);

    return (
        <MainWrap>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h3>{error}</h3>
            ) : (
                <div className='md:flex md:items-center'>
                    {/* Product image */}
                    <div className='w-full h-64 md:w-1/2 lg:h-96'>
                        <img
                            src={product.image}
                            alt={product.name}
                            className='h-full w-full rounded-md object-cover max-w-lg mx-auto'
                        />
                    </div>
                    {/* Product details */}
                    <div className='w-full max-w-lg mt-5 mx-auto md:ml-8 md:mt-0 md:w-1/2'>
                        <h3 className='text-gray-900 text-lg font-medium mb-2'>
                            {product.name}
                        </h3>
                        <p className='text-gray-600 text-sm mb-2'>
                            {product.description}
                        </p>

                        <Rating
                            rating={product.rating}
                            numReviews={product.numReviews}
                        />

                        <hr className='my-3' />

                        <div className='text-gray-700 mb-2'>
                            <span className='mr-2'>Price:</span>
                            <span>${product.price}</span>
                        </div>

                        <div className='mb-2'>
                            <span className='text-gray-700 mr-2'>Status:</span>

                            <span
                                className={
                                    isInStock
                                        ? 'text-green-500'
                                        : 'text-red-500'
                                }
                            >
                                {isInStock
                                    ? `In stock (${product.countInStock})`
                                    : 'Out of stock'}
                            </span>
                        </div>

                        {/* Button add to cart */}
                        <div className='flex'>
                            {qty === 0 ? (
                                <button
                                    onClick={() => addToCart(product)}
                                    disabled={!isInStock}
                                    type='submit'
                                    className=' py-3 w-36 bg-green-600 text-white text-sm font-medium rounded-2xl disabled:pointer-events-none disabled:bg-green-400 pointer-events-auto hover:bg-green-500 focus:outline-none'
                                >
                                    Add to cart
                                </button>
                            ) : (
                                <div className='flex justify-center py-3 w-36 bg-green-600 text-sm text-white font-medium rounded-2xl focus:outline-none'>
                                    <span
                                        onClick={() => removeFromCart(product)}
                                        className='cursor-pointer'
                                    >
                                        <MinusIcon />
                                    </span>
                                    <span className='text-center w-10'>
                                        {qty}
                                    </span>
                                    <span
                                        onClick={() => addToCart(product)}
                                        className='cursor-pointer'
                                    >
                                        <PlusIcon />
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </MainWrap>
    );
};

export default ProductPage;
