import React, { useEffect, useState } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

import RadioButton from '@/Components/RadioButton';
import InputSelect from '@/Components/InputSelect';

function SetUpProfileStepThree() {
    const { data, setData, post, processing, errors, reset } = useForm({
        marital_status: '',
        living_with: '',
        get_married: '',
        have_children: '',
        like_to_have_children: '',
        poligony: '',
        physical_disability: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post('set-up-profile-step-3');
    };

    const livingwithOptions = [
        { value: "Parents", label: "Parents" },
        { value: "Live by myself", label: "Live by myself" },
        { value: "Hidden", label: "Prefer not say" },
    ];

    const maritalStatusOptions = [
        { value: "Never married", label: "Never married" },
        { value: "Divorced", label: "Divorced" },
    ];

    const getMarriedOptions = [
        { value: "As soon as possible", label: "As soon as possible" },
        { value: "Not now", label: "Not now" },
        { value: "Not sure", label: "Not sure" },
    ];

    const haveChildrenOptions = [
        { value: "None", label: "None" },
        { value: "Prefer not to say", label: "Prefer not to say" },
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
    ]
    return <Guest
            bgimage="bg-login-background"
            title="Help us find the perfect match for you"
            subtitle="Tell us more about your lifestyle"
            linktext="Need help ?"
            href="/"
            btnName="Contact support"
        >
                <Head title="Suitable | Set up profile" />

                <div className="">
                    <div className="flex mb-2 justify-between items-center">
                        <h2 className="mt-6 text-lg font-semibold text-gray-900">
                            Your personal information
                        </h2>
                        <p className="mt-6 text-xl font-bold text-gray-900">40%</p>
                    </div>
                    <div className="h-2 w-full bg-slate-400 relative rounded-full">
                        <div className="h-2 w-[100px] bg-slate-800 absolute z-50 rounded-full"></div>
                    </div>
                    <p className="text-xs sm:text-sm mt-4 p-2 font-black leading-snug tracking-normal">Be yourself, your match will be depending on your answers. 
                        If you don't like to answer please select "Prefer not say option"</p>
                </div>

                <ValidationErrors errors={errors} />

                <form onSubmit={submit}>
                    <div className="mt-4">
                        <Label forInput="marital_status" value="Marital Status" />
                        <InputSelect 
                            defaultValue={data.marital_status} 
                            onChange={onHandleChange} 
                            options={maritalStatusOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder={`Select your Marital Status`} 
                            name={`marital_status`}
                        />
                   </div>

                   <div className="mt-4">
                        <Label forInput="living_with" value="Who do you live with ?" />
                        <InputSelect 
                            defaultValue={data.living_with} 
                            onChange={onHandleChange} 
                            options={livingwithOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder={`Please select ... `} 
                            name={`living_with`}
                        />
                   </div>
                
                   <div className="mt-4">
                        <Label forInput="get_married" value="Get married" />
                        <InputSelect 
                            defaultValue={data.get_married} 
                            onChange={onHandleChange} 
                            options={getMarriedOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder={`When would you like to`} 
                            name={`get_married`}
                        />
                   </div>

                    <div className="mt-4">
                        <Label forInput="have_children" value="Do you have children" />
                        <InputSelect 
                            defaultValue={data.have_children} 
                            onChange={onHandleChange} 
                            options={haveChildrenOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder={`Select how many`} 
                            name={`have_children`}
                        />
                    </div>

                    <div className="mt-4">
                        <div className="flex items-baseline mb-2 pb-2 space-x-2">
                            <div className="w-1/3">
                                <Label forInput="like_to_have_children" value="Like to have children" />
                            </div>
                            <div className="w-2/3 flex justify-end space-x-1">
                                <RadioButton name="like_to_have_children" value={`Yes`} btnName="Yes" handleChange={onHandleChange}  />
                                <RadioButton name="like_to_have_children" value={`No`} btnName="No"  handleChange={onHandleChange} />
                                <RadioButton name="like_to_have_children" value={`Hidden`} btnName="Prefer not to say" handleChange={onHandleChange} />
                            </div>
                        </div>
                    </div>

                    {/* <div className="mt-4">
                        <div className="flex items-baseline mb-2 pb-2 space-x-2">
                            <div className="w-1/3">
                                <Label forInput="poligony" value="Poligony" />
                            </div>
                            <div className="w-2/3 flex justify-end space-x-1">
                                <RadioButton name="poligony" value={`Yes`} btnName="Yes" handleChange={onHandleChange} />
                                <RadioButton name="poligony" value={`No`} btnName="No" handleChange={onHandleChange}  />
                                <RadioButton name="poligony" value={`Hidden`} btnName="Prefer not to say" handleChange={onHandleChange}  />
                            </div>
                        </div>
                    </div> */}

                    <div className="mt-4">
                        <div className="flex items-baseline mb-2 pb-2 space-x-2">
                            <div className="w-1/3">
                                <Label forInput="physical_disability" value="Any Physical disability ?" />
                            </div>
                            <div className="w-2/3 flex justify-end space-x-1">
                                <RadioButton name="physical_disability" value={`Yes`} btnName="Yes" handleChange={onHandleChange} />
                                <RadioButton name="physical_disability" value={`No`} btnName="No"  handleChange={onHandleChange} />
                                <RadioButton name="physical_disability" value={`Hidden`} btnName="Prefer not to say" handleChange={onHandleChange} />
                            </div>
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

export default SetUpProfileStepThree;
