import Authenticated from '@/Layouts/Authenticated';
import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react'

function UserProfile(props) {
    const {user, userImages} = usePage().props;
    return (
    <Authenticated 
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight ">{user.username}</h2>}
        btnName="Back"
        svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>}
        href={route('home')}
    >

    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className=" bg-slate-50 p-6 dark:bg-slate-800 dark:highlight-white/5 shadow-sm rounded-md mb-2">
            <div class="flex flex-col-reverse">
                <div class="flex items-center space-x-4">
                    <img src={user.profile_image} alt={`${user.username}'s Profile photo`} class="flex-none w-[70px] h-[70px] border-[1px] border-red-400 p-1 rounded-full object-cover mt-[-41px]" loading="lazy"/>
                    <div class="flex-auto">
                        <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-50">
                            {user.username}
                        </h1>
                        <div className="mt-0.5">
                            <p className="text-slate-600 dark:text-slate-200">Age: {`${user.age}`}</p>
                            <p className="text-slate-600 dark:text-slate-200">Height: {`${user.height}`}</p>
                            <p className="text-slate-600 dark:text-slate-200">Ethnicity: {`${user.ethnic_origin}`}</p>
                            <p className="text-slate-600 dark:text-slate-200">Nationality: {user.country}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pl-10">
                <div className='mb-2 pl-11 pt-4'>
                    <div className="flex space-x-4 mt-3 text-sm font-medium">
                        <div className="flex-auto flex space-x-4">
                            {props.auth.user.account_status == 0 ? (
                                <button disabled className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none bg-transparent text-slate-800 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-2 border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    <span className="text-xs sm:text-sm">Invite</span>
                                </button>
                            ) : ( (!user.isInvited ? (
                                <Link preserveScroll href={route('invite.user', user.id)} method="post" as="button"  className="bg-transparent text-slate-800 dark:text-slate-300 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-500 border-2 border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    <span className="text-xs sm:text-sm">Invite</span>
                                </Link>
                            ) :
                                <Link preserveScroll href={route('uninvite.user', user.id)} method="post" as="button"  className="bg-transparent text-indigo-500 dark:text-slate-50 dark:bg-slate-800 hover:bg-slate-100 hover:text-indigo-600 dark:hover:bg-slate-50 dark:hover:text-slate-500 border-2 border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    <span className="text-xs sm:text-sm">Invited</span>
                                </Link> 
                                )
                            )}
                            {/* Save button */}

                        {!user.isSaved ? ( 
                            <Link preserveScroll method="post" href={route('save.user', user.id)} className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200 dark:border-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:text-slate-600" type="button" aria-label="Like">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </Link> )
                        : (
                            <Link preserveScroll method="post" href={route('unsave.user', user.id)} className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200 dark:border-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:text-slate-600" type="button" aria-label="Like">
                                <svg className="text-red-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                </svg>
                            </Link>
                        )}
                        </div>
                    </div>
                    <p className="pt-4 text-sm text-yellow-700">
                        {props.auth.user.account_status == 0 && 'You can send invitation to this user once your account is activated!'}
                    </p>
                </div>
            </div>
        </div>
        <div className="flex-row sm:flex sm:space-x-2">
            
            <div className="mt-2 sm:mt-0 sm:w-full bg-gray-50 dark:bg-slate-800 p-6 sm:p-10 rounded-md shadow-sm">
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"> 
                        <div className="rounded-lg">
                            <div className="inline-flex items-center justify-center ">
                                <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 dark:bg-slate-800 dark:border dark:border-sky-400 shadow rounded-full"> 
                                    <img src="../assets/images/profession.svg" className="h-8 w-8" />
                                </div>
                                <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 pl-2 pr-2">Qualifications</p>
                            </div>
                            <p className="text-md font-semibold text-slate-700 dark:text-slate-300">Education</p>
                            <p className="text-slate-700 dark:text-slate-300">{user.highest_education} From {user.university_name}</p> 
                            <p className="text-md font-semibold text-slate-700 dark:text-slate-300 mt-3">Profession</p>
                            <p className="text-slate-700 dark:text-slate-300">{user.current_profession} at {user.company_name}</p> 
                           
                        </div>
                        <div className="rounded-lg">
                            <div className="inline-flex items-center justify-center ">
                                <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 dark:bg-slate-800 dark:border dark:border-red-400 shadow rounded-full"> 
                                    <img src="../assets/images/globe.svg" className="h-8 w-8" />
                                </div>
                                <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 pl-2 pr-2">Address</p>
                            </div>
                            
                            <p className="text-slate-700 dark:text-slate-300">{user.ethnic_origin} From {user.country}, {user.city} - ({user.recidency_status})</p> 
                            <p className="text-md font-semibold text-slate-700 dark:text-slate-300  mt-3">Back home address</p>
                            <p className="text-slate-700 dark:text-slate-300">{user.back_home_country}, {user.back_home_city} - ({user.back_home_area})</p> 
                            <p className="text-slate-700 dark:text-slate-300">
                                {user.relocate == 'Not sure' && 'Not sure to relocate after marriage' } {user.relocate == 'Yes' ? 'Will relocate after marriage' : 'No intention to relocate after marriage'}
                            </p> 
                        </div>

                        <div className="rounded-lg">
                            <div className="inline-flex items-center justify-center ">
                                <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 dark:bg-slate-800 dark:border dark:border-red-400 shadow rounded-full"> 
                                    <img src="../assets/images/mosque.svg" className="h-8 w-8 object-center" />
                                </div>
                                <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 pl-2 pr-2">Religious Observance</p>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300">{user.religious_history == 'Other' ? 'Religious history other or not specified' : user.religious_history} Muslim - {user.sect == 'Other' ? 'Other sect or not specified' : user.sect}</p>
                            <p className="text-slate-700 dark:text-slate-300">{user.prayer_frequency == 'Hidden' ? '' : user.prayer_frequency + ' prayers'} </p>
                            {/* <p className="text-slate-700 dark:text-slate-300">
                                {
                                    user.wear_hijab_keep_beard != 'Hidden' ? (
                                        user.gender == 'Male' ? (
                                            user.wear_hijab_keep_beard == 'Yes' ? 
                                                'Likes to Keep Beard' 
                                            : 'Doesn\'t Like to keep beard'
                                            ) : 
                                            (user.gender == 'Female' && (
                                                user.wear_hijab_keep_beard == 'Yes' ? 
                                                    'Likes to wear Hijab' 
                                                : 'Doesn\'t Like to wear Hijab'))
                                    ) 
                                    : ''
                                }
                            </p> */}
                            <p className="text-slate-700 dark:text-slate-300">{user.eat_halal == 'Hidden' && '' } {user.eat_halal == 'Yes' ? 'Always eats halal' : 'Never eats halal'}</p>
                            <p className="text-slate-700 dark:text-slate-300">
                                {user.smoke == 'Hidden' && '' } {user.smoke == 'Yes' ? 'Smoke' : 'Never smoke'}
                                <br/>
                                {user.drink_alchohol == 'Hidden' && '' } {user.drink_alchohol == 'Yes' ? 'Drink alcohol' : 'Never drink alcohol'}
                            </p> 
                        </div>

                        <div className="rounded-lg">
                            <div className="inline-flex items-center justify-center ">
                                <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 dark:bg-slate-800 dark:border dark:border-green-300 shadow rounded-full"> 
                                    <img src="../assets/images/ring.svg" className="h-8 w-8" />
                                </div>
                                <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 pl-2 pr-2">Personal</p>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300">{user.marital_status}  </p>
                            <p className="text-slate-700 dark:text-slate-300">{user.like_to_have_children != '' ? 'Will like to have children in future' : ''}</p>
                        </div>

                        <div className="rounded-lg ">
                            <div className="inline-flex items-center justify-center ">
                                <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 dark:bg-slate-800 dark:border dark:border-purple-400 shadow rounded-full"> 
                                    <img src="../assets/images/family.svg" className="h-8 w-8" />
                                </div>
                                <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 pl-2 pr-2">Family</p>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300">{user.siblings == 0 ? 'No Siblings' : 'Has ' + user.siblings + ' sibling(s)'}</p>
                        </div>
                    </div>

                    <div className="col-span-2 mt-2">
                        <hr className="bg-gray-200 border-0 h-[0.1rem] dark:bg-gray-700" />
                    </div>

                    <div className="col-span-2 mt-4">
                        <h1 className="text-md text-slate-700 dark:text-slate-300 font-semibold">About {user.username}</h1>
                        <p className="whitespace-normal align-baseline text-justify leading-5 tracking-wide">
                            {user.bio}
                        </p>

                        <div className="mt-4"> 
                            <p className="sm:block hidden text-sm font-semibold mb-2">{user.username}'s Photos</p>

                            <p className="text-sm font-semibold mb-2 text-yellow-600">Invite {user.username} to see {user.gender == 'Male' ? 'his' : 'her'} full profile</p>

                            <div class="flex justify-start items-start gap-1">
                                {userImages.map(({image, id}) => (
                                    <div key={id}>
                                        <div className="h-[200px] w-[200px] rounded-lg ">
                                            <img className="rounded-lg h-[200px] w-[200px] border-2 border-red-100 p-1 aspect-square object-fit" src={image} alt={`${user.username}'s Profile photo`} />
                                        </div>
                                    </div>
                                ))}
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

export default UserProfile
