import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import UserSideNavMenuItem from './UserSideNavMenuItem'

function ResponsiveSidenav() {
  return (
    <>
        <div className="sm:hidden block relative z-10 max-w-3xl mx-auto">
            {/* <h2 data-docsearch-ignore="true" className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">Profile</h2> */}
            <div className="flex overflow-auto mb-6 -mx-4 sm:-mx-6">
                <div className="flex-none min-w-full px-4 sm:px-6">
                    <ul className="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5">
                        <li>
                            <h2>
                                <UserSideNavMenuItem 
                                    href={route('auth.user.profile')}
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                                            <path className="" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                                        </svg>}
                                    className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-700 dark:text-slate-400 border-transparent hover:border-slate-300 dark:hover:border-slate-700"
                                    active={route().current('auth.user.profile')}
                                >
                                    Profile
                                </UserSideNavMenuItem>
                            </h2>
                        </li>
                        <li>
                        <UserSideNavMenuItem 
                            href={route('auth.user.preferences')}
                            svg={<svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                                </svg>}
                            active={route().current('auth.user.preferences')}
                        >
                            Preferences
                        </UserSideNavMenuItem>
                            {/* <h2><Link href={route('auth.user.preferences')} className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-700 dark:text-slate-400 border-transparent hover:border-slate-300 dark:hover:border-slate-700">Preferences</Link></h2> */}
                        </li>
                        <li>
                            <UserSideNavMenuItem 
                                href={route('auth.user.settings')}
                                svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>}
                                active={route().current('auth.user.settings')}
                            >
                                Settings
                            </UserSideNavMenuItem>
                            {/* <h2><Link href={route('auth.user.settings')} className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-700 border-transparent hover:border-slate-300 dark:text-slate-400 dark:hover:border-slate-700">Settings</Link></h2> */}
                        </li>
                        <li>
                            <UserSideNavMenuItem 
                                href={route('privacy-policy')}
                                svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>}
                                active={route().current('privacy-policy')}
                            >
                                Data Privacy
                            </UserSideNavMenuItem>
                            {/* <h2><Link href={route('contact-support')} className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-700 border-transparent hover:border-slate-300 dark:text-slate-400 dark:hover:border-slate-700">Contact Support</Link></h2> */}
                        </li>
                        <li>
                            <UserSideNavMenuItem 
                                href={route('contact-support')}
                                svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>}
                                active={route().current('contact-support')}
                            >
                                Contact Support
                            </UserSideNavMenuItem>
                            {/* <h2><Link href={route('privacy-policy')} className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-700 border-transparent hover:border-slate-300 dark:text-slate-400 dark:hover:border-slate-700">Data Privacy</Link></h2> */}
                        </li>
                        <li>
                            <UserSideNavMenuItem 
                                href={route('faq')}
                                svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>}
                                active={route().current('faq')}
                            >
                                Faq
                            </UserSideNavMenuItem>
                            {/* <h2><Link href={route('faq')} className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-700 border-transparent hover:border-slate-300 dark:text-slate-400 dark:hover:border-slate-700">Faq</Link></h2> */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default ResponsiveSidenav