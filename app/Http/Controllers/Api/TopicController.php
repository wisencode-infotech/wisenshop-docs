<?php

namespace App\Http\Controllers\Api;

use App\Helpers\General;
use App\Http\Controllers\Controller;
use App\Models\Topic;
use Illuminate\Support\Str;
use App\Models\Version;
use Illuminate\Http\Request;

class TopicController extends Controller
{
    public function index(Request $request, Version $version)
    {
        $topics = Topic::version($version)->get();
        // $topics = General::cacheForever(Str::slug($version->identifier) . '-topics', function() use ($version) {
        //     return Topic::version($version)->get();
        // });

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
