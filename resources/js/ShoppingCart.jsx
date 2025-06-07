import React, { useState, useEffect } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 取得使用者 ID 和 token
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;
  const token = localStorage.getItem('token');  // 假設你把 token 存這裡

  useEffect(() => {
    if (!userId || !token) {
      setLoading(false);
      setError('未登入或未取得授權');
      return;
    }

    fetch(`http://127.0.0.1:8000/api/cart?user_id=${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`伺服器錯誤: ${res.status} - ${text}`);
        }
        return res.json();
      })
      .then(data => {
        setCartItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('取得購物車資料錯誤:', err);
        setError(err.message || '取得購物車資料錯誤');
        setLoading(false);
      });
  }, [userId, token]);

  // 計算總額
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  // 模擬結帳按鈕點擊行為
  const handleCheckout = () => {
    alert(`結帳金額：NT$${totalPrice}\n功能待實作`);
  };

  if (loading) return <p>購物車載入中...</p>;
  if (error) return <p style={{color: 'red'}}>錯誤：{error}</p>;
  if (!cartItems.length) return <p>購物車是空的</p>;

  return (
    <div>
      <br /><br /><br /><br />
      <h2>訂單</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.product.name} - 數量: {item.quantity} - 價格: NT${item.product.price * item.quantity}
          </li>
        ))}
      </ul>
      <h2>總共: NT${totalPrice}</h2>
      <button onClick={handleCheckout}>結帳</button>
    </div>
  );
};

export default ShoppingCart;
