import React from 'react';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

function Dashboard() {
    return <>
            <Head title="Suitable | Admin - Dashboard" />
            <div className="text-center">
                <Link href={route('admin.logout')} method="post" as="button" >Logout</Link>
            </div>
        Admin Dashboard</>;
}

export default Dashboard;
