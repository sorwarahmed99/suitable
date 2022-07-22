<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Interest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\UserFamilyInfo;
use App\Models\UserReligiousHistory;
use App\Models\UserProfileInfo;
use App\Models\UserQualification;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class SetUpProfileStepsController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    public function index() {
        return Inertia::render('Auth/OnboardingScreen', [
            'csrf_token' => csrf_token()
         ]);
    }

    public function create()
    {
        if(auth()->user()->profile_step >= 2) return redirect()->route('setupprofilestep2');
        return Inertia::render('Auth/SetUpProfileStepOne');
    }

    public function store(Request $request)
    {
        // dd($request->all());

        $request->validate([
            'ethnic_origin' => 'required',
            'country' => 'required',
            'recidency_status' => 'required',
            'relocate' => 'required',
            'postcode' => 'required', Rule::postcode(),
        ]);

        auth()->user()->update([
            'ethnic_origin' => $request->ethnic_origin,
            'country' => $request->country,
            'recidency_status' => $request->recidency_status,
            'relocate' => $request->relocate,
            'postcode' => $request->postcode,
            'profile_step' => 2,
        ]);
        return redirect()->route('setupprofilestep2');
    }


    public function setupprofilestep2create()
    {
        if(auth()->user()->profile_step >= 3) return redirect()->route('setupprofilestep3');

        return Inertia::render('Auth/SetUpProfileStepTwo', [
            'csrf_token' => csrf_token()
         ]);
    }

    public function setupprofilestep2store(Request $request)
    {

        $request->validate([
            'marital_status' => 'required',
            'living_with' => 'required',
            'have_children' => 'required',
            'like_to_have_children' => 'required',
            'physical_disability' => 'required',
        ]);

        UserProfileInfo::create([
            'user_id' => auth()->id(),
            'marital_status' => $request->marital_status,
            'living_with' => $request->living_with,
            'have_children' => $request->have_children,
            'like_to_have_children' => $request->like_to_have_children,
            'poligony' => $request->poligony,
            'physical_disability' => $request->physical_disability,
        ]);
        auth()->user()->update([
            'profile_step' => 3,
        ]);

        return redirect()->route('setupprofilestep3');

    }

    public function setupprofilestep3create()
    {
        if(auth()->user()->profile_step >= 4) return redirect()->route('setupprofilestep4');

        return Inertia::render('Auth/SetUpProfileStepThree', [
            'csrf_token' => csrf_token()
         ]);
    }

    public function setupprofilestep3store(Request $request)
    {   
        $request->validate([
            'religious_history' => 'required',
            'prayer_frequency' => 'required',
            'sect' => 'required',
            'eat_halal' => 'required',
            'smoke' => 'required',
            'drink_alchohol' => 'required',
            'school_of_thoughts' => 'required',
        ],
        [
            'religious_history.required'=> 'Religious History is required!',
            'prayer_frequency.required'=> 'Prayer frequency is required!', 
            'sect.required'=> 'Please select your sect!',
            'eat_halal.required'=> 'Please select if you eat halal food!',
            'smoke.required'=> 'Please select if you smoke!',
            'drink_alchohol.required'=> 'Please select if you drink alcohol!', 
            'school_of_thoughts.required' => 'Please select your school of thought',
        ]
        );

        UserReligiousHistory::create([
            'user_id' => auth()->id(),
            'religious_history' => $request->religious_history,
            'prayer_frequency' => $request->prayer_frequency,
            'school_of_thoughts' => $request->school_of_thoughts,
            'sect' => $request->sect,
            'eat_halal' => $request->eat_halal,
            'smoke' => $request->smoke,
            'drink_alchohol' => $request->drink_alchohol,
            'wear_hijab_keep_beard' => $request->wear_hijab_keep_beard,
        ]);

        auth()->user()->update([
            'profile_step' => 4,
        ]);

        return redirect()->route('setupprofilestep4');
    }

    public function setupprofilestep4create()
    {
        if(auth()->user()->profile_step >= 5) return redirect()->route('setupprofilestep5');

        return Inertia::render('Auth/SetUpProfileStepFour', [
            'csrf_token' => csrf_token()
         ]);
    }

    public function setupprofilestep4store(Request $request)
    {
        $request->validate([
            'highest_education' => 'required',
            'graduation_year' => 'required',
            'current_profession' => 'required',
            'for_how_long' => 'required',
            'company_name' => 'required',
            'yearly_income' => 'required',
        ]);

        DB::beginTransaction();
        UserQualification::create([
            'user_id' => auth()->id(),
            'highest_education' => $request->highest_education,
            'graduation_year' => $request->graduation_year,
            'current_profession' => $request->current_profession,
            'for_how_long' => $request->for_how_long,
            'company_name' => $request->company_name,
            'yearly_income' => $request->yearly_income,
        ]);
     
        auth()->user()->update([
            'profile_step' => 5,
        ]);
        DB::commit();

        return redirect()->route('setupprofilestep5');
    }

    public function setupprofilestep5create()
    {
        if(auth()->user()->profile_step >= 6) return redirect()->route('uploadProfilePic');

        return Inertia::render('Auth/SetUpProfileStepFive', [
            'csrf_token' => csrf_token()
         ]);
    }

    public function setupprofilestep5store(Request $request)
    {
        $request->validate([
            'siblings' => 'required',
            'a_day_living_with_family' => 'required',
            'continue_working' => 'required',
            'intend_to_move_out' => 'required',
            'issues_living_with_inlaws' => 'required',
            'future_plan' => 'required',
            'get_married' => 'required',
        ]);

        DB::beginTransaction();
        UserFamilyInfo::create([
            'user_id' => auth()->id(),
            'siblings' => $request->siblings,
            'a_day_living_with_family' => $request->a_day_living_with_family,
            'get_married' => $request->get_married,
            'continue_working' => $request->continue_working,
            'intend_to_move_out' => $request->intend_to_move_out,
            'issues_living_with_inlaws' => $request->issues_living_with_inlaws,
            'future_plan' => $request->future_plan,
        ]);
     
        auth()->user()->update([
            'profile_step' => 6,
        ]);
        DB::commit();

        return redirect()->route('uploadProfilePic');
    }

    public function setupprofilestep6create()
    {
        if(auth()->user()->profile_step >= 8) return redirect()->route('choosePlan');
        
        return Inertia::render('Auth/SetUpProfileStepSix', [
            'csrf_token' => csrf_token(),
            'interests' => Interest::all(),
         ]);
    }

    public function setupprofilestep6store(Request $request)
    {   
        $user = auth()->user()->id;
        $input = $request->all();
        DB::beginTransaction();

        $about = UserProfileInfo::whereUserId($user)->first();
        $about->update($input);

        $interests = Interest::find($request->get('interests'));
        foreach($interests as $interest){
            $interest->users()->attach($user);
        }

        auth()->user()->update([
            'profile_step' => 8,
        ]);

        DB::commit();
        return redirect()->route('choosePlan');
    }


    public function uploadProfilePicCreate()
    {
        if(auth()->user()->profile_step >= 7) return redirect()->route('setupprofilestep6');
        
        return Inertia::render('Auth/UploadProfilePic', [
                'csrf_token' => csrf_token()
            ]);
    }
    
    public function uploadProfilePicStore(Request $request)
    {
        $user = auth()->user();
        $request->validate([
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        
        // if ($request->hasFile('photo')) {
        //     $image_path = $request->file('image')->store('image', 'public');
        // }

        if ($image = $request->file('photo')) {
            $destinationPath = 'uploads/user-profile-images/';
            $profileImage = $user->id.date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            
            // Storage::disk('uploads')->put('filename', $file_content);


            auth()->user()->update([
                'profile_image' => $destinationPath.$profileImage ?? null,
            ]);
        }
        
        return redirect()->back();

    }


    public function uploaded(){
        auth()->user()->update([
            'profile_step' => 7,
        ]);

        return redirect()->route('setupprofilestep6');

    }
}
