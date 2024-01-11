<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactUs;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index(){
        $contacts = ContactUs::orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('Admin/Contact/Index', ['contacts' => $contacts]);
    }
}
