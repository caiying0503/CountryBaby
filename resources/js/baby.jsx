import React from 'react';
import '../css/baby.css';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
  return (
    <div className="baby-card">
      <div className="baby-image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="baby-info">
        <div className="baby-discount">{product.discount}</div>
        <h3 className="baby-name">{product.name}</h3>
        <div className="baby-price">{product.price}</div>
        <button className="buy-button">購買</button>
      </div>
    </div>
  );
};

const ProductList = ({ title, products }) => {
  return (
    <div className="baby-list-container">
      <h2 className="baby-list-title">{title}</h2>
      <div className="baby-cards">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const Baby = () => {

  const productsGroup1 = [
    { id: 1, name: "早生結球萵苣種子", price: "NT$50", image: "https://img.pchome.com.tw/cs/items/DEBP0AA900BVYCA/000001_1678155418.jpg", discount: "買三送一" },
    { id: 2, name: "山茼蒿種子", price: "NT$50", image: "https://img.pchome.com.tw/cs/items/DEBP03A77482932/000001_1544147486.jpg", discount: "買五送一" },
    { id: 3, name: "高麗菜花種子", price: "NT$50", image: "https://img.pchome.com.tw/cs/items/DEBP03A77497378/000001_1695634793.jpg", discount: "買10送二" },
    { id: 4, name: "切葉小白菜種子", price: "NT$50", image: "https://img.pchome.com.tw/cs/items/DEBP03A77491213/000001_1478265162.jpg", discount: "買五送一" },
    { id: 5, name: "切葉小白菜種子", price: "NT$50", image: "https://img.pchome.com.tw/cs/items/DEBP03A77491213/000001_1478265162.jpg", discount: "買五送一" },
  ];

  const productsGroup2 = [
    { id: 6, name: "儲水花器 植物圓霧灰白 附吸水棉", price: "NT$300", image: "https://www.2ustyle.com/wp-content/uploads/2016/10/GC002_2-jpg.webp", discount: "買三送一" },
    { id: 7, name: "儲水花器 雨系列霧灰藍10cm", price: "NT200", image: "https://www.2ustyle.com/wp-content/uploads/2020/02/IMG_4835-final-jpg.webp", discount: "買五送一" },
    { id: 8, name: "陶瓷花盆 球形亮白", price: "NT$300", image: "https://www.2ustyle.com/wp-content/uploads/2016/08/IMG_4149-1000x1000-jpg.webp", discount: "買10送二" },
    { id: 9, name: "奇異果圓盆", price: "NT$250", image: "https://www.2ustyle.com/wp-content/uploads/2019/05/KIWI_MAIN-jpg.webp", discount: "買五送一" }
  ];

  return (
    <>
      <div className='baby'>
        <div className='baby-header'>
          <Link to ="/" className='house-icon'><i className="fa-solid fa-house"></i></Link>
          <span className="header-text">▶ 寶貝小物</span>
        </div>
        <div className="baby-container">
          <ProductList title="種子" products={productsGroup1} />
          <ProductList title="盆栽" products={productsGroup2} />
        </div>
      </div>
    </>
  );
};

export default Baby;



