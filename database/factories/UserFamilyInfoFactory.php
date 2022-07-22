<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class UserFamilyInfoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // user_id	siblings	a_day_living_with_family	get_married	continue_working	intend_to_move_out	issues_living_with_inlaws	future_plan
        $get_married = $this->faker->randomElement(['As soon as possible', 'Between 1-3 Years', 'Hidden', 'Not sure']);
        $continue_working = $this->faker->randomElement(['Yes', 'No', 'Not sure']);
        $intend_to_move_out = $this->faker->randomElement(['Yes', 'No', 'Not sure']);
        $issues_living_with_inlaws = $this->faker->randomElement(['Yes', 'No', 'Not sure']);
        $fitness = $this->faker->randomElement(['Yes', 'No', 'Hidden']);        
        
        return [
            'user_id' => $this->faker->numberBetween(1,10),
            'siblings' => $this->faker->numberBetween(0,10),
            'a_day_living_with_family' => $this->faker->sentence(),
            'get_married' => $get_married,
            'intend_to_move_out' => $intend_to_move_out,
            'continue_working' => $continue_working,
            'issues_living_with_inlaws' => $issues_living_with_inlaws,
            'future_plan' => $this->faker->sentence(),
        ];
    }
}
