import Authenticated from '@/Layouts/Authenticated'
import React from 'react'
import { Link, usePage } from '@inertiajs/inertia-react';

function PersonP({auth, errors}) {
    const {user} = usePage().props;

  return (
    <Authenticated 
        auth={auth}
        errors={errors}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-slate-50 leading-tight ">{user.username}</h2>}
        btnName="Back"
        svg={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>}
        href={route('home')}
    >

    </Authenticated>
  )
}

export default PersonP