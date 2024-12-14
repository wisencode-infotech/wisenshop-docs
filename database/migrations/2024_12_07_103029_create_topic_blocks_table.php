<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('topic_blocks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('topic_id');
            $table->unsignedBigInteger('block_type_id');
            $table->json('attributes')->nullable();
            $table->unsignedBigInteger('order');
            $table->unsignedInteger('start_content_level')->nullable();
            $table->timestamps();
    
            $table->foreign('topic_id')->references('id')->on('topics')->onDelete('cascade');
            $table->foreign('block_type_id')->references('id')->on('block_types')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('topic_blocks');
    }
};
