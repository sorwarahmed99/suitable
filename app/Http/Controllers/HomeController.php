<?php

namespace App\Http\Controllers;

use App\Models\SavedUsers;
use App\Models\User;
use App\Models\UserLookingFor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        if(auth()->user()->profile_step < 8) return redirect()->route('choosePlan');
        
        $user = auth()->user();
        $userPreferences = UserLookingFor::where('user_id', auth()->id())->first();

        if($userPreferences){
            return Inertia::render('User/Home', [
                'users' => User::where('id', '!=', auth()->user()->id)->where('account_status', 1)
                    ->when($user->gender == 'Male', function ($q) {
                        return $q->where('gender', '=', 'Female');
                    })
                    ->when($user->gender == 'Female', function ($q) {
                        return $q->where('gender', '=', 'Male');
                    })
                    // Need to modify
                    ->where('ethnic_origin', $userPreferences->ethnic_origin)
                    ->orWhere('country', $userPreferences->country)
                    ->whereBetween('age', [$userPreferences->min_age, $userPreferences->max_age]) // Filter by age range
                    // ->whereIn('marital_status', $userPreferences->user->profile->marital_status)
    
    
                    ->where(function($q) use ($user){
                        $q->whereNotIn('id', $user->passedusers->pluck('id'));
                    })
                    ->where(function($q) use ($user){
                        $q->whereNotIn('id', $user->blockedusers->pluck('id'));
                    })
                    ->where('deactivated', 0)
                    ->with('qualification')
                    ->with('religion')
                    ->orderBy('created_at', 'desc')
                    ->paginate(5)
                    ->transform(function ($user) {
                        return [
                            'id' => $user->id ?? '',
                            'firstname' => $user->firstname ?? '',
                            'lastname' => $user->lastname ?? '',
                            'username' => $user->username ?? '',
                            'email' => $user->email ?? '',
                            'gender' => $user->gender ?? '',
                            'age' =>  \Carbon\Carbon::parse($user->date_of_birth)->age ?? '',
                            'profile_image' => $user->profile_image ?? '',
                            'ethnic_origin' => $user->ethnic_origin ?? '',
                            'country' => $user->country ?? '',
                            'recidency_status' => $user->recidency_status ?? '',
                            'highest_education' => $user->qualification->highest_education ?? '',
                            'current_profession' => $user->qualification->current_profession ?? '',
                            'prayer_frequency' => $user->religion->prayer_frequency ?? '',
                            'height' => $user->profile->height ?? '',
                            'sect' => $user->religion->sect ?? '',
                            'isFollowing' => auth()->user()->isFollowing($user) ?? '',
                            'isSaved' => auth()->user()->isSaved($user) ?? '',
                            'isInvited' => auth()->user()->isInvited($user) ?? '',
                            'isAccepted' => auth()->user()->isAccepted($user) ?? '',
                        ];
                    }),
            ]);
        } else {
            return Inertia::render('User/Home', [
                'users' => User::where('id', '!=', auth()->user()->id)->where('account_status', 1)
                    ->where('deactivated', 0)
                    ->when($user->gender == 'Male', function ($q) {
                        return $q->where('gender', '=', 'Female');
                    })
                    ->when($user->gender == 'Female', function ($q) {
                        return $q->where('gender', '=', 'Male');
                    })
                    ->where(function($q) use ($user){
                        $q->whereNotIn('id', $user->passedusers->pluck('id'));
                    })
                    ->where(function($q) use ($user){
                        $q->whereNotIn('id', $user->blockedusers->pluck('id'));
                    })
                    ->with('qualification')
                    ->with('religion')
                    ->orderBy('created_at', 'desc')
                    ->paginate(5)
                    ->transform(function ($user) {
                        return [
                            'id' => $user->id ?? '',
                            'firstname' => $user->firstname ?? '',
                            'lastname' => $user->lastname ?? '',
                            'username' => $user->username ?? '',
                            'email' => $user->email ?? '',
                            'gender' => $user->gender ?? '',
                            'age' =>  \Carbon\Carbon::parse($user->date_of_birth)->age ?? '',
                            'profile_image' => $user->profile_image ?? '',
                            'ethnic_origin' => $user->ethnic_origin ?? '',
                            'country' => $user->country ?? '',
                            'recidency_status' => $user->recidency_status ?? '',
                            'highest_education' => $user->qualification->highest_education ?? '',
                            'current_profession' => $user->qualification->current_profession ?? '',
                            'prayer_frequency' => $user->religion->prayer_frequency ?? '',
                            'height' => $user->profile->height ?? '',
                            'sect' => $user->religion->sect ?? '',
                            'isFollowing' => auth()->user()->isFollowing($user) ?? '',
                            'isSaved' => auth()->user()->isSaved($user) ?? '',
                            'isInvited' => auth()->user()->isInvited($user) ?? '',
                            'isAccepted' => auth()->user()->isAccepted($user) ?? '',
                        ];
                    }),
            ]);
        }

    }

    
    // public function preferences (){
    //     return Inertia::render('User/Preferences');
    // }

    public function show (User $user){
        // dd($user);

        return Inertia::render('User/UserProfile', [
                'userImages' => $user->userImages,
                'user' => [
                        'id' => $user->id ?? '',

                        'username' => $user->username ?? '',
                        'gender' => $user->gender ?? '',
                        'age' =>  \Carbon\Carbon::parse($user->date_of_birth)->age ?? '',
                        'profile_image' => $user->profile_image ?? '',
                        'ethnic_origin' => $user->ethnic_origin ?? '',
                        'country' => $user->country ?? '',

                        'recidency_status' => $user->recidency_status ?? '',
                        'city' => $user->city ?? '',
                        'relocate' => $user->relocate ?? '',
                        'back_home_country' => $user->back_home_country ?? '',
                        'back_home_city' => $user->back_home_city ?? '',
                        'back_home_area' => $user->back_home_area ?? '',

                        'highest_education' => $user->qualification->highest_education ?? '',
                        'graduation_year' => $user->qualification->graduation_year ?? '',
                        'current_profession' => $user->qualification->current_profession ?? '',
                        'company_name' => $user->qualification->company_name ?? '',
                        'prayer_frequency' => $user->religion->prayer_frequency ?? '',
                        'religious_history' => $user->religion->religious_history ?? '',
                        'wear_hijab_keep_beard' => $user->religion->wear_hijab_keep_beard ?? '',
                        'sect' => $user->religion->sect ?? '',
                        'eat_halal' => $user->religion->eat_halal ?? '',
                        'smoke' => $user->religion->smoke ?? '',
                        'drink_alchohol' => $user->religion->drink_alchohol ?? '',
                        
                        'siblings' => $user->family->siblings ?? '',
                        
                        'marital_status' => $user->profile->marital_status ?? '',
                        'living_with' => $user->profile->living_with ?? '',
                        'have_children' => $user->profile->have_children ?? '',
                        'like_to_have_children' => $user->profile->like_to_have_children ?? '',
                        'physical_disability' => $user->profile->physical_disability ?? '',
                        'height' => $user->profile->height ?? '',
                        'hair_color' => $user->profile->hair_color ?? '',
                        'fitness' => $user->profile->fitness ?? '',
                        'bio' => $user->profile->bio ?? '',

                        'isFollowing' => auth()->user()->isFollowing($user) ?? '',
                        'isSaved' => auth()->user()->isSaved($user) ?? '',
                        'isInvited' => auth()->user()->isInvited($user) ?? '',
                        'isAccepted' => auth()->user()->isAccepted($user) ?? '',
                ]
            ]
        );
    }

    public function mutualMatches (User $user){
        // dd($user);
        return Inertia::render('User/MutualMatches', ['user' => $user]);
    }

    public function interests (){
        $user = Auth::user();
        $savedusers = $user->savedusers()->get()->toArray();

        return Inertia::render('User/Interests', [
            'savedusers' => $user->savedusers()
            ->with('religion')->with('qualification')
            ->paginate(5)
            ->transform(function ($u) {
                return [
                    'id' => $u->id ?? '',
                    'firstname' => $u->firstname ?? '',
                    'lastname' => $u->lastname ?? '',
                    'username' => $u->username ?? '',
                    'email' => $u->email ?? '',
                    'age' =>  \Carbon\Carbon::parse($u->date_of_birth)->age ?? '',
                    'profile_image' => $u->profile_image ?? '',
                    'ethnic_origin' => $u->ethnic_origin ?? '',
                    'country' => $u->country ?? '',
                    'recidency_status' => $u->recidency_status ?? '',
                    'highest_education' => $u->qualification->highest_education ?? '',
                    'current_profession' => $u->qualification->current_profession ?? '',
                    'prayer_frequency' => $u->religion->prayer_frequency ?? '',
                    'sect' => $u->religion->sect ?? '',
                    'isFollowing' => auth()->user()->isFollowing($u) ?? '',
                    'isSaved' => auth()->user()->isSaved($u) ?? '',
                    'isInvited' => auth()->user()->isInvited($u) ?? '',
                    'isAccepted' => auth()->user()->isAccepted($u) ?? '',
                ];
            }),
            // 'user' => $user
        ]);
    }

    public function profilesILike () {
        $user = Auth::user();

        return Inertia::render('User/ProfilesILike', [
            'invitedusers' => $user->invitedusers()
            ->with('religion')->with('qualification')
            ->paginate(5)
            ->transform(function ($u) {
                return [
                    'id' => $u->id ?? '',
                    'firstname' => $u->firstname ?? '',
                    'lastname' => $u->lastname ?? '',
                    'username' => $u->username ?? '',
                    'email' => $u->email ?? '',
                    'age' =>  \Carbon\Carbon::parse($u->date_of_birth)->age ?? '',
                    'profile_image' => $u->profile_image ?? '',
                    'ethnic_origin' => $u->ethnic_origin ?? '',
                    'country' => $u->country ?? '',
                    'recidency_status' => $u->recidency_status ?? '',
                    'highest_education' => $u->qualification->highest_education ?? '',
                    'current_profession' => $u->qualification->current_profession ?? '',
                    'prayer_frequency' => $u->religion->prayer_frequency ?? '',
                    'sect' => $u->religion->sect ?? '',
                    'isFollowing' => auth()->user()->isFollowing($u) ?? '',
                    'isSaved' => auth()->user()->isSaved($u) ?? '',
                    'isInvited' => auth()->user()->isInvited($u) ?? '',
                    'isAccepted' => auth()->user()->isAccepted($u) ?? '',
                ];
            }),
            // 'user' => $user
        ]);
    }

    public function whoLikedMe () {
        $user = Auth::user();

        return Inertia::render('User/PeopleWhoLikedMe', [
            'inviters' => $user->inviters()
            ->with('religion')->with('qualification')
            ->paginate(5)
            ->transform(function ($u) {
                return [
                    'id' => $u->id ?? '',
                    'firstname' => $u->firstname ?? '',
                    'lastname' => $u->lastname ?? '',
                    'username' => $u->username ?? '',
                    'email' => $u->email ?? '',
                    'age' =>  \Carbon\Carbon::parse($u->date_of_birth)->age ?? '',
                    'profile_image' => $u->profile_image ?? '',
                    'ethnic_origin' => $u->ethnic_origin ?? '',
                    'country' => $u->country ?? '',
                    'recidency_status' => $u->recidency_status ?? '',
                    'highest_education' => $u->qualification->highest_education ?? '',
                    'current_profession' => $u->qualification->current_profession ?? '',
                    'prayer_frequency' => $u->religion->prayer_frequency ?? '',
                    'sect' => $u->religion->sect ?? '',
                    'isFollowing' => auth()->user()->isFollowing($u) ?? '',
                    'isSaved' => auth()->user()->isSaved($u) ?? '',
                    'isInvited' => auth()->user()->isInvited($u) ?? '',
                    'isAccepted' => auth()->user()->isAccepted($u) ?? '',
                    'amiInvited' => auth()->user()->amiInvited($u) ?? '',
                ];
            }),
            // 'user' => $user
        ]);
    }

    public function profilesIPassed () {
        $user = Auth::user();

        return Inertia::render('User/ProfilesIPassed', [
            'passedusers' => $user->passedusers()
            ->with('religion')->with('qualification')
            ->paginate(5)
            ->transform(function ($u) {
                return [
                    'id' => $u->id ?? '',
                    'firstname' => $u->firstname ?? '',
                    'lastname' => $u->lastname ?? '',
                    'username' => $u->username ?? '',
                    'email' => $u->email ?? '',
                    'age' =>  \Carbon\Carbon::parse($u->date_of_birth)->age ?? '',
                    'profile_image' => $u->profile_image ?? '',
                    'ethnic_origin' => $u->ethnic_origin ?? '',
                    'country' => $u->country ?? '',
                    'recidency_status' => $u->recidency_status ?? '',
                    'highest_education' => $u->qualification->highest_education ?? '',
                    'current_profession' => $u->qualification->current_profession ?? '',
                    'prayer_frequency' => $u->religion->prayer_frequency ?? '',
                    'sect' => $u->religion->sect ?? '',
                    'isFollowing' => auth()->user()->isFollowing($u) ?? '',
                    'isSaved' => auth()->user()->isSaved($u) ?? '',
                    'isInvited' => auth()->user()->isInvited($u) ?? '',
                    'isAccepted' => auth()->user()->isAccepted($u) ?? '',
                ];
            }),
            // 'user' => $user
        ]);
    }

    


    

    

}
