import Button from '@/Components/Button';
import UserSideNav from '@/Components/UserSideNav'
import Authenticated from '@/Layouts/Authenticated';
import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'

function Followers(props) {
    const { followers, user } = usePage().props;

  return (
    <Authenticated 
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight "></h2>}
      btnName="Back"
      svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>}
      href={route('home')}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex-row sm:flex sm:space-x-2">
                <div className="hidden sm:block sm:w-[250px] h-min ">
                    
                    <UserSideNav/>
                    
                </div>
                
                <div className="mt-2 sm:mt-0 sm:w-2/3 bg-gray-50 p-6 sm:p-10 rounded-md shadow-sm">
                    <div className="flex justify-between">
                        <Link href={route('followers', props.auth.user.id)}>Followers</Link>
                        <Link href={route('followings', props.auth.user.id)}>Followings</Link>
                    </div>
                    <div className="mt-4 bg-gray-100"> 
                        {followers.map(({ id, firstname, lastname, age, country, recidency_status, ethnic_origin, profile_image  }) => (
                            <div key={id} className="flex-none sm:flex bg-white shadow-md sm:rounded-lg  space-y-2 mb-4">
                                <div className="blur-[2px] overflow-hidden relative sm:min-h-full w-full sm:w-[19rem] sm:mb-0 mb-3">
                                    <img src={`http://localhost:3000/${profile_image}`} alt={`${firstname}'s Profile photo`}  className="blur-[2px] w-full sm:w-[19rem] h-auto sm:min-h-full inset-0 object-cover aspect-square sm:rounded-l-lg" />
                                </div>
                                <div className="flex-auto p-6 sm:ml-3 justify-evenly">
                                    <div className="flex items-center sm:mt-2">
                                        <div className="flex flex-col ">
                                            <div className="flex flex-wrap">
                                                <div className="flex items-center">
                                                    <h1 className="text-lg font-semibold text-slate-900">
                                                        {firstname} {lastname}, {age}
                                                    </h1>
                                                    <div className="m-1 ml-2 rounded-full bg-green-600 h-2 w-2"></div>
                                                </div>
                                                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                                                    {/* {age} */}
                                                </h1>
                                                <div className="text-lg font-semibold text-slate-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 text-slate-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                                    </svg>
                                                </div>
                                                <div className="w-full flex-none text-slate-700 mt-2">
                                                    <span className="divide-y-2 text-sm font-medium text-slate-600">{ethnic_origin} From {country} </span> - <span>{recidency_status}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex space-x-4 mt-3 text-sm font-medium">
                                        <div className="flex-auto flex space-x-4">
                                            <Link href={route('user-profile', firstname)} className="h-10 bg-black text-slate-50 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50  focus:ring-2 dark:ring-slate-400 font-bold py-2 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg> */}
                                                <span className="text-xs sm:text-sm">View</span>
                                            </Link>
                                
                                            {props.auth.user.account_status == 0 ? ( 
                                                <button disabled className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none bg-transparent text-slate-800 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                    </svg>
                                                    <span className="text-xs sm:text-sm">Invite</span>
                                                </button>
                                                ) : (
                                                <Button className="bg-transparent text-slate-800 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-200 dark:border-slate-50 focus:ring-2 dark:ring-slate-400 font-bold py-2 h-10 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                    </svg>
                                                    <span className="text-xs sm:text-sm">Invite</span>
                                                </Button>
                                                )}
                                            
                                            {user.isfollowing && (
                                                <Link preserveScroll as="button" method="POST" href={route('followings.store', [props.auth.user.id, id])} className="h-10 bg-black text-slate-50 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50  focus:ring-2 dark:ring-slate-400 font-bold py-2 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                    <span className="text-xs sm:text-sm">Follow</span>
                                                </Link>
                                            )}
                                            {!user.isfollowing && (
                                                <Link preserveScroll as="button" method="DELETE" href={route('followings.delete', [props.auth.user.id, id])} className="h-10 bg-black text-slate-50 dark:text-slate-500 dark:bg-slate-800 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50 border-1 border-slate-800 dark:border-slate-50  focus:ring-2 dark:ring-slate-400 font-bold py-2 px-6 rounded-md inline-flex items-center focus:outline-none transition duration-150 ease-in-out">
                                                    <span className="text-xs sm:text-sm">Following</span>
                                                </Link>
                                            )}
                                        </div>


                                        <Link href={route('save.user', id)} className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-50" type="button" aria-label="Like">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <p className="pt-4 text-sm text-yellow-700">
                                        {props.auth.user.account_status == 0 ? 'You can send invitation to this user once your account is activated!' : 'You can view this user\'s profile once he accepts your request.'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div> 


    </Authenticated>
  )
}

export default Followers