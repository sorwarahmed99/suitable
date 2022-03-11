import React, { useEffect, useState } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';
import InputSelect from '@/Components/InputSelect';

function SetUpProfileStepThree() {
    const [nextStep, setNextStep] = useState(true);
    const { data, setData, post, processing, errors, reset } = useForm({
        siblings: '',
        a_day_living_with_family: '',
        continue_working: '',
        intend_to_move_out: '',
        issues_living_with_inlaws: '',
        future_plan: '',
        get_married: '',
        // reference_name: '',
        // contact_no: '',
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
        post('set-up-profile-step-5');
    };

    const continueWorkingOptions =  [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
        { value: "Not sure", label: "Not sure" },
    ];

    const moveOutOptions = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
        { value: "Not sure", label: "Not sure" },
    ];

    const getMarriedOptions = [
        {value: 'As soon as possible', label: 'As soon as possible'},
        {value: 'Between 1-3 Years', label: 'Between 1-3 Years'},
        {value: 'Not sure', label: 'Not sure'},
        {value: 'Prefer not to say', label: 'Prefer not to say'},
    ];


    let nums = [];
    let min = 1, max = 20;
    for(let i = min; i <= max; i++){
        nums.push(i);
    }

    return <Guest
                bgimage="bg-login-background"
                title="Help us find the perfect match for you"
                subtitle="Tell us more about your family and future plan"
                linktext="Need help ?"
                href="/"
                btnName="Contact support"
            >
                <Head title="Suitable | Set up profile" />
                
                <div className="text-center">
                    <div className="flex mb-2 justify-between items-center">
                        <h2 className="mt-6 text-lg font-semibold text-gray-900">
                            Family | Future Plan
                        </h2>
                        <p className="mt-6 text-xl font-bold text-gray-900">90%</p>
                    </div>
                    <div className="h-2 w-full bg-slate-400 relative rounded-full">
                        <div className="h-2 w-[300px] sm:w-[350px] bg-slate-800 absolute z-50 rounded-full"></div>
                    </div>
                </div>

                <ValidationErrors errors={errors} />

                <form onSubmit={submit}>
                    <div className={`${nextStep && "mt-2"}`}> {/* className should be hidden */}
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
                            <option>Select how many</option>
                            <option value="0">I am only child</option>
                            {
                                nums.map((num) => <option value={num} key={num}>{num}</option>)
                            }
                        </select>
                    </div>

                    <div className="mt-4">
                        <Label forInput="a_day_living_with_family" value="What will a day living with your family consist of? Any specific duties? " />
                        <Input
                            type="text"
                            name="a_day_living_with_family"
                            value={data.a_day_living_with_family}
                            placeholder={`Write in short.. `}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="get_married" value="Get married?" />
                        <InputSelect 
                            defaultValue={data.get_married} 
                            onChange={onHandleChange} 
                            options={getMarriedOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder={`When are you planning to get married ?`} 
                            name={`get_married`}
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="continue_working" value="Do you intend to continue working when married?" />
                        <InputSelect 
                            defaultValue={data.continue_working} 
                            onChange={onHandleChange} 
                            options={continueWorkingOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder={`Select an option`} 
                            name={`continue_working`}
                        />
                    </div>
                    
                    <div className="mt-4">
                        <Label forInput="intend_to_move_out" value="Do you intend to move out?" />
                        <InputSelect 
                            defaultValue={data.intend_to_move_out} 
                            onChange={onHandleChange} 
                            options={moveOutOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder={`Select an option`} 
                            name={`intend_to_move_out`}
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="issues_living_with_inlaws" value="Do you have issues living with in laws?" />
                        <InputSelect 
                            defaultValue={data.issues_living_with_inlaws} 
                            onChange={onHandleChange} 
                            options={moveOutOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder={`Select an option`} 
                            name={`issues_living_with_inlaws`}
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="future_plan" value="Where do you see yourself in 5 years" />
                        <Input
                            type="text"
                            name="future_plan"
                            placeholder={`Write in short.. `}
                            value={data.future_plan}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Button type="submit" className="bg-gray-800 hover:bg-gray-900 text-gray-50 font-bold py-2 px-4 rounded inline-flex items-center" processing={processing}>
                            <span>Next</span>
                            <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Button>
                    </div>
                    
                    {/* <div className={`${nextStep && "hidden"} flex items-center justify-end mt-4`}>
                        <div className="bg-gray-800 hover:bg-gray-900 cursor-pointer text-gray-50 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => setNextStep(true)}>
                            <span>Next</span>
                            <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    {
                        nextStep && (
                            <div className="mt-4 border-l-4 border-gray-700 px-4 rounded-lg">                            
                                <div className="border-b border-slate-200 mb-2">
                                    <h2 className="text-lg font-semibold text-slate-800">This is for admin varifications.</h2>
                                    <p className="font-semibold text-sm">Please enter 2 references and their contact number</p>
                                    <p className="text-xs font-sans text-slate-400 mb-2">These information will not show in your profile. We will use these information for further verification. </p>
                                </div>

                                <div className="mt-4">
                                    <Label forInput="reference_name" value="Reference 1" />
                                    <Input
                                        type="text"
                                        name="reference_name"
                                        placeholder={`Reference Name `}
                                        value={data.reference_name}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label forInput="contact_no" value="Contact number" />
                                    <Input
                                        type="number"
                                        name="contact_no"
                                        placeholder={`Contact No `}
                                        value={data.contact_no}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label forInput="reference_name" value="Reference 2" />
                                    <Input
                                        type="text"
                                        name="reference_name"
                                        placeholder={`Reference Name `}
                                        value={data.reference_name}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label forInput="contact_no" value="Contact number" />
                                    <Input
                                        type="number"
                                        name="contact_no"
                                        placeholder={`Contact No `}
                                        value={data.contact_no}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <Button type="submit" className="bg-gray-800 hover:bg-gray-900 text-gray-50 font-bold py-2 px-4 rounded inline-flex items-center" processing={processing}>
                                        <span>Next</span>
                                        <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                        )
                    } */}

                    {/* <div className="mt-4">
                        <Label forInput="ethnic-origin" value="Height" />

                        <InputSelect name="ethnic-origin">
                            <option value="">Select your height</option>
                            <option value="{value}">5ft 6in</option>
                            <option value="{value}">6ft</option>
                        </InputSelect>
                    </div>
                    <div className="mt-4">
                        <Label forInput="ethnic-origin" value="Hair color" />
                        <InputSelect name="ethnic-origin">
                            <option value="">Select your hair color</option>
                            <option value="{value}">Black</option>
                            <option value="{value}">Blonde</option>
                        </InputSelect>
                    </div> */}

                    
                </form>
        </Guest>;
}

export default SetUpProfileStepThree;
