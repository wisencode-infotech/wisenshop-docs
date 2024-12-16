<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Topic;

class TopicController extends Controller
{
    public function index()
    {
        sleep(20);

        $topics = Topic::all();
        return response()->json($topics);
    }

    public function getTopicBlocks($slug)
    {
        // $topic = Topic::with(['blocks.blockType'])->find($id);

        sleep(20);
       
        $topic = Topic::with(['blocks.blockType'])->where('slug', $slug)->first();

        if (!$topic) {
            return response()->json(['message' => 'Topic not found'], 404);
        }

        return response()->json($topic);
    }
}
