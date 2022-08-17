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
        $request->validate([
            'date_of_birth' => 'required|string|date|before:18 years ago',
            'gender' => 'required',
            'marital_status' => 'required',
            'ethnic_origin' => 'required',
            'height' => 'required',
        ],[
            'before' => 'You must be 18 years or older!',
        ]);

        DB::beginTransaction();

        auth()->user()->update([
            'date_of_birth' => $request->date_of_birth,
            'age' => \Carbon\Carbon::parse($request->date_of_birth)->age,
            'gender' => $request->gender,
            'ethnic_origin' => $request->ethnic_origin,
            'profile_step' => 2,
        ]);

        UserProfileInfo::create([
            'user_id' => auth()->id(),
            'height' => $request->height,
            'marital_status' => $request->marital_status,
        ]);

        UserFamilyInfo::create([
            'user_id' => auth()->id(),
            'siblings' => $request->siblings,
        ]);

        DB::commit();

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
            'country' => 'required',
            'recidency_status' => 'required',
            'city' => 'required',
            'postcode' => 'required', Rule::postcode(),
            'back_home_country' => 'required',
        ]);

        auth()->user()->update([
            'country' => $request->country,
            'recidency_status' => $request->recidency_status,
            'city' => $request->city,
            'postcode' => $request->postcode,
            
            'back_home_country' => $request->back_home_country,
            'back_home_city' => $request->back_home_city,
            'back_home_area' => $request->back_home_area,

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
            'highest_education' => 'required',
            'current_profession' => 'required',
        ]);

        DB::beginTransaction();

        UserQualification::create([
            'user_id' => auth()->id(),
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
        
        auth()->user()->update([
            'profile_step' => 4,
        ]);
        
        DB::commit();
        
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
            'religious_history' => 'required',
            'prayer_frequency' => 'required',
            'read_quran' => 'required',
        ]);
        
        DB::beginTransaction();

        UserReligiousHistory::create([
            'user_id' => auth()->id(),
            'religious_history' => $request->religious_history,
            'prayer_frequency' => $request->prayer_frequency,
            'read_quran' => $request->read_quran,
            'sect' => $request->sect,
            'eat_halal' => $request->eat_halal,
            'drink_alchohol' => $request->drink_alchohol,
            'wear_hijab_keep_beard' => $request->wear_hijab_keep_beard,
        ]);
     
        auth()->user()->update([
            'profile_step' => 5, 
        ]);
        DB::commit();

        // return redirect()->route('setupprofilestep5');
        return redirect()->route('uploadProfilePic');

    }

  
    public function uploadProfilePicCreate()
    {
        // if(auth()->user()->profile_step >= 7) return redirect()->route('setupprofilestep6');
        
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
            'profile_step' => 6,
        ]);

        return redirect()->route('choosePlan');
        // return redirect()->route('setupprofilestep6');

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
            // 'a_day_living_with_family' => 'required',
            // 'continue_working' => 'required',
            // 'intend_to_move_out' => 'required',
            // 'issues_living_with_inlaws' => 'required',
            // 'future_plan' => 'required',
            // 'how_many_brothers_and_sisters' => 'required',
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
            'how_many_brothers_and_sisters' => $request->how_many_brothers_and_sisters,
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
}
