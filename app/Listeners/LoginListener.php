<?php

namespace App\Listeners;

use App\Models\UserLoginInfo;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class LoginListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        UserLoginInfo::create([
            'user_id'       =>  $event->user->id,
            'current_logged_in_device'    =>  \Illuminate\Support\Facades\Request::header('User-Agent'),
            'ip'    =>  \Illuminate\Support\Facades\Request::ip(),
            'login_time' => Carbon::now()
        ]);
    }
}
