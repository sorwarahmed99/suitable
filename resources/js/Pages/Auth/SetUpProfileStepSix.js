import React, { useEffect, useState } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react';
import ReactFlagsSelect from 'react-flags-select';
import InputSelect from '@/Components/InputSelect';
import RadioButton from '@/Components/RadioButton';

function SetUpProfileStepSix() {

    const {interests} = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        height: '',
        hair_color: '',
        fitness: '',
        bio: '',
        interests: [],
    });

    
    const handleChecked = (e) => {
        let id = e.target.value;
        if (e.target.checked) {
            setData("interests", [...data.interests, id]);
        } else {
            setData(
                "interest",
                data.interests.filter((item) => {
                    return item !== id;
                })
            );
        }
    };



const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
};

const submit = (e) => {
    e.preventDefault();
    post('set-up-profile-step-6');
};



const fitnessOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
    { value: "Hidden", label: "Prefer not to say" },
];
const hairColorOptions = [
    { value: "Brown", label: "Brown" },
    { value: "Black", label: "Black" },
    { value: "Hidden", label: "Prefer not to say" },
]
const heightOptions = [
    {value: '4ft', label: '4ft'},
    {value: '4ft 5in', label: '4ft 5in'},
    {value: '5ft', label: '5ft'},
    {value: '5ft 5in', label: '5ft 5in'},
    {value: '5ft 6in', label: '5ft 6in'},
    {value: '5ft 7in', label: '5ft 7in'},
    {value: '5ft 8in', label: '5ft 8in'},
    {value: '5ft 9in', label: '5ft 9in'},
    {value: '6ft', label: '6ft'},
    {value: '6ft 1in', label: '6ft 1in'},
    {value: '6ft 2in', label: '6ft 2in'},
    {value: '6ft 3in', label: '6ft 3in'},
];


return <Guest bgimage="bg-login-background">
            <Head title="Suitable | Set up profile" />
            
            <div className="text-center">
                <div className="flex mb-2 justify-between items-center">
                    <h2 className="mt-6 text-lg font-semibold text-gray-900">
                        About You
                    </h2>
                    <p className="mt-6 text-xl font-bold text-gray-900">99%</p>
                </div>
                <div className="h-2 w-full bg-slate-400 relative rounded-full">
                    <div className="h-2 w-[330px] md:w-[430px] bg-slate-800 absolute z-50 rounded-full"></div>
                </div>
            </div>

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="mt-4">
                    <Label forInput="height" value="Height" />
                    <InputSelect 
                        defaultValue={data.height} 
                        onChange={onHandleChange} 
                        options={heightOptions} 
                        className={`block w-full sm:text-sm`} 
                        placeholder='Select your height'
                        name={`height`}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="hair_color" value="Hair Color" />
                    <InputSelect 
                        defaultValue={data.hair_color} 
                        onChange={onHandleChange} 
                        options={hairColorOptions} 
                        className={`block w-full sm:text-sm`} 
                        placeholder='Select your hair color'
                        name={`hair_color`}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="fitness" value="Fitness" />
                    <InputSelect 
                        defaultValue={data.fitness} 
                        onChange={onHandleChange} 
                        options={fitnessOptions} 
                        className={`block w-full sm:text-sm`} 
                        placeholder='Select if you like work out ?'
                        name={`fitness`}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="bio" value="About you" />
                    <textarea id="about" name="bio" onChange={onHandleChange} className="bg-transparent border mt-1 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded-lg text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-700 dark:text-gray-700" placeholder="Share something nice about you ..." rows={5} defaultValue={data.bio} />
                    <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">Character Limit: 1000</p>
                </div>

                <div className="mt-4 border-b border-slate-200">
                    <Label forInput="interests" value="Interests" />

                    <div className="flex flex-wrap items-baseline mt-2 pb-2 space-x-2">
                        {interests.map(({ name, id, svg }) => (
                            <div key={name}>
                                <label class="inline-flex items-center mt-2">
                                    <input type="checkbox" name="interests[]" class="sr-only peer" onChange={handleChecked} value={id} />
                                    <span class="px-4 py-2 text-xs cursor-pointer font-semibold rounded-full border border-slate-300 flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-indigo-50  peer-checked:border-red-400 peer-checked:text-red-400">
                                    <span className="font-normal mr-2 h-5 w-5"><div dangerouslySetInnerHTML={{ __html: svg}} /></span>    {name}
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="bg-gray-800 hover:bg-gray-900 text-gray-50 font-bold py-2 px-4 rounded inline-flex items-center" processing={processing}>
                        <span>Next</span>
                        <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Button>
                </div>
            </form>
    </Guest>;
}

export default SetUpProfileStepSix