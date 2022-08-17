import React, { useEffect,useState } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import { LockClosedIcon } from '@heroicons/react/solid'
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const [show, setshow] = useState(true);
    const [password, setpassword] = useState("password");

    const showPassword = () => {
            if(password=="password") {
                setpassword("text");
            }
            else {
                    setpassword("password");
                    setshow(true);                }
        }

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
        post(route('admin.adminlogin'));
    };

    return (
        <>
            <Head title="Admin | Log in" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <div className="min-h-screen flex items-center justify-center py-5 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-3">
                    <Link href="/" className="flex items-center justify-center">
                        {/* <img className="h-12 w-auto pr-2" src="../assets/images/logo.png" alt="Suitable Logo" /> */}
                        <span className="hidden sm:block text-xl font-semibold whitespace-nowrap dark:text-white">Suitable</span>
                    </Link>
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-slate-300">Sign in to your account</h2>
                    </div>

                    <ValidationErrors errors={errors} />

                    <form className="mt-8 space-y-6"  onSubmit={submit}>
                        <Input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <Label forInput="email" value="Email" className="block text-sm font-medium text-gray-700 dark:text-slate-100" />

                                <Input
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    autoComplete="username"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-gray-200 text-gray-900 dark:text-slate-200 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>

                                <Label forInput="password" value="Password" className="sr-only" />

                                <Input
                                    type={password}
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    handleChange={onHandleChange}
                                    required
                                    // className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-gray-200 text-gray-900 dark:text-slate-200 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                                <p onClick={showPassword} className="flex items-center justify-end cursor-pointer text-xs font-semibold text-slate-500 dark:text-slate-50">Show</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Checkbox name="remember" value={data.remember} handleChange={onHandleChange}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-slate-50">
                                Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Forgot password?
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                processing={processing}
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Sign in
                            </Button>
                        </div>
                    </form>
                </div>
            </div>




        </>
    );
}


