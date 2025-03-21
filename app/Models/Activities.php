<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activities extends Model
{
    public $fillable = [
        'image',
        'title',
        'description',
    ];
    use HasFactory;
}
