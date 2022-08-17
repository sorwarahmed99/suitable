import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children, bgimage}) {
    return (
        <>
        <div className="relative min-h-screen flex ">
            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                <div className={`${bgimage} sm:w-1/2 xl:w-1/2 min-h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-center relative`}>
                    <div className="absolute bg-gradient-to-b from-purple-400 to-violet-300 opacity-30 inset-0 z-auto"></div>

                    {/* <div className="w-full  max-w-md z-10">
                        <div className="sm:text-xl xl:text-4xl font-bold leading-tight mb-4">
                            { title }
                        </div>
                        <div className="sm:text-sm xl:text-lg leading-tight text-gray-200 font-normal">
                            {subtitle}
                        </div>
                        <p className="mt-8 sm:text-sm xl:text-md text-gray-200 font-normal">{linktext} <Link className="underline text-slate-50 font-semibold ml-5" href={href}>{btnName}</Link>  </p>
                    </div> */}
                </div>
                <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-1/2 p-12 md:p-14 lg:p-18 sm:rounded-lg md:rounded-none bg-white">
                    <div className="max-w-md w-full space-y-8">

                        {children}


                    </div>
                </div>
                {/* <div className="hidden md:block bg-gray-800 text-white py-3 px-4 text-center fixed left-0 bottom-0 right-0 z-40"> */}
                    {/* Copyright &copy; www.suitable.com | All right reserved */}
                    {/* <Link className="underline text-gray-200 ml-5" href="/">Home</Link> */}
                {/* </div> */}
            </div>
        </div>


            
        </>
    );
}
