import React, { useEffect, useState } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import InputSelect from '@/Components/InputSelect';
import RadioButton from '@/Components/RadioButton';

function SetUpProfileStepOne() {    
    const { data, setData, post, processing, errors, reset } = useForm({
        date_of_birth: '',
        gender: '',
        height: '',
        marital_status: '',
        siblings: '',
        ethnic_origin: '',
    });

    const heightOptions = [
        {value: '4ft', label: '4ft'},
        {value: '4ft 5in', label: '4ft 5in'},
        {value: '5ft', label: '5ft'},
        {value: '5ft 5in', label: '5ft 5in'},
        {value: '5ft 6in', label: '5ft 6in'},
        {value: '5ft 7in', label: '5ft 7in'},
        {value: '5ft 8in', label: '5ft 8in'},
        {value: '5ft 9in', label: '5ft 9in'},
        {value: '5ft 10in', label: '5ft 10in'},
        {value: '5ft 11in', label: '5ft 11in'},
        {value: '6ft', label: '6ft'},
        {value: '6ft 1in', label: '6ft 1in'},
        {value: '6ft 2in', label: '6ft 2in'},
        {value: '6ft 3in', label: '6ft 3in'},
        {value: '6ft 4in', label: '6ft 4in'},
        {value: '6ft 5in', label: '6ft 5in'},
        {value: '6ft 6in', label: '6ft 6in'},
        {value: '6ft 7in', label: '6ft 7in'},
        {value: '6ft 8in', label: '6ft 8in'},
        {value: '6ft 9in', label: '6ft 9in'},
        
        // {value: '6ft 10in', label: '6ft 10in'},
        // {value: '6ft 11in', label: '6ft 11in'},

    ];

    const maritalStatusOptions = [
        { value: "Single", label: "Single" },
        { value: "Divorced", label: "Divorced" },
        { value: "Widowed", label: "Widowed" },
        { value: "Hidden", label: "Prefer not to say" },
    ];

    const ethnicOriginOptions = [
        { value: "Mixed Heritage", label: "Mixed Heritage"},
        { value: "Nigerian", label: "Nigerian"},
        { value: "Pakistani", label: "Pakistani"},
        { value: "Persian", label: "Persian"},
        { value: "Somali", label: "Somali"},
        { value: "Sudanese", label: "Sudanese"},
        { value: "Turkish", label: "Turkish"},
        { value: "Other", label: "Other"},
        { value: "Caribbean", label: "Caribbean"},
        { value: "Egyptian", label: "Egyptian"},
        { value: "Indian", label: "Indian"},
        { value: "Asian", label: "Asian"},
        { value: "Indonesian", label: "Indonesian"},
        { value: "Iraqi", label: "Iraqi"},
        { value: "Kurdish", label: "Kurdish"},
        { value: "Latino", label: "Latino"},
        { value: "Malay", label: "Malay"},
        { value: "West African", label: "West African"},
        { value: "African American", label: "African American"},
        { value: "North American", label: "North American"},
        { value: "European", label: "European"},
        { value: "Far East Asian", label: "Far East Asian"},
        { value: "Afghan", label: "Afghan"},
        { value: "Bangladeshi", label: "Bangladeshi"},
        { value: "Berber", label: "Berber"},
        { value: "Arab", label: "Arab"},
        { value: "Central African", label: "Central AfricanBerber"},
        { value: "East African", label: "East African"},
        { value: "North African", label: "North African"},
        { value: "South African", label: "South African"},
        { value: "West African", label: "West African"},
    ];

    let nums = [];
    let min = 1, max = 20;
    for(let i = min; i <= max; i++){
        nums.push(i);
    }

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.type === 'hidden' ? e.target.defaultValue : e.target.value);
        // setData({ ...data, [e.target.name]: e.target.value });
    };

    const submit = (e) => {
        e.preventDefault();
        post('set-up-profile-step-1');
        // post(route('set-up-profile-step-1'));

    };

    return <Guest
                bgimage="bg-location-background"
            >
                <Head title="Suitable | Set up profile" />
                <div className="text-center">
                    <div className="flex mb-2 justify-between items-center">
                        <h2 className="mt-6 text-lg font-semibold text-gray-900">
                            Your personal information
                        </h2>
                        <p className="mt-6 text-xl font-bold text-purple-600">20%</p>
                    </div>
                    <div className="h-2 w-full bg-slate-400 relative rounded-full">
                        <div className="h-2 w-[100px] bg-slate-800 absolute z-50 rounded-full"></div>
                    </div>
                </div>

                <ValidationErrors errors={errors} />

                <form onSubmit={submit}>

                    <div className="mt-4">
                        <Label forInput="date_of_birth" value="Date of Birth" />

                        <Input
                            type="date"
                            name="date_of_birth"
                            value={data.date_of_birth}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="gender" value="Gender" />
                        <div className="flex items-baseline mb-2 pb-2 space-x-2">
                            <RadioButton name="gender" value={ `Male` } btnName="Male" handleChange={onHandleChange} />
                            <RadioButton name="gender" value={`Female`} btnName="Female" handleChange={onHandleChange} />
                        </div>
                    </div>

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
                        <Label forInput="marital_status" value="Marital Status" />
                        <InputSelect 
                            defaultValue={data.marital_status} 
                            onChange={onHandleChange} 
                            options={maritalStatusOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder='Select your Marital Status'
                            name={`marital_status`}
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="siblings" value="Number of siblings" />
                        <select 
                            className={
                                `mt-1 border-gray-300 rounded-xl shadow-sm`
                            }
                            onChange={onHandleChange}
                            name="siblings" 
                            value={data.siblings} 
                        >
                            <option value="">Select how many</option>
                            <option value="0">I am only child</option>
                            {
                                nums.map((num) => <option value={num} key={num}>{num}</option>)
                            }
                        </select>
                    </div>

                    {/* <div className="mt-4">
                        <Label forInput="how_many_brothers_and_sisters" value="Description of brothers and sisters" />
                        <Input
                            type="text"
                            name="how_many_brothers_and_sisters"
                            value={data.how_many_brothers_and_sisters}
                            placeholder={`Write in short.. `}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                        />
                    </div> */}

                    <div className="mt-4">
                        <Label forInput="ethnic-origin" value="Ethnic origin" />
                        <InputSelect 
                            defaultValue={data.ethnic_origin} 
                            onChange={onHandleChange} 
                            options={ethnicOriginOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder='Select your ethnic origin'
                            name={`ethnic_origin`}
                        />
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

export default SetUpProfileStepOne;
