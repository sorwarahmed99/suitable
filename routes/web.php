<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\FaqController;
use App\Http\Controllers\Admin\SubscriptionPlanController;
use App\Http\Controllers\Auth\UserSubscriptionController;
use App\Http\Controllers\BlockUserController;
use App\Http\Controllers\FollowingController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ImageUploadController;
use App\Http\Controllers\InvitedUserController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PassUserController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\SavedUsersController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserLookingForController;
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
Route::post('/contact-support/store', [PublicController::class, 'contactSupportStore'])->name('contact-support-store');
Route::get('/privacy-policy', [PublicController::class, 'privacyPolicy'])->name('privacy-policy');
Route::get('/terms', [PublicController::class, 'terms'])->name('terms');

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
    Route::get('/users/profile', [AdminController::class, 'show'])->name('userProfile');
    Route::get('/users/active-users', [AdminController::class, 'activeUsers'])->name('activeUsers');
    Route::post('activate-user/{user}', [AdminController::class, 'activateUser'])->name('activate_user');
    Route::post('suspend-user/{user}', [AdminController::class, 'suspendUser'])->name('suspendUser');

    Route::get('/plans', [SubscriptionPlanController::class, 'index'])->name('plans');
    Route::get('/plans/add-new-plan', [SubscriptionPlanController::class, 'create'])->name('plan.create');
    Route::post('/plans/add-plan', [SubscriptionPlanController::class, 'store'])->name('plan.store');
    Route::get('/plans/edit/{plan}', [SubscriptionPlanController::class, 'edit'])->name('plan.edit');
    Route::post('/plans/update/{plan}', [SubscriptionPlanController::class, 'update'])->name('plan.update');
    Route::get('/plans/delete/{plan}', [SubscriptionPlanController::class, 'destroy'])->name('plan.delete');



    Route::get('/faqs', [FaqController::class, 'index'])->name('faqs');
    Route::get('/faqs/create', [FaqController::class, 'create'])->name('faq.create');
    Route::post('/faqs/store', [FaqController::class, 'store'])->name('faq.store');
    Route::get('/faqs/edit/{faq}', [FaqController::class, 'edit'])->name('faq.edit');
    Route::put('/faqs/update/{faq}', [FaqController::class, 'update'])->name('faq.update');
    Route::delete('/faqs/delete/{faq}', [FaqController::class, 'destroy'])->name('faq.delete');


    Route::get('/contacts', [ContactController::class, 'index'])->name('contacts');
    // Route::post('/contacts', [ContactController::class, 'index'])->name('contacts');


});


Route::group(['middleware' => ['auth', 'registered_user']], function() {

    // Route::get('/home', function () {
    //     return Inertia::render('User/Home');
    // })->name('home');
    
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/matched-profile/{user:username}', [HomeController::class, 'show'])->name('user-profile');

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

    // Block users routes ----------------------------------------------------------------

    Route::post('/matched-profile/block-user/{id}', [BlockUserController::class, 'store'])->name('block-user');
    
    // Report users routes ----------------------------------------------------------------
    
    Route::post('/matched-profile/report-user/{id}', [BlockUserController::class, 'reportUser'])->name('report-user');
    
    // Mutual matches routes ----------------------------------------------------------------
    Route::get('/mutual-matches', [HomeController::class, 'mutualMatches'])->name('mutualMatches');
    

    // Interest routes ----------------------------------------------------------------
    Route::get('/interests/saved-profiles', [HomeController::class, 'interests'])->name('interests');
    Route::get('/interests/liked-profiles', [HomeController::class, 'profilesILike'])->name('profilesILike');
    Route::get('/interests/who-liked-me', [HomeController::class, 'whoLikedMe'])->name('whoLikedMe');
    Route::get('/interests/people-i-passed', [HomeController::class, 'profilesIPassed'])->name('profilesIPassed');

    // Chat and notifications routes ----------------------------------------------------------------
    Route::get('/chat', [MessageController::class, 'index'])->name('chat');
    Route::get('/chat/{user:username}', [MessageController::class, 'show'])->name('chatwithuser');
    Route::post('/store-chat/{user}', [MessageController::class, 'store'])->name('storechat');
    Route::post('/get-recipient/{user}', [MessageController::class, 'recipient'])->name('getRecipient');

    
    Route::get('/notification', [UserNotificationController::class, 'index'])->name('notification');
    
    // Auth user routes ----------------------------------------------------------------
    Route::get('/profile', [UserController::class, 'index'])->name('auth.user.profile');
    Route::post('/profile/store', [UserController::class, 'store'])->name('auth.user.profile.store');
    
    Route::get('/public-profile', [UserController::class, 'publicprofile'])->name('auth.user.public.profile');

    
    Route::get('/preferences', [UserLookingForController::class, 'index'])->name('auth.user.preferences');
    Route::post('/preferences/set', [UserLookingForController::class, 'store'])->name('auth.user.preferences.store');
    Route::get('preferences/clear', [UserLookingForController::class, 'clear'])->name('clear');
    
    
    Route::get('/settings', [UserController::class, 'settings'])->name('auth.user.settings');
    Route::post('/settings/reset-password', [UserController::class, 'resetPassword'])->name('auth.user.settings.reset.password');

    Route::get('/settings/blocked-users', [BlockUserController::class, 'index'])->name('block-users');
    Route::post('/settings/unblock-user/{id}', [BlockUserController::class, 'destroy'])->name('unblock-user');
    
    Route::post('/settings/deactivate', [UserController::class, 'deactivateAccount'])->name('auth.user.settings.deactivate');
    Route::post('/settings/delete', [UserController::class, 'deleteAccount'])->name('auth.user.settings.delete');
   


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
    
    
    Route::get("report/{id}", [ReportController::class, 'index'])->name('report');


    Route::get('/image-upload', function () {
        return Inertia::render('Auth/ImageUpload');
    })->name('image-upload');

    Route::post('/upload', [ImageUploadController::class, 'upload']);
    Route::delete('/image/delete/{id}', [ImageUploadController::class, 'destroy']);
    Route::post('/updateprofileimage', [ImageUploadController::class, 'updateprofileimage']);

    
    

});


require __DIR__ . '/auth.php';



// Host name :	access963794212.webspace-data.io
// User name :	u112376739



// Public Prefix (API KEY): c4eed04932c9436585cd0385e135ed47
// Secret: 9mdiu4I9jtY9GavESIK7RQ2jMAH-6DqeXbWnkZmp2EVX8oimjpOpiCV4xZGsbtQLDYT2Jq71efWfe1rKR2fyfQ