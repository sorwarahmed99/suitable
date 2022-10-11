import React, { useEffect, useState } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

import RadioButton from '@/Components/RadioButton';
import InputSelect from '@/Components/InputSelect';

function SetUpProfileStepThree(props) {
    const [add, setAdd] = useState(false);

    const toggle = () => {
        setAdd(!add);
    }

    const { data, setData, post, processing, errors, reset } = useForm({    
        highest_education: '',
        university: '',
        university_graduation_year: '',
        course_name: '',
        college: '',
        college_course_name: '',
        college_graduation_year: '',
        current_profession: '',
        company_name: '',
    });


    const educationOptions = [
        {value: 'Bachelor', label: 'Bachelor'},
        {value: 'Masters', label: 'Masters'},
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


    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('setupprofilestep3store'));
    };
    return <Guest
                bgimage="bg-career-background"
            >
                <Head title="Suitable | Set up profile" />

                <div>
                    {/* <Link href="/register" className="flex items-start justify-start">
                        <img className="h-5 w-full" src="assets/images/logo.svg" alt="suitable-logo" />
                    </Link> */}
                    <div className="flex mb-2 justify-between items-center">
                        <h2 className="mt-6 text-md sm:text-lg font-semibold text-gray-900  dark:text-slate-50">
                            Career | Education
                        </h2>
                        <p className="mt-6 text-lg sm:text-xl font-semibold text-purple-600 dark:text-purple-50">40%</p>
                    </div>
                   
                    <div className="h-2 w-full bg-slate-400  dark:bg-slate-600 relative rounded-full">
                        <div className="h-2 w-[150px] bg-slate-800 dark:bg-slate-50 absolute z-50 rounded-full"></div>
                    </div>
                </div>

                <ValidationErrors errors={errors} />
                <form onSubmit={submit}>
                    <div className="mt-4">
                        <Label forInput="highest_education" value="Highest Education" />
                        {/* <InputSelect 
                            defaultValue={data.highest_education} 
                            onChange={onHandleChange} 
                            options={educationOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder='Select your most recent university or college qualification'
                            name={`highest_education`}
                        /> */}
                        <Input
                            type="text"
                            name="highest_education"
                            value={data.highest_education}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            placeholder="Your most recent university or college qualification"
                        />
                    </div>

                    <div className="flex mt-4">
                        <div className="w-2/3 pr-2">
                            <Label forInput="university" value="University Name" />
                            <Input
                                type="text"
                                name="university"
                                value={data.university}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                                placeholder="Enter university name"
                            />
                        </div>

                        <div className="w-1/2">
                            <Label forInput="course_name" value="Course Name" />
                            <Input
                                type="text"
                                name="course_name"
                                value={data.course_name}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                                placeholder="Enter course name"
                            />
                            
                        </div>
                    </div>
                    
                    {/* <p onClick={setAdd(true)} >Add more </p> */}
                    <p className="mb-0 pb-0 flex item-right justify-end text-sm font-semibold cursor-pointer text-purple-600" onClick={() => toggle()}>
                        {add ? "-" : "Add more education"}
                    </p>

                    {add ? (
                        <div className="flex mt-2">
                            <div className="w-2/3 pr-2">
                                <Label forInput="college" value="College" />
                                <Input
                                    type="text"
                                    name="college"
                                    value={data.college}
                                    className="mt-1 block w-full"
                                    handleChange={onHandleChange}
                                    placeholder="Enter college name"
                                />
                            </div>

                            <div className="w-1/2">
                                <Label forInput="college_course_name" value="Course name" />
                                <Input
                                    type="text"
                                    name="college_course_name"
                                    value={data.college_course_name}
                                    className="mt-1 block w-full"
                                    handleChange={onHandleChange}
                                    placeholder="Enter course name"
                                />
                            </div>
                        </div>
                    ) : ''}

                    <div className="mt-4">
                        <Label forInput="current_profession" value="Current profession" />
                        <Input
                            type="text"
                            name="current_profession"
                            value={data.current_profession}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
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
                        />
                        <p className="text-slate-500 text-xs font-medium">This will not show in on your profile</p>
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
{/* <select 
    className={
        `mt-1 border-gray-300 rounded-xl shadow-sm`
    }
    onChange={onHandleChange}
    name="university_graduation_year" 
    value={data.university_graduation_year} 
>
    <option selected>Select year</option>
    {
        allYears.map((year) => <option value={year} key={year}>{year}</option>)
    }
</select> */}