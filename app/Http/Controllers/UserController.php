<?php

namespace App\Http\Controllers;

use App\Models\Interest;
use App\Models\User;
use App\Models\UserFamilyInfo;
use App\Models\UserProfileInfo;
use App\Models\UserQualification;
use App\Models\UserReligiousHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        $user = auth()->user();
        $userImages = $user->userImages;
        return Inertia::render('User/AuthUser/Profile', [ 
            'interests' => Interest::all(),
            'userImages' => $userImages,
            'user' => [
                    'id' => $user->id ?? '',
                    'username' => $user->username ?? '',
                    'email' => $user->email ?? '',
                    'gender' => $user->gender ?? '',
                    'age' =>  \Carbon\Carbon::parse($user->date_of_birth)->age ?? '',
                    'profile_image' => $user->profile_image ?? '',

                    'ethnic_origin' => $user->ethnic_origin ?? '',
                    'country' => $user->country ?? '',
                    'recidency_status' => $user->recidency_status ?? '',
                    'city' => $user->city ?? '',
                    'area' => $user->area ?? '',
                    
                    'back_home_country' => $user->back_home_country ?? '',
                    'back_home_city' => $user->back_home_city ?? '',
                    'back_home_area' => $user->back_home_area ?? '',
                    

                    'highest_education' => $user->qualification->highest_education ?? '',
                    'university' => $user->qualification->university ?? '',
                    'course_name' => $user->qualification->course_name ?? '',
                    'college' => $user->qualification->college ?? '',
                    'college_course_name' => $user->qualification->college_course_name ?? '',
                    'current_profession' => $user->qualification->current_profession ?? '',
                    'company_name' => $user->qualification->company_name ?? '',
                    
                    'prayer_frequency' => $user->religion->prayer_frequency ?? '',
                    'religious_history' => $user->religion->religious_history ?? '',
                    'sect' => $user->religion->sect ?? '',
                    'eat_halal' => $user->religion->eat_halal ?? '',
                    'smoke' => $user->religion->smoke ?? '',
                    'drink_alchohol' => $user->religion->drink_alchohol ?? '',
                    
                    'siblings' => $user->family->siblings ?? '',
                    'marital_status' => $user->profile->marital_status ?? '',

                    'have_children' => $user->profile->have_children ?? '',
                    
                    'height' => $user->profile->height ?? '',
                    
                    'bio' => $user->profile->bio ?? '',
            ]
         ]);
    }

    public function settings(){
        return Inertia::render('User/AuthUser/Settings', [ 'user' => auth()->user() ]);
    }


    public function publicprofile(){
        $user = auth()->user();
        $userImages = $user->userImages;

        return Inertia::render('User/AuthUser/PublicProfile', [ 
            'userImages' => $userImages,
            'user' => [
                    'id' => $user->id ?? '',
                    'username' => $user->username ?? '',
                    'email' => $user->email ?? '',
                    'gender' => $user->gender ?? '',
                    'age' =>  \Carbon\Carbon::parse($user->date_of_birth)->age ?? '',
                    'profile_image' => $user->profile_image ?? '',

                    'ethnic_origin' => $user->ethnic_origin ?? '',
                    'country' => $user->country ?? '',
                    'recidency_status' => $user->recidency_status ?? '',
                    'city' => $user->city ?? '',
                    'area' => $user->area ?? '',
                    
                    'back_home_country' => $user->back_home_country ?? '',
                    'back_home_city' => $user->back_home_city ?? '',
                    'back_home_area' => $user->back_home_area ?? '',
                    

                    'highest_education' => $user->qualification->highest_education ?? '',
                    'university' => $user->qualification->university ?? '',
                    'course_name' => $user->qualification->course_name ?? '',
                    'college' => $user->qualification->college ?? '',
                    'college_course_name' => $user->qualification->college_course_name ?? '',
                    'current_profession' => $user->qualification->current_profession ?? '',
                    'company_name' => $user->qualification->company_name ?? '',
                    
                    'prayer_frequency' => $user->religion->prayer_frequency ?? '',
                    'religious_history' => $user->religion->religious_history ?? '',
                    'sect' => $user->religion->sect ?? '',
                    'eat_halal' => $user->religion->eat_halal ?? '',
                    'smoke' => $user->religion->smoke ?? '',
                    'drink_alchohol' => $user->religion->drink_alchohol ?? '',
                    
                    'siblings' => $user->family->siblings ?? '',
                    'marital_status' => $user->profile->marital_status ?? '',

                    'have_children' => $user->profile->have_children ?? '',
                    
                    'height' => $user->profile->height ?? '',
                    
                    'bio' => $user->profile->bio ?? '',
            ]
         ]);
    }

    public function resetPassword(Request $request){

        # Validation
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|confirmed',
        ]);


        #Match The Old Password
        if(!Hash::check($request->old_password, auth()->user()->password)){
            return back()->with("error", "Old Password Doesn't match!");
        }


        #Update the new Password
        User::whereId(auth()->user()->id)->update([
            'password' => Hash::make($request->new_password)
        ]);

        return back()->with("status", "Password changed successfully!");

        return redirect()->back()->with('success', 'Profile Updated!');
    }

    public function store(Request $request)
    {
        $user = auth()->user();
        // dd($user);

        auth()->user()->update([
            
            'ethnic_origin' => $request->ethnic_origin,

            'country' => $request->country,
            'recidency_status' => $request->recidency_status,
            'city' => $request->city,
            'area' => $request->area,
            
            'back_home_country' => $request->back_home_country,
            'back_home_city' => $request->back_home_city,
            'back_home_area' => $request->back_home_area,
            'relocate' => $request->relocate,
        ]);

        $profileinfo = UserProfileInfo::where('user_id', '=', $user->id)->first();
        $profileinfo->update([
            'height' => $request->height,
            'marital_status' => $request->marital_status,
            'have_children' => $request->have_children,
            'bio' => $request->bio,
        ]);

        $familyinfo = UserFamilyInfo::where('user_id', '=', $user->id)->first();
        $familyinfo->update([
            'siblings' => $request->siblings,
        ]);

        $religious = UserReligiousHistory::where('user_id', '=', $user->id)->first();
        $religious->update([
            'religious_history' => $request->religious_history,
            'prayer_frequency' => $request->prayer_frequency,
            'read_quran' => $request->read_quran,
            'sect' => $request->sect,
            'eat_halal' => $request->eat_halal,
            'drink_alchohol' => $request->drink_alchohol,
        ]);

        $qualification = UserQualification::where('user_id', '=', $user->id)->first();
        $qualification->update([
            'highest_education' => $request->highest_education,

            'university' => $request->university,
            'course_name' => $request->course_name,
            'university_graduation_year' => $request->university_graduation_year,
            'college' => $request->college,
            'college_graduation_year' => $request->college_graduation_year,
            'college_course_name' => $request->college_course_name,

            'current_profession' => $request->current_profession,
            'company_name' => $request->company_name,
        ]);

        

        return redirect()->back()->with('success', 'Profile Updated!');
        
        
    }



    // public function (){
    //     return Inertia::render('User/AuthUser/Settings', [ 'user' => auth()->user() ]);
    // }


    public function deactivateAccount(Request $request)
    {
        $user = auth()->user();
        $user->deactivate();
        auth()->logout();

        // subscription pause

        return redirect()->route('welcome')->with('success', 'Account deactivated!');

    }

    public function deleteAccount(Request $request)
    {
        // subscription cancel
        $user = auth()->user();
        $user->deactivate();
        auth()->logout();

        return redirect()->route('welcome')->with('success', 'Account deactivated!');
    }
}
