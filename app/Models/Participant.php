<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    use HasFactory;

    public $fillable = [
        'name',
        'email',
        'phone',
        'city',
        'training_id',
    ];
}
