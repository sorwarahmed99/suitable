<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $date_of_birth = $this->faker->date($format = 'Y-m-d', $max = '2002-12-31');
        $age = \Carbon\Carbon::parse($date_of_birth)->age;
        $gender = $this->faker->randomElement(['Male', 'Female']);
        $ethnic_origin = $this->faker->randomElement(['Asian - Bangladeshi', 'British', 'African', 'Asian - Chinese']);
        $recidency_status = $this->faker->randomElement(['Citizen', 'Work permit']);
        $country = $this->faker->randomElement(['Bangladesh', 'United Kingdom']);
        $profile_image = $this->faker->randomElement(['uploads/user-profile-images/man.svg','uploads/user-profile-images/woman.svg']);
        $relocate = $this->faker->randomElement(['Yes', 'No', 'Not Sure']);

        return [
            'firstname' => $this->faker->firstName($gender),
            'lastname' => $this->faker->lastName($gender),
            'email' => $this->faker->unique()->safeEmail(),
            'username' => Str::lower($this->faker->firstName().$this->faker->lastName()).rand(pow(10, 8 - 1), pow(10, 8) -1),
            'date_of_birth' => $date_of_birth,
            'age' => $age,
            'phone' => $this->faker->phoneNumber(),
            'gender' => $gender,
            'account_status' => 1,
            'profile_step' => 8,
            'ethnic_origin' => $ethnic_origin,
            'country' => $country,
            'recidency_status' => $recidency_status,
            'relocate' => $relocate,
            'postcode' => $this->faker->postcode(),
            'profile_image' => $profile_image,
            'stripe_id' => 'cus_LQBNS94h4pSwCa',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
