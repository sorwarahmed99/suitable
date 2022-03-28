<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SavedUsers extends Model
{
    use HasFactory;

    protected $fillable = 
    [
        'user_id',
        'saved_user_id',
    ];

}
