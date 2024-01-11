import React, { useEffect, useState } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import RadioButton from '@/Components/RadioButton';
import InputSelect from '@/Components/InputSelect';


import LogoPurple from '../../../../public/assets/images/logo-purple.svg';
import LogoLight from '../../../../public/assets/images/logo-light.svg';

export default function Register(props) {
    const [show, setShow] = useState("Show");
    const [password, setpassword] = useState("password");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        _token: props.csrf_token,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const usernameValidator = () => {
        var usernameRegex = /^[a-zA-Z0-9]+$/;;
        if (usernameRegex.test(username)) {
          setMessage("");
        } else {
            setMessage("Username must contain letters and a number*");
        }
      }

    const showPassword = () => {
            if(password=="password") {
                setpassword("text");
                setShow("Hide")
            }
            else {
                    setpassword("password");
                    setShow("Show")
                    // setshow(true);                
                }
        }

    const onHandleChange = (event) => {
        usernameValidator();
        // setUsername(event.target.value);
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
                <Link href="/" className="flex">
                    <img className="w-full h-7 block dark:hidden" src={LogoPurple} alt="shape" />
                    <img className="w-full h-7 hidden dark:block" src={LogoLight} alt="shape" />
                </Link>
            </div>

            <ValidationErrors errors={errors} />

            <form className="sm:px-12 px-2" onSubmit={submit} autocomplete="off">
                <div className="mt-4 mb-6 border-b border-slate-200 pb-3">
                    <h2 className="mt-6 text-md font-semibold text-gray-900 dark:text-slate-50">
                        Create new account
                    </h2>
                </div>

                <div className="mt-4">
                    <Label forInput="username" value="User name" />
                    <Input
                        type="text"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full"
                        autoComplete="false"
                        handleChange={onHandleChange}
                        placeholder="jhon09"
                    />
                    <p className="text-xs font-semibold text-slate-700  dark:text-slate-400">{message}</p>
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
                        placeholder="jhon@hotmail.co.uk"
                    />
                </div>

                <div className="mt-4">

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
                    <p onClick={showPassword} className="flex items-center justify-end cursor-pointer text-xs font-semibold text-slate-500 dark:text-slate-50">{show}</p>
                </div>

                <div className="flex items-center pt-5">
                    <Input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" className="dark:bg-indigo-500" required />
                    <label htmlFor="terms-and-privacy" className="ml-2 block text-sm text-gray-900 dark:text-slate-200"
                        >I agree to the
                        <a href="/terms" className="text-indigo-600 font-medium hover:text-indigo-500"> Terms </a>
                          and
                        <a href="/privacy-policy" className="text-indigo-600 font-medium hover:text-indigo-500">  Data Policy</a>.
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="w-full" processing={processing}>
                        Sign Up
                    </Button>
                </div>
            </form>
            <p className="text-center text-sm text-gray-600 dark:text-slate-200">
                Already registered ? {` `}
                <Link href="/login" className="text-purple-700 dark:text-purple-100 font-bold hover:text-purple-900 dark:hover:text-purple-200 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign in here</Link>
            </p>
        </Guest>
    );
}
{/* <div className="flex">
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
</div> */}