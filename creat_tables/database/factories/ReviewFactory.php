<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id'=>User::inRandomOrder()->first()->id,
            'product_id'=>Product::inRandomOrder()->first()->id,
            'rate' => random_int(0,10),
            'comment' => fake()->text(),
        ];
    }
}
