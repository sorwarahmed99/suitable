import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Button from '@/Components/Button';

function Home(props) {
    return  <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight ">Matches</h2>}
            >
                <Head title="Home | Suitable" />

                <div className="py-2">

                    <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                        <div class="flex font-sans bg-white shadow-md rounded-lg">
                            <div class="flex-none w-48 relative">
                                <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <form class="flex-auto p-6">
                                <div class="flex flex-wrap">
                                <h1 class="flex-auto text-lg font-semibold text-slate-900">
                                    Classic Utility Jacket
                                </h1>
                                <div class="text-lg font-semibold text-slate-500">
                                    $110.00
                                </div>
                                <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                                    In stock
                                </div>
                                </div>
                                <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">

                                </div>
                                <div class="flex space-x-4 mb-6 text-sm font-medium">
                                <div class="flex-auto flex space-x-4">
                                    <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                                    Buy now
                                    </button>
                                    <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                                    Add to bag
                                    </button>
                                </div>
                                <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                                    <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                    </svg>
                                </button>
                                </div>
                                <p class="text-sm text-slate-700">
                                Free shipping on all continental US orders.
                                </p>
                            </form>
                    </div>
                        <div className="overflow-hidden ">
                            <div class="bg-white dark:bg-gray-900 border dark:border-gray-900 shadow-lg rounded-3xl p-3 m-3">
                                <div class="flex-none sm:flex">
                                    <div class="relative sm:h-[10rem] w-full sm:w-32 sm:mb-0 mb-3">
                                        <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className="w-full sm:w-32 h-auto sm:h-[10rem] object-cover aspect-square rounded-2xl" />
                                    </div>
                                    <div class="flex-auto sm:ml-5 justify-evenly">
                                        <div class="flex items-center sm:mt-2">
                                            <div class="flex items-center">
                                                <div class="flex flex-col ">
                                                    <div class="w-full relative flex text-lg text-gray-900 dark:text-gray-200 font-bold leading-none">
                                                        Zein Ahmed, 30
                                                        <div className="m-1 ml-2 rounded-full bg-green-600 h-3 w-3"></div>
                                                        {/* <div className="absolute right-0">...</div> */}
                                                        <div className="absolute right-0 left-[312px] block sm:left-[476px]">
                                                            <div className="items-baseline text-gray-800">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 text-slate-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex-auto text-gray-700 dark:text-gray-400 my-1">
                                                        <span class="mr-3 ">From Germany Living in Berlin </span><span>Citizen</span>
                                                    </div>
                                                    <div>
                                                        <p>Masters Degree - Architect - 5ft 5in</p>
                                                        <p>Practicing Muslim - Sunni</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                            <div class="flex pt-4 space-x-3 text-sm text-gray-400">
                                            <Button className="bg-transparent text-slate-800 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-1 px-3 rounded inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-xs">View</span>
                                            </Button>

                                            <Button className="bg-transparent text-slate-800 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-1 px-3 rounded inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                                <span className="text-xs">Save</span>
                                            </Button>
                                            <Button className="bg-transparent text-slate-800 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-1 px-3 rounded inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                                <span className="text-xs">Invite</span>
                                            </Button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </Authenticated>;
}

export default Home;
