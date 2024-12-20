<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TopicController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\VersionController;

Route::group(['prefix' => 'version', 'as' => 'version.'], function() {
    Route::group(['prefix' => '{version}'], function() {
        Route::get('/topics', [TopicController::class, 'index']);
    });
});

Route::get('/topics/{slug}', [TopicController::class, 'getTopicBlocks']);
Route::get('search', [SearchController::class, 'search']);
Route::get('/versions', [VersionController::class, 'index']);
