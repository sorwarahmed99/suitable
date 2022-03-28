import ResponsiveSidenav from '@/Components/ResponsiveSidenav';
import UserSideNav from '@/Components/UserSideNav';
import Authenticated from '@/Layouts/Authenticated'
import React, { useState } from 'react'

function Preferences({auth, errors,}) {
    const [showFilters, setShowfilters] = useState(true);


  const [check, setCheck] = useState({
      leather: false,
      cotton: false,
      fabric: false,
      crocodile: false,
      wool: false,
      large: false,
      medium: false,
      small: false,
      mini: false,
      luxesignatire: false,
      luxelondon: false,
  });

  const { leather, cotton, fabric, crocodile, wool, large, medium, small, mini, luxesignatire, luxelondon } = check;

  const changeHandler = (e) => {
      setCheck({
          ...check,
          [e.target.name]: e.target.checked,
      });
  };

  const applyFilters = (e) => {
      setCheck({
          ...check,
          leather: false,
          cotton: false,
          fabric: false,
          crocodile: false,
          wool: false,
          large: false,
          medium: false,
          small: false,
          mini: false,
          luxesignatire: false,
          luxelondon: false,
      });
  };
  return (
    <Authenticated 
      auth={auth}
      errors={errors}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight ">Preferences</h2>}
      btnName="Back"
      svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path stroke-linecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>}
      href={route('home')}
    >

    <ResponsiveSidenav />


    <div className="max-w-7xl mx-auto px-2 sm:px-6 md:px-8">
        <div className="flex-row sm:flex sm:space-x-2">
            <div className="hidden sm:block sm:w-[250px] h-min ">
               <UserSideNav/>
            </div>
            
            <div className="mt-2 sm:mt-0 sm:w-2/3 bg-gray-50 dark:bg-slate-800 p-3 sm:p-10 rounded-md shadow-sm">
                <div className="pt-5 xl:max-w-none">
                    <header id="header" className="relative z-20">
                        <div>
                        <p className="mb-1 text-sm leading-6 font-semibold text-red-500 dark:text-red-400">Matches - Preferences</p>
                        <div className="flex items-center justify-between">
                            <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">Preferences</h1>
                        </div>
                        </div>
                    </header>
                    <div className="">
                    
                        <div id="filterSection" className={"relative md:py-10 lg:px-20 md:px-6 py-5 px-2 bg-gray-50 dark:bg-slate-800 mt-2 w-full block"}>
                            <div>
                                <div className="mt-4 flex">
                                    <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 dark:text-slate-50">Height</p>
                                </div>
                                <div className="flex space-x-1 mt-2">
                                    <div className="flex flex-col space-y-2 p-2 pl-0 w-80">
                                        <label className="text-xs">Min Height</label>
                                        <input type="range" className="w-full bg-red-600" min="1" max="8" step="0.5" />
                                        <ul className="flex justify-between w-full px-[10px]">
                                            <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">4ft</span></li>
                                            <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">4.5ft</span></li>
                                            <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">5ft</span></li>
                                            <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">5.5ft</span></li>
                                            <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">5.6ft</span></li>
                                            <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">5.7ft</span></li>
                                            <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">5.8ft</span></li>
                                            <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">5.9ft</span></li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col space-y-2 p-2 pl-0 w-80">
                                        <label className="text-xs">Max Height</label>
                                        <input type="range" className="w-full bg-red-600" min="1" max="6" step="0.5" />
                                        <ul className="flex justify-between w-full px-[10px]">
                                            <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">6ft</span></li>
                                            <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">6.5ft</span></li>
                                            <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">7ft</span></li>
                                            <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">7.5ft</span></li>
                                            <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">8ft</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <hr className=" bg-gray-200/50 dark:bg-gray-50  w-full md:my-10 my-8" />
                            

                            <div className="mt-8 mb-10">
                                <div className="flex space-x-2">
                                    <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 dark:text-slate-50">Age</p>
                                </div>
                                <div className="flex flex-col p-2 pl-0 space-y-2 w-80">
                                    <input type="range" className="w-full" min="1" max="6" step="1" />
                                    <ul className="flex justify-between w-full px-[10px]">
                                        <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">18yrs</span></li>
                                        <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">28yrs</span></li>
                                        <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">38yrs</span></li>
                                        <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">48yrs</span></li>
                                        <li className="flex text-xs justify-center relative text-gray-800 dark:text-slate-50"><span className="absolute">58yrs</span></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
                            
                            <div>
                                <div className="mt-10 flex space-x-2">
                                    <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 dark:text-slate-50">Marital Status</p>
                                </div>
                                <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                                    <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Leather" name="leather" value="Never Married" checked={leather} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Leather">
                                                    Never Married
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex justify-center items-center">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Cotton" name="cotton" value="Divorced" checked={cotton} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Cotton">
                                                    Divorced
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Fabric" name="fabric" value="Widowed" checked={fabric} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Fabric">
                                                    Widowed
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Crocodile" name="crocodile" value="Crocodile" checked={crocodile} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Crocodile">
                                                    Any
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
                            <div>
                                <div className="mt-8 flex space-x-2">
                                    <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 dark:text-slate-50">Eats Halal</p>
                                </div>
                                <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                                    <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Leather" name="leather" value="Never Married" checked={leather} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Leather">
                                                    Yes
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex justify-center items-center">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Cotton" name="cotton" value="Divorced" checked={cotton} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Cotton">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Fabric" name="fabric" value="Widowed" checked={fabric} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Fabric">
                                                    Any
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
                            <div>
                                <div className="mt-8 flex space-x-2">
                                    <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 dark:text-slate-50">Smoke</p>
                                </div>
                                <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                                    <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Leather" name="leather" value="Never Married" checked={leather} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Leather">
                                                    Yes
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex justify-center items-center">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Cotton" name="cotton" value="Divorced" checked={cotton} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Cotton">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Fabric" name="fabric" value="Widowed" checked={fabric} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Fabric">
                                                    Any
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
                            <div>
                                <div className="mt-8 flex space-x-2">
                                    <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 dark:text-slate-50">Drink Alcohol</p>
                                </div>
                                <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                                    <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Leather" name="leather" value="Never Married" checked={leather} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Leather">
                                                    Yes
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex justify-center items-center">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Cotton" name="cotton" value="Divorced" checked={cotton} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Cotton">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Fabric" name="fabric" value="Widowed" checked={fabric} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Fabric">
                                                    Any
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
                            <div>
                                <div className="mt-8 flex space-x-2">
                                    <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 dark:text-slate-50">{auth.user.gender == 'male' ? 'Keeps beard' : 'Wear Hijab'}</p>
                                </div>
                                <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                                    <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Leather" name="leather" value="Never Married" checked={leather} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Leather">
                                                    Yes
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex justify-center items-center">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Cotton" name="cotton" value="Divorced" checked={cotton} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Cotton">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
                                        <input className="w-4 h-4 mr-2" type="checkbox" id="Fabric" name="fabric" value="Widowed" checked={fabric} onChange={changeHandler} />
                                        <div className=" inline-block">
                                            <div className=" flex space-x-6 justify-center items-center">
                                                <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor="Fabric">
                                                    Any
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            

                            <div className="px-0 mt-10 w-full md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-20 md:px-6">
                                <button onClick={applyFilters} className="w-full dark:bg-white dark:hover:bg-slate-300 dark:text-slate-800 hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800">
                                    Apply Filter
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>  
    </Authenticated>
  )
}

export default Preferences
