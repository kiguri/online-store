const SigninForm = () => {
    return (
        <form>
            <div className='flex flex-col'>
                <div className='mb-4'>
                    <label
                        className='uppercase text-sm text-gray-500'
                        htmlFor='email'
                    >
                        email
                    </label>
                    <input
                        type='text'
                        placeholder='Enter your email'
                        required
                        className='h-12 mt-2 px-4 w-full rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                </div>

                <div className='mb-4'>
                    <label
                        className='uppercase text-sm text-gray-500'
                        htmlFor='password'
                    >
                        password
                    </label>
                    <input
                        type='password'
                        placeholder='******'
                        required
                        className='h-12 mt-2 px-4 w-full rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                </div>

                <button className='uppercase py-3 text-white rounded-lg bg-gradient-to-r from-teal-400 to-teal-500 focus:outline-none'>
                    Sign in
                </button>
            </div>
        </form>
    );
};

export default SigninForm;
