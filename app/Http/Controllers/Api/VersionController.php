<?php

namespace App\Http\Controllers\Api;

use App\Helpers\General;
use App\Http\Controllers\Controller;
use App\Models\Version;

class VersionController extends Controller
{
    public function index()
    {
        $versions = General::cacheForever('versions', function() {
            return Version::all();
        });

        return response()->json($versions);
    }
}
