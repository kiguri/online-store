import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchIcon } from '../svg';
const SearchBox = () => {
    const [keyword, setKeyword] = useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/search/${keyword}`);
        } else {
            history.push('/');
        }
    };
    return (
        <div className='w-full relative'>
            <form onSubmit={handleSubmit}>
                <span className='absolute inset-y-0 right-1 flex items-center'>
                    <button type='submit' className='focus:outline-none'>
                        <SearchIcon />
                    </button>
                </span>
                <input
                    onChange={(e) => setKeyword(e.target.value)}
                    className='w-full border rounded-md pl-4 sm:py-2 focus:border-teal-500 focus:outline-none focus:shadow-outline'
                    type='text'
                    placeholder='Search'
                />
            </form>
        </div>
    );
};

export default SearchBox;
