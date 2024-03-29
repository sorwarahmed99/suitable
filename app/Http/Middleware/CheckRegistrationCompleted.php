<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckRegistrationCompleted
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if(auth()->user()->profile_step == 1){
            return redirect()->route('onboarding');
        } else if (auth()->user()->profile_step == 2){
            return redirect()->route('setupprofilestep2');
        } else if (auth()->user()->profile_step == 3){
            return redirect()->route('setupprofilestep3');
        } 
        else if (auth()->user()->profile_step == 4){
            return redirect()->route('setupprofilestep4');
        } 
        else if (auth()->user()->profile_step == 5){
            return redirect()->route('uploadProfilePic');
        }
        else if (auth()->user()->profile_step == 6){
            return redirect()->route('uploadProfilePic');
        }  
        // else if (auth()->user()->profile_step == 7){
        //     return redirect()->route('setupprofilestep6');
        // } 
        // else if (auth()->user()->profile_step == 8){
        //     return redirect()->route('setupprofilestep7');
        // }
        // else if (auth()->user()->profile_step == 9){
        //     return redirect()->route('home');
        // }
        
        return $next($request);
    }
}
