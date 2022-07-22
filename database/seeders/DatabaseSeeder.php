<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AdminSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(InterestSeeder::class);
        $this->call(UserInterestSeeder::class);
        \App\Models\User::factory(10)->create();
        \App\Models\UserProfileInfo::factory(10)->create();
        \App\Models\UserFamilyInfo::factory(10)->create();
        \App\Models\UserReligiousHistory::factory(10)->create();
        \App\Models\UserQualification::factory(10)->create();
    }
}
