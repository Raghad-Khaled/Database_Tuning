<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class OrderProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'product_id'=>Product::inRandomOrder()->first()->id,
            'order_id'=>Order::inRandomOrder()->first()->id,
            'quentity'=>random_int(1,10000),
            'price'=>random_int(1,100000),
        ];
    }
}
