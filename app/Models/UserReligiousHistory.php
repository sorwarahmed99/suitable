<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserReligiousHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'religious_history',
        'prayer_frequency',
        'sect',
        'eat_halal',
        'smoke',
        'drink_alchohol',
        'read_quran',
        // 'school_of_thoughts',
        // 'wear_hijab_keep_beard',
    ];
}
