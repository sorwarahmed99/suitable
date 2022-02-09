import Label from '@/Components/Label';
import React, { useRef } from 'react';

function RadioButton({ labelName, name, value, btnName, handleChange }) {
    const input = useRef();

  return <div className="mt-1">

                <div className="flex text-sm">
                    <Label>
                        <input className="sr-only peer" name={name} type="radio" value={ value } onChange={(e) => handleChange(e)} />
                        <div className="px-5 py-2 cursor-pointer rounded-lg border border-slate-300 flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-800 peer-checked:text-white">
                            {btnName}
                        </div>
                    </Label>

                </div>

        </div>;
}

export default RadioButton;
