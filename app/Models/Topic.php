<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    use HasFactory;

    public function blocks()
    {
        return $this->hasMany(TopicBlock::class)->orderBy('order', 'asc');
    }
}

