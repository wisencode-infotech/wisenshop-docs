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
                        <li><strong>Default Configurations:</strong> Provide details for default website settings such as site name.</li>
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
                'block_type_id' => 6,
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
            [
                'topic_id' => 3,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'Overview']),
                'order' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 3,
                'block_type_id' => 3,
                'attributes' => json_encode(['text' => 'The Theme Settings allow administrators to customize the appearance of the website by selecting a theme and adjusting the colors for various elements. This section provides flexibility for maintaining consistent branding and a visually appealing design.']),
                'order' => 2,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 3,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'Theme Settings Section']),
                'order' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 3,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => '1. Site Colors']),
                'order' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 3,
                'block_type_id' => 3,
                'attributes' => json_encode(['text' => 'This section allows the administrator to customize the color palette of the website. The colors affect various frontend elements like buttons, links, backgrounds, borders, and text.']),
                'order' => 5,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 3,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'Available Color Settings:']),
                'order' => 6,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 3,
                'block_type_id' => 4,
                'attributes' => json_encode(['list' => [
                    '<strong>Color-accent: </strong>Main accent color used throughout the site, such as in buttons, links, and highlights.',
                    '<strong>Color-accent-hover: </strong>The hover color for elements using the accent color.',
                    '<strong>Color-accent-contrast: </strong>A contrasting color used for higher visibility on buttons or call-to-action elements.',
                    '<strong>Color-accent-200 to Color-accent-700: </strong>Variations of the main accent color, useful for different UI elements requiring subtle contrast.',
                    '<strong>Color-light: </strong>A light color, possibly for background elements or light-themed sections.',
                    '<strong>Color-dark: </strong>A dark color, likely for text or other prominent elements.',
                    '<strong>Color-muted-black: </strong>A muted black tone for less prominent text or background elements.',
                    '<strong>Text-base: </strong>Base color for general text.',
                    '<strong>Text-muted: </strong>Color for muted or secondary text, such as less important details.',
                    '<strong>Text-heading: </strong>Color for headings and titles.',
                    '<strong>Text-sub-heading: </strong>Subheading text color, typically for secondary headings.',
                    '<strong>Text-muted-light: </strong>A lighter variant of muted text for subtlety.',
                    '<strong>Text-bolder: </strong>A bold text color for emphasis.',
                    '<strong>Color-border: </strong>Border color for elements like cards, buttons, or sections.',
                    '<strong>Color-border-50 to Color-border-400: </strong>Variations in border color for different visual intensities, ideal for subtle borders.',
                ]]),
                'order' => 7,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 3,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'Best Practices for Site Colors:']),
                'order' => 8,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 3,
                'block_type_id' => 4,
                'attributes' => json_encode(['list' => [
                    '<strong>Consistency: </strong>Use a consistent color palette throughout the site to strengthen brand identity and user experience. Avoid using too many contrasting colors that may distract the user.',
                    '<strong>Accessibility: </strong>Ensure there is enough contrast between text and background colors to maintain readability. Refer to accessibility standards (e.g., WCAG) for optimal contrast ratios.',
                    '<strong>Subtlety with Muted Colors: </strong>Use muted colors (e.g., Text-muted, Color-accent-contrast) for secondary elements like footer text or descriptions, ensuring they do not overpower the primary content.',
                    '<strong>Highlight Key Actions: </strong>Use Color-accent and Color-accent-hover for call-to-action buttons, links, and interactive elements. Ensure they stand out visually without overwhelming other elements.',
                    '<strong>Test on Devices: </strong>After applying color changes, ensure the website’s design looks good across different screen sizes and devices. Some colors may look different under various lighting conditions or screen types.',
                    '<strong>Color Blindness: </strong>Use color-blind-friendly design principles. Rely on color contrast, rather than color alone, to indicate key information or interactions.',
                ]]),
                'order' => 9,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 3,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => '2. Site Theme Selection']),
                'order' => 10,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 3,
                'block_type_id' => 3,
                'attributes' => json_encode(['text' => 'At the bottom of the Theme Settings, administrators can select the desired Site Theme. This dropdown allows administrators to change the overall layout, design structure, and visual style of the frontend.']),
                'order' => 11,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 3,
                'block_type_id' => 7,
                'attributes' => json_encode(['type' => 'warning', 'title' => 'Steps to Select a Site Theme:', 'icon' => 'fa-solid fa-check-circle', 'text' => '<ul><li>Log in to the Admin Panel.</li><li>Navigate to <b>Settings</b> menu</li><li>Under <b>Site Theme</b>, select the preferred theme from the dropdown list (e.g., Default [Classis e-commerce theme]).</li><li>Click <b>Update</b> to apply the selected theme to the website.</li></ul>']),
                'order' => 12,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 3,
                'block_type_id' => 6,
                'attributes' => json_encode([
                    'title' => 'Theme Settings Interface Screenshot',
                    'description' => 'This screenshot shows how the theme settings appear in the admin panel, where you can easily toggle features and set your preferences.',
                    'imageUrl' => 'http://127.0.0.1:8000/screenshot/screenshot-theme-setting1.png'
                ]),
                'order' => 13,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 3,
                'block_type_id' => 6,
                'attributes' => json_encode([
                    'title' => 'Theme Color Settings Interface Screenshot',
                    'description' => 'This screenshot shows how the theme color settings appear in the admin panel, where you can easily toggle features and set your preferences.',
                    'imageUrl' => 'http://127.0.0.1:8000/screenshot/screenshot-theme-setting2.png'
                ]),
                'order' => 13,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 3,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'warning',
                    'title' => 'Important Notes',
                    'icon' => 'fa-solid fa-exclamation-triangle',
                    'text' => 'Make sure to back up your theme settings before making significant changes to avoid data loss or unintended configurations.'
                ]),
                'order' => 14,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 4,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'Overview']),
                'order' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 4,
                'block_type_id' => 3,
                'attributes' => json_encode([
                    'text' => 'The Payment Methods module allows administrators to manage payment options for the system. It includes functionality to create, update, and delete payment methods while providing an option for integration with external APIs or services.'
                ]),
                'order' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 4,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'info',
                    'title' => 'Features:',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                        <li><strong>Create Payment Method:</strong> Add a new payment method with specific details.</li>
                        <li><strong>Edit Payment Method:</strong> Modify the details of an existing payment method.</li>
                        <li><strong>Delete Payment Method:</strong> Remove an unnecessary or deprecated payment method.</li>
                        <li><strong>Integration Support:</strong> Add custom key-value pairs for integration with external systems.</li>
                        <li><strong>Is Default?:</strong> Checkbox to specify if the payment method should be the default.</li>
                    </ul>'
                ]),
                'order' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 4,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'Payment Methods Screenshot']),
                'order' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 4,
                'block_type_id' => 6,
                'attributes' => json_encode([
                    'title' => '',
                    'description' => 'Here is a screenshot of the Payment Methods Listing.',
                    'imageUrl' => 'http://127.0.0.1:8000/screenshot/screenshot-payment-method-setting1.png'
                ]),
                'order' => 5,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 4,
                'block_type_id' => 6,
                'attributes' => json_encode([
                    'title' => '',
                    'description' => 'Here is a screenshot of the Payment Method Form.',
                    'imageUrl' => 'http://127.0.0.1:8000/screenshot/screenshot-payment-method-setting2.png'
                ]),
                'order' => 6,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 5,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'Overview']),
                'order' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 5,
                'block_type_id' => 3,
                'attributes' => json_encode([
                    'text' => 'The <b>Home Page</b> Settings section allows administrators to manage how products are displayed on the homepage of the website. It includes settings for default categories, banner configurations, and the default sorting method for products.'
                ]),
                'order' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 5,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => '1. Default Categories']),
                'order' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 5,
                'block_type_id' => 3,
                'attributes' => json_encode([
                    'text' => '<b>Purpose:</b> This setting allows the admin to define which categories of products will appear on the home page by default. These categories can be toggled on or off, and only the categories that are enabled will be visible to users on the front-end.'
                ]),
                'order' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 5,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'info',
                    'title' => 'Functionality:',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                        <li><strong>Categories List:</strong> A list of product categories that are available for display.</li>
                        <li><strong>Toggle Switch:</strong> Each category has a toggle switch (ON/OFF) next to it. Enabling a category will make its products visible on the home page, while disabling it will remove its products from the home page.</li>
                        <li><strong>Effect on Frontend:</strong> The categories that are enabled will display products under those categories in the default section of the homepage.</li>
                    </ul>'
                ]),
                'order' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'topic_id' => 5,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'warning',
                    'title' => 'Best Practice:',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                        <li><strong>Relevance:</strong> Ensure that only the most relevant categories are displayed as default on the home page to enhance the user experience.</li>
                        <li><strong>Seasonal Changes:</strong> Update the default categories seasonally or based on marketing strategies to highlight products of interest.</li>
                    </ul>'
                ]),
                'order' => 6,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 5,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => '2. Banner Settings']),
                'order' => 7,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 5,
                'block_type_id' => 3,
                'attributes' => json_encode([
                    'text' => '<b>Purpose:</b> This section allows the admin to configure banners that will be displayed on the homepage, promoting specific products, categories, or offers.'
                ]),
                'order' => 8,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 5,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'info',
                    'title' => 'Functionality:',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                        <li>If this section is enabled, the banner will be displayed on the home page.</li>
                        <li>If the image is chosen and other details are filled, the banner appears based on the page settings.</li>
                    </ul>'
                ]),
                'order' => 9,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'topic_id' => 5,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'warning',
                    'title' => 'Best Practice:',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                        <li><strong>High-Quality Images:</strong> Use high-quality images that are optimized for the web (compressed to improve page load speed).</li>
                        <li><strong>Clear Messaging:</strong> Provide concise and clear descriptions on the banner to communicate the promotion effectively.</li>
                        <li><strong>Targeted Links:</strong> Ensure the banner URL points to relevant content, such as a sale page or a product category.</li>
                    </ul>'
                ]),
                'order' => 10,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 5,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => '3. Default Home Sorting Method']),
                'order' => 11,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 5,
                'block_type_id' => 3,
                'attributes' => json_encode([
                    'text' => '<b>Purpose:</b> This setting defines the order in which products will be displayed on the home page. It controls the default sorting method for product listings.'
                ]),
                'order' => 12,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 5,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'info',
                    'title' => 'Functionality:',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                        <li>The selected sorting method will apply automatically to the products on the homepage, affecting their display order for all users until changed.</li>
                    </ul>'
                ]),
                'order' => 13,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 5,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'warning',
                    'title' => 'Best Practice:',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                        <li><strong>User Preference:</strong> Consider the most common customer preferences for sorting products. "Price Low to High" is commonly used for bargain shoppers, while "Newest First" is preferred by users looking for new arrivals.</li>
                        <li><strong>Dynamic Sorting:</strong> Implement dynamic sorting that adjusts based on promotions or product availability to keep the site experience fresh and relevant.</li>
                    </ul>'
                ]),
                'order' => 14,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 5,
                'block_type_id' => 6,
                'attributes' => json_encode([
                    'title' => 'Home Page Setting Screenshot',
                    'description' => 'Here is a screenshot of the Home Page Setting.',
                    'imageUrl' => 'http://127.0.0.1:8000/screenshot/screenshot-home-page-settings.png'
                ]),
                'order' => 15,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 6,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'Overview']),
                'order' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 6,
                'block_type_id' => 3,
                'attributes' => json_encode([
                    'text' => 'The Footer Section module allows administrators to manage the footer menus and their items dynamically. This module ensures flexibility in customizing the footer structure to meet the specific requirements of the website.'
                ]),
                'order' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 6,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'Features']),
                'order' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 6,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'info',
                    'title' => 'Footer Menu Section',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                        <li><strong>Add Footer Menu:</strong> Create a new menu section in the footer.</li>
                        <li><strong>Edit Footer Menu:</strong> Update the name or settings of an existing menu.</li>
                        <li><strong>Delete Footer Menu:</strong> Remove a menu section no longer required.</li>
                    </ul>'
                ]),
                'order' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 6,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'info',
                    'title' => 'Footer Menu Items Section',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                        <li><strong>Add Footer Menu Item:</strong> Add individual items to a specific footer menu.</li>
                        <li><strong>Edit Footer Menu Item:</strong> Modify the details of a footer menu item.</li>
                        <li><strong>Delete Footer Menu Item:</strong> Remove unnecessary or outdated items from a footer menu.</li>
                    </ul>'
                ]),
                'order' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 6,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'Footer Segments Screenshot']),
                'order' => 6,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 6,
                'block_type_id' => 6,
                'attributes' => json_encode([
                    'title' => '',
                    'description' => 'Here is a screenshot of the Footer Menu Listing.',
                    'imageUrl' => 'http://127.0.0.1:8000/screenshot/screenshot-footer-setting1.png'
                ]),
                'order' => 7,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 6,
                'block_type_id' => 6,
                'attributes' => json_encode([
                    'title' => '',
                    'description' => 'Here is a screenshot of the Footer Menu Item Listing.',
                    'imageUrl' => 'http://127.0.0.1:8000/screenshot/screenshot-footer-setting2.png'
                ]),
                'order' => 8,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 6,
                'block_type_id' => 6,
                'attributes' => json_encode([
                    'title' => '',
                    'description' => 'Here is a screenshot of the Footer Menu Item Form.',
                    'imageUrl' => 'http://127.0.0.1:8000/screenshot/screenshot-footer-setting3.png'
                ]),
                'order' => 9,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 6,
                'block_type_id' => 6,
                'attributes' => json_encode([
                    'title' => '',
                    'description' => 'Here is a screenshot of the Footer Menu Item Form.',
                    'imageUrl' => 'http://127.0.0.1:8000/screenshot/screenshot-footer-setting4.png'
                ]),
                'order' => 10,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 7,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'Introduction to Custom Pages']),
                'order' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 7,
                'block_type_id' => 3,
                'attributes' => json_encode(['text' => 'Custom Pages allow you to add unique content to your e-commerce store, such as About Us, Contact Us, or Terms and Conditions pages. These pages can be easily managed through the admin panel or via code.']),
                'order' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 7,
                'block_type_id' => 7,
                'attributes' => json_encode(['type' => 'info', 'title' => 'Features of Custom Pages:', 'icon' => 'fa-solid fa-list', 'text' => '<ul><li><b>Static Pages</b>: Add content like text, images, or embedded videos.</li><li><b>Dynamic Pages</b>: Include dynamic content using templates or database-driven data.</li><li><b>Content</b>: Use the WYSIWYG editor to add content (text, images, or HTML).</li></ul>']),
                'order' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 7,
                'block_type_id' => 6,
                'attributes' => json_encode([
                    'title' => 'Custom Pages Screenshot',
                    'description' => 'Here is a screenshot of the Custom Pages.',
                    'imageUrl' => 'http://127.0.0.1:8000/screenshot/screenshot-custom-page.png'
                ]),
                'order' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 8,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'Overview']),
                'order' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 8,
                'block_type_id' => 3,
                'attributes' => json_encode(['text' => 'Backend Site Settings allow you to configure the foundational elements of your website\'s backend, including contact information, logos, correspondence preferences, social media links, and general settings. These options help ensure your website reflects your brand identity and meets user needs.']),
                'order' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 8,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'List of Available Settings']),
                'order' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 8,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'info',
                    'title' => 'Order Settings',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                        <li><strong>Order Number Prefix:</strong> Specify a prefix for order numbers (e.g., ORD-, WS-). This helps in easily identifying and managing orders in your system.</li>
                    </ul>'
                ]),
                'order' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 8,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'info',
                    'title' => 'General Settings',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                        <li><strong>Site Title:</strong> Define the title of your website that will appear in the browser tab and other metadata areas.</li>
                        <li><strong>Site Currency:</strong> Set the default currency for your website (e.g., USD, EUR).</li>
                        <li><strong>Site Locale:</strong> Configure the website\'s locale for language and regional settings.</li>
                    </ul>'
                ]),
                'order' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 8,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'info',
                    'title' => 'Logos',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                        <li><strong>Header Logo:</strong> The logo displayed in the header section of your website.</li>
                        <li><strong>Footer Logo:</strong> The logo displayed in the footer section of your website.</li>
                        <li><strong>Fav Icon (Logo):</strong> The favicon logo that appears in the browser tab.</li>
                        <li><strong>Email Header Logo:</strong> The logo displayed in the header of emails sent from your website.</li>
                    </ul>'
                ]),
                'order' => 6,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 8,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'info',
                    'title' => 'Contact Information',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                        <li><strong>Phone Number:</strong> Primary phone number (e.g., 9696669999).</li>
                        <li><strong>Email:</strong> The main email address for your website (e.g., example@domain.com).</li>
                        <li><strong>Address:</strong> Physical address of your business (e.g., 123 Example Street, Sample City, ST 12345).</li>
                        <li><strong>Website URL:</strong> The URL of your website (e.g., https://www.example.com).</li>
                    </ul>'
                ]),
                'order' => 7,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 8,
                'block_type_id' => 7,
                'attributes' => json_encode([
                    'type' => 'info',
                    'title' => 'Social Media Links',
                    'icon' => 'fa-solid fa-check-circle',
                    'text' => '<ul>
                        <li><strong>Twitter Link</strong></li>
                        <li><strong>Facebook Link</strong></li>
                        <li><strong>Instagram Link</strong></li>
                        <li><strong>Copyright Link </strong> (e.g., "© 2024 WisenShop. All rights reserved.")</li>
                    </ul>'
                ]),
                'order' => 8,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 8,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'Backend Site Settings Screenshot']),
                'order' => 9,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 8,
                'block_type_id' => 6,
                'attributes' => json_encode([
                    'title' => '',
                    'description' => '',
                    'imageUrl' => 'http://127.0.0.1:8000/screenshot/screenshot-backend-setting1.png'
                ]),
                'order' => 10,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 8,
                'block_type_id' => 6,
                'attributes' => json_encode([
                    'title' => '',
                    'description' => '',
                    'imageUrl' => 'http://127.0.0.1:8000/screenshot/screenshot-backend-setting2.png'
                ]),
                'order' => 11,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 8,
                'block_type_id' => 6,
                'attributes' => json_encode([
                    'title' => '',
                    'description' => '',
                    'imageUrl' => 'http://127.0.0.1:8000/screenshot/screenshot-backend-setting3.png'
                ]),
                'order' => 12,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'Overview']),
                'order' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 3,
                'attributes' => json_encode(['text' => 'This section provides a list of terminal commands used to manage, maintain, and interact with the this application.']),
                'order' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => '1. Installation Commands']),
                'order' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 5,
                'attributes' => json_encode([
                    'title' => 'Install system command:',
                    'description' => 'php artisan wisenshop:fresh-install',
                    'copy_btn_text' => 'Copy',
                    'copy_content' => 'php artisan wisenshop:fresh-install',
                    ]),
                'order' => 4,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => '2. Development Commands']),
                'order' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 5,
                'attributes' => json_encode([
                    'title' => 'Running the Development Server:',
                    'description' => 'php artisan serve',
                    'copy_btn_text' => 'Copy',
                    'copy_content' => 'php artisan serve',
                    ]),
                'order' => 6,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 5,
                'attributes' => json_encode([
                    'title' => 'Building Assets:',
                    'description' => 'npm run build',
                    'copy_btn_text' => 'Copy',
                    'copy_content' => 'npm run build',
                    ]),
                'order' => 7,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => '3. Database Commands']),
                'order' => 8,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 5,
                'attributes' => json_encode([
                    'title' => 'Setting Up the Database:',
                    'description' => 'php artisan migrate',
                    'copy_btn_text' => 'Copy',
                    'copy_content' => 'php artisan migrate',
                    ]),
                'order' => 9,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 5,
                'attributes' => json_encode([
                    'title' => 'Seeding the Database:',
                    'description' => 'php artisan db:seed',
                    'copy_btn_text' => 'Copy',
                    'copy_content' => 'php artisan db:seed',
                    ]),
                'order' => 10,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 5,
                'attributes' => json_encode([
                    'title' => 'Resetting the Database:',
                    'description' => 'php artisan migrate:fresh --seed',
                    'copy_btn_text' => 'Copy',
                    'copy_content' => 'php artisan migrate:fresh --seed',
                    ]),
                'order' => 11,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => '4. Maintenance Commands']),
                'order' => 12,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 5,
                'attributes' => json_encode([
                    'title' => 'Clearing Cache:',
                    'description' => 'php artisan cache:clear',
                    'copy_btn_text' => 'Copy',
                    'copy_content' => 'php artisan cache:clear',
                    ]),
                'order' => 13,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 5,
                'attributes' => json_encode([
                    'title' => 'Clearing Config Cache:',
                    'description' => 'php artisan config:clear',
                    'copy_btn_text' => 'Copy',
                    'copy_content' => 'php artisan config:clear',
                    ]),
                'order' => 14,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'Optimizing the Application']),
                'order' => 15,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 5,
                'attributes' => json_encode([
                    'title' => 'Optimizing the Application',
                    'description' => 'php artisan optimize',
                    'copy_btn_text' => 'Copy',
                    'copy_content' => 'php artisan optimize',
                    ]),
                'order' => 16,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 9,
                'block_type_id' => 5,
                'attributes' => json_encode([
                    'title' => 'Managing Queues',
                    'description' => 'php artisan queue:work',
                    'copy_btn_text' => 'Copy',
                    'copy_content' => 'php artisan queue:work',
                    ]),
                'order' => 17,    
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'General']),
                'order' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'What is Wisenshop?']),
                'order' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 3,
                'attributes' => json_encode(['text' => 'Wisenshop is a feature-rich e-commerce platform that allows you to create and manage online stores effortlessly.']),
                'order' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'Who can use Wisenshop?']),
                'order' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 3,
                'attributes' => json_encode(['text' => 'Anyone looking to build an online store, from small business owners to large enterprises.']),
                'order' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'What are the system requirements for Wisenshop?']),
                'order' => 6,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 7,
                'attributes' => json_encode(['type' => 'info', 'title' => 'System requirements', 'icon' => 'fa-solid fa-list', 'text' => '<ul><li>PHP 8.1 or higher</li><li>MySQL 8.0 or higher</li><li>Node.js 16 or higher</li><li>Composer 2.x</li></ul>']),
                'order' => 7,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'How do I configure the database?']),
                'order' => 8,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 7,
                'attributes' => json_encode(['type' => 'warning', 'title' => 'Update your .env file with the database credentials:', 'icon' => 'fa-solid fa-list', 'text' => '<ul><li>DB_CONNECTION=mysql</li><li>DB_HOST=127.0.0.1</li><li>DB_PORT=3306</li><li>DB_USERNAME=your_username</li><li>DB_PASSWORD=your_password</li></ul>']),
                'order' => 9,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'Advanced']),
                'order' => 10,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'Can I integrate third-party APIs with Wisenshop?']),
                'order' => 11,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 3,
                'attributes' => json_encode(['text' => 'Yes, Wisenshop is extensible and allows integration with third-party APIs. Use the ServiceProvider and middleware for seamless integration.']),
                'order' => 12,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'How do I enable SSL for my store?']),
                'order' => 13,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 3,
                'attributes' => json_encode(['text' => 'Install an SSL certificate on your server and update the APP_URL in the .env file to use https.']),
                'order' => 14,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'Does Wisenshop support caching?']),
                'order' => 15,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 3,
                'attributes' => json_encode(['text' => 'Yes, Wisenshop supports caching mechanisms like Redis and file-based caching. Configure the CACHE_DRIVER in your .env file.']),
                'order' => 16,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 1,
                'attributes' => json_encode(['text' => 'Support']),
                'order' => 17,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 2,
                'attributes' => json_encode(['text' => 'Where can I get help with Wisenshop?']),
                'order' => 18,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'topic_id' => 10,
                'block_type_id' => 7,
                'attributes' => json_encode(['type' => 'warning', 'title' => 'You can get support from:', 'icon' => 'fa-solid fa-list', 'text' => '<ul><li>The official documentation.</li><li>Our community forum.</li><li>Email: support@wisenshop.com</li></ul>']),
                'order' => 19,
                'created_at' => now(),
                'updated_at' => now()
            ]

        ]);
    }
}
