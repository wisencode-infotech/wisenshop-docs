<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Topic; // Assuming you have a Topic model

class TopicController extends Controller
{
    /**
     * Display a listing of the topics.
     */
    public function index()
    {
        // Fetch all topics from database
        $topics = Topic::all();

        // Return topics in JSON format
        return response()->json($topics);
    }
}
