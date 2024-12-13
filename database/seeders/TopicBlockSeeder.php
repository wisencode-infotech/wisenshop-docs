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
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => '2. Setup Through the Website']),
                'order' => 10,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 3,
                'attributes' => json_encode(['text' => 'This method is user-friendly and suitable for non-technical users. It allows configuration directly from the browser.']),
                'order' => 11,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'How It Works:']),
                'order' => 12,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 4,
                'attributes' => json_encode(['list' => ["When a user visits the website for the first time, the system checks for the presence of the <code>.installer</code> file in the <code>storage</code> folder.", "If the <code>.installer</code> file is not found, the system redirects the user to the <strong>Setup Wizard</strong>."]]),
                'order' => 13,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'Setup Wizard:']),
                'order' => 14,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'warning',
                    'title' => 'The Setup Wizard guides the user through the installation process with the following steps:',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                        <li><strong>Database Configuration:</strong> Enter database hostname, username, password, and database name. Test the connection to ensure the details are correct.</li>
                        <li><strong>Admin Settings:</strong> Configure the website\'s admin email, username, and password.</li>
                        <li><strong>Default Configurations:</strong> Provide details for default website settings such as site name, time zone, and logo (optional).</li>
                        <li><strong>Installation Execution:</strong> Click the "Install" button to complete the setup.</li>
                    </ul>'
                ]),
                'order' => 15,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'Post-Setup:']),
                'order' => 16,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 4,
                'attributes' => json_encode(['list' => ["After successful installation, the system creates a <code>.installer</code> file in the <code>storage</code> folder to prevent reinstallation.", "The user is redirected to the homepage or admin panel, depending on the configuration."]]),
                'order' => 17,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'Example Flow:']),
                'order' => 18,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => '1. User visits the website for the first time:']),
                'order' => 19,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 6, // Assuming 8 is the type for screenshots
                'attributes' => json_encode([
                    'title' => 'Setup Screenshot',
                    'description' => 'Here is a screenshot of the setup process.',
                    'imageUrl' => 'http://127.0.0.1:8000/screenshot/screenshot.png'
                ]),
                'order' => 20,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => '2. System completes the setup and redirects:']),
                'order' => 21,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 2,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'warning',
                    'title' => 'Additional Notes',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                            <li><strong>Reinstallation:</strong> To reinitiate the installation process, delete the <code>.installer</code> file from the <code>storage</code> folder and revisit the website or rerun the command.</li>
                            <li><strong>Error Handling:</strong> If any error occurs during setup, an appropriate error message will guide the user to resolve the issue (e.g., database connection failure).</li>
                        </ul>'
                ]),
                'order' => 22,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
