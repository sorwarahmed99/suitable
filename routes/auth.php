<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\SetUpProfileStepsController;
use App\Http\Controllers\Auth\UserSubscriptionController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::get('/register', [RegisteredUserController::class, 'create'])
    ->middleware('guest')
    ->name('register');

Route::post('/register', [RegisteredUserController::class, 'store'])
    ->middleware('guest');

    
Route::group(['middleware' => 'auth'], function() {

    // Set up profile start
    Route::get('/signup-onboarding', [SetUpProfileStepsController::class, 'index'])->name('onboarding');

    // 1
    Route::get('/set-up-profile-step-1', [SetUpProfileStepsController::class, 'create'])->name('setupprofilestep1');
    Route::post('/set-up-profile-step-1', [SetUpProfileStepsController::class, 'store']);

    // 2
    Route::get('/set-up-profile-step-2', [SetUpProfileStepsController::class, 'setupprofilestep2create'])->name('setupprofilestep2');
    Route::post('/set-up-profile-step-2', [SetUpProfileStepsController::class, 'setupprofilestep2store'])->name('setupprofilestep2store');

    // 3
    Route::get('/set-up-profile-step-3', [SetUpProfileStepsController::class, 'setupprofilestep3create'])->name('setupprofilestep3');
    Route::post('/set-up-profile-step-3', [SetUpProfileStepsController::class, 'setupprofilestep3store'])->name('setupprofilestep3store');

    // 4
    Route::get('/set-up-profile-step-4', [SetUpProfileStepsController::class, 'setupprofilestep4create'])->name('setupprofilestep4');
    Route::post('/set-up-profile-step-4', [SetUpProfileStepsController::class, 'setupprofilestep4store']);

    // 5
    Route::get('/set-up-profile-step-5', [SetUpProfileStepsController::class, 'setupprofilestep5create'])->name('setupprofilestep5');
    Route::post('/set-up-profile-step-5', [SetUpProfileStepsController::class, 'setupprofilestep5store']);
    
    // 6
    Route::get('/upload-profile-pic', [SetUpProfileStepsController::class, 'uploadProfilePicCreate'])->name('uploadProfilePic');
    Route::post('/upload-profile-pic', [SetUpProfileStepsController::class, 'uploadProfilePicStore'])->name('uploadProfilePicStore');
    
    // 7
    Route::get('/set-up-profile-step-6', [SetUpProfileStepsController::class, 'setupprofilestep6create'])->name('setupprofilestep6');
    Route::post('/set-up-profile-step-6', [SetUpProfileStepsController::class, 'setupprofilestep6store']);
    
    // ---- Left to work
    // 8
    Route::get('/set-up-profile-step-7', [SetUpProfileStepsController::class, 'setupprofilestep7create'])->name('setupprofilestep7');
    Route::post('/set-up-profile-step-7', [SetUpProfileStepsController::class, 'setupprofilestep7store']);
    
    Route::get('/choose-a-plan', [UserSubscriptionController::class, 'index'])->name('choosePlan');
    Route::post('/choose-a-plan', [UserSubscriptionController::class, 'store'])->name('choosePlanStore');
    
    // Set up profile

    // Route::post('usersubs', [UserSubscriptionController::class, 'store'])->name('usersubs');
    Route::get('subscription', [UserSubscriptionController::class, 'subscription'])->name('subscription');
    
    Route::get('checkout/{plan}', [UserSubscriptionController::class, 'checkout'])->name('checkout');

    // Route::post('user-subs', [UserSubscriptionController::class, 'store'])->name('usersubs');


});


Route::get('/login', [AuthenticatedSessionController::class, 'create'])
    ->middleware('guest')
    ->name('login');

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware('guest');

Route::get('/forgot-password', [PasswordResetLinkController::class, 'create'])
    ->middleware('guest')
    ->name('password.request');

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
    ->middleware('guest')
    ->name('password.email');

Route::get('/reset-password/{token}', [NewPasswordController::class, 'create'])
    ->middleware('guest')
    ->name('password.reset');

Route::post('/reset-password', [NewPasswordController::class, 'store'])
    ->middleware('guest')
    ->name('password.update');

Route::get('/verify-email', [EmailVerificationPromptController::class, '__invoke'])
    ->middleware('auth')
    ->name('verification.notice');

Route::get('/verify-email/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['auth', 'signed', 'throttle:6,1'])
    ->name('verification.verify');

Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    ->middleware(['auth', 'throttle:6,1'])
    ->name('verification.send');

Route::get('/confirm-password', [ConfirmablePasswordController::class, 'show'])
    ->middleware('auth')
    ->name('password.confirm');

Route::post('/confirm-password', [ConfirmablePasswordController::class, 'store'])
    ->middleware('auth');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');
