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

function SetUpProfileStepTwo() {
    const [selected, setSelected] = useState('');
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
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

        post(route('register'));
    };
  return <Guest
            bgimage="bg-login-background"
            title="Help us find the perfect match for you."
            subtitle="Share your details to find the one!"
            linktext="Need help ?"
            href="/"
            btnName="Contact support"
        >
                <Head title="Suitable | Set up profile" />

                <div className="text-center">
                    <div className="flex mb-2 justify-between items-center">
                        <h2 className="mt-6 text-lg font-semibold text-gray-900">
                            Lifestyle / Current status
                        </h2>
                        <p className="mt-6 text-xl font-bold text-gray-900">40%</p>
                    </div>
                    <div className="h-2 w-full bg-slate-400 relative">
                        <div className="h-2 w-[200px] bg-slate-800 absolute z-50"></div>
                    </div>
                </div>

                <ValidationErrors errors={errors} />

                <form onSubmit={submit}>

                    <div className="mt-4">
                        <Label forInput="ethnic-origin" value="Religious History" />

                        <InputSelect name="ethnic-origin">
                            <option value="">Your religious history</option>
                            <option value="{value}">Convert</option>
                            <option value="{value}">Revert</option>
                        </InputSelect>
                   </div>

                   <div className="mt-4">
                        <Label forInput="ethnic-origin" value="Do you pray" />

                        <InputSelect name="ethnic-origin">
                            <option value="">Please select your prayer frequency</option>
                            <option value="{value}">Regular</option>
                            <option value="{value}">Sometimes</option>
                        </InputSelect>
                   </div>


                   <div className="mt-4">
                        <Label forInput="ethnic-origin" value="Sect" />

                        <InputSelect name="ethnic-origin">
                            <option value="">What sect are you</option>
                            <option value="{value}">Sunni</option>
                            <option value="{value}">Shia</option>
                        </InputSelect>
                   </div>


                   <div className="mt-4">
                        <Label forInput="ethnic-origin" value="Marital Status" />

                        <InputSelect name="ethnic-origin">
                            <option value="">Select your Marital Status</option>
                            <option value="{value}">Never married</option>
                            <option value="{value}">Divorced</option>
                        </InputSelect>
                   </div>


                   <div className="mt-4">
                        <Label forInput="ethnic-origin" value="Get married" />

                        <InputSelect name="ethnic-origin">
                            <option value="">When would you like to</option>
                            <option value="{value}">As soon as possible</option>
                            <option value="{value}">Not now</option>
                        </InputSelect>
                   </div>

                    <div className="mt-4">
                        <Label forInput="ethnic-origin" value="Do you have children" />

                        <InputSelect name="ethnic-origin">
                            <option value="">Select how many</option>
                            <option value="{value}">None</option>
                            <option value="{value}">1</option>
                        </InputSelect>
                    </div>

                    <div className="mt-4">
                        <Label forInput="gender" value="Like to have children" />
                        <div className="flex items-baseline mb-2 pb-2 space-x-2">
                            <RadioButton name="gender" value="Yes" btnName="Yes" />
                            <RadioButton name="gender" value="No" btnName="No" />
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

export default SetUpProfileStepTwo;
