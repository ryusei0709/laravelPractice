<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
// use Illuminate\Database\Seeder;
use Tests\TestCase;
use App\Models\Task;

class TaskTest extends TestCase
{

    use RefreshDatabase;

    /**
     * A basic test example.
     *
     * ↓先頭にtestをつけなくてもtestメソッドになる。笑
     * @test
     */

    public function testBasicTest()
    {

        $tasks = Task::factory()->count(10)->create();
        // Task::factory(10)->create()
        // dd($tasks->toArray());

        $response = $this->get('/');

        $response->assertOk();
    }
}
