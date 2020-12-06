import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <main className='my-8 min-h-80vh'>
            <div className='container mx-auto px-6'>
                <h3 className='text-gray-700 text-xl font-medium'>
                    Best Watch
                </h3>
                <span className='mt-3 text-sm text-gray-500'>
                    200+ products
                </span>

                {/* Products list */}
                <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6'>
                    {products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default HomeScreen;
