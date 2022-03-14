<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    public function index()
    {
        return Inertia::render('Admin/Dashboard');
    }
    
    public function users()
    {
        return Inertia::render('Admin/Users/Index', [
            'users' => User::where('account_status', 0)
                ->with('qualification')
                ->with('religion')
                ->orderBy('created_at', 'desc')
                ->paginate(5)
                ->transform(function ($user) {
                    return [
                        'id' => $user->id,
                        'firstname' => $user->firstname,
                        'lastname' => $user->lastname,
                        'email' => $user->email,
                        'age' =>  \Carbon\Carbon::parse($user->date_of_birth)->age,
                        'profile_image' => $user->profile_image,
                        'ethnic_origin' => $user->ethnic_origin,
                        'country' => $user->country,
                        'recidency_status' => $user->recidency_status,
                        'created_at' => $user->created_at,
                        'profile_step' => $user->profile_step,
                        // 'highest_education' => $user->qualification->highest_education,
                        // 'current_profession' => $user->qualification->current_profession,
                        // 'prayer_frequency' => $user->religion->prayer_frequency,
                        // 'sect' => $user->religion->sect,
                    ];
                })
        ]);
    }

    public function activateUser(Request $request, User $user){
        $user->update([
            'account_status' => 1,
        ]);

        return redirect()->back()->with('success', 'User activated');
    }
}
