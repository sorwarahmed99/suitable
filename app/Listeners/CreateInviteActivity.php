<?php

namespace App\Providers\App\Listeners;

use App\Models\Activity;
use App\Providers\App\Events\NewInviteCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CreateInviteActivity
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
        Activity::create([
            'user_id' => $event->invite->user_id,
            'type' => 'invite',
            'target_id' => $event->invite->invited_user_id
        ]);
    }
}
