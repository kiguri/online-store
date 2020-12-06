import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CartIcon, UserIcon, SearchIcon } from '../svg';
import ProfileDropdown from './ProfileDropdown';

const Header = () => {
    const [profileOpen, setProfileOpen] = useState(false);
    const [auth, setAuth] = useState(null);

    return (
        <header>
            <div className='container mx-auto px-6 py-3'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <Link
                        to='/'
                        className='w-full text-gray-600 text-2xl font-semibold'
                    >
                        Kiguri
                    </Link>

                    {/* Searchbox */}
                    <div className='w-full relative'>
                        <span className='absolute inset-y-0 right-1 flex items-center'>
                            <SearchIcon />
                        </span>
                        <input
                            className='w-full border rounded-md pl-4 sm:py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline'
                            type='text'
                            placeholder='Search'
                        />
                    </div>

                    {/* Icon group */}
                    <div className='w-full flex items-center justify-end relative'>
                        <button className='text-gray-600 hover:text-gray-500 focus:outline-none mx-4'>
                            <CartIcon />
                        </button>

                        <Link
                            className='text-gray-600 hover:opacity-100 opacity-90'
                            to='/login'
                        >
                            Login
                        </Link>

                        {auth && (
                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                type='button'
                                className='text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500'
                            >
                                <UserIcon />
                            </button>
                        )}

                        {/* Profile dropdown */}
                        <ProfileDropdown
                            profileOpen={profileOpen}
                            setProfileOpen={setProfileOpen}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
