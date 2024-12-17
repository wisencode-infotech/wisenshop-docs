<?php

namespace App\Http\Controllers\Api;

use App\Helpers\General;
use App\Http\Controllers\Controller;
use App\Models\Topic;
use Illuminate\Support\Str;

class TopicController extends Controller
{
    public function index()
    {
        $topics = General::cacheForever('topics', function() {
            return Topic::all();
        });

        return response()->json($topics);
    }

    public function getTopicBlocks($slug)
    {  
        $slug_to_cache = Str::replace('-', '_', $slug);

        $topic = General::cacheForever('topic-' . $slug_to_cache . '-blocks', function() use ($slug) {
            return Topic::with(['blocks.blockType'])->where('slug', $slug)->first();
        });

        if (!$topic) {
            return response()->json(['message' => 'Topic not found'], 404);
        }

        return response()->json($topic);
    }
}
