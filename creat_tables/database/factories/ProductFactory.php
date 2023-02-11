<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->word(),
            'code' => fake()->unique()->randomNumber(100000000),
            'price' => fake()->randomFloat(2, 1, 100),
            'image' => fake()->imageUrl(),
            'details' => fake()->text(),
            'quantity' => fake()->randomNumber(5),
            'status' => fake()->randomElement([true, false])
        ];
    }
}
