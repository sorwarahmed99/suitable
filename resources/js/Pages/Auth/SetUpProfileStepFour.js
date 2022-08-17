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

function SetUpProfileStepFour(props) {
    const [nextStep, setNextStep] = useState(true);

    const { data, setData, post, processing, errors, reset } = useForm({
        religious_history:'',
        prayer_frequency: '',
        read_quran: '',
        sect: '',
        eat_halal: '',
        drink_alchohol: '',
        wear_hijab_keep_beard: '',
        _token: props.csrf_token,
    });


    const regiousHistoryOptions = [
        { value: "From birth", label: "From birth" },
        { value: "Revert", label: "Revert" },
        { value: "Other", label: "Other" },
    ];

    const readQuranOptions = [
        { value: "Yes, I have completed", label: "Yes, I have completed" },
        { value: "Yes, but I’m still learning", label: "Yes, but I’m still learning" },
        { value: "Still learning Arabic", label: "Still learning Arabic" },
        { value: "No, I can’t read ", label: "No, I can’t read " },
    ];

    const sectOptions = [
        { value: "Sunni", label: "Sunni" },
        { value: "Shia", label: "Shia" },
        { value: "Ahmadi", label: "Ahmadi" },
        { value: "Ibadi", label: "Ibadi" },
        { value: "Ismaili", label: "Ismaili" },
        { value: "Other", label: "Other" },
    ];

    const prayerFrequencyOptions = [
        { value: "Never Missed", label: "Never Missed" },
        { value: "Sometimes Miss", label: "Sometimes Miss" },
        { value: "Occasionally", label: "Occasionally" },
        { value: "Hidden", label: "Prefer not to say" },
    ];

    const drinkAlchoholOptions = [
        { value: "Yes", label: "Yes, doesn’t matter to me" },
        { value: "No", label: "No" },
        { value: "Occasionally", label: "Occasionally" },
        { value: "Hidden", label: "Prefer not to say" },
    ];

    const eatHalalOptions = [
        { value: "Yes", label: "Yes, always" },
        { value: "No, doesn’t matter to me", label: "No, doesn’t matter to me" },
        { value: "Sometimes", label: "Sometimes" },
        { value: "Hidden", label: "Prefer not to say" },
    ];

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post('set-up-profile-step-4');
    };

    return <Guest
                bgimage="bg-rel-background"
            >
                <Head title="Suitable | Set up profile" />
                
                <div className="text-center">
                    <div className="flex mb-2 justify-between items-center">
                        <h2 className="mt-6 text-lg font-semibold text-gray-900">
                            Religious view
                        </h2>
                        <p className="mt-6 text-xl font-bold text-purple-600">50%</p>
                    </div>
                    <div className="h-2 w-full bg-slate-400 relative rounded-full">
                        <div className="h-2 w-[280px] bg-slate-800 absolute z-50 rounded-full"></div>
                    </div>
                </div>

                <ValidationErrors errors={errors} />
                <form onSubmit={submit}>
                    <div className="mt-4">
                            <Label forInput="religious_history" value="Religious history" />
                            <InputSelect 
                                value={data.religious_history} 
                                onChange={onHandleChange} 
                                options={regiousHistoryOptions} 
                                className={`block w-full sm:text-sm`} 
                                placeholder='Select your religious history'
                                name={`religious_history`}
                            />
                    </div>

                    <div className="mt-4">
                            <Label forInput="prayer_frequency" value="Do you pray" />
                            <InputSelect 
                                value={data.prayer_frequency} 
                                onChange={onHandleChange} 
                                options={prayerFrequencyOptions} 
                                className={`block w-full sm:text-sm`} 
                                placeholder='Select your prayer frequency'
                                name={`prayer_frequency`}
                            />
                    </div>

                    <div className="mt-4">
                        <Label forInput="sect" value="Sect" />
                        <InputSelect 
                            value={data.sect} 
                            onChange={onHandleChange} 
                            options={sectOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder='What sect are you?'
                            name={`sect`}
                            required={true}
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="read_quran" value="Read Quran" />
                        <InputSelect 
                            value={data.read_quran} 
                            onChange={onHandleChange} 
                            options={readQuranOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder='Can you read Quran?'
                            name={`read_quran`}
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="eat_halal" value="Eating Halal" />
                        <InputSelect 
                            value={data.eat_halal} 
                            onChange={onHandleChange} 
                            options={eatHalalOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder='Do you eat halal?'
                            name={`eat_halal`}
                            required={true}
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="drink_alchohol" value="Drink" />
                        <InputSelect 
                            value={data.drink_alchohol} 
                            onChange={onHandleChange} 
                            options={drinkAlchoholOptions} 
                            className={`block w-full sm:text-sm`} 
                            placeholder='Do you drink alchohol ?'
                            name={`drink_alchohol`}
                            required={true}
                        />
                    </div>
                    

                        <div className="mt-4">
                            <div className="flex items-baseline mb-2 pb-2 space-x-2">
                                <div className="w-1/3">
                                    <Label forInput="wear_hijab_keep_beard" value={`${props.auth.user.gender == "Male" ? "Keep Beard" : "Wear Hijab ?" }`} />
                                </div>
                                <div className="w-2/3 flex justify-end space-x-1">
                                    <RadioButton name="wear_hijab_keep_beard" value={`Yes`} btnName="Yes" handleChange={onHandleChange} />
                                    <RadioButton name="wear_hijab_keep_beard" value={`No`} btnName="No" handleChange={onHandleChange} />
                                    <RadioButton name="wear_hijab_keep_beard" value={`Hidden`} btnName="Prefer not to say" handleChange={onHandleChange} />
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

export default SetUpProfileStepFour;
