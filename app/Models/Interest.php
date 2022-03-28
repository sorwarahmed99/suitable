<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Interest extends Model
{
    use HasFactory;



    protected $fillable = [
        'name',
        'svg',
    ];


    public function users()
    {
        return $this->belongsToMany(User::class, 'user_interests', 'interest_id', 'user_id');
    }
}
