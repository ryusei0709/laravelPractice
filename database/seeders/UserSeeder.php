<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // \←はグローバル空間
        \DB::table('users')->insert([
            [
                'name' => 'admin',
                'email' => 'admin@gmai.com',
                'email_verified_at' => now(),
                'password' => \Hash::make('12345678'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'test',
                'email' => 'test@gmai.com',
                'email_verified_at' => now(),
                'password' => \Hash::make('12345678'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'test2',
                'email' => 'test2@gmai.com',
                'email_verified_at' => now(),
                'password' => \Hash::make('12345678'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'test3',
                'email' => 'test3@gmai.com',
                'email_verified_at' => now(),
                'password' => \Hash::make('12345678'),
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
