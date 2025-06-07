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
        Schema::dropIfExists('orders');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // 如果需要恢復資料表，可以重新創建
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            // 根據原表結構重新定義欄位
        });
    }
};
