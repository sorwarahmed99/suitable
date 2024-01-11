import AccordionItem from '@/Components/AccordionItem'
import { Link, usePage } from '@inertiajs/inertia-react'
import { ThemeContext } from '@/context/ThemeContext';
import React from 'react'

import LogoPurple from '../../../public/assets/images/logo-purple.svg';
import LogoLight from '../../../public/assets/images/logo-light.svg';
function Faq(props) {
    const { theme, setTheme } = React.useContext(ThemeContext);

    const {faqs} = usePage().props;

  return (
    <>
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
           
        <div>
            
            {/* <div className="container mx-auto py-9 flex flex-col items-center justify-center">
                <div role="list" className="w-11/12 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div role="listitem" className="focus:outline-none">
                        <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                            <div className="flex">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                        <circle cx={12} cy={12} r={3} />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-base font-medium leading-none text-gray-800">Getting Started</p>
                                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div role="listitem" className="focus:outline-none">
                        <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                            <div className="flex">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx={9} cy={7} r={4} />
                                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-base font-medium leading-none text-gray-800">User Account</p>
                                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div role="listitem" className="focus:outline-none">
                        <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                            <div className="flex">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments-horizontal" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <circle cx={14} cy={6} r={2} />
                                        <line x1={4} y1={6} x2={12} y2={6} />
                                        <line x1={16} y1={6} x2={20} y2={6} />
                                        <circle cx={8} cy={12} r={2} />
                                        <line x1={4} y1={12} x2={6} y2={12} />
                                        <line x1={10} y1={12} x2={20} y2={12} />
                                        <circle cx={17} cy={18} r={2} />
                                        <line x1={4} y1={18} x2={15} y2={18} />
                                        <line x1={19} y1={18} x2={20} y2={18} />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-base font-medium leading-none text-gray-800">Product Features</p>
                                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div role="listitem" className="focus:outline-none">
                        <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                            <div className="flex">
                                <div>
                                    <svg width={33} height={33} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3125 23.7188L2.0625 16.5L10.3125 9.28125M22.6875 23.7188L30.9375 16.5L22.6875 9.28125" stroke="#3730A3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-base font-medium leading-none text-gray-800">Customization Options</p>
                                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div role="listitem" className="focus:outline-none">
                        <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                            <div className="flex">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <rect x={3} y={5} width={18} height={14} rx={3} />
                                        <line x1={3} y1={10} x2={21} y2={10} />
                                        <line x1={7} y1={15} x2="7.01" y2={15} />
                                        <line x1={11} y1={15} x2={13} y2={15} />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-base font-medium leading-none text-gray-800">Payment Gateways</p>
                                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div role="listitem" className="focus:outline-none">
                        <a href="javascript:void(0)" className="bg-white focus:outline-none shadow-md flex items-center p-4 lg:p-8 cursor-pointer">
                            <div className="flex">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3730A3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <rect x={5} y={11} width={14} height={10} rx={2} />
                                        <circle cx={12} cy={16} r={1} />
                                        <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-base font-medium leading-none text-gray-800">Security Options</p>
                                    <p className="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 mt-2 2xl:w-7/12">Get started fast with installation and theme setup instructions</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="mt-9 md:mt-11 lg:mt-16">
                    <div className="text-center">
                        <h1 className="text-3xl font-medium leading-loose text-gray-800">Didn’t find an answer?</h1>
                        <p className="mx-4 md:mx-0 mb-4 text-base leading-none text-gray-600 mt-4">Our team is just an email away and ready to answer your questions</p>
                    </div>
                    <div role="list" aria-label="Our Team mates" className="flex flex-wrap items-center justify-around mt-2 ">
                        <div role="listitem" className="focus:outline-none">
                            <img src="https://i.ibb.co/zS3y67Q/Unsplash-Avatars-0000s-0019-analise-benevides-88w-Kdd-JTwp8-unsplash-1.png" alt="Display avatar of julia john" role="img" />
                            <p className="text-base font-semibold leading-none text-gray-800 mt-2">Julia John</p>
                            <p className="text-base leading-none text-gray-600 mt-2">Designer</p>
                        </div>
                        <div role="listitem" className="focus:outline-none">
                            <img src="https://i.ibb.co/vJSM2Ch/Unsplash-Avatars-0004s-0005-laurence-cruz-P7yvmaj-Pvk-M-unsplash.png" alt="Display avatar of Tom Koch" role="img" />
                            <p className="text-base font-semibold leading-none text-gray-800 mt-2">Tom Koch</p>
                            <p className="text-base leading-none text-gray-600 mt-2">Developer</p>
                        </div>
                        <div role="listitem" className="focus:outline-none">
                            <img src="https://i.ibb.co/0tzwY54/Unsplash-Avatars-0004s-0012-tiffany-collins-Gsy-St-BSs-Yd0-unsplash.png" alt="Display avatar of Kera Ann" role="img" />
                            <p className="text-base font-semibold leading-none text-gray-800 mt-2">Kera Ann</p>
                            <p className="text-base leading-none text-gray-600 mt-2">Designer</p>
                        </div>
                        <div role="listitem" className="focus:outline-none">
                            <img src="https://i.ibb.co/DWMLC3n/Unsplash-Avatars-0004s-0013-sirio-w-Siku-Nio6-UY-unsplash.png" alt="Display Avatar of Glenn Jo" role="img" />
                            <p className="text-base font-semibold leading-none text-gray-800 mt-2">Glenn Jo</p>
                            <p className="text-base leading-none text-gray-600 mt-2">Support</p>
                        </div>
                        <div role="listitem" className="focus:outline-none">
                            <img src="https://i.ibb.co/vkHZYXY/Unsplash-Avatars-0004s-0029-azamat-zhanisov-4yh-Hhp-AMC3-U-unsplash.png" alt="Display avatar of Shing Co" role="img" />
                            <p className="text-base font-semibold leading-none text-gray-800 mt-2">Xhing Co</p>
                            <p className="text-base leading-none text-gray-600 mt-2">Support</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="mt-4 md:mt-6 py-3 px-6 bg-red-800 hover:bg-red-700 rounded text-white text-center font-medium text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800">Contact us</button>
                    </div>
                </div>
            </div> */}
        </div>

        <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-slate-800 lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                    <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                    <span className="mb-2 block text-lg font-semibold text-slate-800 dark:text-white">
                        FAQ's
                    </span>
                    <h2 className="mb-4 text-3xl lg:text-5xl font-bold text-dark dark:text-white ">
                        Any Questions? Look Here
                    </h2>
                    <p className="text-base text-slate-800 dark:text-slate-300 dark:text-dark-6">
                        Check below if you have any questions. If you can't find your answers, you can contact us anytime and we will get back to you as soon as possible.
                    </p>
                    </div>
                </div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                    {faqs && faqs.map(({ id, question, answer }) => {
                        return (
                            <div key={id} className="w-full px-4 lg:w-full">
                                <AccordionItem
                                    header={question}
                                    text={answer}
                                />
                            </div>
                     );
                    })}  
                </div>
            </div>

            <div className="absolute bottom-0 right-0 z-[-1]">
                <svg
                width="1440"
                height="886"
                viewBox="0 0 1440 886"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    opacity="0.5"
                    d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                    fill="url(#paint0_linear)"
                />
                <defs>
                    <linearGradient
                    id="paint0_linear"
                    x1="1308.65"
                    y1="1142.58"
                    x2="602.827"
                    y2="-418.681"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stop-color="#3056D3" stop-opacity="0.36" />
                    <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                    <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
                    </linearGradient>
                </defs>
                </svg>
            </div>
            </section>
    </>
  )
}

export default Faq