import ResponsiveSidenav from '@/Components/ResponsiveSidenav'
import UserSideNav from '@/Components/UserSideNav'
import Authenticated from '@/Layouts/Authenticated'
import React from 'react'

function MutualMatches(props) {
  return (
    <Authenticated 
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight ">Mutual Matches</h2>}
      btnName="Back"
      svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>}
      href={route('home')}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex-row sm:flex sm:space-x-2">
                <div className="hidden sm:block sm:w-[250px] h-min ">
                    
                    <UserSideNav/>
                    <ResponsiveSidenav />
                    
                </div>
                
                <div className="mt-2 sm:mt-0 sm:w-2/3 bg-gray-50 p-6 sm:p-10 rounded-md shadow-sm">
                
                </div>
            </div>
        </div> 

    </Authenticated>
  )
}

export default MutualMatches