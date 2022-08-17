import SearchFilter from '@/Components/User/SearchFilter';
import Authenticated from '@/Layouts/AdminLayouts/Authenticated'
import { Link, usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react'

function Index(props) {
  const [show, setShow] = useState(null)
  const { users, active_users } = usePage().props;
  return (
    <>
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={`Users`}
            btnName="Active users"
            href={route('admin.activeUsers')}
        >
            {/* <SearchFilter /> */}
            <div className="bg-white dark:bg-slate-800 shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="h-16 w-full text-sm leading-none text-gray-800 dark:text-white">
                            <th className="font-normal text-left pl-4">Basic info</th>
                            <th className="font-normal text-left pl-12">Profile Progress</th>
                            <th className="font-normal text-left pl-12">Subscription</th>
                            <th className="font-normal text-left pl-16">Images</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {users && users.map(({ id, firstname, lastname, email, age, country, recidency_status, ethnic_origin, profile_image, highest_education, current_profession, prayer_frequency, sect, created_at, profile_step  }) => (
                            <tr key={id} className={`h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100`}>
                                <td className="pl-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            {/* <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects.png" /> */}
                                            {profile_image && (
                                                <img src={`http://localhost:3000/${profile_image}`} alt={`${firstname}'s Profile photo`}  className="w-full h-full" />
                                            )}
                                            
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">{firstname}  {lastname} , {age}</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">{email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">
                                    {profile_step == 2 && '20' } {profile_step == 3 && '30' } {profile_step == 4 && '40' } {profile_step == 5 && '50' } {profile_step == 6 && '60' } {profile_step == 7 && '70' } {profile_step == 8 && '80' }%</p>
                                        <div className="w-30 h-3 bg-gray-100 rounded-full mt-2">
                                            <div className={`${profile_step == 2 && 'w-2'} ${profile_step == 3 && 'w-5'} ${profile_step == 4 && 'w-7'} ${profile_step == 5 && 'w-10'} ${profile_step == 6 && 'w-12'} ${profile_step == 7 && 'w-15'} ${profile_step == 8 && 'w-20'}  h-3 bg-green-400 rounded-full`} />
                                        </div>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">Yes</p>
                                    <p className="text-xs leading-3 text-gray-600 mt-2">Start date {created_at}</p>
                                </td>
                                <td className="pl-10">
                                <div className="flex items-center">
                                    <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" />
                                    <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png" />
                                    <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png" />
                                    {/* <img className="shadow-md w-8 h-8 rounded-full -ml-2" src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png" /> */}
                                </div>
                                </td>
                            
                                <td className="px-7 2xl:px-0">
                                    {
                                        show==id ? <button onClick={()=>setShow(null)} className="focus:outline-none pl-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>:<button onClick={()=>setShow(id)} className="focus:outline-none pl-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                            <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    }
                                    {show==id &&  <div className="dropdown-content shadow w-24 absolute z-30 right-0 mr-6 ">
                                        <div className="text-xs w-full bg-slate-800 text-white hover:bg-indigo-700 py-2 px-4 cursor-pointer hover:text-white">
                                            {/* <p>Activate {id}</p> */}
                                            <Link href={route('admin.activate_user', id)} method="post" as="button">
                                            Activate
                                            </Link>
                                        </div>
                                        
                                        <div className="text-xs bg-purple-500 text-slate-50 w-full hover:bg-red-700 py-2 px-4 cursor-pointer hover:text-white">
                                            <p>Block {id}</p>
                                        </div>
                                    </div>}
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </Authenticated>
    </>
  )
}

export default Index