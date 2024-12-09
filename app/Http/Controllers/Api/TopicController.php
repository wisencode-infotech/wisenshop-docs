<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Topic;

class TopicController extends Controller
{
    public function index()
    {
        $topics = Topic::all();
        return response()->json($topics);
    }

    public function getTopicBlocks($id)
    {
        $topic = Topic::with(['blocks.blockType'])->find($id);

        if (!$topic) {
            return response()->json(['message' => 'Topic not found'], 404);
        }

        return response()->json($topic);
    }
}
