<?php

namespace App\Http\Controllers;

use App\Models\Interest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        $user = auth()->user();
        return Inertia::render('User/AuthUser/Profile', [ 
            'interests' => Interest::all(),
            'user' => [
                    'id' => $user->id,
                    'firstname' => $user->firstname,
                    'lastname' => $user->lastname,
                    'username' => $user->username,
                    'email' => $user->email,
                    'gender' => $user->gender,
                    'age' =>  \Carbon\Carbon::parse($user->date_of_birth)->age,
                    'profile_image' => $user->profile_image,
                    'ethnic_origin' => $user->ethnic_origin,
                    'country' => $user->country,
                    'recidency_status' => $user->recidency_status,
                    'postcode' => $user->postcode,
                    
                    'highest_education' => $user->qualification->highest_education,
                    'graduation_year' => $user->qualification->graduation_year,
                    'current_profession' => $user->qualification->current_profession,
                    'company_name' => $user->qualification->company_name,
                    
                    'prayer_frequency' => $user->religion->prayer_frequency,
                    'religious_history' => $user->religion->religious_history,
                    'wear_hijab_keep_beard' => $user->religion->wear_hijab_keep_beard,
                    'sect' => $user->religion->sect,
                    'eat_halal' => $user->religion->eat_halal,
                    'smoke' => $user->religion->smoke,
                    'drink_alchohol' => $user->religion->drink_alchohol,
                    
                    'siblings' => $user->family->siblings,
                    'a_day_living_with_family' => $user->family->a_day_living_with_family,
                    'get_married' => $user->family->get_married,
                    'continue_working' => $user->family->continue_working,
                    'intend_to_move_out' => $user->family->intend_to_move_out,
                    'issue_living_with_inlaws' => $user->family->issue_living_with_inlaws,
                    'future_plan' => $user->family->future_plan,

                    'marital_status' => $user->profile->marital_status,
                    'living_with' => $user->profile->living_with,
                    'have_children' => $user->profile->have_children,
                    'like_to_have_children' => $user->profile->like_to_have_children,
                    'physical_disability' => $user->profile->physical_disability,
                    'height' => $user->profile->height,
                    'hair_color' => $user->profile->hair_color,
                    'fitness' => $user->profile->fitness,
                    'bio' => $user->profile->bio,
            ]
         ]);
    }

    public function settings(){
        return Inertia::render('User/AuthUser/Settings', [ 'user' => auth()->user() ]);
    }

    // public function (){
    //     return Inertia::render('User/AuthUser/Settings', [ 'user' => auth()->user() ]);
    // }
}
