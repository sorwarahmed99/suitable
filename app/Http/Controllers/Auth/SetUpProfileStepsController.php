<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SetUpProfileStepsController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/SetUpProfileStepOne');
    }

    public function store(Request $request)
    {
    }

    public function setupprofilestep2create()
    {
        return Inertia::render('Auth/SetUpProfileStepTwo');
    }

    public function setupprofilestep2store(Request $request)
    {
    }

    public function setupprofilestep3create()
    {
        return Inertia::render('Auth/SetUpProfileStepThree');
    }

    public function setupprofilestep3store(Request $request)
    {
    }

    public function setupprofilestep4create()
    {
        return Inertia::render('Auth/SetUpProfileStepFour');
    }

    public function setupprofilestep4store(Request $request)
    {
    }

    public function uploadProfilePicCreate()
    {
        return Inertia::render('Auth/UploadProfilePic');
    }

    public function uploadProfilePicStore(Request $request)
    {
    }
}
