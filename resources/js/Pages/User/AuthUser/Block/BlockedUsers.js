import Button from '@/Components/Button';
import Dropdown from '@/Components/Dropdown';
import FlashMessages from '@/Components/FlashMessages';
import MatchedSideNav from '@/Components/MatchedSideNav';
import UserSideNav from '@/Components/UserSideNav';
import Authenticated from '@/Layouts/Authenticated'
import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react'

function BlockedUsers(props) {
    const { blockedusers, savers, user } = usePage().props;

    return (
      <Authenticated 
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight ">Blocked Profiles</h2>}
        btnName="Back"
        svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>}
        href={route('home')}
      >
  
          <div className="max-w-9xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="flex-row sm:flex sm:space-x-2">
                  <div className="sm:w-[250px] h-min ">
                      <UserSideNav/>
                  </div>
                  
                  <div className="mt-2 sm:mt-0 sm:w-2/3 bg-gray-50 dark:bg-slate-700 sm:p-10 rounded-md shadow-sm">
                      <div className="py-2">
                          <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                              <div className="overflow-hidden ">
                                  <div className="p-4">
                                      {blockedusers.map(({ id, firstname, lastname, age, country, recidency_status, ethnic_origin, profile_image }) => (
                                          <div className="" key={id}>
                                            <div class="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5 shadow-md mb-2">
                                                
                                                <div class="flex items-center space-x-4">
                                                    <img src={`http://localhost:3000/${profile_image}`} alt={`${firstname}'s Profile photo`} class="flex-none w-14 h-14 rounded-full object-cover" loading="lazy"/>
                                                    <div class="flex-auto">
                                                        <div class="text-base text-slate-900 font-semibold dark:text-slate-300">
                                                                {firstname} {lastname}, {age}
                                                        </div>
                                                        <div className="mt-0.5 text-sm font-medium text-slate-600 dark:text-slate-200">{ethnic_origin} From {country}  - <span className="text-slate-600 dark:text-slate-200">{recidency_status}</span> </div>
                                                    </div>
                                                    <div class="text-slate-700 dark:text-slate-300">
                                                        <div className="mt-2"> 
                                                            <Link className="h-10 border border-slate-500 text-slate-500 dark:text-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:border-slate-50  focus:ring-2 dark:ring-slate-400 font-semibold py-2 px-4 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out" href={route('unblock-user', id)} method="post" as="button">
                                                                Unblock
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                          </div>
                                      ))}
  
                                      {blockedusers.length === 0 && (
                                          <p className="text-2xl font-semibold text-slate-800 dark:text-slate-50">No blocked users</p> 
                                      )}
                                      {blockedusers.length !== 0 && (
                                          <div className="flex justify-center items-center"> 
                                              <Button className="bg-transparent text-slate-800 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                  Load more users
                                              </Button>
                                          </div>
                                      )}
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

export default BlockedUsers