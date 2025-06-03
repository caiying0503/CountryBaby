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
    { id: 1, name: '綜合蔬菜組', price: 'NT$900', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQOfQtX7z6OMzeFX1670Kt_WOUliaQD8z5-jXAJui4RDCAK2dJiwmirzdq5uU8s5TsiWTKkWi5nDA7qDXdUOoBmZs3DMfLEcLtZz2m1pfI', seller : '源鮮智慧農場'},
    { id: 2, name: '美玉白蘿蔔 2500g', price: 'NT$250', image: 'https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/9816216/0/638521502659370000?v=1', seller : '鮮友農場'},
    { id: 3, name: '有機蚵仔白菜 500g', price: 'NT$150', image: 'https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8873261/0/638518896529400000?v=1', seller : '山上農樂'},
    { id: 4, name: '有機青江菜(6包組)', price: 'NT$500', image: 'https://ms-harvest.com/wp-content/uploads/2024/09/scimgT1infw.webp', seller : '斗財農場' },
    { id: 5, name: '有機小白菜(6包組)', price: 'NT$500', image: 'https://ms-harvest.com/wp-content/uploads/2024/09/scimgG12rzK.webp' , seller : '斗財農場'},
    { id: 6, name: '有機油菜(6包組)', price: 'NT$500', image: 'https://ms-harvest.com/wp-content/uploads/2024/09/scimghqKJ2f.webp', seller : '斗財農場' },
    { id: 7, name: '高山高麗菜', price: 'NT$600', image: 'https://img.ltn.com.tw/Upload/food/page/2016/04/10/160410-1242-00-SXDOn.jpg' , seller : '芳宜農作'},
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
        <ProductList title="蔬菜" products={productsGroup1} />
      </div>
    </div>
  );
};

export default product;
