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
                'title' => 'Welcome to the WisenShop Documentation!',
                'block_type_id' => 1,
                'attributes' => json_encode(['content' => 'Here, you’ll discover comprehensive technical details and configuration guides to help you seamlessly integrate and optimize our script for your needs. Whether you’re setting up or fine-tuning, this resource is designed to empower you with the knowledge to make the most of WisenShop’s powerful features.']),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'title' => 'How to get started',
                'block_type_id' => 2,
                'attributes' => json_encode([
                    'title' => 'Clone the repository to your machine using the following command',
                    'description' => 'git clone https://github.com/wisencode-infotech/wisenshop.git',
                    'copy_btn_text' => 'Copy',
                    'copy_content' => 'git clone https://github.com/wisencode-infotech/wisenshop.git',
                    ]),
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}
