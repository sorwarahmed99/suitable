import { Link } from '@inertiajs/inertia-react'
import React from 'react'

function EmptyState({bgimage, title, subtitle, linktext, href, btnName, className, children}) {
  return (
    <div className={`relative min-h-screen flex z-10 ${className} `}>
            <div className="flex items-start justify-start flex-auto min-w-full">
                <div className={`${bgimage} w-full min-h-screen flex flex-auto items-center justify-center p-10 overflow-hidden bg-no-repeat bg-center relative`}
                    >
                    <div className="absolute  bg-gradient-to-b from-purple-600 to-indigo-500 opacity-10 dark:opacity-0 inset-0 z-0"></div>
                    
                    <div className="w-full max-w-3xl z-10 bg-slate-900/50 rounded-md shadow-sm px-6 py-6">
                        <div className="text-lg sm:text-xl xl:text-4xl font-bold leading-tight mb-4 text-white">
                            { title }
                        </div>
                        <div className="-mt-1 text-lg font-semibold leading-tight text-gray-100">
                            {subtitle}
                            <p className="sm:text-sm xl:text-md text-gray-200 font-medium">{linktext} <Link className="underline text-red-50 text-md font-semibold ml-1 " href={href}>{btnName}</Link>  </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* {children} */}
        </div>
  )
}

export default EmptyState