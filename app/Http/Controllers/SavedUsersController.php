<?php

namespace App\Http\Controllers;

use App\Models\SavedUsers;
use App\Models\User;
use Illuminate\Http\Request;

class SavedUsersController extends Controller
{

    public function store($id) {
        // dd($id);
        $userToSave = User::findOrFail($id);
        auth()->user()->saveuser($userToSave);

        return redirect()->back();
    }

    public function destroy($id) {
        $userToUnsave = User::findOrFail($id);
        auth()->user()->unsaveuser($userToUnsave);
        
        return redirect()->back();
    }


    // To be implemented later ----------------------------------------------------------------

    public function toggle($id){
        $user = User::find($id); 
        $user->savedUsers()->toggle(auth()->id());
        return redirect()->back();
    }

}
