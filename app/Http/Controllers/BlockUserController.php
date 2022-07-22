<?php

namespace App\Http\Controllers;

use App\Models\BlockUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BlockUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        return Inertia::render('User/AuthUser/Block/BlockedUsers', [
            'blockedusers' => $user->blockedusers()
            ->with('religion')->with('qualification')
            ->paginate(5)
            ->transform(function ($u) {
                return [
                    'id' => $u->id,
                    'firstname' => $u->firstname,
                    'lastname' => $u->lastname,
                    'email' => $u->email,
                    'age' =>  \Carbon\Carbon::parse($u->date_of_birth)->age,
                    'profile_image' => $u->profile_image,
                    'ethnic_origin' => $u->ethnic_origin,
                    'country' => $u->country,
                    'recidency_status' => $u->recidency_status,
                    'highest_education' => $u->qualification->highest_education,
                    'current_profession' => $u->qualification->current_profession,
                    'prayer_frequency' => $u->religion->prayer_frequency,
                    'sect' => $u->religion->sect,
                    'isFollowing' => auth()->user()->isFollowing($u),
                    'isSaved' => auth()->user()->isSaved($u),
                    'isInvited' => auth()->user()->isInvited($u),
                    'isAccepted' => auth()->user()->isAccepted($u),
                ];
            }),
            'user' => $user
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
    public function store($id) {
        $userToBlock = User::findOrFail($id);
        auth()->user()->blockuser($userToBlock);

        return redirect()->back()->with('success', 'User blocked !');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BlockUser  $blockUser
     * @return \Illuminate\Http\Response
     */
    public function show(BlockUser $blockUser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BlockUser  $blockUser
     * @return \Illuminate\Http\Response
     */
    public function edit(BlockUser $blockUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BlockUser  $blockUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BlockUser $blockUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BlockUser  $blockUser
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        $userToUnblock = User::findOrFail($id);
        $f =  auth()->user()->unblockuser($userToUnblock);
        
        return redirect()->back()->with('success', 'Unblocked!');
    }
}
