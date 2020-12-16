import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

import { useProductContext } from '../contexts/ProductContext';
import MainWrap from '../components/MainWrap';
import Input from '../components/Input';

const ProductEditPage = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCounInStock] = useState(0);
    const [description, setDescription] = useState('');

    const { id } = useParams();
    const history = useHistory();

    const { loading, error, product, fetchProductById } = useProductContext();

    useEffect(() => {
        if (!product.name || product._id !== id) {
            fetchProductById(id);
        } else {
            setName(product.name);
            setPrice(product.price);
            setImage(product.image);
            setBrand(product.brand);
            setCategory(product.category);
            setCounInStock(product.countInStock);
            setDescription(product.description);
        }
    }, [product, fetchProductById, id]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <MainWrap>
            <Link
                className='bg-gray-100 hover:bg-gray-200 text-gray-600 px-2 rounded py-1'
                to='/admin/products'
            >
                Go back
            </Link>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h3 className='text-red-400'>{error}</h3>
            ) : (
                <div className='flex justify-center'>
                    <form className='mt-10' onSubmit={handleSubmit}>
                        <h3 className='text-black text-2xl font-medium mb-4'>
                            Edit product
                        </h3>
                        {/* {loadingUserUpdate && <h2>Loading user update...</h2>}{' '}
                        {errorUserUpdate && (
                            <h3 className='text-red-400'>{errorUserUpdate}</h3>
                        )} */}
                        <div className='flex flex-col w-96'>
                            <div className='mb-4'>
                                <Input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    label='name'
                                    type='text'
                                />
                            </div>
                            <div className='mb-4'>
                                <Input
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    label='price'
                                    type='number'
                                />
                            </div>
                            <div className='mb-4'>
                                <Input
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    label='image url'
                                    type='text'
                                />
                            </div>
                            <div className='mb-4'>
                                <Input
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                    label='brand'
                                    type='text'
                                />
                            </div>
                            <div className='mb-4'>
                                <Input
                                    value={category}
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                    label='category'
                                    type='text'
                                />
                            </div>
                            <div className='mb-4'>
                                <Input
                                    value={countInStock}
                                    onChange={(e) =>
                                        setCounInStock(e.target.value)
                                    }
                                    label='count in stock'
                                    type='number'
                                />
                            </div>
                            <div className='mb-4'>
                                <Input
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    label='description'
                                    type='text'
                                />
                            </div>

                            <button className='uppercase py-3 text-white rounded-lg bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 focus:outline-none'>
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </MainWrap>
    );
};

export default ProductEditPage;
