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
}
