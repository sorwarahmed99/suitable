<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    public function index()
    {
        return Inertia::render('Admin/Dashboard');
    }
    
    public function show (User $user){
        return Inertia::render('Admin/Users/Profile');
    }

    public function users()
    {
        return Inertia::render('Admin/Users/Index', [
            'active_users' => User::where('account_status', 1),
            'users' => User::where('account_status', 0)
                ->with('qualification')
                ->with('religion')
                ->with('savedusers')
                ->orderBy('created_at', 'desc')
                ->paginate(5)
                ->transform(function ($user) {
                    return [
                        'id' => $user->id ?? '',
                        'username' => $user->username ?? '',
                        'email' => $user->email ?? '',
                        'gender' => $user->gender ?? '',
                        'date_of_birth' => $user->date_of_birth ?? '',
                        'age' =>  \Carbon\Carbon::parse($user->date_of_birth)->age ?? '',
                        'profile_image' => $user->profile_image ?? '',
                        'ethnic_origin' => $user->ethnic_origin ?? '',
                        'country' => $user->country ?? '',
                        'city' => $user->city ?? '',
                        'postcode' => $user->postcode ?? '',
                        'recidency_status' => $user->recidency_status ?? '',
                        'back_home_country' => $user->back_home_country ?? '',
                        'back_home_city' => $user->back_home_city ?? '',
                        'back_home_area' => $user->back_home_area ?? '',
                        'relocate' => $user->relocate ?? '',

                        'highest_education' => $user->qualification->highest_education ?? '',
                        'university' => $user->qualification->university ?? '',
                        'course_name' => $user->qualification->course_name ?? '',
                        'college' => $user->qualification->college ?? '',
                        'college_course_name' => $user->qualification->college_course_name ?? '',
                        'current_profession' => $user->qualification->current_profession ?? '',
                        'company_name' => $user->qualification->company_name ?? '',

                        'prayer_frequency' => $user->religion->prayer_frequency ?? '',
                        'religious_history' => $user->religion->religious_history ?? '',
                        'wear_hijab_keep_beard' => $user->religion->wear_hijab_keep_beard ?? '',
                        'read_quran' => $user->religion->read_quran ?? '',
                        'sect' => $user->religion->sect ?? '',
                        'eat_halal' => $user->religion->eat_halal ?? '',
                        'smoke' => $user->religion->smoke ?? '',
                        'drink_alchohol' => $user->religion->drink_alchohol ?? '',
                        
                        'siblings' => $user->family->siblings ?? '',
                        'marital_status' => $user->profile->marital_status ?? '',
                        'have_children' => $user->profile->have_children ?? '',

                        'height' => $user->profile->height ?? '',
                        'bio' => $user->profile->bio ?? '',


                        'ip' => $user->loginInfo->ip ?? '',
                        'location_lat' => $user->loginInfo->location_lat ?? '',
                        'location_long' => $user->loginInfo->location_long ?? '',
                        'current_logged_in_device' => $user->loginInfo->current_logged_in_device ?? '',
                        'login_time' => $user->loginInfo->login_time ?? '',

                        'created_at' => $user->created_at->diffForHumans(),
                        'profile_step' => $user->profile_step,
                    ];
                })
        ]);

        // return Inertia::render('Users/Index', [
        //     'filters' => Request::all('search', 'account_status'),
        //     'users' => User::where('account_status', 0)->with('qualification')
        //     ->with('religion')
        //     ->orderBy('created_at', 'desc')
        //     ->paginate(5)
        //     ->transform(function ($user) {
        //         return [
        //             'id' => $user->id,
        //             'firstname' => $user->firstname,
        //             'lastname' => $user->lastname,
        //             'email' => $user->email,
        //             'age' =>  \Carbon\Carbon::parse($user->date_of_birth)->age,
        //             'profile_image' => $user->profile_image,
        //             'ethnic_origin' => $user->ethnic_origin,
        //             'country' => $user->country,
        //             'recidency_status' => $user->recidency_status,
        //             'created_at' => $user->created_at,
        //             'profile_step' => $user->profile_step,
        //             // 'highest_education' => $user->qualification->highest_education,
        //             // 'current_profession' => $user->qualification->current_profession,
        //             // 'prayer_frequency' => $user->religion->prayer_frequency,
        //             // 'sect' => $user->religion->sect,
        //         ];
        //     })
        //             ->filter(Request::only('search', 'account_status'))
        //             ->paginate()
        //             ->appends(Request::all())
            
        // ]);
    }

    public function activateUser(Request $request, User $user){
        $user->update([
            'account_status' => 1,
        ]);

        return redirect()->back()->with('success', 'User activated');
    }
    
    public function suspendUser(Request $request, User $user){
        $user->update([
            'account_status' => 0,
        ]);

        return redirect()->back()->with('success', 'User suspended!');
    }


    public function activeUsers()
    {
        return Inertia::render('Admin/Users/ActiveUsers', [
            'active_users' => User::where('account_status', 1)
                ->with('qualification')
                ->with('religion')
                ->orderBy('created_at', 'desc')
                ->paginate(5)
                ->transform(function ($user) {
                    return [
                        'id' => $user->id,
                        'firstname' => $user->firstname,
                        'lastname' => $user->lastname,
                        'username' => $user->username,
                        'email' => $user->email,
                        'age' =>  \Carbon\Carbon::parse($user->date_of_birth)->age,
                        'profile_image' => $user->profile_image,
                        'ethnic_origin' => $user->ethnic_origin,
                        'country' => $user->country,
                        'recidency_status' => $user->recidency_status,
                        'created_at' => $user->created_at,
                        'profile_step' => $user->profile_step,
                    ];
                })
        ]);
    }
}
