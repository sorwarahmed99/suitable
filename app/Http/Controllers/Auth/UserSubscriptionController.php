<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\SubscriptionPlanCollection;
use App\Models\SubscriptionPlan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserSubscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        $plans = SubscriptionPlan::all();
        $checkout = $request->user()
                    ->newSubscription('default', config('stripe.price_id'))
                    ->checkout([
                        'success_url' => route('home'),
                        'cancel_url' => route('choosePlan'),
                    ]); 
        auth()->user()->update([
            'profile_step' => 8,
        ]);
        return Inertia::render('Auth/Subscription/ChooseAPlan', [
           'plans' => $plans,
           'stripeKey' => config('cashier.key'),
            'checkoutSessionId' => $checkout->id
       ]);
    }

    public function subscription(Request $request)
    {
        // dd($request->all());
        $checkout = $request->user()
                    ->newSubscription('default', config('stripe.price_id'))
                    ->checkout([
                        'success_url' => route('home'),
                        'cancel_url' => route('choosePlan'),
                    ]);

        return Inertia::render('Auth/Subscription/Checkout', [
            'stripeKey' => config('cashier.key'),
            'checkoutSessionId' => $checkout->id
        ]);
    }

    public function checkout(SubscriptionPlan $plan)
    {
        // dd($plan);
        // $plan = SubscriptionPlan::findOrFail($id);        
        return Inertia::render('Auth/Subscription/Checkout', [
           'plan' => $plan
       ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        dd($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
