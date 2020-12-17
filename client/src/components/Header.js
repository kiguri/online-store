import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CartIcon, UserIcon, CogIcon } from '../svg';
import { useCartContext } from '../contexts/CartContext';
import { useUserContext } from '../contexts/UserContext';
import ProfileDropdown from './ProfileDropdown';
import AdminDropdown from './AdminDropdown';
import SearchBox from './SearchBox';

const Header = () => {
    const [profileOpen, setProfileOpen] = useState(false);
    const [isAdminOpen, setIsAdminOpen] = useState(false);
    const { toggleCart, total } = useCartContext();
    const { currentUser } = useUserContext();

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
                    <SearchBox />

                    {/* Icon group */}
                    <div className='w-full flex items-center justify-end relative'>
                        {/* Cart button */}
                        <button
                            onClick={toggleCart}
                            className='relative text-gray-600 hover:text-gray-500 focus:outline-none mx-4'
                        >
                            <CartIcon />

                            {total > 0 && (
                                <div className='absolute top-0 right-0 -mt-2 -mr-3 w-4 h-4 text-xs rounded-full bg-teal-500 text-white font-medium'>
                                    {total}
                                </div>
                            )}
                        </button>

                        {/* Admin button */}
                        {currentUser && currentUser.isAdmin ? (
                            <button
                                onClick={() => {
                                    setProfileOpen(false);
                                    setIsAdminOpen(!isAdminOpen);
                                }}
                                type='button'
                                className='mr-3 text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500'
                            >
                                <CogIcon />
                            </button>
                        ) : null}

                        {/* Admin dropdown */}
                        <AdminDropdown
                            isAdminOpen={isAdminOpen}
                            setIsAdminOpen={setIsAdminOpen}
                        />

                        {/* User button */}
                        {currentUser ? (
                            <button
                                onClick={() => {
                                    setIsAdminOpen(false);
                                    setProfileOpen(!profileOpen);
                                }}
                                type='button'
                                className='text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500'
                            >
                                <UserIcon />
                            </button>
                        ) : (
                            <Link
                                className='text-gray-600 hover:opacity-100 opacity-90'
                                to='/login'
                            >
                                Login
                            </Link>
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
