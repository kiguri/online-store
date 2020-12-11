const Input = ({ value, onChange, label, type, holder }) => {
    return (
        <>
            <label className='uppercase text-sm text-gray-500' htmlFor={label}>
                {label}
            </label>
            <input
                onChange={onChange}
                value={value}
                type={type}
                placeholder={holder}
                required
                className='h-12 mt-2 px-4 w-full rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
        </>
    );
};

export default Input;
