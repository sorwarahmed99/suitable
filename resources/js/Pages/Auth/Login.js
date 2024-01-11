import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

import LogoPurple from '../../../../public/assets/images/logo-purple.svg';
import LogoLight from '../../../../public/assets/images/logo-light.svg';



export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <Guest
            bgimage = "bg-login-background" title = "Bismillah...."  subtitle = "Start Your soulmate search with the world's most reliable match making site!" linktext = "Need Help ?" href = "/register" btnName="Contact Support"
        >
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="text-center mb-2">
                <Link href="/" className="flex">
                    <img className="w-full h-7 block dark:hidden" src={LogoPurple} alt="shape" />
                    <img className="w-full h-7 hidden dark:block" src={LogoLight} alt="shape" />
                </Link>
            </div>
            <ValidationErrors errors={errors} />

            <form className="sm:px-12 px-2" onSubmit={submit}>
                <div className="mt-4 mb-6 border-b border-slate-200 pb-3">
                    <h2 className="mt-6 text-md font-semibold text-gray-900 dark:text-slate-50">
                        Welcome Back
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-slate-300">Enter your login credentials</p>
                </div>
                <div >
                    <Label forInput="email" value="Email"/>

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        isFocused={true}
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
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center justify-between mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-indigo-400 hover:text-blue-500 underline text-sm"
                        >
                            Reset
                        </Link>
                    )}
                </div>

                <div className="mt-4">
                    <Button className="w-full" processing={processing}>
                        Log in
                    </Button>
                </div>
                <p className="mt-4 text-center text-sm text-gray-600 dark:text-slate-300 max-w">
                    Don't have an account ? {` `}
                    <Link href="/register" className="text-purple-700 dark:text-purple-200 font-bold hover:text-purple-900 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign up</Link>
                </p>
            </form>
            
        </Guest>
    );
}
