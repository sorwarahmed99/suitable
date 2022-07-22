<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class UserProfileInfoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    // user_id	marital_status	living_with	have_children	like_to_have_children	physical_disability	height	hair_color	fitness	bio

    public function definition()
    {
        $marital_status = $this->faker->randomElement(['Married', 'Divorced', 'Single']);
        $living_with = $this->faker->randomElement(['Parents', 'Live by myself', 'Hidden']);
        $have_children = $this->faker->randomElement(['Parents', 'Live by myself', 'Hidden']);
        $like_to_have_children = $this->faker->randomElement(['Yes', 'No', 'Not Sure']);
        $physical_disability = $this->faker->randomElement(['Yes', 'No', 'Not Sure']);
        $height = $this->faker->randomElement(['4ft', '4ft 5in', '5ft', '5ft 5in', '5ft 6in', '5ft 7in', '5ft 8in', '5ft 9in', '6ft', '6ft 1in', '6ft 2in']);
        $hair_color = $this->faker->randomElement(['Brown', 'Black', 'Blonde']);
        $fitness = $this->faker->randomElement(['Yes', 'No', 'Hidden']);

        return [
            'user_id' => $this->faker->numberBetween(1,10),
            'marital_status' => $marital_status,
            'living_with' => $living_with,
            'have_children' => $this->faker->numberBetween(0,4),
            'like_to_have_children' => $like_to_have_children,
            'physical_disability' => $physical_disability,
            'height' => $height,
            'hair_color' => $hair_color,
            'fitness' => $fitness,
            'bio' => $this->faker->paragraph(),
        ];
    }
}
