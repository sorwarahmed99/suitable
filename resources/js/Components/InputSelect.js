import React from 'react';

function InputSelect({
    id,
    name,
    onChange,
    className,
    options,
    value, //I missed out this
    placeholder,
    required,
})  {
    return (
        <div className="mt-1">
            {/* <select value={value} name={name} id={ name } className="">
                { children }
            </select> */}
            
            <select
                className={
                    `border-gray-300 rounded-xl shadow-sm text-xs` +
                    className
                }
                name={name}
                required={required}
                id={id}
                onChange={onChange}
                value={value} //So I had to pass it here too
            >
                <option value={''}>{placeholder}</option>
                {options.map((option, index) => {
                    return (
                        <option className='text-xs' key={index} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
        
        </div>
    )

    ;
}

export default InputSelect;
