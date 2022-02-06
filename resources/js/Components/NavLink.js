import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children, path }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'inline-flex items-center px-1 pt-1 border-b-2 border-red-400 text-sm font-medium leading-5 text-gray-900 dark:text-white focus:outline-none focus:border-red-700 transition duration-150 ease-in-out'
                    : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-slate-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
            }
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                { path }
            </svg>

            {children}
        </Link>
    );
}


