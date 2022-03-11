<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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
        return Inertia::render('Admin/Users');
    }
}
