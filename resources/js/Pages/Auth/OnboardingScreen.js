import Button from '@/Components/Button'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

function OnboardingScreen() {
  return (
    <div className="min-h-screen bg-onboarding-background bg-no-repeat bg-cover  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
                {/* <Link href="/" className="flex items-center justify-center">
                    <img className="h-8 w-auto mr-3" src="assets/images/logo.svg" alt="shape" />
                </Link> */}
                <h2 className="text-center text-4xl font-medium text-gray-50">Bismillah...</h2>
                {/* <p className="mt-2 text-center text-sm text-gray-300">
                    The aim of these questions is to be transparent from the outset in finding a suitable match. 
                    Only will they show if you match with a profile and accept a friend request
                    Otherwise just basic profile deatils will show and images of you have them on private or not 
                    We’re all on here for the same reason. Don’t be shy.
                </p> */}
                <p className="mt-4 leading-normal text-md text-gray-300">

                    Now that you have created your login, please take your time and make effort to fill in these questions fully. It will take you approximately 10-15 minutes. Be honest and true about yourself and what qualities you will like to find in an partner. 
                    <br/>
                    We ask many questions from lifestyle to family background. Some are for our vetting process and your profile will only show basic details. 

                    If you connect with another member then you will both be able to see an expanded profile. 
                    <br/>
                </p>

                <p className="mt-2 leading-normal text-md text-gray-300">
                    (Questions marked with a * is for admin purposes only and will never be shown on your profile).
                </p>
                <Link href="/set-up-profile-step-1" className="w-full text-center mt-7 font-semibold main-btn gradient-btn">Start Now</Link>
            </div>
        </div>
    </div>
  )
}

export default OnboardingScreen