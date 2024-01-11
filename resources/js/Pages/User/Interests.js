import Button from '@/Components/Button';
import Dropdown from '@/Components/Dropdown';
import EmptyState from '@/Components/EmptyState';
import MatchedSideNav from '@/Components/MatchedSideNav';
import Authenticated from '@/Layouts/Authenticated'
import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react'

import Img from '../../../../public/assets/images/user-avatar.png'


function Interests({auth, errors}) {
    const { savedusers, savers, user } = usePage().props;


  return (
    <Authenticated 
      auth={auth}
      errors={errors}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight ">Saved Profiles</h2>}
      btnName="Back"
      svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>}
      href={route('home')}
    >

        <div className="max-w-9xl mx-auto sm:px-6 md:px-8">
            <div className="flex-row sm:flex sm:space-x-2">
                <div className="sm:w-[250px] h-min ">
                    <MatchedSideNav/>
                </div>
                
                <div className="mt-2 sm:mt-0 sm:w-2/3 bg-gray-50 dark:bg-slate-700 sm:p-10 rounded-md shadow-sm ">
                    <div className="">
                        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                            <div className="overflow-hidden ">
                                <div className="">
                                    {savedusers.map(({ id, firstname, lastname, username, gender, age, height, country, recidency_status, ethnic_origin, profile_image, highest_education, current_profession, prayer_frequency, sect, saved, isFollowing, isSaved, isInvited, isAccepted }) => (
                                        <div className=" bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5 shadow-md mb-2 border-2 border-slate-100" key={id}>
                                        <div class="flex flex-col-reverse">
                                            <div class="flex items-center space-x-4">
                                                <img src={profile_image} alt={`${username}'s Profile photo`} class="flex-none w-14 h-14 rounded-full object-cover" loading="lazy"/>
                                                <div class="flex-auto">
                                                    <div class="text-lg font-semibold text-slate-900 dark:text-slate-50">
                                                        {username}, {`${age}`}
                                                    </div>
                                                    <div className="mt-0.5 text-sm font-medium text-slate-600 dark:text-slate-200">
                                                        {ethnic_origin} From {country} 
                                                        <span className="text-slate-600 dark:text-slate-200"> - {recidency_status}</span> 
                                                    </div>
                                                </div>
                                                <div class="flex flex-wrap text-slate-700 dark:text-slate-300">
                                                    <div className="text-lg font-semibold text-slate-500 dark:text-slate-300">
                                                        {auth.user.account_status == 1 &&
                                                            <Link method="post" href={route('pass-user', id)} preserveScroll>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </Link>
                                                        }
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pl-10">
                                            <div className="w-full flex-none text-slate-700 pl-8 pb-2">
                                                <p className="text-sm text-slate-600 dark:text-slate-300">{highest_education != '' ? highest_education : ''  } - {current_profession} - {height}</p>
                                                <p className="text-sm text-slate-600 dark:text-slate-300">Practicing Muslim - {sect}</p>
                                            </div>
                                            <div className='mb-2 pl-8 pt-4'>
                                                <div className="flex space-x-4 mt-3 text-sm font-medium">
                                                    <div className="flex-auto flex space-x-4">
                                                        <Link href={route('user-profile', username)} as='a' className="h-10 bg-black dark:bg-slate-100 text-slate-50 dark:text-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50  focus:ring-2 dark:ring-slate-400 font-bold py-2 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                            <span className="text-xs sm:text-sm">View</span>
                                                        </Link>
                                                        {auth.user.account_status == 0 ? (
                                                            <button disabled className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none bg-transparent text-slate-800 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                                </svg>
                                                                <span className="text-xs sm:text-sm">Invite</span>
                                                            </button>
                                                        ) : ( (!isInvited ? (
                                                            <Link preserveScroll href={route('invite.user', id)} method="post" as="button"  className="bg-transparent text-slate-800 dark:text-slate-300 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-500 border border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                                </svg>
                                                                <span className="text-xs sm:text-sm">Invite</span>
                                                            </Link>
                                                        ) :
                                                            <Link preserveScroll href={route('uninvite.user', id)} method="post" as="button"  className="bg-transparent text-indigo-500 dark:text-slate-50 dark:bg-slate-800 hover:bg-slate-100 hover:text-indigo-600 dark:hover:bg-slate-50 dark:hover:text-slate-500 border border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                                </svg>
                                                                <span className="text-xs sm:text-sm">Cancel</span>
                                                            </Link> 
                                                            
                                                            )
                                                        )}
                                                    </div>
                                                    

                                                    {/* Save button */}

                                                    {!isSaved ? ( 
                                                        <Link preserveScroll method="post" href={route('save.user', id)} className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200 dark:border-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:text-slate-600" type="button" aria-label="Like">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                            </svg>
                                                        </Link> )
                                                    : (
                                                        <Link preserveScroll method="post" href={route('unsave.user', id)} className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200 dark:border-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:text-slate-600" type="button" aria-label="Like">
                                                            <svg className="text-red-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                                            </svg>
                                                        </Link>
                                                    )}
                                                </div>
                                                <p className="pt-4 text-sm text-yellow-700">
                                                    {auth.user.account_status == 0 && 'You can send invitation to this user once your account is activated!'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    ))}

                                    {savedusers.length !== 0 && (
                                        <div className="flex justify-center items-center"> 
                                            {/* <Button className="bg-transparent text-slate-800 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                Load more users
                                            </Button> */}
                                        </div>
                                    )}
                                    
                                </div>
                            </div>
                        </div>
                            {savedusers.length === 0 && (

                            <div className=" ">
                                <EmptyState bgimage="bg-empty-background" title="Looks like its empty in here." subtitle="Please browse for more users..." btnName="Read our faqs" linktext="Have any questions?" href={route('faq')} />
                                    {/* <p className="text-2xl font-semibold text-slate-800 dark:text-slate-50">Looks like you've reached to the end. Please come back later!</p>  */}
                            </div>
                            )}
                    </div>
                    
                </div>
                
            </div>
            
        </div> 

    </Authenticated>
  )
}

export default Interests