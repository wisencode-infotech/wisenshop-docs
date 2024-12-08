<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TopicBlock extends Model
{
    use HasFactory;

    protected $fillable = ['topic_id', 'title', 'block_type_id', 'attributes'];

    public function blockType()
    {
        return $this->belongsTo(BlockType::class, 'block_type_id');
    }
}
