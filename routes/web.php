<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/todo', [App\Http\Controllers\TodoController::class, 'index'])->name('todo');
Route::get('/regist', [App\Http\Controllers\TodoController::class, 'regist'])->name('regist');

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Route::get('/{any}', function(){
//     return view('App');
// })->where('any', '.*');π

//補足：.*は、正規表現で0文字以上の任意の文字列を意味する
