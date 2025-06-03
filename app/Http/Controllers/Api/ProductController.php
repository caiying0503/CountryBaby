<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return response()->json(Product::all());
        // return response()->json(['message' => 'API is working!']);
        // return response()->json(['status' => 'API 正常運作']);
    }
}
