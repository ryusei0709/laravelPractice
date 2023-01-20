<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TodoDetail extends Model
{

    protected $table = 'to_do_details';

    public function todos()
    {
        $this->belongsTo(Todo::class,'to_do_id');
    }


}
