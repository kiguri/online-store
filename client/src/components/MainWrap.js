const MainWrap = ({ children }) => {
    return (
        <main className='my-8 min-h-8/10'>
            <div className='container mx-auto px-6'>{children}</div>
        </main>
    );
};

export default MainWrap;
