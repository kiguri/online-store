const Footer = () => {
    return (
        <footer className='bg-gray-200'>
            <div className='container mx-auto px-6 py-2 flex justify-between items-center'>
                <a
                    href='/'
                    className='text-xl font-bold text-gray-800 hover:text-gray-400'
                >
                    Kiguri
                </a>
                <p className='py-2 text-gray-500 text-sm sm:py-0'>
                    All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
