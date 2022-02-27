import React, { useEffect, useRef } from 'react';

export default function Input({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    defaultValue,
    placeholder
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <>

        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                defaultValue={defaultValue}
                className={
                    `` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={handleChange}
            />
        </div>
        </>
    );
}
