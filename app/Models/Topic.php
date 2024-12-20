<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    protected $fillable = [
        'version_id',
        'name',
        'slug'
    ];

    use HasFactory;

    public function blocks()
    {
        return $this->hasMany(TopicBlock::class)->orderBy('order', 'asc');
    }
}

