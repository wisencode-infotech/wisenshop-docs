<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\BlockType;

class BlockTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        BlockType::insert([
            [
                'title' => 'Introduction',
                'attributes' => json_encode(['key1' => 'value1', 'key2' => 'value2']),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'Getting Started',
                'attributes' => json_encode(['key3' => 'value3', 'key4' => 'value4']),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'Features',
                'attributes' => json_encode(['key5' => 'value5']),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'Customization',
                'attributes' => json_encode(['key6' => 'value6']),
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}
