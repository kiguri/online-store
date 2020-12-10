const SignInPage = () => {
    return (
        <main className='my-8 min-h-8/10'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col'>
                    <h3 className='text-black text-2xl font-bold mb-6'>
                        Sign in
                    </h3>

                    <form>
                        <div className='mb-4'>
                            <input
                                type='email'
                                placeholder='E-Mail Address'
                                required
                                className='h-12 px-4 w-full rounded-md border border-gray-300 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                            />
                        </div>
                        <div className='mb-4'>
                            <input
                                type='password'
                                placeholder='Password'
                                required
                                className='h-12 px-4 w-full rounded-md border border-gray-300 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                            />
                        </div>

                        <button className='w-32 bg-teal-400 hover:bg-teal-600 text-lg font-bold focus:outline-none text-white rounded-full py-3'>
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default SignInPage;
