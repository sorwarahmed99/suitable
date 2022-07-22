<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PassUserController extends Controller
{
    public function store($id) {
        $userToPass = User::findOrFail($id);
        auth()->user()->pass($userToPass);

        return redirect()->back()->with('success', 'Passed!');
    }


    public function destroy($id) {
        $userToUnpass = User::findOrFail($id);
        $f =  auth()->user()->unpass($userToUnpass);
        
        return redirect()->back()->with('success', 'Restored!');
    }
}
