import { Link } from '@inertiajs/inertia-react'
import React from 'react'

function PrivacyPolicy() {
  return (
    <div>
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className>
                            <h1 className="my-2 text-gray-800 dark:text-slate-50 text-shadow-sm font-bold text-4xl">
                                Looks like you're lost.
                            </h1>
                            <p className="my-2 text-lg text-gray-800 dark:text-slate-400 mb-5">Sorry about that! Please visit our hompage to get where you need to go.</p>
                            <Link href={route('home')} className="sm:w-full lg:w-auto my-5 mt-5 rounded-md shadow-sm md py-4 px-8 text-center bg-slate-800 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50">Home</Link>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
    </div>
  )
}

export default PrivacyPolicy



