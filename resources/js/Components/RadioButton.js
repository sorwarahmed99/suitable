import Label from '@/Components/Label';
import React, { useRef } from 'react';

function RadioButton({ name, value, btnName, handleChange }) {
    const input = useRef();

  return <div className="mt-1">

                <div className="flex text-sm">
                    <Label className="dark:text-slate-50">
                        <input className="sr-only peer text-slate-600 dark:text-slate-50" name={name} type="radio" value={ value } onChange={(e) => handleChange(e)} />
                        <div className="px-2 py-2 text-xs cursor-pointer rounded-lg border border-slate-300 flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-800 peer-checked:text-white dark:peer-checked:text-slate-50 dark:text-slate-500 dark:peer-checked:bg-slate-900">
                            {btnName}
                        </div>
                    </Label>

                </div>

        </div>;
}

export default RadioButton;
