import React from 'react';
const Input = ({ value, onChange, label, type, holder, disabled }) => {
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
                disabled={disabled}
                className='h-12 mt-2 px-4 w-full rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
        </>
    );
};

Input.defaultProps = {
    disabled: false,
};
export default Input;
