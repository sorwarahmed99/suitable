import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children, bgimage, title, subtitle, linktext, href, btnName }) {
    return (
        <>
        <div className="relative min-h-screen flex ">
            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                <div className={`${bgimage} sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900/50 text-white bg-no-repeat bg-cover relative`}
                    >
                    <div className="absolute bg-gradient-to-b from-red-600 to-pink-500 opacity-10 inset-0 z-0"></div>
                    <div className="w-full  max-w-md z-10">
                        <div className="sm:text-xl xl:text-4xl font-bold leading-tight mb-4">
                            { title }
                        </div>
                        <div className="sm:text-sm xl:text-lg leading-tight text-gray-200 font-normal">
                            {subtitle}
                        </div>
                        <p className="mt-8 sm:text-sm xl:text-md text-gray-200 font-normal">{linktext} <Link className="underline text-slate-50 font-semibold ml-5" href={href}>{btnName}</Link>  </p>
                    </div>
                </div>
                <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                    <div className="max-w-md w-full space-y-8">

                        {children}


                    </div>
                </div>
            </div>
        </div>


            <div className="hidden md:block bg-gray-800 text-white py-3 px-4 text-center fixed left-0 bottom-0 right-0 z-40">
            Copyright &copy; www.suitable.com | All right reserved
                <Link className="underline text-gray-200 ml-5" href="/">Home</Link>
            </div>
        </>
    );
}
