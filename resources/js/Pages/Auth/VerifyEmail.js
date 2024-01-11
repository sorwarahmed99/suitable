import React from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm();

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <Guest bgimage="bg-email-background">
            <Head title="Suitable - Email Verification" />
            <div className="text-center">
                <Link href="/">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-purple-800 dark:text-purple-500 ">Suitable</span>
                </Link>
                <h2 className="mt-6 text-md font-medium text-gray-900">
                </h2>
            </div>
            <div className="mb-4 text-sm text-gray-600">
                Thanks for signing up! Before getting started, could you verify your email address by clicking on the
                link we just emailed to you? If you do not see the email in your inbox, please check your junk mail folder. <br/>
                If you didn't receive the email, we will gladly send you another. 
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    A new verification link has been sent to the email address you provided during registration. 
                    Please check junk email incase it's not sent to your inbox.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <Button className='bg-purple-500 text-white hover:bg-purple-600' processing={processing}>Resend Verification Email</Button>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        Log Out
                    </Link>
                </div>
            </form>
        </Guest>
    );
}
