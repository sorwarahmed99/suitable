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

        return redirect()->back();
    }
    
    public function destroy($id) {
        $userToUnInvite = User::findOrFail($id);
        auth()->user()->uninvite($userToUnInvite);
        
        return redirect()->back();
    }

    public function accept($id) {
        $user = auth()->user()->id;
        $userToAccept = User::find($id);
        // dd($userToAccept);
        
        // auth()->user()->acceptuser($userToAccept);
        DB::table('invited_users')->where('invited_user_id', $userToAccept)->where('user_id', $user)->update(['is_accepted' => 1]);

        return redirect()->back();
    }

    public function reject($id) {
        $user = auth()->user()->id;
        $userToInvite = User::findOrFail($id);
        DB::table('invited_users')->where('invited_user_id', $id)->where('user_id', $user)->where('is_accepted', 0)->update(['is_accepted' => 2]);


        return redirect()->back();
    }

}
