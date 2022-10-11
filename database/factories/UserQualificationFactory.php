<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class UserQualificationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // user_id	highest_education	graduation_year	current_profession	for_how_long	company_name	yearly_income
        
        $highest_education = $this->faker->randomElement(['Masters', 'Bachelor', 'PHD']);

        return [
            'user_id' => $this->faker->numberBetween(1,10),
            'highest_education' => $highest_education,
            'current_profession' => $this->faker->word(),
            'for_how_long' => '1-3 Years',
            'company_name' => $this->faker->word(),
            'yearly_income' => $this->faker->numberBetween(10000, 1000000),
            'university' => $this->faker->word(), 
            'course_name' => $this->faker->word(),
            'university_graduation_year' => $this->faker->numberBetween(2000,2022),
            'college' => $this->faker->word(),
            'college_course_name' => $this->faker->word(),
            'college_graduation_year' => $this->faker->numberBetween(2000,2022),
        ];
    }
}
