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
        $topics = Topic::where('name', 'like', "%{$query}%")->get();

        // Combine all results into one collection
        $results = collect([
            'topics' => $topics
        ]);

        // Return combined results
        return response()->json($results);
    }
}