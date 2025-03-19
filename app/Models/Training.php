<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Training extends Model
{

    public $fillable = [
        'theme',
        'title',
        'description',
        'image',
        'speaker',
        'date',
        'time',
        'location',
        'whatsapp_link',
        'sheet_id',
    ];

    use HasFactory;
}
