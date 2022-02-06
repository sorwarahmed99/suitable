import React, { useEffect, useState } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import RadioButton from '@/Components/RadioButton';
import ReactFlagsSelect from 'react-flags-select';
import InputSelect from '@/Components/InputSelect';

function SetUpProfileStepOne() {
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
                            Your profile information
                        </h2>
                        <p className="mt-6 text-xl font-bold text-gray-900">20%</p>
                    </div>
                    <div className="h-2 w-full bg-slate-400 relative">
                        <div className="h-2 w-[200px] bg-slate-800 absolute z-50"></div>
                    </div>
                </div>

                <ValidationErrors errors={errors} />
                <form onSubmit={submit}>
                    <div className="mt-4">
                        <Label forInput="ethnic-origin" value="Ethnic Origin" />
                        <InputSelect name="ethnic-origin">
                            <option value="">Please select Your ethnic origin</option>
                            <option value="{value}">Asian</option>
                            <option value="{value}">Africa</option>
                        </InputSelect>
                   </div>

                   <div className="mt-4">
                        <Label forInput="ethnic-origin" value="Recidency status" />
                        <InputSelect name="ethnic-origin">
                            <option value="">Please select your recidency status</option>
                            <option value="{value}">Citizen</option>
                            <option value="{value}">Student visa</option>
                            <option value="{value}">Work permit</option>
                        </InputSelect>
                   </div>


                   <div className="mt-4">
                        <Label forInput="ethnic-origin" value="Move abroad" />
                        <InputSelect name="ethnic-origin">
                            <option value="">Are you willing to relocate?</option>
                            <option value="{value}">Yes</option>
                            <option value="{value}">No</option>
                        </InputSelect>
                   </div>

                    <div className="mt-4">
                        <Label forInput="password_confirmation" value="Postcode" />
                        <Input
                            type="text"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Button className="bg-gray-800 hover:bg-gray-900 text-gray-50 font-bold py-2 px-4 rounded inline-flex items-center" processing={processing}>
                            <span>Next</span>
                            <svg className="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </Button>
                    </div>
                </form>
        </Guest>;
}

export default SetUpProfileStepOne;
