<?php

namespace App\Http\Controllers\Api;

use App\Helpers\General;
use App\Http\Controllers\Controller;
use App\Models\Topic;
use App\Models\TopicBlock;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query');

        // Validate input
        if (empty($query)) {
            return response()->json([]);
        }

        // Get the cached topics (if available) or load them from the database and cache them
        $topics = General::cacheForever('topics', function() {
            return Topic::all(); // Cache all topics forever if not cached
        });

        // Filter the cached topics using collection's `filter` method
        $searched_topics = $topics->filter(function($topic) use ($query) {
            return stripos($topic->name, $query) !== false; // Case-insensitive search
        });

        // Limit the result to 5 items and map the necessary fields
        $topics = $searched_topics->take(5)->values()->map(function($topic) {
            return [
                'id' => $topic->id,
                'name' => $topic->name,
                'slug' => $topic->slug,
            ];
        });

        // Get the cached topic blocks (if available) or load them from the database and cache them
        $all_topic_blocks = General::cacheForever('topic_blocks', function() {
            return TopicBlock::select('id', 'attributes', 'topic_id')
                ->with('topic:id,name,slug')
                ->get(); // Cache all topic blocks forever if not cached
        });

        $topic_blocks = $all_topic_blocks->filter(function($topic_block) use ($query) {
                $attributes = json_decode($topic_block->attributes, true);

                foreach ($attributes as $key => $value) {
                    if (is_string($value) && stripos($value, $query) !== false) {
                        return true;
                    }
                }

                return false;
            })
            ->values();

        // Combine all results into one collection
        $results = collect([
            'topics' => $topics,
            'topic_blocks' => $topic_blocks
        ]);

        // Return combined results
        return response()->json($results);
    }
}