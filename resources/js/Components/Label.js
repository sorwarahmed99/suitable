import React from 'react';

export default function Label({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`block font-medium text-xs sm:text-sm text-slate-500 dark:text-slate-50` + className}>
            {value ? value : children}
        </label>
    );
}
