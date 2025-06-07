import React, { useState, useEffect, createContext, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/ProductGrid.css';

// 1. 建立購物車 Context
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prev) => {
      const existIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existIndex !== -1) {
        const newCart = [...prev];
        newCart[existIndex].quantity += quantity;
        return newCart;
      }
      return [...prev, { product, quantity }];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 2. CategorySidebar 不變
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

// 3. ProductModal 改成用 context 的 addToCart
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
      navigate('/login');
      return;
    }

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
              <button type="button" className="btn btn-outline-secondary" onClick={decreaseQuantity}>-</button>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>{quantity}</span>
              <button type="button" className="btn btn-outline-secondary" onClick={increaseQuantity}>+</button>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>關閉</button>
            <button type="button" className="btn btn-success" onClick={handleAddToCart} disabled={loading}>
              {loading ? "加入中..." : `加入購物車（${quantity} 件）`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. ProductList 不需改動，只是用 onOrderClick 觸發 modal 打開
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

// 5. 主組件 ProductGrid
const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 改用解析 user 物件
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;

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

  const openModal = (product) => {
    if (!userId) {
      alert("請先登入！");
      navigate('/login');
      return;
    }
    setSelectedProduct(product);
  };

  const closeModal = () => setSelectedProduct(null);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="main-container">
      <CategorySidebar />
      <ProductList data={products} rankings={rankings} onOrderClick={openModal} />
      <ProductModal product={selectedProduct} onClose={closeModal} userId={userId} />
    </div>
  );
};


export default ProductGrid;
