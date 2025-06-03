import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductGrid.css';

const CategorySidebar = () => {
  const categories = [
    { name: '🔥熱銷排行榜🔥', url: '/ProductGrid' },
    { name: '商品總覽', url: '/AllProducts' },
    { name: '蔬菜', url: '/ProductVegetables' },
    { name: '水果', url: '/ProductFruits' },
  ];

  return (
    <div className="product-sidebar">
      <h2>商品分類</h2>
      <ul>
        {categories.map((category, idx) => (
          <li key={idx}>
            <Link to={category.url}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
          </div>
          <div className="modal-body">
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <p>賣家：{product.seller}</p>
            <p>價格：NT$ {product.price}</p>
            <p>介紹：{product.introduce}</p>

            <div className="quantity-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button type="button" className="btn btn-outline-secondary" onClick={decreaseQuantity}>
                -
              </button>
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{quantity}</span>
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

const ProductList = ({ data, rankings, onOrderClick }) => {
  const renderProduct = (category, products) => {
    const rankedProducts = rankings[category]
      .map((id) => products.find((product) => product.id === id))
      .filter(Boolean);

    return rankedProducts.map((product, index) => (
      <div className="product" key={product.id}>
        <div className={`product-rank rank-${index + 1}`}>NO.{index + 1}</div>
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => (e.target.src = '/images/default-placeholder.png')}
        />
        <div className="product-info">
          <h6>{product.seller}</h6>
          <p className="product-name">{product.name}</p>
          <h4 className="product-price">NT$ {product.price}</h4>

          <span className="product-source">{product.source}</span>
          <button className="order-button" onClick={() => onOrderClick(product)}>
            火速下單
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="content">
      {Object.keys(rankings).map((category) => (
        <div key={category} className="section">
          <h2>{category}</h2>
          <div className="products">{renderProduct(category, data)}</div>
        </div>
      ))}
    </div>
  );
};

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // 排行榜 ID 配置
  const rankings = {
    '🔥商品熱銷總排行🔥': [5, 13, 6],
    '蔬菜銷售總排行': [13, 8, 10],
    '水果銷售總排行': [5, 6, 3],
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="main-container">
      <CategorySidebar />
      <ProductList data={products} rankings={rankings} onOrderClick={openModal} />
      <ProductModal product={selectedProduct} onClose={closeModal} />
    </div>
  );
};

export default ProductGrid;
