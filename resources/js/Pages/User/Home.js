import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, InertiaLink, Link, useForm, usePage } from '@inertiajs/inertia-react';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Dropdown from '@/Components/Dropdown';

function Home(props) {
    const [showInviteMessage,setShowInviteMessage] = useState(false);
    const { users } = usePage().props;

    return  <Authenticated
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight ">Matches</h2>}
                btnName="Filter"
                svg={<svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-center w-4 h-4 mr-0 sm:mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                    </svg>}
                href={route('auth.user.preferences')}
            >
                <Head title="Home | Suitable" />
                
                <div className="py-2">
                    <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                        <div className="overflow-hidden ">
                            <div className="">
                                {users.map(({ id, firstname, lastname, gender, age, country, recidency_status, ethnic_origin, profile_image, highest_education, current_profession, prayer_frequency, sect, saved, isFollowing, isSaved, isInvited, isAccepted }) => (
                                    <div key={id} className="flex-none sm:flex bg-white dark:bg-slate-800 shadow-md sm:rounded-lg  space-y-2 mb-4">
                                        <div className="blur-[2px] overflow-hidden relative sm:min-h-full w-full sm:w-[19rem] sm:mb-0 mb-3">
                                            <img src={`http://localhost:3000/${profile_image}`} alt={`${firstname}'s Profile photo`}  className="blur-[2px] w-full sm:w-[19rem] h-auto sm:min-h-full inset-0 object-cover aspect-square sm:rounded-l-lg" />
                                        </div>
                                        <div className="flex-auto p-4 sm:ml-3 justify-evenly">
                                            <div className="flex items-center sm:mt-2">
                                                <div className="flex flex-col ">
                                                    <div className="flex flex-wrap">
                                                        <div className="flex items-center">
                                                            <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                                                                {firstname} {lastname}, {age}
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
                                                                    <Dropdown.Link href={route('auth.user.profile')} method="get" as="button">
                                                                        Block
                                                                    </Dropdown.Link>
                                                                    <Dropdown.Link href={route('auth.user.profile')} method="get" as="button">
                                                                        Report
                                                                    </Dropdown.Link>
                                                                </Dropdown.Content>
                                                            </Dropdown>
                                                        </div>
                                                        <div className="pl-3 text-lg font-semibold text-slate-500">
                                                            {props.auth.user.account_status == 1 &&
                                                                <Link method="post" href={route('pass-user', id)} preserveScroll>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                    </svg>
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
                                                    
                                                    {props.auth.user.account_status == 0 ? ( 
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
                                                {props.auth.user.account_status == 0 ? 'You can send invitation to this user once your account is activated!' : (!isAccepted ? `You can view ${firstname}'s profile once ${gender == 'Male' ? 'he' : 'she'} accepts your request.` : `You can view ${firstname}'s full profile`) }
                                                
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                {users.length === 0 && (
                                    <p className="text-2xl font-semibold text-slate-800 dark:text-slate-50">No users</p> 
                                )}
                                {users.length !== 0 && (
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
            </Authenticated>;
    }

export default Home;


{/* {users.map(({ id, firstname, lastname, age, country, recidency_status, ethnic_origin, profile_image, highest_education, current_profession, prayer_frequency, sect  }) => (

    <div className="mb-5"> 
        <figure class="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
            <blockquote class="mt-6 text-slate-700 dark:text-slate-300">
                <p>I feel like an idiot for not using Tailwind CSS until now.</p>
            </blockquote>
            <figcaption class="flex items-center space-x-4">
                <img src={`http://localhost:3000/uploads/user-profile-images/${profile_image}`} alt="" class="flex-none w-14 h-14 rounded-full object-cover" loading="lazy"/>
                <div class="flex-auto">
                    <div class="text-base text-slate-900 font-semibold dark:text-slate-300">
                        <a href="https://twitter.com/ryanflorence/status/1187951799442886656" tabindex="0">
                            <span class="absolute inset-0">
                            </span>
                            {firstname} {lastname}, {age}
                        </a>
                    </div>
                    <div class="mt-0.5">
                        <span>{ethnic_origin} From {country} </span> - <span>{recidency_status}</span>
                        <div className='mb-6 pb-6 border-b border-slate-200'>
                            <p className="text-sm text-slate-600">{highest_education != '' ? highest_education : ''  } - {current_profession} - 5ft 5in</p>
                            <p className="text-sm text-slate-600">Practicing Muslim - {sect}</p>
                        </div>
                    </div>
                </div>
            </figcaption>
        </figure>
    </div>
    ))} */}

{/* {users.map(({ id, firstname, lastname, age, country, recidency_status, ethnic_origin, profile_image, highest_education, current_profession,  }) => (
        <div key={id} className="flex font-sans bg-white shadow-md rounded-lg space-y-2 mb-4">
            <div className="flex-none w-48 relative">
                <img src={`http://localhost:3000/uploads/user-profile-images/${profile_image}`} alt={`${firstname}'s Profile photo`} className="absolute inset-0 w-full h-full object-cover rounded-l-lg" />
            </div>
            <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                    <h1 className="flex-auto text-lg font-semibold text-slate-900">
                        {firstname} {lastname} , {age}
                    </h1>
                    <div className="text-lg font-semibold text-slate-500">
                        ...
                    </div>
                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        {ethnic_origin} From {country} - {recidency_status}
                    </div>
                </div>
                <div className="items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                    <p>{highest_education} - {current_profession} - 5ft 5in</p>
                    <p>Practicing Muslim - Sunni</p>
                </div>
            

                <div className="flex space-x-4 mb-6 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                        Invite
                        </button>
                        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                        Save
                        </button>
                    </div>
                    <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                    </button>
                </div>
                <p className="text-sm text-slate-700">
                    You can view this user's profile once he accepts your request.
                </p>
            </form>
        </div>
    ))} */}


    
{/* <div className="flex justify-between sm:justify-start pt-4 space-x-3 text-sm text-gray-400">
    <Button className="bg-transparent text-slate-800 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-1 px-3 rounded inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

</div> */}