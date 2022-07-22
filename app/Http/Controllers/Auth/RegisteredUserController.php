<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Illuminate\Support\Str;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register', [
            'csrf_token' => csrf_token()
         ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'date_of_birth' => 'required|string|date|before:-18 years',
            'gender' => 'required',
            'password' => ['required', Rules\Password::defaults()],
        ], [
            'date_of_birth.date|before:-18 years'=> 'You must be 18 years or older!',
        ]);

        $user = User::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'username' => Str::lower($request->firstname."_".$request->lastname).rand(pow(10, 8 - 1), pow(10, 8) -1),
            'email' => $request->email,
            'date_of_birth' => $request->date_of_birth,
            'age' => \Carbon\Carbon::parse($request->date_of_birth)->age,
            'gender' => $request->gender,
            'password' => Hash::make($request->password),
            'account_status' => 0,
            'profile_step' => 1,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect()->route('onboarding');
    }
}
