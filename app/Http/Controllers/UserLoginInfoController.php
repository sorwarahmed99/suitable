<?php

namespace App\Http\Controllers;

use App\Models\UserLoginInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserLoginInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Contacts/Index', [
            'filters' => Request::all('search', 'trashed'),
            'contacts' => Auth::user()->account->contacts()
                ->with('organization')
                ->orderByName()
                ->filter(Request::only('search', 'trashed'))
                ->paginate(10)
                ->withQueryString()
                ->through(fn ($contact) => [
                    'id' => $contact->id,
                    'name' => $contact->name,
                    'phone' => $contact->phone,
                    'city' => $contact->city,
                    'deleted_at' => $contact->deleted_at,
                    'organization' => $contact->organization ? $contact->organization->only('name') : null,
                ]),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserLoginInfo  $userLoginInfo
     * @return \Illuminate\Http\Response
     */
    public function show(UserLoginInfo $userLoginInfo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserLoginInfo  $userLoginInfo
     * @return \Illuminate\Http\Response
     */
    public function edit(UserLoginInfo $userLoginInfo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserLoginInfo  $userLoginInfo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserLoginInfo $userLoginInfo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserLoginInfo  $userLoginInfo
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserLoginInfo $userLoginInfo)
    {
        //
    }
}
