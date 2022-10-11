import Authenticated from '@/Layouts/Authenticated';
import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react'

function UserProfile(props) {
    const {user} = usePage().props;

  return (
    <Authenticated 
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight ">{user.username} <br/> <span className="text-sm font-medium"> {user.ethnic_origin} </span></h2>}
        btnName="Back"
        svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>}
        href={route('home')}
    >

    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex-row sm:flex sm:space-x-2">
            <div className="w-full sm:w-[300px] h-min bg-gray-50 p-10 sm:p-6 rounded-md shadow-sm">
                <div className="flex items-center justify-center rounded-full ">
                    <img src={`http://localhost:3000/${user.profile_image}`} alt={`${props.auth.user.username}'s Profile photo`}  className="w-[170px] h-[170px] border-2 border-red-400 p-1 rounded-full" />
                </div>
                <div className="flex-none mt-4 text-center sm:text-left">
                    <div className="flex sm:hidden items-center justify-center"> 
                        <h1 className="text-xl font-bold">{user.username}, <span className="text-slate-600">{user.age}</span></h1>
                        <div className="ml-2"> 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                    </div>
                    <p className="sm:block hidden text-sm font-semibold">Current Profession</p>
                    <p className="text-sm font-normal text-slate-500">{user.current_profession}</p>
                </div>
                <div className="mt-2 text-center sm:text-left">
                    <p className="sm:block hidden text-sm font-semibold">Education</p>
                    <p className="text-sm font-normal text-slate-500">{user.highest_education} ({user.university})</p>
                </div>

                <div className="mt-4"> 
                    {props.auth.user.account_status == 0 ? ( 
                        <button disabled className="w-full justify-center disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none bg-transparent text-slate-800 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            <span className="text-xs sm:text-sm">Invite</span>
                        </button>
                    ) : ( (!user.isInvited ? (
                        <Link preserveScroll href={route('invite.user', user.id)} method="post" as="button"  className="w-full justify-center bg-purple-600 text-white hover:text-slate-50 hover:bg-purple-800 dark:text-slate-50 dark:bg-slate-800  dark:hover:bg-slate-900 dark:hover:text-slate-100 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            <span className="text-xs sm:text-sm">Invite</span>
                        </Link>
                    ) :
                        <Link preserveScroll href={route('uninvite.user', user.id)} method="post" as="button"  className="w-full justify-center bg-purple-600 text-white hover:text-slate-50 hover:bg-purple-800 dark:text-slate-50 dark:bg-slate-800  dark:hover:bg-slate-900 dark:hover:text-slate-100 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            <span className="text-xs sm:text-sm">Invited</span>
                        </Link> )
                    )}
                </div>
                
                <div className="mt-4"> 
                    <p className="sm:block hidden text-sm font-semibold mb-2">{user.username}'s Photos</p>

                    <p className="text-sm font-semibold mb-2 text-yellow-600">Invite {user.username} to see {user.gender == 'Male' ? 'his' : 'her'} full profile</p>

                    <div class="grid grid-flow-col grid-rows-1 sm:grid-rows-2 grid-cols-6 sm:grid-cols-3 gap-2">
                        <div>
                            <img src={`http://localhost:3000/${user.profile_image}`} alt={`${props.auth.user.username}'s Profile photo`} />
                        </div>
                        <div class="col-start-3">
                            <img src={`http://localhost:3000/${user.profile_image}`} alt={`${props.auth.user.username}'s Profile photo`} />
                        </div>
                        <div>
                            <img src={`http://localhost:3000/${user.profile_image}`} alt={`${props.auth.user.username}'s Profile photo`} />
                        </div>
                        <div>
                            <img src={`http://localhost:3000/${user.profile_image}`} alt={`${props.auth.user.username}'s Profile photo`} />
                        </div>
                        <div>
                            <img src={`http://localhost:3000/${user.profile_image}`} alt={`${props.auth.user.username}'s Profile photo`} />
                        </div>
                        <div>
                            <img src={`http://localhost:3000/${user.profile_image}`} alt={`${props.auth.user.username}'s Profile photo`} />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-2 sm:mt-0 sm:w-2/3 bg-gray-50 p-6 sm:p-10 rounded-md shadow-sm">
                <div>
                    <div className="hidden sm:flex items-center">
                        <h1 className="text-2xl font-bold">{user.username}, <span className="text-slate-600">{user.age} </span></h1>
                        
                        <div className="ml-2"> 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                    </div>
                    <p className="hidden sm:block text-slate-500">{user.ethnic_origin} From {user.country} - {user.height} </p>
                </div>
                <div >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"> 
                        <div className="rounded-lg">
                            <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 shadow rounded-full"> 
                                <img src="../assets/images/mosque.svg" className="h-10 w-10 object-center" />
                            </div>
                            <p>{user.religious_history == 'Other' ? 'Religious history other or not specified' : user.religious_history} Muslim - {user.sect == 'Other' ? 'Other sect or not specified' : user.sect}</p>
                            <p>{user.prayer_frequency == 'Hidden' ? '' : user.prayer_frequency + ' Prays'} </p>
                            <p>
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
                                        ) : ''
                                    }
                            </p>
                            <p>{user.eat_halal == 'Hidden' && '' } {user.eat_halal == 'Yes' ? 'Always eats halal' : 'Never eats halal'}</p>
                        </div>

                        <div className="rounded-lg">
                            <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 shadow rounded-full"> 
                                <img src="../assets/images/ring.svg" className="h-10 w-10" />
                            </div>
                            
                            {user.get_married !== '' && '<p>Preffered marriage time - </p>' + user.get_married}
                            <p>{user.marital_status}  </p>
                            <p>{user.like_to_have_children != '' ? 'Will like to have children in future' : ''}</p>
                            <p> {user.intend_to_move_out != '' && 'Intened to move out after marriage'}</p>
                        </div>
                        <div className="rounded-lg ">
                            <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 shadow rounded-full"> 
                                <img src="../assets/images/family.svg" className="h-10 w-10" />
                            </div>
                            <p>{user.siblings == 0 ? 'No Siblings' : 'Has ' + user.siblings + ' sibling(s)'}</p>
                            <p>{user.living_with != 'Hidden' ? user.living_with : ''}</p>
                            <p>{user.future_plan != '' ? 'Future plan : ' + user.future_plan : ''}</p>
                        </div>
                        <div className="rounded-lg">
                            <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 shadow rounded-full"> 
                                <img src="../assets/images/alcohol.svg" className="h-10 w-10" />
                            </div>
                            <p>
                                {user.smoke == 'Hidden' && '' } {user.smoke == 'Yes' ? 'Always smoke' : 'Never smoke'}
                                <br/>
                                {user.drink_alchohol == 'Hidden' && '' } {user.drink_alchohol == 'Yes' ? 'Drink alcohol' : 'Never drink alcohol'}
                                <br/>
                                {user.physical_disability == 'Hidden' && '' } {user.physical_disability == 'Yes' ? 'Has physical disability' : 'No physical disability'}
                            </p> 
                        </div>
                        
                        <div className="rounded-lg">
                            <div className="inline-flex items-center justify-center p-2 mb-2 bg-slate-50 shadow rounded-full"> 
                                <img src="../assets/images/globe.svg" className="h-10 w-10" />
                            </div>
                            <p>{user.ethnic_origin} From {user.country} - ({user.recidency_status})</p> 
                            <p>
                                {user.relocate == 'Not sure' && 'Not sure to relocate after marriage' } {user.relocate == 'Yes' ? 'Will relocate after marriage' : 'No intention to relocate after marriage'}
                            </p> 
                            <p>
                                {user.issues_living_with_inlaws == 'Not sure' && 'Not sure to have issue living with in-laws after marriage' } {user.issues_living_with_inlaws == 'Yes' ? 'Have issue living with in-laws after marriage' : 'No issues living with in-laws after marriage'}
                            </p>
                            <p>Intened to continue working after marriage - {user.continue_working}</p>
                        </div>
                    </div>

                    <div className="col-span-2 mt-2">
                        <hr className="bg-slate-100" />
                    </div>

                    <div className="col-span-2 mt-4">
                        <h1>About {user.username}</h1>
                        <p className="text-sm font-semibold mb-2 text-yellow-600">Invite {user.username} to see {user.gender == 'Male' ? 'his' : 'her'} bio</p>

                        <p className="whitespace-normal align-baseline text-justify leading-5 tracking-wide">
                            {user.bio}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </Authenticated>
  )
}

export default UserProfile


{/* <div className="inline-flex items-center justify-center space-x-2"> 
    <div className="p-2 bg-slate-50 shadow rounded-full"> 
        <img src="../assets/images/mosque.svg" className="h-10 w-10 object-center" />
    </div>
    <h2 className="font-semibold text-slate-600">Religious History</h2>
</div> */}