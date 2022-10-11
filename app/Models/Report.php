<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'reported_to', 'reason'];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
