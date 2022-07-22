import React, { useEffect, useState } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import ReactFlagsSelect from 'react-flags-select';
import InputSelect from '@/Components/InputSelect';
import RadioButton from '@/Components/RadioButton';

function SetUpProfileStepThree() {
    const { data, setData, post, processing, errors, reset } = useForm({
        highest_education: '',
        graduation_year: '',
        current_profession: '',
        for_how_long: '',
        company_name: '',
        yearly_income: '',
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
        post('set-up-profile-step-4');
    };

    const educationOptions = [
        {value: 'Masters', label: 'Masters'},
        {value: 'Bachelor', label: 'Bachelor'},
        {value: 'PHD', label: 'PHD'},
    ];

    const yearsOptions = [
        {value: 'Newly Joined', label: 'Newly Joined'},
        {value: '1-3 Years', label: '1-3 Years'},
        {value: '3-5 Years', label: '3-5 Years'},
        {value: '5+ Years', label: '5+ Years'},
    ];

    let minOffset = 0, maxOffset = 60;
    let thisYear = (new Date()).getFullYear();
    let allYears = [];
    for(let x = 0; x <= maxOffset; x++) {
        allYears.push(thisYear - x)
    }

    return <Guest
                bgimage="bg-career-background"
                title="Help us find the perfect match for you"
                subtitle="Tell us more about your lifestyle"
                linktext="Need help ?"
                href="/"
                btnName="Contact support"
            >
                <Head title="Suitable | Set up profile" />
                
                <div className="text-center">
                    <div className="flex mb-2 justify-between items-center">
                        <h2 className="mt-6 text-lg font-semibold text-gray-900">
                            Education | Carrier
                        </h2>
                        <p className="mt-6 text-xl font-bold text-gray-900">50%</p>
                    </div>
                    <div className="h-2 w-full bg-slate-400 relative rounded-full">
                        <div className="h-2 w-[280px] bg-slate-800 absolute z-50 rounded-full"></div>
                    </div>
                </div>

                <ValidationErrors errors={errors} />

                <form onSubmit={submit}>
                    <div className="mt-4">
                        <Label forInput="highest_education" value="Highest Education" />
                        <InputSelect 
                            defaultValue={data.highest_education} 
                            onChange={onHandleChange} 
                            options={educationOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder='Your educational qualification'
                            name={`highest_education`}
                        />
                    </div>
                    
                    <div className="mt-4">
                        <Label forInput="graduation_year" value="Graduation Year" />
                        <select 
                            className={
                                `mt-1 border-gray-300 rounded-xl shadow-sm`
                            }
                            onChange={onHandleChange}
                            name="graduation_year" 
                            value={data.graduation_year} 
                        >
                            <option selected>Select graduation year</option>
                            {
                                allYears.map((year) => <option value={year} key={year}>{year}</option>)
                            }
                        </select>
                    </div>

                    <div className="mt-4">
                        <Label forInput="current_profession" value="Profession" />
                        <Input
                            type="text"
                            name="current_profession"
                            value={data.current_profession}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>
                    
                    <div className="mt-4">
                        <Label forInput="for_how_long" value="Years" />
                        <InputSelect 
                            defaultValue={data.for_how_long} 
                            onChange={onHandleChange} 
                            options={yearsOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder='How long have you been in this position?'
                            name={`for_how_long`}
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="company_name" value="Company Name" />
                        <Input
                            type="text"
                            name="company_name"
                            value={data.company_name}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="yearly_income" value="Yearly Income" />
                        <Input
                            type="number"
                            name="yearly_income"
                            value={data.yearly_income}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
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

export default SetUpProfileStepThree;
