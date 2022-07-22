<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class UserReligiousHistoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        // id	user_id	religious_history	prayer_frequency	sect	school_of_thoughts	eat_halal	smoke	drink_alchohol	wear_hijab_keep_beard	

        $religious_history = $this->faker->randomElement(['Convert', 'Revert', 'Not sure']);
        $prayer_frequency = $this->faker->randomElement(['Never Missed', 'Occasionally', 'Sometimes Miss']);
        $sect = $this->faker->randomElement(['Sunni', 'Shia']);
        $school_of_thoughts = $this->faker->randomElement(['Hanafi', 'Hanbali', 'Maliki']);
        $eat_halal = $this->faker->randomElement(['Yes', 'No', 'Hidden']);
        $smoke = $this->faker->randomElement(['Yes', 'No', 'Hidden']);
        $drink_alchohol = $this->faker->randomElement(['Yes', 'No', 'Hidden']);
        $wear_hijab_keep_beard = $this->faker->randomElement(['Yes', 'No', 'Hidden']);

        return [
            'user_id' => $this->faker->numberBetween(1,10),
            'religious_history' => $religious_history,
            'prayer_frequency' => $prayer_frequency,
            'sect' => $sect,
            'school_of_thoughts' => $school_of_thoughts,
            'eat_halal' => $eat_halal,
            'smoke' => $smoke,
            'drink_alchohol' => $drink_alchohol,
            'wear_hijab_keep_beard' => $wear_hijab_keep_beard,
        ];
    }
}
