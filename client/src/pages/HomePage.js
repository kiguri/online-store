import { useEffect } from 'react';
import { useProductContext } from '../contexts/ProductContext';
import MainWrap from '../components/MainWrap';
import Product from '../components/Product';

const HomePage = () => {
    const { products, loading, error, fetchProducts } = useProductContext();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <MainWrap>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h3 className='text-red-400'>{error}</h3>
            ) : (
                <>
                    <h3 className='text-gray-700 text-xl font-medium'>
                        Best Sneakers
                    </h3>
                    <span className='mt-3 text-sm text-gray-500'>
                        200+ products
                    </span>
                    {/* Produclist */}
                    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6'>
                        {products.map((product) => (
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                </>
            )}
        </MainWrap>
    );
};

export default HomePage;
