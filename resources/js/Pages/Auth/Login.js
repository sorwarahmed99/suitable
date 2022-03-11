import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

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
            <div className="text-center">
                <Link href="/register" className="flex items-center justify-center">
                    <img className="mr-3 h-10 w-10" src="assets/images/logo.png" alt="shape" />
                    <span className="hidden sm:block self-center text-xl font-semibold whitespace-nowrap dark:text-white">Suitable</span>
                </Link>
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                    Login to your account 
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600 max-w">
                    Don't have account ? {` `}
                    <Link href="/register" className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign up</Link>
                </p>
            </div>
            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Email" className="block text-sm font-medium text-gray-700" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
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
                            className="text-indigo-400 hover:text-blue-500 underline font-medium"
                        >
                            Forgot password?
                        </Link>
                    )}
                </div>

                <div className="mt-4">
                    <Button className="w-full" processing={processing}>
                        Log in
                    </Button>
                </div>
                
            </form>

        </Guest>
    );
}
