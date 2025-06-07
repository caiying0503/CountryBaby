<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ShoppingCartItem;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ShoppingCartController extends Controller
{
    public function index()
    {
        return ShoppingCartItem::with('product')
            ->where('user_id', Auth::id())
            ->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $existingItem = ShoppingCartItem::where('user_id', Auth::id())
            ->where('product_id', $request->product_id)
            ->first();

        if ($existingItem) {
            $existingItem->quantity += $request->quantity;
            $existingItem->save();
            return response()->json($existingItem, 200);
        } else {
            $newItem = ShoppingCartItem::create([
                'user_id' => Auth::id(),
                'product_id' => $request->product_id,
                'quantity' => $request->quantity,
            ]);
            return response()->json($newItem, 201);
        }
    }


    public function update(Request $request, $id)
    {
        $item = ShoppingCartItem::where('id', $id)->where('user_id', Auth::id())->firstOrFail();

        $request->validate(['quantity' => 'required|integer|min:1']);
        $item->update(['quantity' => $request->quantity]);

        return response()->json($item);
    }

    public function destroy($id)
    {
        $item = ShoppingCartItem::where('id', $id)->where('user_id', Auth::id())->firstOrFail();
        $item->delete();

        return response()->json(['message' => '已刪除']);
    }
}
