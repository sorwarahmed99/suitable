<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Cashier\Billable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes, Billable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'username',
        'nickname',
        'email',
        'password',
        'phone',
        'date_of_birth',
        'age',
        'gender',
        'account_created_with',
        'account_status',
        'last_login',
        'account_verified_by',
        'profile_step',
        'ethnic_origin',
        'country',
        'city',

        'back_home_country',
        'back_home_city',
        'back_home_area',
        
        'recidency_status',
        'relocate',
        'postcode',
        'profile_image',
    ];

    

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    
    protected $casts = [
        'email_verified_at' => 'datetime',
        'account_status' => 'boolean',
    ];

    public function qualification() {
        return $this->hasOne(UserQualification::class);
    }

    public function religion() {
        return $this->hasOne(UserReligiousHistory::class);
    }

    public function family() {
        return $this->hasOne(UserFamilyInfo::class);
    }

    public function profile() {
        return $this->hasOne(UserProfileInfo::class);
    }

    public function loginInfo() {
        return $this->hasOne(UserLoginInfo::class);
    }


    public function preference() {
        return $this->hasOne(UserLookingFor::class);
    }

    // Filter Users ----------------------------------------------------------------

    // public function filterUser(User $user) {

    // }

    // public function scopeFilter($query, array $filters)
    // {
    //     $query->when($filters['search'] ?? null, function ($query, $search) {
    //         $query->where(function ($query) use ($search) {
    //             $query->where('first_name', 'like', '%'.$search.'%')
    //                 ->orWhere('last_name', 'like', '%'.$search.'%')
    //                 ->orWhere('email', 'like', '%'.$search.'%');
    //         });
    //     })->when($filters['account_status'] ?? null, function ($query, $account_status) {
    //         $query->whereActive($account_status);
    //     });
    // }


    public function interests()
    {
        return $this->belongsToMany(User::class, 'user_interests');
    }


    
    public function scopeWhereActive($query, $role)
    {
        switch ($role) {
            case 'not_active': return $query->where('account_status', false);
            case 'active': return $query->where('account_status', true);
        }
    }


    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('first_name', 'like', '%'.$search.'%')
                    ->orWhere('last_name', 'like', '%'.$search.'%')
                    ->orWhere('email', 'like', '%'.$search.'%');
            });
        })->when($filters['account_status'] ?? null, function ($query, $account_status) {
            $query->whereActive($account_status);
        });
    }


    // Invited Users ----------------------------------------------------------------


    public function acceptuser(User $user) {
        if($this->amiInvited($user)) {
            InvitedUser::where('invited_user_id', $user->id)->where('user_id', auth()->id())->update(['is_accepted' => 1]);
        }
    }

    public function invite(User $user) {
        if(!$this->isInvited($user)) {
            InvitedUser::create([
                'user_id' => auth()->id(),
                'invited_user_id' => $user->id
            ]);
        }
    }
    
    public function uninvite(User $user) {
        InvitedUser::where('user_id', auth()->id())->where('invited_user_id', $user->id)->delete();
    }
    
    public function isInvited(User $user) {
        return $this->invitedusers()->where('users.id', $user->id)->exists();
    }

    public function amiInvited(User $user) {
        return $this->inviters()->where('users.id', $user->id)->exists();
    }

    public function isAccepted(User $user) {
        return $this->invitedusers()->where('users.id', $user->id)->where('is_accepted', 1)->exists();
    }
    
    public function acceptedusers(User $user) {
        return $this->invitedusers()->where('users.id', $user->id)->where('is_accepted', 1);
    }
    
    public function invitedusers() {
        return $this->hasManyThrough(User::class, InvitedUser::class, 'user_id', 'id', 'id', 'invited_user_id');
    }
    
    public function inviters() {
        return $this->hasManyThrough(User::class, InvitedUser::class, 'invited_user_id', 'id', 'id', 'user_id');
    }


    // Saved Users ----------------------------------------------------------------

    public function saveuser(User $user) {
        if(!$this->isSaved($user)) {
            SavedUsers::create([
                'user_id' => auth()->id(),
                'saved_user_id' => $user->id
            ]);
        }
    }
    
    public function unsaveuser(User $user) {
        SavedUsers::where('user_id', auth()->id())->where('saved_user_id', $user->id)->delete();
    }
    
    public function isSaved(User $user) {
        return $this->savedusers()->where('users.id', $user->id)->exists();
    }
    
    public function savedusers() {
        return $this->hasManyThrough(User::class, SavedUsers::class, 'user_id', 'id', 'id', 'saved_user_id');
    }
    
    public function savers() {
        return $this->hasManyThrough(User::class, SavedUsers::class, 'saved_user_id', 'id', 'id', 'user_id');
    }

    // Block Users ----------------------------------------------------------------

    public function blockuser(User $user) {
        if(!$this->isBlocked($user)) {
            BlockUser::create([
                'user_id' => auth()->id(),
                'blocked_id' => $user->id
            ]);
        }
    }

    public function unblockuser(User $user) {
        BlockUser::where('user_id', auth()->id())->where('blocked_id', $user->id)->delete();
    }

    public function isBlocked(User $user) {
        return $this->blockedusers()->where('users.id', $user->id)->exists();
    }

    public function blockedusers() {
        return $this->hasManyThrough(User::class, BlockUser::class, 'user_id', 'id', 'id', 'blocked_id');
    }

    public function blockers() {
        return $this->hasManyThrough(User::class, BlockUser::class, 'blocked_id', 'id', 'id', 'user_id');
    }

    // Passed Users ----------------------------------------------------------------
    // 1911936 
    public function pass(User $user) {
        if(!$this->isPassed($user)) {
            PassUser::create([
                'user_id' => auth()->id(),
                'passed_id' => $user->id
            ]);
        }
    }
    
    public function unpass(User $user) {
        PassUser::where('user_id', auth()->id())->where('passed_id', $user->id)->delete();
    }
    
    public function isPassed(User $user) {
        return $this->passedusers()->where('users.id', $user->id)->exists();
    }

    public function passedusers() {
        return $this->hasManyThrough(User::class, PassUser::class, 'user_id', 'id', 'id', 'passed_id');
    }
    
    public function passers() {
        return $this->hasManyThrough(User::class, PassUser::class, 'passed_id', 'id', 'id', 'user_id');
    }


    // Test Following ----------------------------------------------------------------

    public function follow(User $user) {
        if(!$this->isFollowing($user)) {
            Following::create([
                'user_id' => auth()->id(),
                'following_id' => $user->id
            ]);
        }
    }
    
    public function unfollow(User $user) {
        Following::where('user_id', auth()->id())->where('following_id', $user->id)->delete();
    }
    
    public function isFollowing(User $user) {
        return $this->following()->where('users.id', $user->id)->exists();
    }
    
    public function following() {
        return $this->hasManyThrough(User::class, Following::class, 'user_id', 'id', 'id', 'following_id');
    }
    
    public function followers() {
        return $this->hasManyThrough(User::class, Following::class, 'following_id', 'id', 'id', 'user_id');
    }

    // -----------------------M E S S A G E S-----------------------------------------

    public function messages(){
        return $this->hasMany(Message::class);
    }

    public function lastmessages(){
        return $this->hasMany(Message::class, 'recipient_id')->orderBy('created_at','ASC');
    }

    // ---------------------REPORT USER-------------------------------------------
    public function isReported(User $user) {
        return $this->reportedusers()->where('users.id', $user->id)->exists();
    }

    public function reportedusers() {
        return $this->hasManyThrough(User::class, Report::class, 'user_id', 'id', 'id', 'reported_id');
    }

    public function reporter() {
        return $this->hasManyThrough(User::class, Report::class, 'reported_id', 'id', 'id', 'user_id');
    }




    // public function savedUsers() {
    //     return $this->belongsToMany(SavedUsers::class, 'saved_users', 'saved_by_user_id',  'saved_user_id')->withTimestamps();
    // }

    // saver_id saved_id

    // public function followers() {
    //     return $this->belongsToMany(User::class, 'saved_users', 'saved_user_id', 'saved_by_user_id');
    // }


    // public function followings() {
    //     return $this->belongsToMany(User::class, 'saved_users', 'saved_by_user_id', 'saved_user_id');
    // }


    // public function followers() {
    //     return $this->belongsToMany(User::class, 'followings', 'followed_id', 'follower_id')->withTimestamps();
    // }


    // public function followings() {
    //     return $this->belongsToMany(User::class, 'followings', 'follower_id', 'followed_id')->withTimestamps();
    // }

}
