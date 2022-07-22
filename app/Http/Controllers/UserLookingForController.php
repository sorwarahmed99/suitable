<?php

namespace App\Http\Controllers;

use App\Models\MatchedUser;
use App\Models\User;
use App\Models\UserLookingFor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserLookingForController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth()->user();
        return Inertia::render('User/Preferences', [
            'user' => [
                'id' => $user->preference->user_id ?? '',
                'ethnic_origin' => $user->preference->ethnic_origin ?? '',
                'country' => $user->preference->country ?? '',
                'recidency_status' => $user->preference->recidency_status ?? '',
                'relocate' => $user->preference->relocate ?? '',
                'min_height' => $user->preference->min_height ?? '',
                'max_height' => $user->preference->max_height ?? '',
                'min_age' => $user->preference->min_age ?? '',
                'max_age' => $user->preference->max_age ?? '',
                'marital_status' => $user->preference->marital_status ?? '',
                'have_children' => $user->preference->have_children ?? '',
                'like_to_have_children' => $user->preference->like_to_have_children ?? '',

                'religious_history' => $user->preference->religious_history ?? '',
                'prayer_frequency' => $user->preference->prayer_frequency ?? '',
                'sect' => $user->preference->sect ?? '',
                'school_of_thoughts' => $user->preference->school_of_thoughts ?? '',
                'eat_halal' => $user->preference->eat_halal ?? '',
                'smoke' => $user->preference->smoke ?? '',
                'drink_alchohol' => $user->preference->drink_alchohol ?? '',
                'wear_hijab_keep_beard' => $user->preference->wear_hijab_keep_beard ?? '',

                'highest_education' => $user->preference->highest_education ?? '',
                'get_married' => $user->preference->get_married ?? '',
                'continue_working' => $user->preference->continue_working ?? '',
                'intend_to_move_out' => $user->preference->intend_to_move_out ?? '',
                'issue_living_with_inlaws' => $user->preference->issue_living_with_inlaws ?? '',
                
                'bio' => $user->preference->bio ?? '',

                
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'ethnic_origin' => 'required',
            'country' => 'required',
            'min_height' => 'required',
            'min_age' => 'required',
            'marital_status' => 'required',
        ]);
        $user = auth()->user();


        $users = User::where('id', '!=', auth()->user()->id)
                        ->where('account_status', 1)
                        ->where('ethnic_origin', $request->ethnic_origin)
                        ->orWhere('country', $request->country)
                        ->get();
                // dd($users);
                foreach ($users as $user){
                    // dd($user->id);
                    MatchedUser::create([
                        'user_id' => auth()->id(),
                        'matched_id' => $user->id,
                    ]);
                }
       
        UserLookingFor::updateOrCreate(
            [
                'user_id' => auth()->id(),
            ], [
            "user_id" => auth()->id(),
            "ethnic_origin" => $request->ethnic_origin,
            "country" => $request->country,
            "recidency_status" => $request->recidency_status,
            "relocate" => $request->relocate,
            "min_height" => $request->min_height,
            "max_height" => $request->max_height,
            "min_age" => $request->min_age,
            "max_age" => $request->max_age,
            "marital_status" => $request->marital_status,
            "have_children" => $request->have_children,
            "like_to_have_children" => $request->like_to_have_children,
            "religious_history" => $request->religious_history,
            "prayer_frequency" => $request->prayer_frequency,
            "sect" => $request->sect,
            "school_of_thoughts" => $request->school_of_thoughts,
            "eat_halal" => $request->eat_halal,
            "smoke" => $request->smoke,
            "drink_alchohol" => $request->drink_alchohol,
            "wear_hijab_keep_beard" => $request->wear_hijab_keep_beard,
            "highest_education" => $request->highest_education,
            "get_married" => $request->get_married,
            "continue_working" => $request->continue_working,
            "intend_to_move_out" => $request->intend_to_move_out,
            "issues_living_with_inlaws" => $request->issues_living_with_inlaws,
            "bio" => $request->bio,
        ]);

        return redirect()->back()->with('success', 'Your preferences are set. Now you can browse!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserLookingFor  $userLookingFor
     * @return \Illuminate\Http\Response
     */
    public function show(UserLookingFor $userLookingFor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserLookingFor  $userLookingFor
     * @return \Illuminate\Http\Response
     */
    public function edit(UserLookingFor $userLookingFor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserLookingFor  $userLookingFor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserLookingFor $userLookingFor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserLookingFor  $userLookingFor
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserLookingFor $userLookingFor)
    {
        //
    }
}
