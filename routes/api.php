<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TopicController;
use App\Http\Controllers\Api\SearchController;

Route::get('/topics', [TopicController::class, 'index']);
Route::get('/topics/{slug}', [TopicController::class, 'getTopicBlocks']);
Route::get('search', [SearchController::class, 'search']);
