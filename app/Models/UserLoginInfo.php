<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLoginInfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 
        'ip', 
        'location_lat',
        'location_long',
        'current_logged_in_device',
        'login_time',
    ];
}
