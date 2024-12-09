<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TopicController;

Route::get('/topics', [TopicController::class, 'index']);
Route::get('/topics/{id}', [TopicController::class, 'getTopicBlocks']);
