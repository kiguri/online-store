import { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import { useProductContext } from '../contexts/ProductContext';
import MainWrap from '../components/MainWrap';
import { PlusIcon } from '../svg';
const ListProductPage = () => {
    const {
        loading,
        error,
        deleteLoading,
        deleteError,
        deleteSuccess,
        products,
        fetchProducts,
        deleteProduct,
    } = useProductContext();
    const { currentUser } = useUserContext();
    const history = useHistory();

    useEffect(() => {
        if (currentUser && currentUser.isAdmin) {
            fetchProducts();
        } else {
            history.push('/login');
        }
    }, [currentUser, history, fetchProducts, deleteSuccess]);

    const handleDelete = (id) => {
        if (window.confirm('You want to delete product ?')) {
            deleteProduct(id);
        }
    };

    return (
        <MainWrap>
            {deleteLoading && <h2>Loading...</h2>}
            {deleteError && <h3 className='text-red-400'>{deleteError}</h3>}
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h3 className='text-red-400'>{error}</h3>
            ) : (
                <>
                    <div className='flex justify-between'>
                        <h3 className='text-gray-700 text-xl font-medium uppercase'>
                            Products
                        </h3>
                        <button className='bg-teal-800 text-sm hover:bg-teal-700 text-white py-2 px-2 rounded flex items-center focus:outline-none'>
                            <PlusIcon />
                            <span className='uppercase ml-1'>Create one</span>
                        </button>
                    </div>
                    <div className='flex flex-col'>
                        <div className='overflow-x-auto mt-4 sm:-mx-6 lg:-mx-8'>
                            <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                                <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                                    <table className='min-w-full divide-y divide-gray-200'>
                                        <thead className='bg-gray-50'>
                                            <tr>
                                                <th
                                                    scope='col'
                                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    ID
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    Price
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    Category
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                                >
                                                    Brand
                                                </th>
                                                <th
                                                    scope='col'
                                                    className='relative px-6 py-3'
                                                >
                                                    <span className='sr-only'>
                                                        Edit and Delete
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg-white divide-y divide-gray-200'>
                                            {products.map((product) => (
                                                <tr
                                                    className='hover:bg-gray-100'
                                                    key={product._id}
                                                >
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-sm font-medium text-gray-900'>
                                                            {product._id}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-sm text-gray-900'>
                                                            {product.name}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-sm text-gray-900'>
                                                            {product.price}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-sm text-gray-900'>
                                                            {product.category}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-sm text-gray-900'>
                                                            {product.brand}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 flex justify-end whitespace-nowrap'>
                                                        <Link
                                                            to={`/admin/product/${product._id}/edit`}
                                                            className='text-indigo-600 hover:text-indigo-900 text-sm font-medium focus:outline-none'
                                                        >
                                                            Edit
                                                        </Link>
                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    product._id
                                                                )
                                                            }
                                                            className='ml-2 text-red-600 hover:text-red-900 text-sm font-medium focus:outline-none'
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </MainWrap>
    );
};

export default ListProductPage;
