<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Snippit extends Model
{
    use HasFactory;

    public function tags(){
        return $this->belongsToMany(Tag::class)->withTimestamps();
    }
}
