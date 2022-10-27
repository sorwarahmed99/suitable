<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index () {
        $user = Auth::user();
        // $recip = $this->getRecipient();
        // dd($recip);
        return Inertia::render('User/Chat', 
        [
            'messages' => Message::where('user_id', auth()->id())
                            ->orWhere('recipient_id', auth()->id())
                            ->orderBy('created_at', 'DESC')
                            ->paginate(15)
                            ->transform(function ($message) {
                                return [
                                    'id' => $message->id ?? '',
                                    'user_id' => $message->user_id ?? '',
                                    'recipient_id' => $message->recipient_id ?? '',
                                    'message' => $message->message ?? '',
                                    'created_at' => $message->created_at->diffForHumans() ?? '',
                                    'profile_pic' => $message->user->profile_pic ?? ''
                                ];
                            }),

            'users' => User::where('id', '!=', auth()->user()->id)->where('account_status', 1)
                ->when($user->gender == 'Male', function ($q) {
                    return $q->where('gender', '=', 'Female');
                })
                ->when($user->gender == 'Female', function ($q) {
                    return $q->where('gender', '=', 'Male');
                })
                // Need to modify
                ->where(function($q) use ($user){
                    $q->whereNotIn('id', $user->passedusers->pluck('id'));
                })
                ->where(function($q) use ($user){
                    $q->whereNotIn('id', $user->blockedusers->pluck('id'));
                })
                ->with('qualification')
                ->with('religion')
                ->with('messages')
                ->orderBy('created_at', 'desc')
                ->paginate(5)
                ->transform(function ($user) {
                    return [
                        'id' => $user->id ?? '',
                        'firstname' => $user->firstname ?? '',
                        'lastname' => $user->lastname ?? '',
                        'username' => $user->username ?? '',
                        'email' => $user->email ?? '',
                        'gender' => $user->gender ?? '',
                        'age' =>  \Carbon\Carbon::parse($user->date_of_birth)->age ?? '',
                        'profile_image' => $user->profile_image ?? '',
                        'ethnic_origin' => $user->ethnic_origin ?? '',
                        'country' => $user->country ?? '',
                        'recidency_status' => $user->recidency_status ?? '',
                        'highest_education' => $user->qualification->highest_education ?? '',
                        'current_profession' => $user->qualification->current_profession ?? '',
                        'prayer_frequency' => $user->religion->prayer_frequency ?? '',
                        'height' => $user->profile->height ?? '',
                        'sect' => $user->religion->sect ?? '',
                        'isFollowing' => auth()->user()->isFollowing($user) ?? '',
                        'isSaved' => auth()->user()->isSaved($user) ?? '',
                        'isInvited' => auth()->user()->isInvited($user) ?? '',
                        'isAccepted' => auth()->user()->isAccepted($user) ?? '',

                        'last_message' => $user->lastmessages->last()->message ?? '',
                        'time' => $user->lastmessages->last()->created_at ?? '',

                    ];
                }),
        ]);
    }


    private function recipient(Request $request, User $user)
    {
        $user = $request->id;
        dd($user);
    }

    public function show(User $user)
    {

        $last_message = Message::where(function($query) use ($user) {
            $query->where('user_id', Auth::user()->id)
            ->where('recipient_id', $user->id);
        })
        ->orWhere(function ($query) use ($user) {
            $query->where('user_id', $user->id)
            ->where('recipient_id', Auth::user()->id);
        })
        ->first();

        $u = Auth::user();

        return Inertia::render('User/ChatMessages',
        [
            'messages' => Message::where(function($query) use ($user) {
                $query->where('user_id', Auth::user()->id)
                ->where('recipient_id', $user->id);
            })
            ->orWhere(function ($query) use ($user) {
                $query->where('user_id', $user->id)
                ->where('recipient_id', Auth::user()->id);
            })
            ->orderBy('created_at', 'ASC')
            ->paginate(200)
            ->transform(function ($message) {
                return [
                    'id' => $message->id ?? '',
                    'user_id' => $message->user_id ?? '',
                    'recipient_id' => $message->recipient_id ?? '',
                    'message' => $message->message ?? '',
                    'created_at' => $message->created_at ?? '',
                ];
            }),

            'last_message' => [ 
                'id' => $last_message->id ?? '', 
                'message' => $last_message->message ?? '', 
                'created_at' => $last_message->created_at ?? '',
            ],

            'user' => [
                'id' => $user->id,
                'username' => $user->username,
                'email' => $user->email,
                'gender' => $user->gender,
                'age' =>  \Carbon\Carbon::parse($user->date_of_birth)->age,
                'profile_image' => $user->profile_image,
                'ethnic_origin' => $user->ethnic_origin,
                'country' => $user->country,
                'recidency_status' => $user->recidency_status,
                'postcode' => $user->postcode,
                'last_login' => $user->last_login,

                'last_message' => $user->lastmessages->last()->message ?? '',
                'time' => $user->lastmessages->last()->created_at ?? '',

            ],
            
            'users' => User::where('id', '!=', auth()->user()->id)->where('account_status', 1)
                ->when($u->gender == 'Male', function ($q) {
                    return $q->where('gender', '=', 'Female');
                })
                ->when($u->gender == 'Female', function ($q) {
                    return $q->where('gender', '=', 'Male');
                })
                // Need to modify
                ->where(function($q) use ($u){
                    $q->whereNotIn('id', $u->passedusers->pluck('id'));
                })
                ->where(function($q) use ($u){
                    $q->whereNotIn('id', $u->blockedusers->pluck('id'));
                })
                ->with('qualification')
                ->with('religion')
                ->orderBy('created_at', 'asc')
                ->paginate(5)
                ->transform(function ($u) {
                    return [
                        'id' => $u->id ?? '',
                        'firstname' => $u->firstname ?? '',
                        'lastname' => $u->lastname ?? '',
                        'username' => $u->username ?? '',
                        'email' => $u->email ?? '',
                        'gender' => $u->gender ?? '',
                        'age' =>  \Carbon\Carbon::parse($u->date_of_birth)->age ?? '',
                        'profile_image' => $u->profile_image ?? '',
                        'ethnic_origin' => $u->ethnic_origin ?? '',
                        'country' => $u->country ?? '',
                        'recidency_status' => $u->recidency_status ?? '',
                        'highest_education' => $u->qualification->highest_education ?? '',
                        'current_profession' => $u->qualification->current_profession ?? '',
                        'prayer_frequency' => $u->religion->prayer_frequency ?? '',
                        'height' => $u->profile->height ?? '',
                        'sect' => $u->religion->sect ?? '',
                        'isFollowing' => auth()->user()->isFollowing($u) ?? '',
                        'isSaved' => auth()->user()->isSaved($u) ?? '',
                        'isInvited' => auth()->user()->isInvited($u) ?? '',
                        'isAccepted' => auth()->user()->isAccepted($u) ?? '',
                        
                        'last_message' => $u->lastmessages->last()->message ?? '',
                        'time' => $u->lastmessages->last()->created_at ?? '',
                    ];
                }),
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
    public function store(Request $request, User $user)
    {
        $request->validate([
            'message' => 'required',
        ]);

        Message::create([
            'user_id' => auth()->id(),
            'recipient_id' => $user->id,
            'message' => $request->message,
        ]);

        return redirect()->back();

    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        //
    }
}
