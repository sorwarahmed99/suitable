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
        'get_married',
        'have_children',
        'like_to_have_children',
        'poligony',
        'physical_disability',
    ];
}
