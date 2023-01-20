<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TodoController extends Controller
{
    
    public function index()
    {
        // exit('hello todo index');
        
        return view('todo.app');
    }
    
    public function regist()
    {
        // exit('hello todo regist');


    }

}
