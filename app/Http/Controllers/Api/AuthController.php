<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;

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
            'password' => Hash::make($request->password),
        ]);

        // 註冊後立即產生 JWT token（可選）
        $token = JWTAuth::fromUser($user);

        return response()->json([
            'message' => '註冊成功',
            'user' => $user,
            'token' => $token,
        ], 201);
    }

    public function login(Request $request)
    {
        // 驗證資料
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        // 使用 JWTAuth 嘗試驗證帳密，並產生 token
        $credentials = $request->only('email', 'password');

        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['message' => '帳號或密碼錯誤'], 401);
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();

        return response()->json([
            'message' => '登入成功',
            'token' => $token,
            'user' => $user,
        ], 200);
    }

    public function profile()
    {
        /** @var \App\Models\User $user */
        $user = Auth::guard('api')->user();

        return response()->json($user);
    }
}
