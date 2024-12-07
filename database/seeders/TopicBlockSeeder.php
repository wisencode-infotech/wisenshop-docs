<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TopicBlock;

class TopicBlockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        TopicBlock::insert([
            [
                'topic_id' => 1,
                'title' => 'Introduction to the system',
                'block_type_id' => 1,
                'attributes' => json_encode(['content' => 'Welcome']),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'title' => 'How to get started',
                'block_type_id' => 2,
                'attributes' => json_encode(['content' => 'Setup guide']),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 3,
                'title' => 'Feature A explanation',
                'block_type_id' => 3,
                'attributes' => json_encode(['feature' => 'A']),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 4,
                'title' => 'Customization options',
                'block_type_id' => 4,
                'attributes' => json_encode(['theme' => 'dark']),
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}
