import { Link } from 'react-router-dom';

const AdminDropdown = ({ isAdminOpen, setIsAdminOpen }) => {
    return (
        <div
            className={`${
                isAdminOpen ? '' : 'hidden'
            } origin-top-right absolute right-0 mt-44 w-36 py-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
        >
            <Link
                to='/admin/users'
                onClick={() => setIsAdminOpen(false)}
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
            >
                Users
            </Link>
            <Link
                to='/admin/products'
                onClick={() => setIsAdminOpen(false)}
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
            >
                Products
            </Link>
            <Link
                to='/admin/orders'
                onClick={() => setIsAdminOpen(false)}
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
            >
                Orders
            </Link>
        </div>
    );
};

export default AdminDropdown;
