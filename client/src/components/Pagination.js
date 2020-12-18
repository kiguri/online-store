import { Link } from 'react-router-dom';
const Pagination = ({ pages, page, isAdmin = false, keyword = '' }) => {
    return (
        pages > 1 && (
            <div className='mt-4 bg-white px-4 py-3 flex items-center justify-center sm:px-6'>
                <div className='flex items-center justify-between'>
                    <div>
                        <nav
                            className='relative z-0 inline-flex shadow-sm -space-x-px'
                            aria-label='Pagination'
                        >
                            {[...Array(pages).keys()].map((x) => (
                                <Link
                                    key={x}
                                    to={
                                        !isAdmin
                                            ? keyword
                                                ? `/search/${keyword}/page/${
                                                      x + 1
                                                  }`
                                                : `/page/${x + 1}`
                                            : `/admin/products/${x + 1}`
                                    }
                                    className={`${
                                        x + 1 === page
                                            ? 'bg-teal-600 text-white hover:bg-teal-400'
                                            : 'bg-white  text-gray-700 hover:bg-gray-50'
                                    } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium `}
                                >
                                    {x + 1}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        )
    );
};

export default Pagination;
