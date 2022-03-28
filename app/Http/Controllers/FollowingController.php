<?php

namespace App\Http\Controllers;

use App\Http\Requests\FollowUnfollowRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FollowingController extends Controller
{







    // ------------------------------------------------ Test following ------------------------------------------------
    
    public function follow($id) {
        // dd($id);
        $userToFollow = User::findOrFail($id);
        $f = auth()->user()->follow($userToFollow);

        return redirect()->back();

        
        // return response()->noContent(200);
    }

    public function unfollow($id) {
        $userToUnfollow = User::findOrFail($id);
        $f =  auth()->user()->unfollow($userToUnfollow);
        
        return redirect()->back();

        // return response()->noContent(200);
    }
    











    public function followers(User $user){

        return Inertia::render('User/AuthUser/Followers', [ 
           'followers' => $user->followers()->withCount([
               'followers as isfollowing' => function ($q){
                   return $q->where('follower_id', auth()->id());
               }
           ])->withCasts(['isfollowing' => 'boolean'])->get()->toArray(),
            'user' => $user
        ]);
    }

    // public function storeFollowers(User $user, $id){
    //     $user->followings()->attach($id);
    //     return redirect()->back();
    // }
    // public function destroyFollowers(User $user, $id){
    //     $user->followings()->detach($id);
    //     return redirect()->back();
    // }
 
    public function followings(User $user){
        return Inertia::render('User/AuthUser/Following', [ 
           'followings' => $user->followings()->withCount([
            'followers as following' => function ($q){
                return $q->where('follower_id', auth()->id());
            }
        ])->withCasts(['following' => 'boolean'])->get()->toArray(),
            'user' => $user
        ]);
    }


    public function storeFollowings(User $user, $id){
        $user->followings()->attach($id);
        return redirect()->back();
    }


    public function destroyFollowings(User $user, $id){
        $user->followings()->detach($id);
        return redirect()->back();
    }



}
