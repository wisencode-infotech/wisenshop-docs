<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TopicController;


// Example: Define a route for fetching topics
Route::get('/topics', function () {
    return response()->json([
        ['id' => 1, 'title' => 'Topic 1'],
        ['id' => 2, 'title' => 'Topic 2'],
    ]);
});

Route::get('/topics', [TopicController::class, 'index']);
