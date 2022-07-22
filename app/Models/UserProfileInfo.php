<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserProfileInfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'marital_status',
        'living_with',
        'have_children',
        'like_to_have_children',
        'physical_disability',
        'height',
        'hair_color',
        'fitness',
        'bio',
    ];
}
