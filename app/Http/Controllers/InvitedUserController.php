<?php

namespace App\Http\Controllers;

use App\Models\InvitedUser;
use App\Models\User;
use Illuminate\Http\Request;
use DB;

class InvitedUserController extends Controller
{
    public function store($id) {
        // dd($id);
        $userToInvite = User::findOrFail($id);
        auth()->user()->invite($userToInvite);

        return redirect()->back()->with('success', 'Invited');
    }
    
    public function destroy($id) {
        $userToUnInvite = User::findOrFail($id);
        auth()->user()->uninvite($userToUnInvite);
        
        return redirect()->back()->with('success', 'Canceled!');
    }

    public function accept($id) {
        $user = auth()->id();
        $userToAccept = User::where('id', $id)->first();
        $a = InvitedUser::where('invited_user_id', $id)
                ->when('user_id' == $user, function ($q) {
                    return $q->where('invited_user_id', '=', $id);
                })
                ->first();
        // dd($a);
        $a->is_accepted = 1;
        $a->save();
        return redirect()->back()->with('success', 'Accepted');
    }

    public function reject($id) {
        $user = auth()->user()->id;
        $userToInvite = User::findOrFail($id);

        $a = InvitedUser::where('invited_user_id', $id)
                ->when('user_id' == $user, function ($q) {
                    return $q->where('invited_user_id', '=', $id);
                })
                ->first();
        $a->is_accepted = 2;
        $a->save();

        return redirect()->back()->with('success', 'Request deleted!');
    }

}
