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
            ->select('id', 'name', 'link')
            ->limit(5)
            ->get();

        $topic_blocks = TopicBlock::select('id', 'attributes', 'topic_id')
            ->with('topic:id,name,link')
            ->get()
            ->filter(function($topic_block) use ($query) {
                // Decode the JSON and check if any value contains the search query
                $attributes = json_decode($topic_block->attributes, true);

                foreach ($attributes as $key => $value) {
                    // Check if the value is a string and contains the search query (case-insensitive)
                    if (is_string($value) && stripos($value, $query) !== false) {
                        return true; // Found a match, return true to keep this record
                    }
                }

                return false; // No match found, exclude this record
            })
            ->values(); // Reset the collection keys to 0-based indexing

        // Combine all results into one collection
        $results = collect([
            'topics' => $topics,
            'topic_blocks' => $topic_blocks
        ]);

        // Return combined results
        return response()->json($results);
    }
}