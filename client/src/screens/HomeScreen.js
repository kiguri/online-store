import products from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
    return (
        <main className='my-8 min-h-80vh'>
            <div className='container mx-auto px-6'>
                <h3 className='text-gray-700 text-xl font-medium'>
                    Best Watch
                </h3>
                <span className='mt-3 text-sm text-gray-500'>
                    200+ products
                </span>

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
