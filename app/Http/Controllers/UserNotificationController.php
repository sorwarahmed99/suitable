<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserNotificationController extends Controller
{
    public function index(Request $request) {
        $notifications = [];
        foreach(auth()->user()->unreadNotifications as $notification) {
            $notification->markAsRead();

            if($notification['type'] == "App\Notifications\NewInviteRequest") {
                $notifications[] = [
                    'type' => 'invite',
                    'user' => User::findOrFail($notification['data']['invited_by_user_id'])
                ];
            }
        }

        // dd($notifications);
        return Inertia::render('User/AuthUser/Notification', ['notifications' => $notifications]);

    }

}
