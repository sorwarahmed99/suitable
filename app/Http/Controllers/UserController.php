<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        return Inertia::render('User/AuthUser/Profile', [ 'user' => auth()->user() ]);
    }

    public function settings(){
        return Inertia::render('User/AuthUser/Settings', [ 'user' => auth()->user() ]);
    }

    // public function (){
    //     return Inertia::render('User/AuthUser/Settings', [ 'user' => auth()->user() ]);
    // }
}
