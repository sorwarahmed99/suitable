import React from 'react'
import { Head, InertiaLink, Link, useForm, usePage } from '@inertiajs/inertia-react';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import RadioButton from '@/Components/RadioButton';

function ChooseAPlan() {

    const { plans, stripeKey, checkoutSessionId  } = usePage().props;
    // const { data } = plans;

    const { data, setData, post, processing, errors, reset } = useForm({
        id: '',
    });

    const onHandleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        // setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);

    };

    const submit = (e) => {
        e.preventDefault();
        post(route('choosePlanStore'));
    };

    const checkout = () => {
        console.log(checkoutSessionId);
        return window.Stripe(stripeKey).redirectToCheckout({
          sessionId: checkoutSessionId
        });
      }

    return (
        <Guest
            bgimage = "bg-plan-background" 
        >
            <Head title="Suitable | Choose a plan" />
            <div className="flex flex-col lg:items-center justify-center w-full">
                <h1 className="font-semibold text-gray-800 text-xl md:text-3xl">Choose your plan</h1>
                <p className="mt-2.5 lg:w-2/3 lg:text-center text-xs md:text-sm text-gray-600">Choose a plan to enjoy all premium features of suitable. Get everything you need</p>
            </div>
            <div className="container mx-auto w-auto">
                <div className="py-5 px-4 bg-white border border-gray-200shadow rounded-lg text-left">
                    <h4 className="text-2xl text-slate-700 font-medium pb-6">14 days free trial</h4>
                    <ul className="flex flex-col mb-6">
                        <li className="flex items-center mb-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <p className="text-gray-800 text-base font-normal">Unlimited profile browsing</p>
                        </li>
                        <li className="flex items-center mb-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <p className="text-gray-800 text-base font-normal">Unlimited Profile Request</p>
                        </li>
                        <li className="flex items-center mb-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <p className="text-gray-800 text-base font-normal">£20 per month to continue after trial ends</p>
                        </li>
                        <li className="flex items-center mb-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <p className="text-gray-400 text-base font-normal">Unlimited Chat</p>
                        </li>
                        <li className="flex items-center mb-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <p className="text-gray-400 text-base font-normal">24/7 Special Admin Support</p>
                        </li>
                        <li className="flex items-center mb-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <p className="text-gray-400 text-base font-normal">Cancel Anytime</p>
                        </li>
                    </ul>
                    <p className="text-base text-slate-700 relative pl-3">
                        <span className="text-md font-semibold text-slate-500">You will not charge today!</span>
                    </p>
                    <button
                        onClick={checkout} 
                        className="mt-5 w-full bg-purple-700 hover:bg-purple-900 focus:outline-none transition duration-150 ease-in-out rounded text-slate-50 px-8 text-base font-semibold py-3">
                            Start your free week
                    </button>
                    {/* <form onSubmit={submit}>
                        {plans.map(({ id, plan_name, plan_price }) => (
                            <div className="mt-4" key={id}>
                                <Label forInput="plan_id"  value={`${plan_name} £ ${plan_price} - ${id}`} />

                                <Input
                                    type="text"
                                    name={`id`}
                                    defaultValue={data.id}
                                    className="mt-1 block w-full"
                                    handleChange={onHandleChange}
                                />

                                <label>
                                    <input type="radio"
                                        checked={true} 
                                        defaultValue={id} 
                                        name={id} 
                                        value={id} 
                                        onChange={e => setData('id', e.target.value)} 
                                        // The checked attribute controls default checking
                                    />
                                    Radio checked!
                                </label> 

                                <RadioButton checked={true} name={id} value={id} btnName={id} handleChange={onHandleChange} />
                                <input type="radio" checked={true} defaultValue={id} name={id} value={id} onChange={e => setData('id', e.target.value)} />

                                <div className="mt-4">
                                    <InertiaLink 
                                        href={route('subscription')}
                                        className="mt-5 w-full bg-gray-700 hover:bg-gray-900 focus:outline-none transition duration-150 ease-in-out rounded text-slate-50 px-8 text-base font-semibold py-3">
                                            Start your free week
                                    </InertiaLink>
                                </div>

                                <div className="mt-4">
                                    <Button 
                                        type="submit" 
                                        // processing={processing} 
                                        className="mt-5 w-full bg-gray-700 hover:bg-gray-900 focus:outline-none transition duration-150 ease-in-out rounded text-slate-50 px-8 text-base font-semibold py-3">
                                            Start your free week
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </form>*/}
                    
                </div>
            </div>
        </Guest>)
}

export default ChooseAPlan