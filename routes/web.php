<?php


use Illuminate\Support\Facades\Route;


// 將所有非 API 的請求交給 React
Route::view('/{any}', 'app')->where('any', '.*');



// use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });
