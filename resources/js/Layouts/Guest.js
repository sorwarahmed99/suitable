import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

import { ThemeContext } from '@/context/ThemeContext';

export default function Guest({ children, bgimage}) {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <>
        <div className="relative min-h-screen flex ">
            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white dark:bg-slate-800">
                <div className={`${bgimage} sm:w-1/2 xl:w-1/2 min-h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-center relative`}>
                    <div className="absolute bg-gradient-to-b from-purple-400 to-violet-300 opacity-50 dark:opacity-10 inset-0 z-auto"></div>
                </div>
                <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-1/2 p-12 md:p-14 lg:p-18 sm:rounded-lg md:rounded-none bg-white dark:bg-slate-800">
                    <div className="max-w-md w-full space-y-8">
                    {theme === 'dark' ? (
                                    <button id="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={`${theme === 'light' ? 'hidden' : ''}text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5`}>
                                        <svg id="theme-toggle-dark-icon" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                                    </button>
                                        ) : (
                                        <button id="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={`${theme === 'dark' ? 'hidden' : ''}text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5`}>
                                            <svg id="theme-toggle-light-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                        </button>
                                    )}
                        {children}
                    </div>
                </div>
                <div className="hidden text-xs md:block bg-gray-800 text-white py-3 px-4 text-center fixed left-0 bottom-0 right-0 z-40">
                    Copyright &copy; www.suitable.com | All right reserved
                    <Link className="underline text-gray-200 ml-5" href="/">Home</Link>
                </div>
            </div>
        </div>


            
        </>
    );
}
