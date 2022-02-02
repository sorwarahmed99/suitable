import React from 'react';
import { Link } from '@inertiajs/inertia-react';

function GuestLeft({ bgimage, title, subtitle, linktext, link}) {
    return <>
        <div className="relative min-h-screen flex ">
            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                <div className="bg-login-background sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900/50 text-white bg-no-repeat bg-cover relative"
                    >
                    <div className="absolute bg-gradient-to-b from-red-600 to-pink-500 opacity-10 inset-0 z-0"></div>
                    <div className="w-full  max-w-md z-10">
                        <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Bismillah....</div>
                        <div className="sm:text-sm xl:text-lg text-gray-200 font-normal">
                                Start Your soulmate search with the world's most reliable match making site!
                        </div>
                        <p className="mt-8 sm:text-sm xl:text-md text-gray-200 font-normal">Already registered? <Link className="underline text-slate-50 font-semibold ml-5" href="/">Sign in</Link>  </p>
                    </div>
                </div>
                <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                    <div className="max-w-md w-full space-y-8">
                        <div className="text-center">
                            <h2 className="mt-6 text-3xl font-bold text-gray-900">
                            Welcome Back!
                            </h2>
                            <p className="mt-2 text-sm text-gray-500">Please sign in to your account</p>
                        </div>
                        {/* <form class="mb-0 space-y-6" action="#" method="POST">
                            <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                            <div class="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" required class="" />
                            </div>
                            </div>

                            <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                            <div class="mt-1">
                                <input id="password" name="password" type="password" autocomplete="current-password" required class="" />
                            </div>
                            </div>


                            <div class="flex items-center">
                            <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" class="" />
                            <label for="terms-and-privacy" class="ml-2 block text-sm text-gray-900"
                                >I agree to the
                                <a href="#" class="text-indigo-600 hover:text-indigo-500">Terms</a>
                                and
                                <a href="#" class="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
                            </label>
                            </div>

                            <div>
                            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
                            </div>
                        </form> */}
                        {/* {children} */}

                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true"/>
                        <div className="relative">
                        <div className="absolute right-3 mt-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                        <input
                            className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                            type="" placeholder="mail@gmail.com" value="mail@gmail.com"/>
                        </div>
                        <div className="mt-8 content-center">
                        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                            Password
                        </label>
                        <input
                            className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                            type="" placeholder="Enter your password" value="*****|"/>
                        </div>
                        <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox"
                            className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"/>
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="text-indigo-400 hover:text-blue-500">
                            Forgot your password?
                            </a>
                        </div>
                        </div>
                        <div>
                        <button type="submit"
                            className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                            Sign in
                        </button>
                        </div>
                        <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                        <span>Don't have an account?</span>
                        <a href="#"
                            className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign
                            up</a>
                        </p>
                    </form>
                    </div>
                </div>
            </div>
        </div>

                {/* <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div> */}

            <div className="hidden md:block bg-gray-800 text-white py-3 px-4 text-center fixed left-0 bottom-0 right-0 z-40">
            Copyright &copy; www.suitable.com | All right reserved
                <Link className="underline text-gray-200 ml-5" href="/">Home</Link>
            </div>
    </>;
}

export default GuestLeft;
