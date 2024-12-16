<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Topic;

class TopicSeeder extends Seeder
{
    public function run()
    {
        Topic::insert([
            ['name' => 'Introduction', 'slug' => 'introduction'],
            ['name' => 'Installer', 'slug' => 'installer'],
            ['name' => 'Themes', 'slug' => 'themes'],
            ['name' => 'Payment Methods', 'slug' => 'payment-methods'],
            ['name' => 'Home Page Settings', 'slug' => 'home-page-settings'],
            ['name' => 'Footer Segments', 'slug' => 'footer-segments'],
            ['name' => 'Custom Pages', 'slug' => 'custom-pages'],
            ['name' => 'Backend Site Settings', 'slug' => 'backend-site-settings'],
            ['name' => 'Terminal Commands', 'slug' => 'terminal-commands'],
            ['name' => 'FAQs', 'slug' => 'faqs'],
        ]);
    }
}
