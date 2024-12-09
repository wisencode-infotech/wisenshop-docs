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
                'title' => 'description',
                'attributes' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'copy_code',
                'attributes' => null,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
