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
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'Welcome to the WisenShop Documentation!']),
                'order' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 1,
                'block_type_id' => 7,
                'attributes' => json_encode(['type' => 'info', 'title' => 'Benifits', 'icon' => 'fa-solid fa-list', 'text' => 'Here, you’ll discover comprehensive technical details and configuration guides to help you seamlessly integrate and optimize our script for your needs. Whether you’re setting up or fine-tuning, this resource is designed to empower you with the knowledge to make the most of WisenShop’s powerful features.']),
                'order' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 7,
                'attributes' => json_encode(['type' => 'warning', 'title' => 'Installer will do below operations on the application level', 'icon' => 'fa-solid fa-check-circle', 'text' => '<ul><li>Database creation</li><li>Migration execution</li><li>Seeder execution</li><li>Setting up default website configurations in the database</li></ul>']),
                'order' => 2,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'We provide two methods for setting up the application. Both methods ensure a fully configured website with essential defaults']),
                'order' => 3,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => '1. Setup Using the Command Line']),
                'order' => 4,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 3,
                'attributes' => json_encode(['text' => 'This is the quickest and easiest way to set up the application. Suitable for users comfortable with the command line interface.']),
                'order' => 5,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'Steps:']),
                'order' => 6,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 4,
                'attributes' => json_encode(['list' => ["Open your terminal or command prompt", "Navigate to your project directory"]]),
                'order' => 7,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 5,
                'attributes' => json_encode([
                    'title' => 'Run the following command:',
                    'description' => 'php artisan wisenshop:fresh-install',
                    'copy_btn_text' => 'Copy',
                    'copy_content' => 'php artisan wisenshop:fresh-install',
                    ]),
                'order' => 8,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 7,
                'attributes' => json_encode(['type' => 'success', 'title' => 'Output', 'icon' => 'fa-solid fa-info-circle', 'text' => 'Once the command executes successfully, you will see a confirmation message as mentioned below: <br><strong>Installation completed successfully. Your application is ready to use!</strong>']),
                'order' => 9,    
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}
