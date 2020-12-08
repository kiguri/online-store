import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../contexts/ProductContext';
import { useCartContext } from '../contexts/CartContext';

import { MinusIcon, PlusIcon } from '../svg';
import Rating from '../components/Rating';

const ProductPage = () => {
    const { product, loading, error, fetchProductById } = useProductContext();
    const { addToCart } = useCartContext();
    const { id } = useParams();
    const [qty, setQty] = useState(1);
    const isInStock = product.countInStock > 0;

    useEffect(() => {
        fetchProductById(id);
    }, [fetchProductById, id]);

    const addToCartHandle = (e) => {
        e.preventDefault();
        addToCart(product, qty);
    };

    return (
        <main className='my-8 min-h-80vh'>
            <div className='container mx-auto px-6'>
                {loading ? (
                    <h2>Loading...</h2>
                ) : error ? (
                    <h3>{error}</h3>
                ) : (
                    <div className='md:flex md:items-center z-10'>
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
                                <span className='text-gray-700 mr-2'>
                                    Status:
                                </span>

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
                            <form className='flex'>
                                <div className='flex items-center mr-4'>
                                    <button
                                        onClick={() => {
                                            qty > 1 &&
                                                setQty(
                                                    (prevQty) => prevQty - 1
                                                );
                                        }}
                                        disabled={!isInStock}
                                        type='button'
                                        className='text-gray-500 focus:outline-none focus:text-gray-600 disabled:pointer-events-none'
                                    >
                                        <MinusIcon />
                                    </button>
                                    <span className='w-6 mx-2 text-center'>
                                        {qty}
                                    </span>
                                    <button
                                        onClick={() => {
                                            qty < product.countInStock &&
                                                setQty(
                                                    (prevQty) => prevQty + 1
                                                );
                                        }}
                                        disabled={!isInStock}
                                        type='button'
                                        className='text-gray-500 focus:outline-none focus:text-gray-600 disabled:pointer-events-none'
                                    >
                                        <PlusIcon />
                                    </button>
                                </div>

                                <button
                                    onClick={addToCartHandle}
                                    disabled={!isInStock}
                                    type='submit'
                                    className='px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded disabled:pointer-events-none disabled:bg-indigo-400 pointer-events-auto hover:bg-indigo-500 focus:outline-none'
                                >
                                    Add to cart
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default ProductPage;
