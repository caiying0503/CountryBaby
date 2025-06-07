import React, { useState, useEffect } from 'react';
import '../css/ShoppingCart.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!userId || !token) {
      setLoading(false);
      setError('未登入或未取得授權');
      return;
    }

    fetch(`http://127.0.0.1:8000/api/cart?user_id=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`伺服器錯誤: ${res.status} - ${text}`);
        }
        return res.json();
      })
      .then((data) => {
        setCartItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('取得購物車資料錯誤:', err);
        setError(err.message || '取得購物車資料錯誤');
        setLoading(false);
      });
  }, [userId, token]);

  // 修改數量
  const updateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) return; // 最少1件

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/cart/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });

      if (!res.ok) {
        throw new Error('修改數量失敗');
      }

      // 更新本地狀態
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (err) {
      alert(err.message || '修改數量失敗，請稍後再試');
    }
  };

  // 刪除項目
  const deleteItem = async (itemId) => {
    if (!window.confirm('確定要刪除該商品嗎？')) return;

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/cart/${itemId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('刪除失敗');
      }

      setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    } catch (err) {
      alert(err.message || '刪除失敗，請稍後再試');
    }
  };

  // 計算總額
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert(`結帳金額：NT$${totalPrice}\n功能待實作`);
  };

  if (loading) return <p>購物車載入中...</p>;
  if (error) return <p style={{ color: 'red' }}>錯誤：{error}</p>;
  if (!cartItems.length) return <p>購物車是空的</p>;

  return (
    <div className="shopping-cart-container">
      <h2>訂單</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <span className="cart-item-name">
              {item.product.name}
              <div className="cart-unit-price">NT${item.product.price}</div>
            </span>

            <span className="cart-item-quantity">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              {item.quantity}
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </span>

            <span className="cart-item-price">NT${item.product.price * item.quantity}</span>

            <button className="delete-button" onClick={() => deleteItem(item.id)}>
              刪除
            </button>
          </li>

        ))}
      </ul>

      <div className="total-price">總共: NT${totalPrice}</div>
      <button className="checkout-button" onClick={handleCheckout}>結帳</button>
    </div>
  );
};

export default ShoppingCart;
