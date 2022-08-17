<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLookingFor extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'radius',
        'ethnic_origin',
        'country',
        'recidency_status',
        'relocate',
        'min_height',
        'max_height',
        'min_age',
        'max_age',
        'marital_status',
        'have_children',
        'like_to_have_children',
        'religious_history',
        'prayer_frequency',
        'sect',
        'school_of_thoughts',
        'eat_halal',
        'smoke',
        'drink_alchohol',
        'wear_hijab_keep_beard',
        'highest_education',
        'get_married',
        'continue_working',
        'intend_to_move_out',
        'issues_living_with_inlaws',
        'bio',
    ];
}
