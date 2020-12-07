import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../contexts/ProductContext';
import Rating from '../components/Rating';

const ProductScreen = () => {
    const { product, loading, error, fetchProductById } = useProductContext();
    const { id } = useParams();
    const isInStock = product.countInStock > 0;

    useEffect(() => {
        fetchProductById(id);
    }, [fetchProductById, id]);

    return (
        <div className='my-8 min-h-80vh'>
            <div className='container mx-auto px-6'>
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
                                <span className='text-gray-700 mr-2'>
                                    Status:
                                </span>
                                {isInStock ? (
                                    <span className='text-green-500'>
                                        In stock
                                    </span>
                                ) : (
                                    <span className='text-red-500'>
                                        Out of stock
                                    </span>
                                )}
                            </div>

                            {/* Button add to cart */}
                            <div>
                                <button
                                    disabled={!isInStock}
                                    className='px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded disabled:pointer-events-none disabled:opacity-50 pointer-events-auto hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500'
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductScreen;
