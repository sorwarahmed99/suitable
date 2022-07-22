<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserInterestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // interest_id	user_id
        return [
            'user_id' => $this->faker->numberBetween(1,10),
            'interest_id' => $this->faker->numberBetween(1,5),
        ];
    }
}
