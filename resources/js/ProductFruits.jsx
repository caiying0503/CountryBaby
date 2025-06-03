import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Products.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info1">
        <div className="product-seller">{product.seller}</div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">{product.price}</div>
        <button className="buy-button">購買</button>
      </div>
    </div>
  );
};

const ProductList = ({ title, products }) => {
  return (
    <div className="product-list-container">
      <h2 className="product-list-title">{title}</h2>
      <div className="product-cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const product = () => {
  const productsGroup1 = [
    { id: 1, name: '珍珠芭樂禮盒', price: 'NT$700', image: 'https://shoplineimg.com/5d08366e3f64c1000128316b/61692db02b79a70035c26b08/800x.webp?source_format=jpg', seller : '社頭冠軍芭樂'},
    { id: 2, name: '奇異果禮盒', price: 'NT$1999', image: 'https://blog.vitabox.com.tw/wp-content/uploads/2018/12/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7-2018-12-26-%E4%B8%8B%E5%8D%882.38.27-1.png', seller : '山田田山莊'},
    { id: 3, name: '晶彩巨峰葡萄', price: 'NT$600', image: 'https://shoplineimg.com/5d08366e3f64c1000128316b/620240fe2ca2e30029cd4213/800x.webp?source_format=jpg', seller : '晶彩農作'},
    { id: 4, name: '迷你西瓜 miniball', price: 'NT$890', image: 'https://ms-harvest.com/wp-content/uploads/2024/05/DSC08229.webp', seller : '嘉農蔬果' },
    { id: 5, name: '愛文芒果', price: 'NT$1499', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dU5j46de3N3_6TVP1OMQOIZCtnxaON1Dg&s', seller : '怡君開心農場' },
    { id: 6, name: '台農17號金鑽鳳梨', price: 'NT$799', image: 'https://img.ltn.com.tw/Upload/food/page/2018/04/23/180423-7478-0-6UNcA.jpg', seller : '大熊農場' },
  ];


  return (
    <div className="main-container">
      <aside className="product-sidebar">
        <h2>商品分類</h2>
        <ul>
          <li><Link to="/AllProducts">商品總覽</Link></li>
          <li><Link to="/ProductVegetables">蔬菜</Link></li>
          <li><Link to="/ProductFruits">水果</Link></li>
        </ul>
      </aside>
      <div className="AllProducts-container" style={{ marginLeft: '220px' }}>
        <ProductList title="水果" products={productsGroup1} />
      </div>
    </div>
  );
};

export default product;
