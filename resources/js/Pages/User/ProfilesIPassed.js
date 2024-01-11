import Button from '@/Components/Button'
import Dropdown from '@/Components/Dropdown'
import EmptyState from '@/Components/EmptyState'
import MatchedSideNav from '@/Components/MatchedSideNav'
import Authenticated from '@/Layouts/Authenticated'
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import Img from '../../../../public/images/user-avatar.png'


function ProfilesIPassed({auth}) {
    const { passedusers, savers, user } = usePage().props;

    return (
    <Authenticated 
      auth={auth}
    //   errors={errors}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight ">Profiles I passed</h2>}
      btnName="Back"
      svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>}
      href={route('home')}
    >

        <div className="max-w-9xl mx-auto sm:px-6 md:px-8">
            <div className="flex-row sm:flex sm:space-x-2">
                <div className="sm:w-[250px] h-min ">
                    
                    <MatchedSideNav/>
                    
                </div>
                
                <div className="mt-2 sm:mt-0 sm:w-2/3 bg-gray-50 dark:bg-slate-700 sm:p-10 rounded-md shadow-sm">
                    <div className="">
                        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                            <div className="overflow-hidden ">
                                <div className="">
                                    {passedusers.map(({ id, firstname, lastname, username, gender, age, country, recidency_status, ethnic_origin, profile_image, highest_education, current_profession, prayer_frequency, sect, saved, isFollowing, isSaved, isInvited, isAccepted }) => (
                                        <div key={id} className="flex-none sm:flex bg-white dark:bg-slate-800 shadow-md sm:rounded-lg  space-y-2 mb-4">
                                            <div className="blur-[2px] overflow-hidden relative sm:min-h-full w-full sm:w-[19rem] sm:mb-0 mb-3">
                                                {!profile_image ? (
                                                    <img src="assets/images/man.svg" alt={`Man photo`}  className="blur-[2px] w-full sm:w-[19rem] h-auto sm:min-h-full inset-0 object-cover aspect-square sm:rounded-l-lg" />
                                                ):                                                 
                                                    <img src={profile_image} alt={`${username}'s Profile photo`}  className="blur-[2px] w-full sm:w-[19rem] h-auto sm:min-h-full inset-0 object-cover aspect-square sm:rounded-l-lg"  />
                                                }
                                            </div>
                                            <div className="flex-auto p-4 sm:ml-3 justify-evenly">
                                                <div className="flex items-center sm:mt-2">
                                                    <div className="flex flex-col ">
                                                        <div className="flex flex-wrap">
                                                            <div className="flex items-center">
                                                                <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                                                                    {username}, {age}
                                                                </h1>
                                                                <div className="m-1 ml-2 rounded-full bg-green-600 h-2 w-2"></div>
                                                            </div>
                                                            <h1 className="flex-auto text-lg font-semibold text-slate-900">
                                                                {/* {age} */}
                                                            </h1>
                                                            
                                                            <div className="text-lg font-semibold text-slate-500">
                                                                
                                                                <Dropdown>
                                                                    <Dropdown.Trigger>
                                                                        <span className="inline-flex rounded-md">
                                                                            <button
                                                                                type="button"
                                                                                className="inline-flex items-center text-sm leading-4 font-medium rounded focus:bg-slate-200 dark:focus:bg-slate-200 dark:focus:text-slate-800 focus:border-slate-400 px-2 py-1 text-gray-500 dark:text-gray-100 focus:outline-none transition ease-in-out duration-150"
                                                                            >
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 text-slate-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                                                                </svg>
                                                                            </button>
                                                                        </span>
                                                                    </Dropdown.Trigger>

                                                                    <Dropdown.Content className="w-10" >
                                                                        <Dropdown.Link className="sm:hidden block" href={route('undo-pass-user', id)}  method="post" as="button">
                                                                            Undo Hidden
                                                                        </Dropdown.Link>
                                                                        <Dropdown.Link href={route('auth.user.profile')} method="get" as="button">
                                                                            Block
                                                                        </Dropdown.Link>
                                                                        <Dropdown.Link href={route('auth.user.profile')} method="get" as="button">
                                                                            Report
                                                                        </Dropdown.Link>
                                                                    </Dropdown.Content>
                                                                </Dropdown>
                                                            </div>
                                                            <div className="pl-3 text-lg font-semibold text-slate-500 hidden sm:block">
                                                                {auth.user.account_status == 1 &&
                                                                    <Link className="inline-flex items-center justify-center bg-slate-100 text-slate-700 dark:text-slate-100 dark:bg-slate-600 px-2 py-1 rounded-md hover:bg-indigo-500 hover:text-white" method="post" href={route('undo-pass-user', id)} preserveScroll>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                                                        </svg>
                                                                        <span className="text-xs">Undo hidden</span>
                                                                    </Link>
                                                                }
                                                            </div>
                                                            <div className="w-full flex-none text-slate-700 mt-2">
                                                                <span className="divide-y-2 text-sm font-medium text-slate-600 dark:text-slate-200">{ethnic_origin} From {country} </span> - <span className="text-slate-600 dark:text-slate-200">{recidency_status}</span>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className='mb-6 pb-6 border-b border-slate-200'>
                                                            <p className="text-sm text-slate-600 dark:text-slate-300">{highest_education != '' ? highest_education : ''  } - {current_profession} - 5ft 5in</p>
                                                            <p className="text-sm text-slate-600 dark:text-slate-300">Practicing Muslim - {sect}</p>
                                                        </div>
                                                        <div className="flex-auto text-gray-700 dark:text-gray-400 my-1">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex space-x-4 mt-3 text-sm font-medium">
                                                    <div className="flex-auto flex space-x-4">
                                                        {isAccepted ? <Link href={route('user-profile', firstname)} className="h-10 bg-black dark:bg-slate-100 text-slate-50 dark:text-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50  focus:ring-2 dark:ring-slate-400 font-bold py-2 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                            <span className="text-xs sm:text-sm">View</span>
                                                        </Link> : (
                                                            <button disabled className="disabled:bg-slate-400 disabled:text-slate-200 disabled:border-slate-200 disabled:shadow-none h-10 bg-black dark:bg-slate-100 text-slate-50 dark:text-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50  focus:ring-2 dark:ring-slate-400 font-bold py-2 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                                
                                                                <span className="text-xs sm:text-sm">View</span>
                                                            </button>
                                                        ) }
                                                        
                                                        {auth.user.account_status == 0 ? ( 
                                                            <button disabled className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none bg-transparent text-slate-800 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                                </svg>
                                                                <span className="text-xs sm:text-sm">Invite</span>
                                                            </button>
                                                        ) : ( (!isInvited ? (
                                                            <Link preserveScroll href={route('invite.user', id)} method="post" as="button"  className="bg-transparent text-slate-800 dark:text-slate-300 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-500 border-2 border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                                </svg>
                                                                <span className="text-xs sm:text-sm">Invite</span>
                                                            </Link>
                                                        ) :
                                                        
                                                        <Link preserveScroll href={route('uninvite.user', id)} method="post" as="button"  className="bg-transparent text-slate-800 dark:text-slate-300 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-500 border-2 border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                                </svg>
                                                                <span className="text-xs sm:text-sm">Invited</span>
                                                            </Link> )
                                                            
                                                        )}

                                                    {/* 
                                                        {isFollowing ? ( 
                                                            <Link preserveScroll href={route('user.unfollow', id)} method="post" as="button" className="h-10 bg-black dark:bg-slate-100 text-slate-50 dark:text-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50  focus:ring-2 dark:ring-slate-400 font-bold py-2 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                                <span className="text-xs sm:text-sm">Unfollow</span>
                                                            </Link> 
                                                        ) : (
                                                            <Link preserveScroll href={route('user.follow', id)} method="post" as="button"className="h-10 bg-black dark:bg-slate-100 text-slate-50 dark:text-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50  focus:ring-2 dark:ring-slate-400 font-bold py-2 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                                <span className="text-xs sm:text-sm">Follow</span>
                                                            </Link> 
                                                        )}
                                                    */}
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
                                                    {auth.user.account_status == 0 && 'You can send invitation to this user once your account is activated!' }
                                                    {!isAccepted ? `You can view ${firstname}'s profile once ${gender == 'Male' ? 'he' : 'she'} accepts your request.` : `You can view ${firstname}'s full profile`  }
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                    {passedusers.length !== 0 && (
                                        <div className="flex justify-center items-center"> 
                                            <Button className="bg-transparent text-slate-800 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                Load more users
                                            </Button>
                                        </div>
                                    )}
                                    {passedusers.length === 0 && (

                                    <div className="p-0 m-0 w-full h-auto">
                                        <EmptyState bgimage="bg-empty-background" title="Looks like its empty in here." subtitle="Please browse for more users..." btnName="Read our faqs" linktext="Have any questions?" href={route('faq')} />
                                            {/* <p className="text-2xl font-semibold text-slate-800 dark:text-slate-50">Looks like you've reached to the end. Please come back later!</p>  */}
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div> 

    </Authenticated>);
}

export default ProfilesIPassed