import '@themesberg/flowbite';
import React, { useEffect, useState } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Footer from '@/Layouts/Footer';
import { ThemeContext } from '@/context/ThemeContext';


export default function Welcome(props) {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <>
            <Head title="Suitable" />
            {/* <nav className="bg-white shadow-md px-5 sm:px-20 dark:bg-gray-800 mx-auto top-0 left-0 z-40 w-full py-2 duration-300 sticky"> */}
                <nav className="bg-white px-5 sm:px-20 py-2  dark:bg-slate-800 border-b border-gray-100 dark:border-slate-500 sticky top-0 z-40 backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap justify-between items-center">
                            <Link as="a" href="/" className="flex items-center justify-center">
                                {/* <img className="h-7 w-full" src="assets/images/s.svg" alt="shape" /> */}
                                <span className="self-center text-3xl whitespace-nowrap pl-[0.5px] text-purple-800 font-bold dark:text-white">Suitable</span>
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
                <section className="h-screen">
                    <div class="relative max-w-5xl mx-auto pt-10 sm:pt-15 lg:pt-20">
                        <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="assets/images/hero-dots.svg" alt="bg" />
                        <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="assets/images/hero-love.svg" alt="bg" />
                        <div className="p-5">
                            <h3 className="text-slate-900 lg:font-bold font-bold text-4xl sm:text-4xl lg:text-4xl tracking-tight text-center dark:text-white">Welcome to <span className="text-purple-600 font-bold">Suitable</span> </h3>
                            <p class="mt-6 text-justify	 text-md tracking-wide text-slate-600 max-w-3xl mx-auto dark:text-slate-300">
                                    In today’s busy world of working professionals we understand that is difficult to find and meet other like minded Muslim individuals for the purpose of marriage. 

                                    Where time is of the essence, and keeping your faith and traditions in place, we understand that it is difficult finding the time to find a suitable match. 
                                    
                                    This is why we do the hard work for you.
                                    <br/>
                                    <br/>
                                    Our approach is reassuringly traditional and Islamic, being british but with a global reach. 

                                    We are selective about who we accept to join our platform, we are certainly not right for everyone. 
                                    
                                    COMPROMISE IS SIMPLY NOT AN OPTION. FOR THEM, OR US. 

                                    <br/>
                                    <span className="font-semibold">Made for professionals by professionals.</span>
                            </p>
                            <div class="mt-6 sm:mt-10 flex justify-center space-x-2">
                                <Link href={route('register')} className="main-btn gradient-btn font-semibold">
                                    Find your pair
                                </Link>
                                <Link href={route('login')} className="hidden sm:flex bg-purple-50 dark:bg-slate-800 text-purple-600 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:text-purple-50 font-semibold h-12 px-6 rounded-lg w-full  items-center justify-center sm:w-auto dark:hover:bg-purple-100 dark:hover:text-purple-800">
                                    Access your account
                                </Link>
                                {/* <a class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400" href="/docs/installation">Get started</a> */}
                            </div>
                        </div>
                    </div>
                </section>
                
                
                <div className="pt-5" style={{ fontFamily: '"Lato", sans-serif' }}>
                    {/* Code block starts */}
                    <dh-component>
                        <section className="max-w-full mx-auto container bg-gray-50 dark:bg-slate-800 dark:text-slate-50 pt-16">
                        <div>
                            <div role="contentinfo" className="flex items-center flex-col px-4">
                                <p tabIndex={0} className="focus:outline-none uppercase text-sm text-center text-purple-600 leading-4">We made it super easy</p>
                                <h1 tabIndex={0} className="focus:outline-none text-3xl lg:text-3xl font-bold text-center leading-10 text-gray-800 dark:text-slate-50 lg:w-5/12 md:w-9/12 pt-2">Create your profile &amp; start matching today</h1>
                            </div>
                            <div tabIndex={0} aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
                                <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                    <div className="w-20 h-20 relative mr-5">
                                        <div className="absolute top-0 right-0 bg-purple-100 rounded w-16 h-16 mt-2 mr-1" />
                                        <div className="absolute text-white bottom-0 left-0 bg-purple-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                            </svg>
                                            {/* <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg" alt="drawer" /> */}
                                        </div>
                                    </div>
                                    <div className="w-10/12">
                                        <h2 tabIndex={0} className="focus:outline-none text-lg font-bold leading-tight text-gray-800 dark:text-slate-50">Create A new account</h2>
                                        <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2 dark:text-slate-400">We provided a very simple start, no need to write a lot. Simply add your basic information. </p>
                                    </div>
                                </div>
                                <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                    <div className="w-20 h-20 relative mr-5">
                                        <div className="absolute top-0 right-0 bg-purple-100 rounded w-16 h-16 mt-2 mr-1" />
                                        <div className="absolute text-white bottom-0 left-0 bg-purple-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg" alt="check" />
                                        </div>
                                    </div>
                                    <div className="w-10/12">
                                        <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-slate-50">Set up your profile</h2>
                                        <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2 dark:text-slate-400">We only ask the most relevant information to get you started. Skip where you don't feel like to share.</p>
                                    </div>
                                </div>
                                <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                    <div className="w-20 h-20 relative mr-5">
                                        <div className="absolute top-0 right-0 bg-purple-100 rounded w-16 h-16 mt-2 mr-1" />
                                        <div className="absolute text-white bottom-0 left-0 bg-purple-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                                <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                                            </svg>
                                            {/* <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg" alt="html tag" /> */}
                                        </div>
                                    </div>
                                    <div className="w-10/12">
                                        <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-slate-50">Choose a plan</h2>
                                        <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2 dark:text-slate-400">With a subscription plan you can enjoy all our unlimited features. Cancel anytime! </p>
                                    </div>
                                </div>
                                <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                    <div className="w-20 h-20 relative mr-5">
                                        <div className="absolute top-0 right-0 bg-purple-100 rounded w-16 h-16 mt-2 mr-1" />
                                        <div className="absolute text-white bottom-0 left-0 bg-purple-600 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                            
                                            <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="w-10/12">
                                        <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800 dark:text-slate-50">Start matching</h2>
                                        <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2 dark:text-slate-400">We don't allow any fake profiles. The profile we will select for you is 100% authentic.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </section>
                    </dh-component>
                    {/* Code block ends */}
                    </div>
            <Footer />


        </>
    );
}

                // <section id="about" className="pt-20 about-area">
                //     <div className="container">
                //         <div className="row">
                //             <div className="w-full lg:w-1/2">
                //                 <div className="mx-4 mt-12 about-content">
                //                     <div className="relative mb-4 section-title">
                //                         <div className="line"></div>
                //                         <h3 className="title">And we created you <span className="text-red-400 font-bold">in pairs</span> <span className="text-lg sm:text-3xl font-normal">-Quran 78:8</span></h3>
                //                     </div>
                //                     <p className="text-lg mb-8 text-slate-600 dark:text-slate-400">Suitable is a trusted muslim match
                //                         making platform performing all over the world. We are working to
                //                         connect you with your partner without the exception of race, color, and ethnicity.</p>

                //                     <Link href={route('register')} className="main-btn gradient-btn">
                //                         Find your pair
                //                     </Link>
                //                 </div>
                //             </div>
                //             <div className="w-full lg:w-1/2">
                //                 <div className="mx-4 mt-12 text-center about-image wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                //                     <img src="assets/images/about1.svg" alt="about" />
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                //     <div className="about-shape-1">
                //         <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
                //             <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                //                 <g id="dots" fill="#000000">
                //                     <circle id="Oval-377-Copy-9" cx="3" cy="3" r="3"></circle>
                //                     <circle id="Oval-377-Copy-14" cx="13" cy="13" r="3"></circle>
                //                 </g>
                //             </g>
                //         </svg>
                //     </div>
                // </section>