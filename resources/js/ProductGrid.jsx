import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductGrid.css';

// 商品分類側邊欄
const CategorySidebar = () => {
  const categories = [
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

// 商品列表元件
const ProductList = ({ data }) => {
  // 處理產品卡片
  const renderProduct = (products) =>
    products.map((product, index) => (
      <div className="product" key={index}>
        <div className={`product-rank rank-${index + 1}`}>NO.{index + 1}</div>
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => (e.target.src = '/images/default-placeholder.png')} // 預設圖片
        />
        <div className="product-info">
          <p className="product-name">{product.name}</p>
          <span className="product-source">{product.source}</span>
          <button className="order-button">火速下單</button>
        </div>
      </div>
    ));

  return (
    <div className="content">
      {Object.entries(data).map(([key, products]) => (
        <div key={key} className="section">
          <h2>{key}</h2>
          <div className="products">{renderProduct(products)}</div>
        </div>
      ))}
    </div>
  );
};

// 主商品頁
const ProductGrid = () => {
  const data = {
    "🔥商品熱銷總排行🔥": [
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dU5j46de3N3_6TVP1OMQOIZCtnxaON1Dg&s',
        name: '愛文芒果 (6公斤/盒 約10顆) 1箱/免運',
        source: '怡君開心農場',
        price: 'NT$890',
      },
      {
        image:
          'https://img.ltn.com.tw/Upload/food/page/2016/04/10/160410-1242-00-SXDOn.jpg',
        name: '高山高麗菜 (約8公斤/10顆)',
        source: '芳宜農作',
        price: 'NT$600',
      },
      {
        image:
          'https://img.ltn.com.tw/Upload/food/page/2018/04/23/180423-7478-0-6UNcA.jpg',
        name: '台農17號金鑽鳳梨5公斤3顆x1箱(產銷履歷_大顆)',
        source: '大熊農場',
        price: 'NT$790',
      },
    ],
    "蔬菜銷售總排行": [
      {
        image: 'https://img.ltn.com.tw/Upload/food/page/2016/04/10/160410-1242-00-SXDOn.jpg',
        name: '高山高麗菜',
        source: '芳宜農作',
        price: 'NT$600',
      },
      {
        image: 'https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/9816216/0/638521502659370000?v=1',
        name: '美玉白蘿蔔 2500g',
        source: '鮮友農場',
        price: 'NT$250',
      },
      {
        image: 'https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8873261/0/638518896529400000?v=1',
        name: '有機蚵仔白菜500g',
        source: '山上農樂',
        price: 'NT$150',
      },
    ],
    水果銷售總排行: [
      {
        image: 'https://shoplineimg.com/5d08366e3f64c1000128316b/61692db02b79a70035c26b08/800x.webp?source_format=jpg',
        name: '社頭冠軍芭樂禮盒[冷藏](珍珠芭樂8斤裝)',
        source: '社頭冠軍芭樂',
        price: 'NT$700',
      },
      {
        image: 'https://shoplineimg.com/5d08366e3f64c1000128316b/620240fe2ca2e30029cd4213/800x.webp?source_format=jpg',
        name: '晶彩巨峰葡萄',
        source: '晶彩農作',
        price: 'NT$600',
      },
      {
        image: 'https://ms-harvest.com/wp-content/uploads/2024/05/DSC08229.webp',
        name: '迷你西瓜 miniball',
        source: '嘉農蔬果',
        price: 'NT$1499',
      },
    ],
  };

  return (
    <div className="main-container">
      <CategorySidebar />
      <ProductList data={data} />
    </div>
  );
};

export default ProductGrid;
