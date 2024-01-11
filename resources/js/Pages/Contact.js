import { Link, useForm } from '@inertiajs/inertia-react';
import React, { useEffect, useState } from 'react'

import LogoPurple from '../../../public/assets/images/logo-purple.svg';
import LogoLight from '../../../public/assets/images/logo-light.svg';
import { ThemeContext } from '@/context/ThemeContext';
import Label from '@/Components/Label';
import InputSelect from '@/Components/InputSelect';
import ValidationErrors from '@/Components/ValidationErrors';
import FlashMessages from '@/Components/FlashMessages';
import Footer from '@/Layouts/Footer';
import LoadingButton from '@/Components/LoadingButton';

function Contact(props) {
    const { theme, setTheme } = React.useContext(ThemeContext);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        query_type: '',
        contact_number: '',
        message: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value, event.target.type === 'radio' ? event.target.checked : event.target.value );
    };

    const submit = (e) => {
        e.preventDefault();
        post('/contact-support/store');
        reset();
    };

    const queryTypeOptions = [
        { value: "Customer service", label: "Customer service" },
        { value: "Existing query", label: "Existing query" },
        { value: "Report a problem", label: "Report a problem" },
        { value: "Other", label: "Other" },
    ];
  
    return (
        <>
        <div className="bg-white dark:bg-slate-800 h-100 w-full">
            <nav className="bg-white px-5 sm:px-20 py-2  dark:bg-slate-800 border-b border-gray-100 dark:border-slate-500 sticky top-0 z-40 backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-between items-center">
                        <Link as="a" href="/" className="flex items-center justify-center">
                            <img className="w-full h-7 block dark:hidden" src={LogoPurple} alt="shape" />
                            <img className="w-full h-7 hidden dark:block" src={LogoLight} alt="shape" />
                        </Link>
                        <div className="flex space-x-3">
                            {theme === 'dark' ? (
                                <button id="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={`${theme === 'light' ? 'hidden' : ''}text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5`}>
                                    <svg id="theme-toggle-dark-icon" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                                </button>

                                    ) : (
                                    <button id="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={`${theme === 'dark' ? 'hidden' : ''}text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5`}>
                                        <svg id="theme-toggle-light-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                    </button>
                                )}

                                {props.auth.user ? (
                                        <Link href={route('home')} className="main-btn gradient-btn font-semibold">
                                            {props.auth.user.username}
                                        </Link>
                                    ) : (
                                        <Link href={route('login')} className="main-btn gradient-btn font-semibold">
                                            Get started
                                        </Link>
                                )}
                            </div>
                    </div>
                </div>
            </nav>
           
            <div className="w-full flex items-center justify-center my-12">
                <div className="bg-slate-50 dark:bg-slate-800 shadow rounded py-12 lg:px-28 px-8">
                    <p className="md:text-4xl text-xl font-bold leading-7 text-center text-gray-700 dark:text-slate-100">Contact us</p>
                    <p className="md:text-lg text-sm font-medium leading-7 text-center text-gray-500 dark:text-slate-400">We are open to any suggestions or questions you have. Send us a message and we will get back to you as soon as possible.</p>
                    <ValidationErrors errors={errors} />
                    <FlashMessages/>
                    <form className="sm:px-12 px-2" onSubmit={submit} autocomplete="off">
                        <div className="md:flex items-center mt-12">
                            <div className="md:w-full flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800  dark:text-slate-100">Name</label>
                                <input value={data.name} name={`name`} type="text" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-purple-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Jhon doe" onChange={onHandleChange} />
                                {/* <input value={data.name} name='name' type="text" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-purple-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Jhon doe" onChange={onHandleChange} /> */}
                            </div>
                            <div className="md:w-full flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800  dark:text-slate-100">Email</label>
                                {/* <input value={props.auth.user ? props.auth.user.email : data.email} name={`email`} type="email" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-purple-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Jhon doe" onChange={onHandleChange} /> */}
                                <input value={data.email} type="email" name='email' className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-purple-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="john@doe.com" onChange={onHandleChange} />
                            </div>
                        </div>
                        
                        <div className="md:flex items-center mt-12">
                            <div className="md:w-full flex flex-col">
                                <label for="contact_number" className="text-base font-semibold leading-none text-gray-800 dark:text-slate-100">Contact number</label>
                                <input value={data.contact_number} type="number" name='contact_number' className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-purple-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Contact number" onChange={onHandleChange} />
                            </div>
                            <div className="md:w-full flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label for="query_type" className="text-base font-semibold leading-none text-gray-800 dark:text-slate-100">Query type</label>
                                <InputSelect 
                                    value={data.query_type} 
                                    onChange={onHandleChange} 
                                    options={queryTypeOptions} 
                                    className={`!text-md !leading-none text-gray-900 !p-3 h-11 focus:oultine-none focus:border-purple-700 mt-4 bg-gray-100 border !rounded-sm border-gray-200 !placeholder-gray-100`} 
                                    placeholder='Select a query type'
                                    name={`query_type`}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="text-base font-semibold leading-none text-gray-800 dark:text-slate-100">Message</label>
                                <textarea role="textbox" type="name" name="message" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-purple-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" value={data.message} onChange={onHandleChange} />
                            </div>
                        </div>
                        <p className="text-xs leading-3 text-gray-600 dark:text-slate-100 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                        <div className="flex items-center justify-center w-full">
                            {/* <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-purple-700 rounded hover:bg-purple-600 focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 focus:outline-none">SUBMIT</button> */}
                            <LoadingButton
                                loading={processing}
                                type="submit"
                                className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-purple-700 rounded hover:bg-purple-600 focus:ring-2 focus:ring-offset-2 focus:ring-purple-700 focus:outline-none"
                                >
                                Submit
                            </LoadingButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </>
  )
}

export default Contact