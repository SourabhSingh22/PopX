import React from 'react'

const FormInput = ({
    label,
    placeholder,
    type,
    id,
    value,
    isRequired,
    onchange,
}) => {

    return (
        <div className=' rounded-lg relative'>
                <input 
                type={type} 
                value={value}
                onChange={onchange}
                required={isRequired}
                placeholder={placeholder}
                id={id}
                className='py-2 px-3 outline-none placeholder:text-sm placeholder:text-gray-400
                border border-gray-400
                text-sm 
                focus-within:border-purple-500 w-full rounded-lg'
                 />

                 <label
                  htmlFor={id}
                  style={{color: "#6C25FF",
                    backgroundColor: "#F7F8F9"}}
                  className='absolute top-[-10px] left-2 pl-1 pr-3 text-[14px] font-medium bg-transparent'
                  >
                   {label}
                   {isRequired && <span className='text-red-500'>*</span>}
                 </label>
        </div>
    )
}

export default FormInput