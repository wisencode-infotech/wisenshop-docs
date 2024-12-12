<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Topic;

class TopicSeeder extends Seeder
{
    public function run()
    {
        Topic::insert([
            ['name' => 'Introduction', 'link' => '#introduction'],
            ['name' => 'Installer', 'link' => '#installer'],
            ['name' => 'Themes', 'link' => '#themes'],
            ['name' => 'Payment Methods', 'link' => '#payment-methods'],
            ['name' => 'Home Page Settings', 'link' => '#home-page-settings'],
            ['name' => 'Footer Segments', 'link' => '#footer-segments'],
            ['name' => 'Custom Pages', 'link' => '#custom-pages'],
            ['name' => 'Backend Site Settings', 'link' => '#backend-site-settings'],
            ['name' => 'Terminal Commands', 'link' => '#terminal-commands'],
            ['name' => 'FAQs', 'link' => '#faqs'],
        ]);
    }
}
