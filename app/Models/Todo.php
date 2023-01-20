<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{

    protected $table = 'to_dos';

    public function todoDetails()
    {
        return $this->hasMany(TodoDetail::class);
    }

}
