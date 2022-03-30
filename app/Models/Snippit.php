<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Snippit extends Model
{
<<<<<<< HEAD
    use HasFactory; 

    public function tags() {
        return $this->hasMany(Tag::class);
=======
    use HasFactory;

    public function tags(){
        return $this->belongsToMany(Tag::class)->withTimestamps();
>>>>>>> main
    }
}
