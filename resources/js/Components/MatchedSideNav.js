import React from 'react'
import UserSideNavMenuItem from './UserSideNavMenuItem'

function MatchedSideNav() {
  return (
    <>
        {/* <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8"> */}
            <nav id="nav" className="leading-6 hidden md:block fixed z-50 bg-gray-50 dark:bg-slate-800 p-2 sm:p-6 rounded-md shadow-sm ">
                <ul>
                    <UserSideNavMenuItem 
                        href={route('interests')}
                        svg={<svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>}
                        active={route().current('interests')}
                    >
                        Saved Profiles
                    </UserSideNavMenuItem>

                    <UserSideNavMenuItem 
                        href={route('profilesILike')}
                        svg={<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>}
                        active={route().current('profilesILike')}
                    >
                        People I Liked
                    </UserSideNavMenuItem>

                    <UserSideNavMenuItem 
                        href={route('whoLikedMe')}
                        svg={<svg width="25" height="25" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                        <path d="M40.8659 13.2448C40.7003 12.4972 40.3894 11.7915 39.9511 11.1682C39.5128 10.5449 38.9557 10.0162 38.3115 9.61215C37.6673 9.20814 36.9487 8.93681 36.1967 8.81366C35.4447 8.6905 34.6741 8.71793 33.929 8.89438L32.3827 9.26013L32.0387 7.70891C31.7038 6.19912 30.7849 4.89258 29.484 4.07671C28.183 3.26085 26.6067 3.00249 25.1018 3.35846C23.5968 3.71444 22.2865 4.65561 21.4591 5.9749C20.6317 7.2942 20.355 8.88357 20.6899 10.3934L21.0339 11.9446L23.559 23.3299L34.9078 20.6455L36.454 20.2797C37.1993 20.1036 37.9046 19.7819 38.5297 19.3331C39.1548 18.8842 39.6874 18.3169 40.0971 17.6636C40.5068 17.0103 40.7856 16.2838 40.9175 15.5256C41.0494 14.7674 41.0319 13.9924 40.8659 13.2448V13.2448Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.3509 3.12185C20.745 2.65347 20.0545 2.31033 19.3188 2.11203C18.5831 1.91373 17.8165 1.86415 17.063 1.96614C16.3095 2.06812 15.5837 2.31967 14.9272 2.7064C14.2706 3.09314 13.6962 3.60748 13.2366 4.22005L12.2828 5.49084L11.0255 4.51931C9.80182 3.57372 8.25946 3.1582 6.73773 3.36416C5.21601 3.57011 3.83959 4.38066 2.91125 5.61751C1.98292 6.85435 1.57873 8.41617 1.78759 9.95938C1.99645 11.5026 2.80126 12.9008 4.02496 13.8464L5.28225 14.8179L14.5102 21.9485L21.5108 12.6215L22.4646 11.3507C22.9244 10.7384 23.2604 10.0397 23.4533 9.29471C23.6462 8.54971 23.6922 7.77293 23.5888 7.00876C23.4854 6.24459 23.2345 5.508 22.8505 4.84107C22.4665 4.17414 21.957 3.58995 21.3509 3.12185V3.12185Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        
                                }
                        active={route().current('whoLikedMe')}
                    >
                        Who Liked Me
                    </UserSideNavMenuItem>

                    <UserSideNavMenuItem 
                        href={route('profilesIPassed')}
                        svg={<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>}
                        active={route().current('profilesIPassed')}
                    >
                        Profiles I Passed
                    </UserSideNavMenuItem>
                </ul>
            </nav>

            <div className="sm:hidden block relative z-10 max-w-3xl mx-auto">
            {/* <h2 data-docsearch-ignore="true" className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">Profile</h2> */}
                <div className="flex overflow-auto mb-6 -mx-4 sm:-mx-6">
                    <div className="flex-none min-w-full px-4 sm:px-6">
                        <ul className="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5">
                            <li>
                                <h2>
                                    <UserSideNavMenuItem 
                                        href={route('interests')}
                                        svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                                                <path className="" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                                            </svg>}
                                        className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-700 dark:text-slate-400 border-transparent hover:border-slate-300 dark:hover:border-slate-700"
                                        active={route().current('interests')}
                                    >
                                        Saved Profiles
                                    </UserSideNavMenuItem>
                                </h2>
                            </li>
                            <li>
                                <UserSideNavMenuItem 
                                    href={route('profilesILike')}
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>}
                                    active={route().current('profilesILike')}
                                >
                                    People I Liked
                                </UserSideNavMenuItem>
                                {/* <h2><Link href={route('profilesILike')} className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-700 dark:text-slate-400 border-transparent hover:border-slate-300 dark:hover:border-slate-700">Preferences</Link></h2> */}
                            </li>
                            <li>
                                <UserSideNavMenuItem 
                                    href={route('whoLikedMe')}
                                    svg={<svg width="20" height="20" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.9875 25.9999C27.399 26.0135 30.9862 22.4482 30.9997 18.0367C31.0132 13.6253 27.448 10.0381 23.0365 10.0246C18.625 10.011 15.0379 13.5763 15.0243 17.9878C15.0108 22.3992 18.576 25.9864 22.9875 25.9999Z" stroke="#3A3939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M11.9999 33.0337C18.075 33.0523 23.0149 28.1426 23.0335 22.0675C23.0522 15.9924 18.1424 11.0524 12.0673 11.0338C5.99223 11.0152 1.05228 15.9249 1.03365 22C1.01502 28.0751 5.92476 33.0151 11.9999 33.0337Z" stroke="#3A3939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M20.5935 1.79243C20.3424 1.59026 20.0524 1.43835 19.7402 1.3454C19.428 1.25245 19.0997 1.22027 18.774 1.25071C18.4483 1.28114 18.1316 1.37359 17.842 1.52278C17.5524 1.67196 17.2956 1.87495 17.0863 2.12016L16.6518 2.62883L16.1306 2.20946C15.6233 1.80129 14.9688 1.60651 14.3111 1.66797C13.6533 1.72943 13.0462 2.0421 12.6234 2.53719C12.2005 3.03228 11.9964 3.66924 12.0561 4.30794C12.1158 4.94664 12.4343 5.53477 12.9416 5.94294L13.4628 6.36231L17.2883 9.44034L20.4773 5.70686L20.9118 5.19818C21.1212 4.95307 21.2792 4.67053 21.3765 4.36669C21.4739 4.06286 21.5088 3.74369 21.4793 3.42741C21.4497 3.11114 21.3563 2.80396 21.2043 2.52342C21.0523 2.24289 20.8448 1.99449 20.5935 1.79243V1.79243Z" stroke="#3A3939" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>}
                                    active={route().current('whoLikedMe')}
                                >
                                    Who Liked Me
                                </UserSideNavMenuItem>
                                {/* <h2><Link href={route('whoLikedMe')} className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-700 border-transparent hover:border-slate-300 dark:text-slate-400 dark:hover:border-slate-700">Who Liked Me</Link></h2> */}
                            </li>
                            <li>
                                <UserSideNavMenuItem 
                                    href={route('profilesIPassed')}
                                    svg={<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>}
                                    active={route().current('profilesIPassed')}
                                >
                                    Profiles I Passed
                                </UserSideNavMenuItem>
                                {/* <h2><Link href={route('contact-support')} className="flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px text-slate-700 border-transparent hover:border-slate-300 dark:text-slate-400 dark:hover:border-slate-700">Contact Support</Link></h2> */}
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
    </>
  )
}

export default MatchedSideNav