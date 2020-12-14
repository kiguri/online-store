const ProcessSteps = ({ currentStep }) => {
    return (
        <div className='flex items-center'>
            <button
                disabled={currentStep < 1}
                className={`${
                    currentStep >= 1 ? 'text-teal-500' : 'text-gray-600'
                } flex text-sm  focus:outline-none mr-8`}
            >
                <span
                    className={`${
                        currentStep > 1
                            ? 'text-white bg-teal-500'
                            : currentStep === 1
                            ? 'border-2 border-teal-500'
                            : 'text-black border-2 border-gray-500'
                    } flex items-center justify-center  rounded-full h-5 w-5 mr-2`}
                >
                    1
                </span>{' '}
                Shipping
            </button>
            <button
                disabled={currentStep < 2}
                className={`${
                    currentStep >= 2 ? 'text-teal-500' : 'text-gray-600'
                } flex text-sm  focus:outline-none mr-8`}
            >
                <span
                    className={`${
                        currentStep > 2
                            ? 'text-white bg-teal-500'
                            : currentStep === 2
                            ? 'border-2 border-teal-500'
                            : 'text-black border-2 border-gray-500'
                    } flex items-center justify-center  rounded-full h-5 w-5 mr-2`}
                >
                    2
                </span>{' '}
                Payments
            </button>
            <button
                disabled={currentStep < 3}
                className={`${
                    currentStep >= 3 ? 'text-teal-500' : 'text-gray-600'
                } flex text-sm  focus:outline-none`}
            >
                <span
                    className={`${
                        currentStep > 3
                            ? 'text-white bg-teal-500'
                            : currentStep === 3
                            ? 'border-2 border-teal-500'
                            : 'text-black border-2 border-gray-500'
                    } flex items-center justify-center  rounded-full h-5 w-5 mr-2`}
                >
                    3
                </span>{' '}
                Place Order
            </button>
        </div>
    );
};

export default ProcessSteps;
