import React from 'react';

function InputSelect({ name, children }) {
    return (
        <div class="mt-1">
            <select name={name} id={ name } className="">
                { children }
            </select>
        </div>
    )

    ;
}

export default InputSelect;
