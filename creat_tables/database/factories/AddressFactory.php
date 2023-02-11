<?php

namespace Database\Factories;

use App\Models\Region;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'street' => fake()->word(),
            'building' => fake()->word(),
            'floor'=>random_int(1,100),
            'flat'=>random_int(1,30),
            'notes'=>null,
            'user_id'=> fake()->numberBetween(1, User::count()),
            'region_id'=>fake()->numberBetween(1, Region::count()),
        ];
    }
}
