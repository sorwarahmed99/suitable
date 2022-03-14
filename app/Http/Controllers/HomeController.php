<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $users = User::with('qualification')->get()
                        ->map(function ($e) {
                            $e->qualification = $e->qualification;
                            return $e;
                        });
        // return Inertia::render('User/Home', ['users' => $users->load('qualification')]);


        return Inertia::render('User/Home', [
            'users' => User::where('id', '!=', auth()->user()->id)->where('account_status', 1)
                ->with('qualification')
                ->with('religion')
                ->orderBy('created_at', 'desc')
                ->paginate(5)
                ->transform(function ($user) {
                    return [
                        'id' => $user->id,
                        'firstname' => $user->firstname,
                        'lastname' => $user->lastname,
                        'email' => $user->email,
                        'age' =>  \Carbon\Carbon::parse($user->date_of_birth)->age,
                        'profile_image' => $user->profile_image,
                        'ethnic_origin' => $user->ethnic_origin,
                        'country' => $user->country,
                        'recidency_status' => $user->recidency_status,
                        'highest_education' => $user->qualification->highest_education,
                        'current_profession' => $user->qualification->current_profession,
                        'prayer_frequency' => $user->religion->prayer_frequency,
                        'sect' => $user->religion->sect,
                    ];
                })
        ]);
    }


    public function preferences () {
        return Inertia::render('User/Preferences');
    }

    public function show (User $user) {
        // dd($user);
        return Inertia::render('User/UserProfile', ['user' => $user]);
    }



}
