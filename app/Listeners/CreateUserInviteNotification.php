<?php

namespace App\Providers\App\Listeners;

use App\Models\User;
use App\Notifications\NewInviteRequest;
use App\Providers\App\Events\NewInviteCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CreateUserInviteNotification
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
     * @param  \App\Providers\App\Events\NewInviteCreated  $event
     * @return void
     */
    public function handle(NewInviteCreated $event) {
        $user = User::findOrFail($event->invite->invited_user_id);
        $user->notify(new NewInviteRequest($event->invite));
    }
}
