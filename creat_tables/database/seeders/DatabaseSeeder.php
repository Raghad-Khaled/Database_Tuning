<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\Product::factory(100000)->create();
        // \App\Models\User::factory(100000)->create();
        // \App\Models\City::factory(1000)->create();
        // \App\Models\Region::factory(10000)->create();
        //\App\Models\Address::factory(100)->create();
        for ($i=0; $i < 5000; $i++) {
            \App\Models\Order::factory(100)->create();
        }
        //  
        //  \App\Models\OrderProduct::factory(500000)->create();
        // \App\Models\Review::factory(1000)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
