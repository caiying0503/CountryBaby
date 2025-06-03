import React, { useState, useEffect } from "react";
import "../css/baby.css";
import { Link } from "react-router-dom";

// 商品列卡
const ProductCard = ({ product, onBuyClick }) => (
  <div className="baby-card">
    <div className="baby-image-container">
      <img src={product.image} alt={product.name} />
    </div>
    <div className="baby-info">
      <h3 className="baby-name">{product.name}</h3>
      <div className="baby-price">NT$ {product.price}</div>
      <button
        className="buy-button"
        aria-label={`購買 ${product.name}`}
        onClick={() => onBuyClick(product)}
      >
        購買
      </button>
    </div>
  </div>
);

// 標題
const ProductList = ({ title, products, onBuyClick }) => (
  <div className="baby-list-container">
    <div className="baby-list-title">{title}</div>
    <div className="baby-cards">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onBuyClick={onBuyClick} />
      ))}
    </div>
  </div>
);


const Baby = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const baby_tool = {
    '種子': [14, 15, 16, 17],
    '盆栽': [18, 19, 20],
    '農具': [21, 22, 23],
  };

  useEffect(() => {
    // 假設從後端獲取資料
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  if (loading) return <p>Loading...</p>;

  // 按照分類整理產品
  const categorizedProducts = Object.keys(baby_tool).reduce((acc, category) => {
    const ids = baby_tool[category];
    acc[category] = products.filter((product) => ids.includes(product.id));
    return acc;
  }, {});

  return (
    <div className="baby">
      <div className="baby-header">
        <Link to="/" className="house-icon">
          <i className="fa-solid fa-house"></i>
        </Link>
        <span className="header-text">▶ 寶貝小物</span>
      </div>
      <div className="baby-container">
        {Object.entries(categorizedProducts).map(([category, items]) => (
          <ProductList
            key={category}
            title={category}
            products={items}
            onBuyClick={openModal}
          />
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};


// 選擇商品數量視窗
const ProductModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

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
            <p>價格：NT$ {product.price}</p>
            <p>介紹：{product.introduce}</p>
            <div className="quantity-container" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button type="button" className="btn btn-outline-secondary" onClick={decreaseQuantity}>
                -
              </button>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{quantity}</span>
              <button type="button" className="btn btn-outline-secondary" onClick={increaseQuantity}>
                +
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              關閉
            </button>
            <button type="button" className="btn btn-success">
              加入購物車（{quantity} 件）
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baby;
