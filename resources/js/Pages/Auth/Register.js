import React, { useEffect, useState } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import RadioButton from '@/Components/RadioButton';
import InputSelect from '@/Components/InputSelect';

export default function Register(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        _token: props.csrf_token,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value, event.target.type === 'radio' ? event.target.checked : event.target.value );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Guest
            bgimage = "bg-register-background" 
        >
            <Head title="Suitable | Sign up" />

            <div className="text-center">
                <Link href="/">
                    {/* <img className="h-7 w-full" src="assets/images/logo.svg" alt="shape" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-500 dark:text-white">Suitable</span>
                </Link>
                <h2 className="mt-6 text-md font-medium text-gray-900">
                    Start Your soulmate search with the world's most reliable match making site!
                </h2>
                {/* <p className="mt-2 text-center text-sm text-gray-600 max-w">
                    Need Help
                    <Link href="/faq" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"> Contact Support</Link>
                </p> */}
            </div>

            <ValidationErrors errors={errors} />

            <form className="sm:px-12 px-2" onSubmit={submit}>
                <div className="mt-4 mb-6 border-b border-slate-200 pb-3">
                    <h2 className="mt-6 text-md font-semibold text-gray-900">
                        Create new account
                    </h2>
                </div>

                <div className="flex">
                    <div className="w-1/2 pr-2">
                        <Label forInput="firstname" value="First name" />
                        <Input
                            type="text"
                            name="firstname"
                            value={data.firstname}
                            className="mt-1 block w-full"
                            isFocused={false}
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className="w-1/2">
                        <Label forInput="lastname" value="Last name" />
                        <Input
                            type="text"
                            name="lastname"
                            value={data.lastname}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <Label forInput="email" value="Email" />
                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center pt-5">
                    <Input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" className="" required />
                    <label htmlFor="terms-and-privacy" className="ml-2 block text-sm text-gray-900"
                        >I agree to the
                        <a href="#" className="text-indigo-600 font-medium hover:text-indigo-500"> Terms </a>
                          and
                        <a href="#" className="text-indigo-600 font-medium hover:text-indigo-500">  Data Policy</a>.
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="w-full" processing={processing}>
                        Sign Up
                    </Button>
                </div>
            </form>
            <p className="text-center text-sm text-gray-600">
                Already registered ? {` `}
                <Link href="/login" className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign in</Link>
            </p>
        </Guest>
    );
}
