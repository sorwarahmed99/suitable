import '@themesberg/flowbite';
import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Footer from '@/Layouts/Footer';
import { ThemeContext } from '@/context/ThemeContext';

export default function Welcome(props) {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <>
            <Head title="Suitable" />
            <nav className="bg-white shadow-md px-5 sm:px-20 dark:bg-gray-800 mx-auto top-0 left-0 z-40 w-full py-2 duration-300 sticky">
                <div className="flex flex-wrap justify-between items-center">
                    <Link href="/register" className="flex items-center justify-center">
                        <img className="h-7 w-full" src="assets/images/logo.svg" alt="shape" />
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
                                    <Link href={route('home')} className="main-btn gradient-btn">
                                        {props.auth.user.firstname}
                                    </Link>
                                ) : (

                                    <Link href={route('login')} className="main-btn gradient-btn">
                                        Get started
                                    </Link>

                                    // {/* <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline">
                                    //     Sign up
                                    // </Link> */}
                            )}
                        </div>
                    </div>
                </nav>
                <section id="about" className="pt-20 about-area">
                    <div className="container">
                        <div className="row">
                            <div className="w-full lg:w-1/2">
                                <div className="mx-4 mt-12 about-content">
                                    <div className="relative mb-4 section-title">
                                        <div className="line"></div>
                                        {/* {-- <img className="absolute bottom-0 left-0 t-0  dots opacity-40 !h-20" src="assets/images/dots.svg" alt="dots"> --} */}

                                        <h3 className="title">And we created you <span className="text-red-400 font-bold">in pairs</span> <span className="text-lg sm:text-3xl font-normal">-Quran 78:8</span></h3>
                                    </div>
                                    <p className="text-lg mb-8 text-slate-600 dark:text-slate-400">Suitable is a trusted muslim match
                                        making platform performing all over the world. We are working to
                                        connect you with your partner without the exception of race, color, and ethnicity.</p>
                                    {/* <a href="#" className="main-btn gradient-btn">Find your pair</a> */}

                                    <Link href={route('register')} className="main-btn gradient-btn">
                                        Find your pair
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="mx-4 mt-12 text-center about-image wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <img src="assets/images/about1.svg" alt="about" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-shape-1">
                        <img src="assets/images/about-shape-1.svg" alt="shape" />
                    </div>
                </section>
                <section className="info pt-10">
                    <div className="container">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center justify-center">
                            <div className="">
                                <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-2 bg-red-400 rounded-md shadow-lg">
                                            <svg className="h-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <h3 className="text-slate-900 dark:text-white mt-5 text-2xl font-semibold tracking-normal">Create</h3>
                                    <p className="text-slate-500 dark:text-slate-400 mt-1 text-lg">
                                        Create new account
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-2 bg-red-400 rounded-md shadow-lg">
                                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                        </span>
                                    </div>
                                    <h3 className="text-slate-900 dark:text-white mt-5 text-2xl font-semibold tracking-tight">Set</h3>
                                    <p className="text-slate-500 dark:text-slate-400 mt-1 text-lg">
                                        Set up your profile
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-2 bg-red-400 rounded-md shadow-lg">
                                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        </span>
                                    </div>
                                    <h3 className="text-slate-900 dark:text-white mt-5 text-2xl font-semibold tracking-tight">Match</h3>
                                    <p className="text-slate-500 dark:text-slate-400 mt-1 text-lg">
                                        Start Matching
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            <Footer />


        </>
    );
}

