<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class PublicController extends Controller
{
    public function index(){
            return Inertia::render('Welcome', [
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register')
            ]);
    }

    public function faq(){
        return Inertia::render('Faq');
    }

    public function privacyPolicy(){
            return Inertia::render('PrivacyPolicy');
    }

    public function contactSupport(){
            return Inertia::render('Contact');
    }
}
