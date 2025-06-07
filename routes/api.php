<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ShoppingCartController;


// 查詢所有商品
Route::get('/products', [ProductController::class, 'index']);

// 註冊登入
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


// 購物車
Route::middleware('auth:api')->group(function () {
    Route::get('/profile', [AuthController::class, 'profile']);
    // 查詢
    Route::get('/cart', [ShoppingCartController::class, 'index']);
    // 新增
    Route::post('/cart', [ShoppingCartController::class, 'store']);
    // 修改
    Route::put('/cart/{id}', [ShoppingCartController::class, 'update']);
    // 刪除
    Route::delete('/cart/{id}', [ShoppingCartController::class, 'destroy']);
});
