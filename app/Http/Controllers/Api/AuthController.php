<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // 驗證資料
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:6',
        ]);

        // 建立使用者
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password), // 密碼加密
        ]);

        return response()->json([
            'message' => '註冊成功',
            'user' => $user,
        ], 201);
    }

    public function login(Request $request)
    {
        // 驗證資料
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        // 查找使用者
        $user = User::where('email', $request->email)->first();

        // 檢查密碼
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => '帳號或密碼錯誤'], 401);
        }

        return response()->json([
            'message' => '登入成功',
            'user' => $user,
        ], 200);
    }
}
