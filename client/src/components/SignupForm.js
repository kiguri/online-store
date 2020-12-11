const SignupForm = () => {
    return (
        <form>
            <div className='flex flex-col'>
                <div className='mb-4'>
                    <label
                        className='uppercase text-sm text-gray-500'
                        htmlFor='name'
                    >
                        full name
                    </label>
                    <input
                        type='text'
                        placeholder='Ex: Kiguri'
                        required
                        className='h-12 mt-2 px-4 w-full rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                </div>

                <div className='mb-4'>
                    <label
                        className='uppercase text-sm text-gray-500'
                        htmlFor='email'
                    >
                        email
                    </label>
                    <input
                        type='email'
                        placeholder='Ex: kiguri@gmail.com'
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
                        placeholder='*******'
                        required
                        className='h-12 mt-2 px-4 w-full rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                </div>

                <div className='mb-4'>
                    <label
                        className='uppercase text-sm text-gray-500'
                        htmlFor='passwordRepeat'
                    >
                        repeat password
                    </label>
                    <input
                        type='password'
                        placeholder='*******'
                        required
                        className='h-12 mt-2 px-4 w-full rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                </div>

                <p className='text-sm mb-4'>
                    By clicking you agree with our{' '}
                    <a className='text-blue-500 hover:underline' href='/login'>
                        Term of use.
                    </a>{' '}
                </p>

                <button className='uppercase py-3 text-white rounded-lg bg-gradient-to-r from-teal-400 to-teal-500 focus:outline-none'>
                    Sign up
                </button>
            </div>
        </form>
    );
};

export default SignupForm;
