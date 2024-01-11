<?php

namespace App\Listeners;

use App\Events\WelcomeEmail;
use App\Mail\WelcomeEmail as WelcomeEmailMail;
use Illuminate\Support\Facades\Mail;

class SendWelcomeEmail
{
    public function handle(WelcomeEmail $event)
    {
        Mail::to($event->user->email)->send(new WelcomeEmailMail());
    }
}
