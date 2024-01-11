<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserQualification extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'highest_education',
        'university',
        'course_name',
        // 'university_graduation_year',
        'college',
        'college_course_name',
        // 'college_graduation_year',
        'current_profession',
        // 'for_how_long',
        'company_name',
        // 'yearly_income',
    ];

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
