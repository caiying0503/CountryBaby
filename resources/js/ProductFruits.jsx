import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Products.css';

const ProductCard = ({ product, onBuyClick }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info1">
        <div className="product-seller">{product.seller}</div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">NT${product.price}</div>
        <button className="buy-button" onClick={() => onBuyClick(product)}>購買</button>
      </div>
    </div>
  );
};

const ProductList = ({ title, products, onBuyClick }) => {
  return (
    <div className="product-list-container">
      <h2 className="product-list-title">{title}</h2>
      <div className="product-cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onBuyClick={onBuyClick} />
        ))}
      </div>
    </div>
  );
};

const ProductModal = ({ product, onClose, userId }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (!product) return null;

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const handleAddToCart = async () => {
    if (!userId) {
      alert("請先登入才能加入購物車！");
      navigate('/login');  // 跳轉登入頁面
      return;
    }

    // 在這裡加上這行：
    const token = localStorage.getItem('token');

    if (!token) {
      alert('找不到授權Token，請重新登入');
      navigate('/login');
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://127.0.0.1:8000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: userId,
          product_id: product.id,
          quantity: quantity,
        }),
      });

      if (!res.ok) {
        throw new Error("加入購物車失敗");
      }

      alert("已成功加入購物車！");
      onClose();
    } catch (err) {
      alert(err.message || "發生錯誤，請稍後再試");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
          </div>
          <div className="modal-body">
            <img src={product.image} alt={product.name} style={{ width: "100%" }} />
            <p>賣家：{product.seller}</p>
            <p>價格：NT$ {product.price}</p>
            <p>介紹：{product.introduce}</p>

            <div className="quantity-container" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{quantity}</span>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              關閉
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddToCart}
              disabled={loading}
            >
              {loading ? "加入中..." : `加入購物車（${quantity} 件）`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductFruits = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // 新增用來存水果
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        // 篩選水果 id 1 ~ 6
        const fruits = data.filter((product) => product.id >= 1 && product.id <= 6);
        setFilteredProducts(fruits);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const openModal = (product) => {
    if (!userId) {
      alert("請先登入！");
      navigate('/login');
      return;
    }
    setSelectedProduct(product);
  };

  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="main-container">
      <aside className="product-sidebar">
        <h2>商品分類</h2>
        <ul>
          <li><Link to="/ProductGrid">🔥熱銷排行榜🔥</Link></li>
          <li><Link to="/AllProducts">商品總覽</Link></li>
          <li><Link to="/ProductVegetables">蔬菜</Link></li>
          <li><Link to="/ProductFruits">水果</Link></li>
        </ul>
      </aside>
      <div className="Fruits-Products-container" style={{ marginLeft: '220px' }}>
        {loading ? (
          <p>加載中...</p>
        ) : (
          <ProductList title="水果" products={filteredProducts} onBuyClick={openModal} />
        )}
      </div>
      <ProductModal product={selectedProduct} onClose={closeModal} userId={userId} />
    </div>
  );
};

export default ProductFruits;
