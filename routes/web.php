<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\SubscriptionPlanController;
use App\Http\Controllers\Auth\UserSubscriptionController;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
});


Route::namespace('Admin')->prefix('/admin/')->name('admin.')->group(function () {
    Route::namespace('Auth')->middleware('guest:admin')->group(function () {

        Route::get('login', 'AuthenticatedSessionController@create')->name('login');
        Route::post('login', 'AuthenticatedSessionController@store')->name('adminlogin');
    });
    Route::post('logout', 'Auth\AuthenticatedSessionController@destroy')->name('logout');
    Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');
    Route::get('/users', [AdminController::class, 'users'])->name('users');
    
    Route::get('/plans', [SubscriptionPlanController::class, 'index'])->name('plans');
    Route::get('/plans/add-new-plan', [SubscriptionPlanController::class, 'create'])->name('plan.create');
    Route::post('/plans/add-plan', [SubscriptionPlanController::class, 'store'])->name('plan.store');
    Route::get('/plans/edit/{plan}', [SubscriptionPlanController::class, 'edit'])->name('plan.edit');
    Route::post('/plans/update/{plan}', [SubscriptionPlanController::class, 'update'])->name('plan.update');
    Route::get('/plans/delete/{plan}', [SubscriptionPlanController::class, 'destroy'])->name('plan.delete');
});


Route::group(['middleware' => ['auth', 'verified', 'registered_user']], function() {

    Route::get('/home', function () {
        return Inertia::render('User/Home');
    })->name('home');



});


require __DIR__ . '/auth.php';
