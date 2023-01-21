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

    public function getBasicTest()
    {

        // return;

        $tasks = Task::factory()->count(10)->create();

        // Task::factory(10)->create();

        $response = $this->getJson('api/tasks');
 
        $response->assertOk();

    }

	/**
     * @test
     */

    public function registBasicTest()
    {
        // return;

        $data = [
            'title' => 'test'
        ];

        $response = $this->postJson('api/tasks',$data);

        $response->assertCreated()
        ->assertJsonFragment($data);
    }

    /**
     * @test
     * @group validation1
     */

    public function validationBasicTitleTest()
    {

        $data = [
            'title' => ''
        ];

        $response = $this->postJson('api/tasks',$data);

        // dd($response->json());

        $response->assertStatus(422)
        ->assertJsonValidationErrors(
            ['title' => 'タイトルは必須です。']
        );

    }

    /**
     * @test
     * @group validation2
     */

     public function validationStrTitleNum()
     {
 
         $data = [
             'title' => str_repeat('a',256)
         ];
 
         $response = $this->postJson('api/tasks',$data);
 
         dd($response->json());
 
         $response->assertStatus(422)
         ->assertJsonValidationErrors(
             ['title' => 'タイトルは必須です。']
         );
 
     }

    /**
     * @test
     */

    public function updateBasicTest()
    {
        // return;

        $task = Task::factory()->create();

        $task->title = 'update';
        // var_dump($task->id);
        // exit;

        $response = $this->patchJson("api/tasks/{$task->id}",$task->toArray());

        $response->assertOk()
        ->assertJsonFragment($task->toArray());


    }

    /**
     * @test
     */

    public function deleteBasicTest()
    {

        $task = Task::factory()->create();

        $response = $this->deleteJson("api/tasks/13");

        $response->assertOk();

        $response = $this->getJson("api/task");
        $response->assertJsonCount($task->count() -1);

    }
}
