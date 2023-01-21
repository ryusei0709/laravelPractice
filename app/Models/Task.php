<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    // 値を変えるときに指定
    protected $fillable = [
        'title','is_done'
    ];

    // カラムの型を指定
    protected $casts = [
        'is_done' => 'bool'
    ];
}
