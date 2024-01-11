import Authenticated from '@/Layouts/AdminLayouts/Authenticated'
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import React from 'react'

function Index({auth, errors}) {

  const { contacts } = usePage().props;

  
  const {data} = contacts;

//   console.log(data);

  return (
    <Authenticated
          auth={auth}
          errors={errors}
          header={`Contact us`}
          btnName = {`Dashboard`}
          href = {route('admin.dashboard')}
      >
        <div>
            <div className="overflow-x-auto bg-white rounded shadow">
                <table className="w-full whitespace-nowrap">
                <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">#</th>
                        <th className="px-6 pt-5 pb-4">Basic Info</th>
                        <th className="px-6 pt-5 pb-4">Query Type</th>
                        <th className="px-6 pt-5 pb-4">Message</th>
                        <th className="px-6 pt-5 pb-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(({ id, name, email, contact_number, query_type, message, created_at }) => (
                    <tr
                        key={id}
                        className="hover:bg-gray-100 focus-within:bg-gray-100"
                    >
                        <td>{id}</td>
                        <td className="border-t">
                            <b>{name}</b>
                            <br/>
                            <b>{email}</b>
                            <br/>
                            <b>{contact_number}</b>
                        </td>
                        <td className="border-t">
                            {query_type}
                        </td>
                        <td className="border-t">
                                <div className="truncate w-40">{message}</div>
                        </td>
                       
                        <td className="border-t">
                           
                                {created_at}
                        </td>
                        
                        <td className="w-px border-t">
                            <InertiaLink
                                tabIndex="-1"
                                href={route('admin.faq.edit', id)}
                                className="flex items-center px-4 focus:outline-none"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </InertiaLink>
                        </td>
                    </tr>
                    ))}
                    {data.length === 0 && (
                    <tr>
                        <td className="px-6 py-4 border-t" colSpan="4">
                            No Contacts.
                        </td>
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
            {/* <Pagination links={links} /> */}
            </div>
      </Authenticated>
  )
}

export default Index