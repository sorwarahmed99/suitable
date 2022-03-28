import { Link } from '@inertiajs/inertia-react';
import React, { useState } from 'react'

function Contact() {
    const [show, setShow] = useState(false);

  return (
    
    <div className="bg-gradient-to-b from-red-600 to-red-700 h-96 w-full">
            <div className="md:px-20 px-4 py-8">
                <div className="flex items-center justify-between">
                    <Link as="a" href="/" className="flex items-center justify-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">Suitable</span>
                        {/* <img className="h-7 w-full" src="assets/images/logo.svg" alt="shape" /> */}
                    </Link>
                    <div className="hidden lg:flex items-center">
                        {/* <p tabIndex={0} role="button" className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 cursor-pointer text-white">
                            Home
                        </p>
                        <p tabIndex={0} role="button" className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 text-white">
                            About
                        </p>
                        <p tabIndex={0} role="button" className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 text-white">
                            Pages
                        </p>
                        <p tabIndex={0} role="button" className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 text-white">
                            Doc
                        </p>
                        <p tabIndex={0} role="button" className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 text-white">
                            Contact
                        </p> */}
                        <button className="text-base font-medium leading-none text-red-700 py-4 px-5 bg-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-gray-300">Get Started</button>
                    </div>
                    <div className="lg:hidden text-white" onClick={() => setShow(!show)}>
                        {show ? (
                            <div id="close" className=" close-m-menu" onclick="MenuHandler(false)">
                                <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </div>
                        ) : (
                            <svg id="open" onclick="MenuHandler(true)" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={4} y1={8} x2={20} y2={8} />
                                <line x1={4} y1={16} x2={20} y2={16} />
                            </svg>
                        )}
                    </div>
                </div>
                {show && (
                    <nav className="lg:hidden relative z-40">
                        <div className="w-full">
                            <div className="visible flex items-center">
                                <ul id="list" className=" p-2 bg-white absolute rounded top-0 left-0 right-0 shadow mt-6">
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-red-700 focus:text-red-700 focus:outline-none">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Home</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-red-700 focus:text-red-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">About</span>
                                        </a>
                                    </li>
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-red-700 flex items-center focus:text-red-700 focus:outline-none">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Page</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-red-700 focus:text-red-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Doc</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-red-700 focus:text-red-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Contact</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
            <div className="w-full flex items-center justify-center my-12">
                <div className="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let’s chat and get a quote!</p>
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                            <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                            <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Company name</label>
                            <input tabIndex={0} role="input" arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Country</label>
                            <input tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                            <textarea tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-red-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full">
                        <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-red-700 rounded hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:outline-none">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact