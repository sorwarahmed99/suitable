import SearchFilter from '@/Components/User/SearchFilter';
import Authenticated from '@/Layouts/AdminLayouts/Authenticated'
import { Link, usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react'


function ActiveUsers(props) {
  const [show, setShow] = useState(null)
  const [showUserDetails, setShowUserDetails] = useState(null);
  const [userId, setUserId] = useState(null);

  const { users, active_users } = usePage().props;

  return (
    <>
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={`Active users`}
            btnName="Back"
            href={route('admin.users')}
        >
            {/* <SearchFilter /> */}
            <div className="bg-white dark:bg-slate-800 shadow px-4 md:px-10 pt-4 md:pt-7 pb-5">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="h-16 w-full text-sm leading-none text-gray-800 dark:text-white">
                            <th className="font-normal text-left pl-4">Basic info</th>
                            <th className="font-normal text-left pl-12">Profile Progress</th>
                            <th className="font-normal text-left pl-12">Subscription</th>
                            {/* <th className="font-normal text-left pl-16">Images</th> */}
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {active_users && active_users.map(({ id, 
                                                username, 
                                                email, 
                                                age, 
                                                gender, 
                                                date_of_birth, 
                                                ethnic_origin, 
                                                country, 
                                                city, 
                                                area, 
                                                recidency_status, 
                                                relocate, 
                                                back_home_country, 
                                                back_home_city, 
                                                back_home_area, 
                                                profile_image,
                                                marital_status,
                                                have_children,
                                                height,
                                                highest_education,
                                                university,
                                                course_name,
                                                college,
                                                college_course_name,
                                                current_profession,
                                                company_name,
                                                religious_history,
                                                prayer_frequency,
                                                sect,
                                                eat_halal,
                                                drink_alchohol,
                                                bio,
                                                userImages,
                                                read_quran,
                                                siblings,
                                                ip, 
                                                location_lat,
                                                location_long,
                                                current_logged_in_device,
                                                login_time,  
                                                profile_step,
                                                created_at }) => {
                                return (
                                    <tr key={id} className={`h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100`}>
                                        <td className="pl-4">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10">
                                                    {/* <img className="w-full h-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects.png" /> */}
                                                    {profile_image && (
                                                        <img src={profile_image} alt={`${username}'s Profile photo`} className="w-full h-full" />
                                                    )}
                                                </div>
                                                
                                                {showUserDetails === id ? (
                                                    <div onClick={() => setShowUserDetails(null)} className="pl-4 cursor-pointer">
                                                        <p className="font-medium">{username}, {age}</p>
                                                        <p className="text-xs leading-3 text-gray-600 pt-2">{email}</p>
                                                    </div>
                                                ) : (
                                                    <div onClick={() => setShowUserDetails(id)} className="pl-4 cursor-pointer">
                                                        <p className="font-medium">{username}, {age}</p>
                                                    <p className="text-xs leading-3 text-gray-600 pt-2">{email}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="pl-12">
                                            <p className="text-sm font-medium leading-none text-gray-800">
                                                {profile_step == 2 && '20'} {profile_step == 3 && '30'} {profile_step == 4 && '40'} {profile_step == 5 && '50'} {profile_step == 6 && '60'} {profile_step == 7 && '70'} {profile_step == 8 && '80'}%</p>
                                            <div className="w-30 h-3 bg-gray-100 rounded-full mt-2">
                                                <div className={`${profile_step == 2 && 'w-2'} ${profile_step == 3 && 'w-5'} ${profile_step == 4 && 'w-7'} ${profile_step == 5 && 'w-10'} ${profile_step == 6 && 'w-12'} ${profile_step == 7 && 'w-15'} ${profile_step == 8 && 'w-20'}  h-3 bg-green-400 rounded-full`} />
                                            </div>
                                        </td>
                                        <td className="pl-12">
                                            <p className="font-medium">Yes</p>
                                            <p className="text-xs leading-3 text-gray-600 mt-2">Start date {created_at}</p>
                                        </td>
                                        

                                        <td className="px-7 2xl:px-0">
                                            {show == id ? <button onClick={() => setShow(null)} className="focus:outline-none pl-7">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button> : <button onClick={() => setShow(id)} className="focus:outline-none pl-7">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>}
                                            {show == id && <div className="dropdown-content shadow w-24 absolute z-30 right-0 mr-6 ">
                                                <div className="text-xs w-full bg-slate-800 text-white hover:bg-indigo-700 py-2 px-4 cursor-pointer hover:text-white">
                                                    <Link href={route('admin.suspendUser', id)} method="post" as="button">
                                                        Suspend 
                                                    </Link>
                                                </div>

                                            </div>}
                                        </td>
                                        {showUserDetails === id && (
                                            <div className={`w-full absolute z-50 top-0 right-0 bottom-0 left-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-1000${!showUserDetails && "translate-hide"}`}>
                                                <div className="2xl:w-6/12 lg:w-6/12 bg-gray-50 h-screen overflow-y-auto p-8 absolute right-0">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div className="w-12 h-12">
                                                                {profile_image && (
                                                                    <img src={profile_image} alt={`${username}'s Profile photo`} className="w-full h-full border-2 border-purple-300 rounded-full" />
                                                                )}
                                                            </div>
                                                            <div className="pl-4">
                                                                <h1 className="text-2xl font-bold leading-6 text-gray-800">{username}, {age} ({gender})</h1>
                                                                <div className="mt-2">
                                                                    <Link className="text-xs font-semibold px-2 py-1 border border-purple-600 text-purple-500 bg-transparent rounded-lg shadow-sm hover:bg-purple-500 hover:text-white hover:border-none" href={route('admin.activate_user', id)} method="post" as="button">
                                                                        Activate user
                                                                    </Link>
                                                                    <Link className="text-xs font-semibold px-2 py-1 border border-red-400 text-red-400 bg-transparent ml-2 rounded-lg shadow-sm hover:bg-red-400 hover:text-white hover:border-none" href={route('admin.activate_user', id)} method="post" as="button">
                                                                        Suspend user
                                                                    </Link>
                                                                    <Link className="text-xs font-semibold px-2 py-1 border border-purple-600 text-purple-500 bg-transparent ml-2 rounded-lg shadow-sm hover:bg-purple-500 hover:text-white hover:border-none" href={route('admin.activate_user', id)} method="post" as="button">
                                                                        User History
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cursor-pointer" onClick={() => setShowUserDetails(!showUserDetails)}>
                                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M18 6L6 18" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M6 6L18 18" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 sm:mt-0 sm:w-full bg-gray-50 p-4 sm:p-2 rounded-md shadow-sm">
                                                        
                                                        <div>
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                                                                <div className="rounded-lg">
                                                                    <div className="inline-flex items-center justify-center p-2 mb-2 text-purple-500 bg-slate-50 shadow rounded-full">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className=" w-8 h-8">
                                                                            <path stroke-linecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                        </svg>
                                                                    </div>
                                                                    <p>Email - {email}</p>
                                                                    <p>Date of birth - {date_of_birth}</p>
                                                                    <p>Height - {height}</p>
                                                                    <p>Start date {created_at}</p>

                                                                    <p className="mt-2 text-sm font-medium leading-none text-gray-800">
                                                                        {profile_step == 2 && '20'} {profile_step == 3 && '30'} {profile_step == 4 && '40'} {profile_step == 5 && '50'} {profile_step == 6 && '60'} {profile_step == 7 && '70'} {profile_step == 8 && '100'}% Profile</p>
                                                                    <div className="w-20 h-2 bg-gray-100 rounded-full mt-2">
                                                                        <div className={`${profile_step == 2 && 'w-2'} ${profile_step == 3 && 'w-5'} ${profile_step == 4 && 'w-7'} ${profile_step == 5 && 'w-10'} ${profile_step == 6 && 'w-12'} ${profile_step == 7 && 'w-15'} ${profile_step == 8 && 'w-20'}  h-3 bg-green-400 rounded-full`} />
                                                                    </div>
                                                                </div>
                                                                

                                                                <div className="rounded-lg">
                                                                    <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 shadow rounded-full">
                                                                        <img src='../../../../../public/assets/images/glove.svg' className="h-10 w-10" />
                                                                    </div>
                                                                    <p>{ethnic_origin} From {country} - ({recidency_status})</p>
                                                                    <p>{city} - {area}</p>
                                                                    <p>
                                                                        {relocate == 'Not sure' && 'Not sure to relocate after marriage'} {relocate == 'Yes' ? 'Will relocate after marriage' : 'No intention to relocate after marriage'}
                                                                    </p>
                                                                    <h3 className="mt-4 font-medium text-base text-gray-800 border-b border-gray-200">Back home address</h3>
                                                                    <p>{back_home_country}</p>
                                                                    <p>{back_home_city} - {back_home_area}</p>
                                                                </div>


                                                                <div className="rounded-lg">
                                                                    <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 shadow rounded-full">
                                                                        <img src="../assets/images/mosque.svg" className="h-10 w-10 object-center" />
                                                                    </div>
                                                                    <p>Religious history - {religious_history} - Sect {sect == 'Other' ? 'Other sect or not specified' : sect}</p>
                                                                    <p>Prayer frequency - {prayer_frequency == 'Hidden' ? 'Not specified' : prayer_frequency + ' Prays'} </p>
                                                                    
                                                                    <p>Read Quran - {read_quran}</p>
                                                                </div>

                                                                {/* <div className="rounded-lg">
                                                                    <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 shadow rounded-full">
                                                                        <img src="../assets/images/ring.svg" className="h-10 w-10" />
                                                                    </div>
                                                                    <p>{marital_status}</p>
                                                                    <p>Have children - {have_children}  </p>
                                                                </div> */}


                                                                <div className="rounded-lg ">
                                                                    <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 shadow rounded-full">
                                                                        <img src="../assets/images/family.svg" className="h-10 w-10" />
                                                                    </div>
                                                                    <p>{siblings == 0 ? 'No Siblings' : 'Has ' + siblings + ' sibling(s)'}</p>
                                                                    <p>{marital_status}</p>
                                                                    <p>Have children - {have_children}  </p>
                                                                </div>

                                                                <div className="rounded-lg">
                                                                    <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 shadow rounded-full">
                                                                        <img src="../assets/images/alcohol.svg" className="h-10 w-10" />
                                                                    </div>
                                                                    <p>
                                                                        {/* {smoke == 'Hidden' && ''} {smoke == 'Yes' ? 'Always smoke' : 'Never smoke'}
                                                                        <br />
                                                                        {drink_alchohol == 'Hidden' && ''} {drink_alchohol == 'Yes' ? 'Drink alcohol' : 'Never drink alcohol'}
                                                                        <br /> */}

                                                                    <p>Eat halal - {eat_halal == 'Hidden' ? '' : eat_halal}</p>
                                                                    <p>Drink alcohol - {drink_alchohol == 'Hidden' ? '' : drink_alchohol}</p>
                                                                    </p>
                                                                </div>
                                                                
                                                                <div className="rounded-lg">
                                                                    <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 shadow rounded-full">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-indigo-500">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                                                    </svg>
                                                                    
                                                                    </div>
                                                                    <p className="whitespace-normal">Highest education - {highest_education}</p>
                                                                    <p className="whitespace-normal">{university != null && 'University - ' + university} - {course_name != null && course_name}</p>
                                                                    <p className="whitespace-normal">{college != null && 'College - ' + college} - {college_course_name != null && college_course_name}</p>
                                                                    <p className="whitespace-normal">{current_profession != null && 'Current Profession - ' + current_profession} at {company_name != null && company_name}</p>
                                                                </div>

                                                                <div className="rounded-lg">
                                                                    <div className="inline-flex items-center justify-center p-2 mb-2 text-red-400 bg-slate-50 shadow rounded-full">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-10 h-10">
                                                                            <path stroke-linecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                        </svg>
                                                                    </div>
                                                                    <h3 className="mt-4 font-medium text-base  text-gray-800 border-b border-gray-200">Login details</h3>
                                                                
                                                                    <ul className="mt-2 list-outside list-disc">
                                                                        <li className="text-sm ">Last login - {login_time}</li>
                                                                        <li className="text-sm ">IP - {ip}</li>
                                                                        <li className="text-sm ">Logged in device : 
                                                                            <p className="whitespace-normal">{current_logged_in_device}</p>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <p className="whitespace-normal align-baseline text-justify leading-5 tracking-wide">
                                                                    {bio}
                                                                </p>

                                                                <div className="mt-4"> 
                                                                    <p className="sm:block hidden text-sm font-semibold mb-2">{username}'s Photos</p>
                                                                    <div class="grid grid-flow-col grid-rows-1 sm:grid-rows-2 grid-cols-6 sm:grid-cols-3 gap-2">
                                                                        {userImages && userImages.map(({image, id}) => (
                                                                            <div key={id}>
                                                                                <img src={image} alt={`${username}'s Profile photo`} />
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-span-2 mt-2">
                                                                <hr className="bg-slate-100" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)}
                                    </tr>
                                );
                            })}

                            {/* {users.map( user =>  )} */}
                    </tbody>
                </table>

                
            </div>
            
        </Authenticated>
    </>
  )
}

export default ActiveUsers