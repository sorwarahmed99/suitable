import React, { useEffect, useState } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import RadioButton from '@/Components/RadioButton';

export default function Register() {
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

    return (
        <Guest
            bgimage = "bg-login-background" title = "Bismillah...."  subtitle = "Start Your soulmate search with the world's most reliable match making site!" linktext = "Already registered ?" href = "/login" btnName="Sign in here"
        >
            <Head title="Suitable | Sign up" />

            <div className="text-center">
                <Link href="/" className="flex items-center justify-center">
                    <img className="mr-3 h-10 w-10" src="assets/images/logo.png" alt="shape" />
                    <span className="hidden sm:block self-center text-xl font-semibold whitespace-nowrap dark:text-white">Suitable</span>
                </Link>
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                    Create your account
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600 max-w">
                    Need help ?
                    <Link href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"> Contact Support</Link>
                </p>
            </div>

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="flex">
                    <div className="w-1/2 pr-2">
                        <Label forInput="name" value="First name" />
                        <Input
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                    </div>



                    <div className="w-1/2">
                        <Label forInput="name" value="Last name" />
                        <Input
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
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
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password_confirmation" value="Date of Birth" />

                    <Input
                        type="date"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4 border-b border-slate-200">
                    <Label forInput="gender" value="Gender" />
                    <div className="flex items-baseline mb-2 pb-2 space-x-2">
                        <RadioButton name="gender" value="Male" btnName="Male" />
                        <RadioButton name="gender" value="Female" btnName="Female" />
                    </div>
                </div>

                <div class="flex items-center pt-5">
                    <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" class="" />
                    <label for="terms-and-privacy" class="ml-2 block text-sm text-gray-900"
                        >I agree to the
                        <a href="#" class="text-indigo-600 hover:text-indigo-500">Terms </a>
                          and
                        <a href="#" class="text-indigo-600 hover:text-indigo-500">  Data Policy</a>.
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="w-full" processing={processing}>
                        Sign Up
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
