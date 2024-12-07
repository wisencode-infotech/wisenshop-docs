<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Topic;

class TopicSeeder extends Seeder
{
    public function run()
    {
        Topic::insert([
            ['name' => 'Introduction', 'link' => '#topic1'],
            ['name' => 'Getting Started', 'link' => '#topic2'],
            ['name' => 'Features', 'link' => '#topic3'],
            ['name' => 'Customization', 'link' => '#topic4'],
            ['name' => 'FAQs', 'link' => '#topic5'],
        ]);
    }
}
