<?php

namespace App\Http\Controllers\Api;

use App\Helpers\SystemUtils;
use App\Http\Controllers\Controller;
use App\Models\Topic;
use Illuminate\Support\Str;
use App\Models\Version;
use Illuminate\Http\Request;

class TopicController extends Controller
{
    public $system_utils;

    public function __construct()
    {
        $this->system_utils = new SystemUtils();
    }

    public function index(Request $request, Version $version)
    {
        $topics = $this->system_utils->cacheForever('version-' . Str::slug($version->identifier) . '-topics', function() use ($version) {
            return Topic::version($version)->get();
        });

        return response()->json($topics);
    }

    public function getTopicBlocks(Request $request, Version $version, $slug)
    {  
        $slug_to_cache = Str::replace('-', '_', $slug);

        $topic = $this->system_utils->cacheForever('version-' . Str::slug($version->identifier) . '.topic-' . $slug_to_cache . '-blocks', function() use ($version, $slug) {
            return Topic::version($version)->with(['blocks.blockType'])->where('slug', $slug)->first();
        });

        if (!$topic) {
            return response()->json(['message' => 'Topic not found'], 404);
        }

        return response()->json($topic);
    }
}
