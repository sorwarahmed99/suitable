import ResponsiveSidenav from '@/Components/ResponsiveSidenav'
import UserSideNav from '@/Components/UserSideNav'
import Authenticated from '@/Layouts/Authenticated'
import React from 'react'
import { Head, InertiaLink, Link, useForm, usePage } from '@inertiajs/inertia-react';

function Settings(props) {
  return (
    <Authenticated 
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight ">Settings</h2>}
      btnName="Back"
      svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>}
      href={route('home')}
    >
    <ResponsiveSidenav />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex-row sm:flex sm:space-x-2">
                <div className="hidden sm:block sm:w-[250px] h-min ">
                    
                    <UserSideNav/>
                    
                </div>
                
                <div className="mt-2 sm:mt-0 sm:w-2/3 bg-gray-50 p-6 sm:p-10 rounded-md shadow-sm">
                  <div className="container mx-auto mt-10 rounded bg-gray-100 dark:bg-gray-700 w-11/12 xl:w-full">
                      <div className="xl:w-full py-5 px-8">
                          <div className="flex items-center mx-auto">
                              <div className="container mx-auto">
                                  <div className="mx-auto xl:w-full">
                                      <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Alerts</p>
                                      <p className="text-sm text-gray-500 dark:text-gray-400 pt-1">Get updates of any new activity or features. Turn on/off your preferences</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="container mx-auto pb-6">
                        <div className="pb-4 border-b border-gray-300 dark:border-gray-700 px-8">
                            <div className="flex items-center text-gray-800 dark:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                </svg>
                                <p className="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100">Blocked users</p>
                            </div>
                        </div>
                        <div className="px-8">
                            <div className="flex justify-between items-center mb-8 mt-4">
                                <div className="w-9/12">
                                    <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Blocked users</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Manage all users you blocked from here.</p>
                                </div>
                                <div className="cursor-pointer relative">
                                    <Link className="text-indigo-500 text-xs sm:text-sm hover:underline" href={route('block-users')} method="get">See all</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center pb-4 border-b border-gray-300 dark:border-gray-700 px-8 text-gray-800 dark:text-gray-100">
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <rect x={3} y={5} width={18} height={14} rx={2} />
                                  <polyline points="3 7 12 13 21 7" />
                              </svg>
                              <p className="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100">Via Email</p>
                          </div>
                          <div className="px-8">
                              <div className="flex justify-between items-center mb-8 mt-4">
                                  <div className="w-9/12">
                                      <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Invite Request</p>
                                      <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when an invite request is made</p>
                                  </div>
                                  <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                      <input type="checkbox" name="email_comments" id="toggle1" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                                      <label htmlFor="toggle1" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer" />
                                  </div>
                              </div>
                              <div className="flex justify-between items-center mb-8">
                                  <div className="w-9/12">
                                      <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Admin</p>
                                      <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when a admin wants to contact with you.</p>
                                  </div>
                                  <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                      <input type="checkbox" name="email_job_application" id="toggle2" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                                      <label htmlFor="toggle2" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer" />
                                  </div>
                              </div>
                              <div className="flex justify-between items-center mb-8">
                                  <div className="w-9/12">
                                      <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Product Updates</p>
                                      <p className="text-sm text-gray-500 dark:text-gray-400">Get notifitied when there is a new product feature or upgrades</p>
                                  </div>
                                  <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                      <input type="checkbox" name="email_product_update" id="toggle3" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                                      <label htmlFor="toggle3" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer" />
                                  </div>
                              </div>
                          </div>
                          <div className="pb-4 border-b border-gray-300 dark:border-gray-700 px-8">
                              <div className="flex items-center text-gray-800 dark:text-gray-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                  </svg>
                                  <p className="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100">Push Notifications</p>
                              </div>
                          </div>
                          <div className="px-8">
                              <div className="flex justify-between items-center mb-8 mt-4">
                                  <div className="w-9/12">
                                      <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Invite request</p>
                                      <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when an invite request is made</p>
                                  </div>
                                  <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                      <input type="checkbox" name="notification_comment" id="toggle4" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                                      <label htmlFor="toggle4" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer" />
                                  </div>
                              </div>
                              {/* <div className="flex justify-between items-center mb-8">
                                  <div className="w-9/12">
                                      <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Job Applications</p>
                                      <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when a candidate applies to a job posting</p>
                                  </div>
                                  <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                      <input type="checkbox" name="notification_application" id="toggle5" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                                      <label htmlFor="toggle5" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer" />
                                  </div>
                              </div> */}
                              <div className="flex justify-between items-center mb-8">
                                  <div className="w-9/12">
                                      <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Product Updates</p>
                                      <p className="text-sm text-gray-500 dark:text-gray-400">Get notifitied when there is a new product feature or upgrades</p>
                                  </div>
                                  <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                      <input type="checkbox" name="notification_updates" id="toggle6" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                                      <label htmlFor="toggle6" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="container mx-auto w-11/12 xl:w-full">
                      <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
                          <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4">Cancel</button>
                          <button className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="submit">
                              Save
                          </button>
                      </div>
                  </div>
                </div>
            </div>
        </div> 


    </Authenticated>
  )
}

export default Settings