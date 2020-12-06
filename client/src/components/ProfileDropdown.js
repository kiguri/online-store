import { Link } from 'react-router-dom';
const ProfileDropdown = ({ profileOpen }) => {
    return (
        <div
            className={`${
                profileOpen ? '' : 'hidden'
            } origin-top-right absolute right-0 mt-36 w-36 py-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
        >
            <Link
                to='/'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
            >
                Your Profile
            </Link>
            <Link
                to='/'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
            >
                Settings
            </Link>
            <Link
                to='/'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
            >
                Sign out
            </Link>
        </div>
    );
};

export default ProfileDropdown;
