<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserFamilyInfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'siblings',
        'a_day_living_with_family',
        'get_married',
        'continue_working',
        'intend_to_move_out',
        'issues_living_with_inlaws',
        'future_plan',
    ];
}
