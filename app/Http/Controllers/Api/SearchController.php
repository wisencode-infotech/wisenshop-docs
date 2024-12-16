<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Topic;
use App\Models\BlockType;
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

        // Search in topics
        $topics = Topic::where('name', 'like', "%{$query}%")
            ->select('id', 'name', 'slug')
            ->limit(5)
            ->get();

        $topic_blocks = TopicBlock::select('id', 'attributes', 'topic_id')
            ->with('topic:id,name,slug')
            ->get()
            ->filter(function($topic_block) use ($query) {
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