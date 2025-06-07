import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const ProductModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1); // 數量初始值為1

  if (!product) return null;

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

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
            <button type="button" className="btn btn-secondary" onClick={onClose}>關閉</button>
            <button type="button" className="btn btn-success">
              加入購物車（{quantity} 件）
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductVegetables = () => {
  const [products, setProducts] = useState([]); // 從 API 獲取的商品
  const [filteredProducts, setFilteredProducts] = useState([]); // 篩選後的商品
  const [selectedProduct, setSelectedProduct] = useState(null); // 選中的商品
  const [loading, setLoading] = useState(true); // 資料加載狀態

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        // 篩選 id 在 1 到 6 的水果資料
        const fruits = data.filter((product) => product.id >= 7 && product.id <= 13);
        setFilteredProducts(fruits);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const openModal = (product) => setSelectedProduct(product); // 打開模態框
  const closeModal = () => setSelectedProduct(null); // 關閉模態框

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
      <div className="AllProducts-container" style={{ marginLeft: '220px' }}>
        {loading ? (
          <p>加載中...</p>
        ) : (
          <ProductList title="蔬菜" products={filteredProducts} onBuyClick={openModal} />
        )}
      </div>
      <ProductModal product={selectedProduct} onClose={closeModal} />
    </div>
  );
};

export default ProductVegetables;
