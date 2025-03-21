<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facilities extends Model
{
    public $fillable = [
        'title',
        'image',
        'description',
    ];
    use HasFactory;
}
