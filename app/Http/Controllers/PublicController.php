<?php

namespace App\Http\Controllers;

use App\Models\ContactUs;
use App\Models\Faq;
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
        $faqs = Faq::all();
        return Inertia::render('Faq', ['faqs' => $faqs]);
    }

    public function privacyPolicy(){
            return Inertia::render('PrivacyPolicy');
    }

    public function contactSupport(){
            return Inertia::render('Contact');
    }

    public function contactSupportStore(Request $request){
        $request->validate([
            'name' => 'required|max:50',
            'email' => 'required|email',
            'contact_number' => 'required|max:11',
            'query_type' => 'required',
            'message' => 'required|max:1200',
        ]);

        // dd($request->all());
        if(auth()->user()){
            $user = auth()->user();
            ContactUs::create([
                'name' =>  $request->name,
                'email' => $request->email,
                'contact_number' => $request->contact_number,
                'query_type' =>  $request->query_type,
                'message' => $request->message,
                'existing_user' => 1,
            ]);
        } else {
            
            ContactUs::create([
                'name' => $request->name,
                'email' => $request->email,
                'contact_number' => $request->contact_number,
                'query_type' => $request->query_type,
                'message' => $request->message,
                'existing_user' => 0,
            ]);

            return back()->with('success', 'Thank you for contacting us. One of our customer service representative will be in touch with you shortly.');

        }
    }

    public function terms(){
        return Inertia::render('Terms');
    }

}
