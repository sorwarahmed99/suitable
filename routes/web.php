<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\SubscriptionPlanController;
use App\Http\Controllers\Auth\UserSubscriptionController;
use App\Http\Controllers\FollowingController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvitedUserController;
use App\Http\Controllers\PassUserController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\SavedUsersController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserNotificationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register')
//         ]);
//     });
Route::get('/', [PublicController::class, 'index'])->name('welcome');
Route::get('/faq', [PublicController::class, 'faq'])->name('faq');
Route::get('/contact-support', [PublicController::class, 'contactSupport'])->name('contact-support');
Route::get('/privacy-policy', [PublicController::class, 'privacyPolicy'])->name('privacy-policy');

Route::get('/agent', function () {
    return request()->userAgent();
});



Route::namespace('Admin')->prefix('admin/')->name('admin.')->group(function () {
    Route::namespace('Auth')->middleware('guest:admin')->group(function () {

        Route::get('login', 'AuthenticatedSessionController@create')->name('login');
        Route::post('login', 'AuthenticatedSessionController@store')->name('adminlogin');
    });
    Route::post('logout', 'Auth\AuthenticatedSessionController@destroy')->name('logout');
    Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');

    // User Routes
    Route::get('/users', [AdminController::class, 'users'])->name('users');
    Route::get('/users/active-users', [AdminController::class, 'activeUsers'])->name('activeUsers');
    Route::post('activate-user/{user}', [AdminController::class, 'activateUser'])->name('activate_user');
    Route::post('suspend-user/{user}', [AdminController::class, 'suspendUser'])->name('suspendUser');

    

    
    Route::get('/plans', [SubscriptionPlanController::class, 'index'])->name('plans');
    Route::get('/plans/add-new-plan', [SubscriptionPlanController::class, 'create'])->name('plan.create');
    Route::post('/plans/add-plan', [SubscriptionPlanController::class, 'store'])->name('plan.store');
    Route::get('/plans/edit/{plan}', [SubscriptionPlanController::class, 'edit'])->name('plan.edit');
    Route::post('/plans/update/{plan}', [SubscriptionPlanController::class, 'update'])->name('plan.update');
    Route::get('/plans/delete/{plan}', [SubscriptionPlanController::class, 'destroy'])->name('plan.delete');
});


Route::group(['middleware' => ['auth', 'verified', 'registered_user']], function() {

    // Route::get('/home', function () {
    //     return Inertia::render('User/Home');
    // })->name('home');
    
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/matched-profile/{user:firstname}', [HomeController::class, 'show'])->name('user-profile');

    Route::post('/matched-profile/save/{id}', [SavedUsersController::class, 'store'])->name('save.user');
    Route::post('/matched-profile/unsave/{id}', [SavedUsersController::class, 'destroy'])->name('unsave.user');

    Route::post('/matched-profile/invite/{id}', [InvitedUserController::class, 'store'])->name('invite.user');
    Route::post('/matched-profile/uninvite/{id}', [InvitedUserController::class, 'destroy'])->name('uninvite.user');
    
    // Accept/reject users routes ----------------------------------------------------------------
    
    Route::post('/matched-profile/accept-user/{id}', [InvitedUserController::class, 'accept'])->name('accept.user');
    Route::post('/matched-profile/reject-user/{id}', [InvitedUserController::class, 'reject'])->name('reject.user');

    // Pass users routes ----------------------------------------------------------------
    Route::post('/matched-profile/pass-user/{id}', [PassUserController::class, 'store'])->name('pass-user');
    Route::post('/matched-profile/undo-pass-user/{id}', [PassUserController::class, 'destroy'])->name('undo-pass-user');

    Route::post('/matched-profile/block-user/{id}', [PassUserController::class, 'blockUser'])->name('block-user');
    Route::post('/matched-profile/report-user/{id}', [PassUserController::class, 'reportUser'])->name('report-user');
    
    // Mutual matches routes ----------------------------------------------------------------
    Route::get('/mutual-matches', [HomeController::class, 'mutualMatches'])->name('mutualMatches');
    

    // Interest routes ----------------------------------------------------------------
    Route::get('/interests/saved-profiles', [HomeController::class, 'interests'])->name('interests');
    Route::get('/interests/liked-profiles', [HomeController::class, 'profilesILike'])->name('profilesILike');
    Route::get('/interests/who-liked-me', [HomeController::class, 'whoLikedMe'])->name('whoLikedMe');
    Route::get('/interests/people-i-passed', [HomeController::class, 'profilesIPassed'])->name('profilesIPassed');

    // Chat and notifications routes ----------------------------------------------------------------
    Route::get('/chat', [HomeController::class, 'chat'])->name('chat');
    Route::get('/notification', [UserNotificationController::class, 'index'])->name('notification');
    
    // Auth user routes ----------------------------------------------------------------
    Route::get('/profile', [UserController::class, 'index'])->name('auth.user.profile');
    Route::get('/preferences', [HomeController::class, 'preferences'])->name('auth.user.preferences');
    Route::get('/settings', [UserController::class, 'settings'])->name('auth.user.settings');


    // follow users route ----------------------------------------------------------------
    Route::get('/followings/{user:id}', [FollowingController::class, 'followings'])->name('followings');
    Route::post('/followings/{user:id}/{id}', [FollowingController::class, 'storeFollowings'])->name('followings.store');
    Route::delete('/followings/{user:id}/{id}', [FollowingController::class, 'destroyFollowings'])->name('followings.delete');

    
    Route::get('/followers/{user:id}', [FollowingController::class, 'followers'])->name('followers');
    // Route::post('/followers/{user:id}/{id}', [FollowingController::class, 'storeFollowers'])->name('followers.store');
    // Route::delete('/followers/{user:id}/{id}', [FollowingController::class, 'destroyFollowers'])->name('followers.delete');
    

    // Test Following ----------------------------------------------------------------
    Route::post("follow/{id}", [FollowingController::class, 'follow'])->name('user.follow');
    Route::post("unfollow/{id}", [FollowingController::class, 'unfollow'])->name('user.unfollow');
    



});


require __DIR__ . '/auth.php';
