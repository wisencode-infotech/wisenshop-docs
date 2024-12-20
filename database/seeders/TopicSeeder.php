<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Topic;

class TopicSeeder extends Seeder
{
    public function run()
    {
        Topic::insert([
            ['name' => 'Introduction', 'slug' => 'introduction', 'version_id' => 1],
            ['name' => 'Installer', 'slug' => 'installer', 'version_id' => 1],
            ['name' => 'Themes', 'slug' => 'themes', 'version_id' => 1],
            ['name' => 'Payment Methods', 'slug' => 'payment-methods', 'version_id' => 1],
            ['name' => 'Home Page Settings', 'slug' => 'home-page-settings', 'version_id' => 1],
            ['name' => 'Footer Segments', 'slug' => 'footer-segments', 'version_id' => 1],
            ['name' => 'Custom Pages', 'slug' => 'custom-pages', 'version_id' => 1],
            ['name' => 'Backend Site Settings', 'slug' => 'backend-site-settings', 'version_id' => 1],
            ['name' => 'Terminal Commands', 'slug' => 'terminal-commands', 'version_id' => 1],
            ['name' => 'FAQs', 'slug' => 'faqs', 'version_id' => 1],
        ]);
    }
}
