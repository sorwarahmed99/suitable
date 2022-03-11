<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SubscriptionPlanRequest;
use App\Http\Resources\SubscriptionPlanCollection;
use App\Http\Resources\SubscriptionPlanResource;
use App\Models\SubscriptionPlan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class SubscriptionPlanController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $plans = SubscriptionPlan::all();

        return Inertia::render('Admin/Plans/Index', 
        [
            'plans' => new SubscriptionPlanCollection($plans)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Plans/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SubscriptionPlanRequest $request)
    {
        SubscriptionPlan::create(
            $request->validated()
        );
           
        return Redirect::route('admin.plans')->with('success', 'Plan created.');

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
    public function edit(SubscriptionPlan $plan)
    {
        // dd($plan);
        return Inertia::render('Admin/Plans/Edit', [
            'plan' => new SubscriptionPlanResource($plan),
        ]);
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
     * @param  int  SubscriptionPlan $plan
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubscriptionPlan $plan)
    {
        $plan->delete();

        return Redirect::back()->with('success', 'Plan deleted.');
    }

    // public function restore(Organization $organization)
    // {
    //     $organization->restore();

    //     return Redirect::back()->with('success', 'Organization restored.');
    // }
}
