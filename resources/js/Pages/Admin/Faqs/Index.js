import Authenticated from '@/Layouts/AdminLayouts/Authenticated'
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import React from 'react'

function Index({auth, errors}) {
    const { faqs } = usePage().props;
  return (
    <Authenticated
          auth={auth}
          errors={errors}
          header={`Faqs`}
          btnName = {`Add a Faq`}
          href = {route('admin.faq.create')}
      >
        <div>
            <div className="overflow-x-auto bg-white rounded shadow">
                <table className="w-full whitespace-nowrap">
                <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">#</th>
                        <th className="px-6 pt-5 pb-4">Faq</th>
                        <th className="px-6 pt-5 pb-4">Answer</th>
                        <th className="px-6 pt-5 pb-4">Created at</th>
                        <th className="px-6 pt-5 pb-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {faqs && faqs.map(({ id, question, answer, created_at }) => (
                    <tr
                        key={id}
                        className="hover:bg-gray-100 focus-within:bg-gray-100"
                    >
                        <td className="border-t">
                            <InertiaLink
                                href={route('admin.faq.edit', id)}
                                className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                            >
                                {id}
                            </InertiaLink>
                        </td>
                        <td className="border-t">
                            <InertiaLink
                                href={route('admin.faq.edit', id)}
                                className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                            >
                                <div className="truncate w-40">{question}</div>
                            </InertiaLink>
                        </td>
                        <td className="border-t">
                            <InertiaLink
                                tabIndex="1"
                                className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                href={route('admin.faq.edit', id)}
                            >
                                <div className="truncate w-40">{answer}</div>
                            </InertiaLink>
                        </td>
                        <td className="border-t">
                            <InertiaLink
                                tabIndex="-1"
                                href={route('admin.faq.edit', id)}
                                className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                            >
                                {created_at}
                            </InertiaLink>
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
                    {faqs.length === 0 && (
                    <tr>
                        <td className="px-6 py-4 border-t" colSpan="4">
                            No Faqs added.
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