<?php

namespace Database\Seeders;

use App\Models\Interest;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserInterestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $interests = Interest::all();

        foreach(Interest::all() as $interest){
            $users = \App\Models\User::inRandomOrder()->take(rand(1,10))->pluck('id');
            $interest->users()->attach($users);
        }
    }
}
