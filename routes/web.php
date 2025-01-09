<?php

use Illuminate\Support\Facades\Route;

// Exclude assets folder from routing
Route::get('/assets/{any}', function () {
    abort(404); // Prevent Laravel from handling static files
})->where('any', '.*')->name('assets');

Route::view('/{any}', 'app')->where('any', '.*');