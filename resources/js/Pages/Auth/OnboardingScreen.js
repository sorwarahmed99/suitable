import Button from '@/Components/Button'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

function OnboardingScreen() {
  return (
    <div className="min-h-screen bg-login-background bg-no-repeat bg-cover  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
                <Link href="/" className="flex items-center justify-center">
                    <img className="h-12 w-auto mr-3" src="assets/images/logo.png" alt="shape" />
                    <span className="hidden sm:block self-center text-xl font-semibold whitespace-nowrap text-white">Suitable</span>
                </Link>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-50">Bismillah</h2>
                <p className="mt-2 text-center text-md text-gray-300">
                    The aim of these questions is to be transparent from the outset in finding a suitable match. 
                    Only will they show if you match with a profile and accept a friend request
                    Otherwise just basic profile deatils will show and images of you have them on private or not 
                    We’re all on here for the same reason. Don’t be shy.
                </p>
                <Link href="/set-up-profile-step-1" className="w-full text-center mt-4 font-semibold main-btn gradient-btn">Start Now</Link>
            </div>
        </div>
    </div>
  )
}

export default OnboardingScreen