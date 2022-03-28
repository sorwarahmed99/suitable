<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;

class FeedController extends Controller
{
    public function index(Request $request) {
        return response()->json(
            Activity::with(['user', 'target'])->latest()->get()
        );
    }
}
