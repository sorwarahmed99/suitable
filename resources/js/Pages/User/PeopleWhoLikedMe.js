import Button from '@/Components/Button'
import Dropdown from '@/Components/Dropdown'
import EmptyState from '@/Components/EmptyState'
import MatchedSideNav from '@/Components/MatchedSideNav'
import Authenticated from '@/Layouts/Authenticated'
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import Img from '../../../../public/images/user-avatar.png'

function PeopleWhoLikedMe({auth}) {
        const { inviters} = usePage().props;

        return (
            <Authenticated 
                auth={auth}
                // errors={errors}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight ">People who liked me </h2>}
                btnName="Back"
                svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>}
                href={route('home')}
            >

            <div className="max-w-9xl mx-auto sm:px-6 md:px-8">
                <div className="flex-row sm:flex sm:space-x-2">
                    <div className="sm:w-[250px] h-min ">
                        
                        <MatchedSideNav/>
                        
                    </div>
                    
                    <div className="mt-2 sm:mt-0 sm:w-2/3 bg-gray-50 dark:bg-slate-800 sm:p-10 rounded-lg">
                        <div className="py-0">
                            <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                                <div className="overflow-hidden ">
                                    <div className="">
                                        {inviters.map(({ id, username, gender, age, country, recidency_status, ethnic_origin, profile_image, highest_education, current_profession, prayer_frequency, sect, saved, isFollowing, isSaved, isInvited, isAccepted, amiInvited }) => (
                                            
                                            
                                            <div className=" bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5 shadow-md mb-2" key={id}>
                                            <div class="flex flex-col-reverse">
                                                <div class="flex items-center space-x-4">
                                                    <img src={profile_image} alt={`${username}'s Profile photo`} class="flex-none w-14 h-14 rounded-full object-cover" loading="lazy"/>
                                                    <div class="flex-auto">
                                                        <div class="text-lg font-semibold text-slate-900 dark:text-slate-50">
                                                            <Link preserveScroll href={route('user-profile', username)} as="a">{username}, {`${age}`}</Link>
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
                                                    <p className="text-sm text-slate-600 dark:text-slate-300">{highest_education != '' ? highest_education : ''  } - {current_profession} </p>
                                                    <p className="text-sm text-slate-600 dark:text-slate-300">Practicing Muslim - {sect}</p>
                                                </div>
                                                <div className='mb-2 pl-8 pt-4'>
                                                    <div className="flex space-x-4 mt-3 text-sm font-medium">
                                                        <div className="flex-auto flex space-x-4">
                                                            
                                                            {amiInvited ?
                                                                <div>
                                                                    <div className="flex items-center justify-start space-x-2 mt-1">
                                                                        
                                                                        {!isAccepted ? (
                                                                            <Link preserveScroll href={route('accept.user', id)} method="post" as="button" className="bg-transparent text-purple-800 dark:text-slate-300 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-500 border border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                                                                </svg>
                                                                                <span className="text-xs sm:text-sm">Accept</span>
                                                                            </Link>
                                                                        ):(
                                                                            <button disabled className="disabled:bg-slate-50 disabled:text-purple-500 disabled:border-slate-200 disabled:shadow-none bg-transparent text-slate-800 dark:text-purple-400 dark:bg-slate-700  border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                                </svg>
                                                                                <span className="text-xs sm:text-sm">Accepted</span>
                                                                            </button>
                                                                        )} 
                                                                        <Link preserveScroll href={route('reject.user', id)} method="post" as="button"  className="bg-transparent dark:bg-red-100 text-red-400 dark:text-red-500  hover:bg-gray-200 hover:text-red-500 dark:hover:bg-slate-50 dark:hover:text-red-500  bg-red-100 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                                            <span className="text-xs sm:text-sm">Remove</span>
                                                                        </Link> 
                                                                    </div>
                                                                </div> : '' 
                                                            }
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
                                                                    <span className="text-xs sm:text-sm">Invited</span>
                                                                </Link> )
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

                                        
                                        {/* {inviters.length !== 0 && (
                                            <div className="flex justify-center items-center"> 
                                                <Button className="bg-transparent text-slate-800 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                    Load more users
                                                </Button>
                                            </div>
                                        )} */}

                                        {inviters.length === 0 && (

                                        <div className=" ">
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

export default PeopleWhoLikedMe

{/* <article className="flex items-start space-x-6 p-6 bg-slate-100 shadow-lg rounded-md mb-2">
    <img src={profile_image || Img} alt="" width="60" height="88" className="flex-none rounded-md bg-slate-100" />
    <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-slate-900 truncate pr-20">{username}, {age}</h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
            <div className="absolute top-0 right-0 flex items-center space-x-1">
                <dt className="text-sky-500">
                    <span className="sr-only">More button</span>
                    <div className="text-lg font-semibold text-slate-500">
                        
            </div>
            <div>
                <dt className="sr-only">Profile info</dt>
                <span className="divide-y-2 text-sm font-medium text-slate-600 dark:text-slate-200">{ethnic_origin} From {country} </span> - <span className="text-slate-600 dark:text-slate-200">{recidency_status}</span>
            </div>
            
        </dl>
        <dl>
            <div className="flex-row">
                <dt className="sr-only">Profile info</dt>
                <p className="text-sm text-slate-600 dark:text-slate-300">Practicing Muslim - {sect}</p>
            </div>
        </dl>
        <dl className="border-t border-slate-200 mt-4"> 
            <div className="mb-3 mt-4 flex items-start justify-start">
                {amiInvited ?
                    <div>
                        <p>{username} wants to view your profile</p>
                        <div className="flex items-center justify-start space-x-2 mt-1">
                            
                            <Link preserveScroll href={route('accept.user', id)} method="post" as="button"  className="bg-transparent text-purple-800 dark:text-slate-300 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-500 border border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <span className="text-xs sm:text-sm">Accept</span>
                            </Link>
                             {isAccepted ? (
                                <Link preserveScroll href={route('accept.user', id)} method="post" as="button"  className="text-indigo-600 dark:text-slate-300 hover:bg-slate-300 hover:text-slate-700 dark:hover:bg-slate-50 dark:hover:text-slate-500 bg-slate-200  focus:ring-2 dark:ring-slate-400 font-bold py-1 px-2 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                    <span className="text-xs sm:text-sm">Accept</span>
                                </Link> 
                            ):(
                                <Link preserveScroll href={route('accept.user', id)} method="post" as="button"  className="text-slate-50 dark:text-slate-600 hover:bg-slate-300 hover:text-slate-800 dark:hover:bg-slate-50 dark:hover:text-slate-800 bg-indigo-500 focus:ring-2 dark:ring-slate-400 font-bold py-1 px-2 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                    <span className="text-xs sm:text-sm">Accepted</span>
                                </Link> 
                            )} 
                            <Link preserveScroll href={route('reject.user', id)} method="post" as="button"  className="text-red-400 dark:text-slate-300 dark:bg-slate-500 hover:bg-red-400 hover:text-slate-50 dark:hover:bg-red-400 dark:hover:text-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-1 px-2 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                <span className="text-xs sm:text-sm">Remove</span>
                            </Link> 
                        </div>
                    </div> : '' 
                }
            </div>
        </dl>
    </div>
</article> */}

                                        //     <div key={id} className="flex-none sm:flex bg-white dark:bg-slate-800 shadow-md sm:rounded-lg  space-y-2 mb-4">
                                        //     <div className="blur-[2px] overflow-hidden relative sm:min-h-full w-full sm:w-[19rem] sm:mb-0 mb-3">
                                        //         {!profile_image ? (
                                        //                 <img src="assets/images/man.svg" alt={`Man photo`}  className="blur-[2px] w-full sm:w-[19rem] h-auto sm:min-h-full inset-0 object-cover aspect-square sm:rounded-l-lg" />
                                        //             ): 
                                        //                 <img src={`http://localhost:3000/${profile_image}`} alt={`${firstname}'s Profile photo`} onerror="this.onerror=null;this.src='https://picsum.photos/200';"  className="blur-[2px] w-full sm:w-[19rem] h-auto sm:min-h-full inset-0 object-cover aspect-square sm:rounded-l-lg" />
                                        //             }
                                        //     </div>
                                        //     <div className="flex-auto p-4 sm:ml-3 justify-evenly">
                                        //         <div className="flex items-center sm:mt-2">
                                        //             <div className="flex flex-col ">
                                        //                 <div className="flex flex-wrap">
                                        //                     <div className="flex items-center">
                                        //                         <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                                        //                             {firstname} {lastname}, {age}
                                        //                         </h1>
                                        //                         <div className="m-1 ml-2 rounded-full bg-green-600 h-2 w-2"></div>
                                        //                     </div>
                                        //                     <h1 className="flex-auto text-lg font-semibold text-slate-900">
                                        //                         {/* {age} */}
                                        //                     </h1>
                                                            
                                                            // <div className="text-lg font-semibold text-slate-500">
                                                                
                                                            //     <Dropdown>
                                                            //         <Dropdown.Trigger>
                                                            //             <span className="inline-flex rounded-md">
                                                            //                 <button
                                                            //                     type="button"
                                                            //                     className="inline-flex items-center text-sm leading-4 font-medium rounded focus:bg-slate-200 dark:focus:bg-slate-200 dark:focus:text-slate-800 focus:border-slate-400 px-2 py-1 text-gray-500 dark:text-gray-100 focus:outline-none transition ease-in-out duration-150"
                                                            //                 >
                                                            //                     <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 text-slate-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                                            //                     </svg>
                                                            //                 </button>
                                                            //             </span>
                                                            //         </Dropdown.Trigger>

                                                            //         <Dropdown.Content className="w-10" >
                                                            //             <Dropdown.Link href={route('user-profile', username)} method="get" as="button">
                                                            //                 Demo view user
                                                            //             </Dropdown.Link>
                                                            //             <Dropdown.Link href={route('block-user', id)} method="post" as="button">
                                                            //                 Block
                                                            //             </Dropdown.Link>
                                                            //             <Dropdown.Link href={route('auth.user.profile')} method="get" as="button">
                                                            //                 Report
                                                            //             </Dropdown.Link>
                                                            //         </Dropdown.Content>
                                                            //     </Dropdown>
                                                            // </div>
                                        //                     <div className="pl-3 text-lg font-semibold text-slate-500">
                                        //                         {auth.user.account_status == 1 &&
                                        //                             <Link method="post" href={route('pass-user', id)} preserveScroll>
                                        //                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        //                                     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        //                                 </svg>
                                        //                             </Link>
                                        //                         }
                                        //                     </div>
                                        //                     <div className="w-full flex-none text-slate-700 mt-2">
                                        //                         <span className="divide-y-2 text-sm font-medium text-slate-600 dark:text-slate-200">{ethnic_origin} From {country} </span> - <span className="text-slate-600 dark:text-slate-200">{recidency_status}</span>
                                        //                     </div>
                                        //                 </div>
                                                        
                                        //                 <div className='mb-6 pb-6 border-b border-slate-200'>
                                                            
                                        //                     <div className="mb-3 mt-4 flex items-center justify-center">
                                        //                         {amiInvited ?
                                        //                             <div>
                                        //                                 <p>{firstname} wants to view your profile</p>
                                        //                                 <div className="flex items-center justify-center space-x-2 mt-1">
                                        //                                     {isAccepted ? (
                                        //                                         <Link preserveScroll href={route('accept.user', id)} method="post" as="button"  className="text-indigo-600 dark:text-slate-300 hover:bg-slate-300 hover:text-slate-700 dark:hover:bg-slate-50 dark:hover:text-slate-500 bg-slate-200  focus:ring-2 dark:ring-slate-400 font-bold py-1 px-2 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                        //                                             <span className="text-xs sm:text-sm">Accept</span>
                                        //                                         </Link> 
                                        //                                     ):(
                                        //                                         <Link preserveScroll href={route('accept.user', id)} method="post" as="button"  className="text-slate-50 dark:text-slate-600 hover:bg-slate-300 hover:text-slate-800 dark:hover:bg-slate-50 dark:hover:text-slate-800 bg-indigo-500 focus:ring-2 dark:ring-slate-400 font-bold py-1 px-2 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                        //                                             <span className="text-xs sm:text-sm">Accepted</span>
                                        //                                         </Link> 
                                        //                                     )}
                                        //                                     <Link preserveScroll href={route('reject.user', id)} method="post" as="button"  className="text-red-400 dark:text-slate-300 dark:bg-slate-500 hover:bg-red-400 hover:text-slate-50 dark:hover:bg-red-400 dark:hover:text-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-1 px-2 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                        //                                         <span className="text-xs sm:text-sm">Remove</span>
                                        //                                     </Link> 
                                        //                                 </div>
                                        //                             </div> : '' 
                                        //                         }
                                        //                     </div>
                                        //                 </div>
                                        //                 <div className="flex-auto text-gray-700 dark:text-gray-400 my-1">
                                        //                 </div>
                                        //             </div>
                                        //         </div>

                                        //         <div className="flex space-x-4 mt-3 text-sm font-medium">
                                        //             <div className="flex-auto flex space-x-4">
                                        //                 {isAccepted ? <Link href={route('user-profile', username)} className="h-10 bg-black dark:bg-slate-100 text-slate-50 dark:text-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50  focus:ring-2 dark:ring-slate-400 font-bold py-2 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                        //                     <span className="text-xs sm:text-sm">View</span>
                                        //                 </Link> : (
                                        //                     <button disabled className="disabled:bg-slate-400 disabled:text-slate-200 disabled:border-slate-200 disabled:shadow-none h-10 bg-black dark:bg-slate-100 text-slate-50 dark:text-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50  focus:ring-2 dark:ring-slate-400 font-bold py-2 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                                
                                        //                         <span className="text-xs sm:text-sm">View</span>
                                        //                     </button>
                                        //                 ) }
                                                        
                                        //                 {auth.user.account_status == 0 ? ( 
                                        //                     <button disabled className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none bg-transparent text-slate-800 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                        //                         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        //                         </svg>
                                        //                         <span className="text-xs sm:text-sm">Invite</span>
                                        //                     </button>
                                        //                 ) : ( (!isInvited ? (
                                        //                     <Link preserveScroll href={route('invite.user', id)} method="post" as="button"  className="bg-transparent text-slate-800 dark:text-slate-300 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-500 border-2 border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                        //                         <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        //                         </svg>
                                        //                         <span className="text-xs sm:text-sm">Invite</span>
                                        //                     </Link>
                                        //                 ) :
                                        //                     <Link preserveScroll href={route('uninvite.user', id)} method="post" as="button"  className="bg-transparent text-slate-800 dark:text-slate-300 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-500 border-2 border-slate-200 bg-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                        //                         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        //                         </svg>
                                        //                         <span className="text-xs sm:text-sm">Invited</span>
                                        //                     </Link> )
                                        //                 )}
                                        //             {/* 
                                        //                 {isFollowing ? ( 
                                        //                     <Link preserveScroll href={route('user.unfollow', id)} method="post" as="button" className="h-10 bg-black dark:bg-slate-100 text-slate-50 dark:text-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50  focus:ring-2 dark:ring-slate-400 font-bold py-2 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                        //                         <span className="text-xs sm:text-sm">Unfollow</span>
                                        //                     </Link> 
                                        //                 ) : (
                                        //                     <Link preserveScroll href={route('user.follow', id)} method="post" as="button"className="h-10 bg-black dark:bg-slate-100 text-slate-50 dark:text-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50  focus:ring-2 dark:ring-slate-400 font-bold py-2 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                        //                         <span className="text-xs sm:text-sm">Follow</span>
                                        //                     </Link> 
                                        //                 )}
                                        //             */}
                                        //             </div>

                                        //             {/* Save button */}

                                        //             {!isSaved ? ( 
                                        //                 <Link preserveScroll method="post" href={route('save.user', id)} className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200 dark:border-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:text-slate-600" type="button" aria-label="Like">
                                        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        //                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        //                     </svg>
                                        //                 </Link> )
                                        //             : (
                                        //                 <Link preserveScroll method="post" href={route('unsave.user', id)} className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200 dark:border-slate-500 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 dark:text-slate-600" type="button" aria-label="Like">
                                        //                     <svg className="text-red-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                                        //                         <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                        //                     </svg>
                                        //                 </Link>
                                        //             )}
                                        //         </div>
                                                
                                        //         {inviters.length === 0 && (
                                        //             <p className="text-2xl font-semibold text-slate-800 dark:text-slate-50">You haven't been invited by any user</p> 
                                        //         )}
                                        //         <p className="pt-4 text-sm text-yellow-700">
                                        //             {auth.user.account_status == 0 ? 'You can send invitation to this user once your account is activated!' : (!isAccepted ? `You can view ${firstname}'s profile once ${gender == 'Male' ? 'he' : 'she'} accepts your request.` : `You can view ${firstname}'s full profile`) }
                                        //         </p>
                                        //     </div>
                                        // </div>