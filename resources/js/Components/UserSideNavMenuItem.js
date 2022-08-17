import { Link } from '@inertiajs/inertia-react'
import React from 'react'

function UserSideNavMenuItem({ href, active, children, svg}) {
  return (
    <>
        <li>
            <Link href={href} preserveScroll className={active ? 'bg-purple-700 rounded-md text-center px-4 py-2 group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-white dark:text-slate-50 group-hover:text-slate-800' : 'text-center px-4 py-2 group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-slate-600 dark:text-slate-50 hover:text-slate-800'}>
                <div className={`mr-4 rounded-md ring-1 px-1 py-1 ring-slate-200/20 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-red-200 dark:hover:text-purple-700 dark:highlight-white/10 ${active && 'dark:hover:text-slate-200'}`}>
                    {svg}
                </div>
                {children}
            </Link>
        </li>

    </>
  )
}

export default UserSideNavMenuItem