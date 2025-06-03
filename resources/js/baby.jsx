import React from "react";
import "../css/baby.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="baby-card">
    <div className="baby-image-container">
      <img src={product.image} alt={product.name} />
    </div>
    <div className="baby-info">
      <div className="baby-discount">{product.discount}</div>
      <h3 className="baby-name">{product.name}</h3>
      <div className="baby-price">{product.price}</div>
      <button className="buy-button" aria-label={`購買 ${product.name}`}>購買</button>
    </div>
  </div>
);

const ProductList = ({ title, products }) => (
  <div className="baby-list-container">
    <div className="baby-list-title">{title}</div>
    <div className="baby-cards">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

const Baby = () => {
  const products = {
種子: [
      {
        id: 1,
        name: "早生結球萵苣種子",
        price: "NT$50",
        image: "https://img.pchome.com.tw/cs/items/DEBP0AA900BVYCA/000001_1678155418.jpg",
        discount: "買三送一",
      },
      {
        id: 2,
        name: "山茼蒿種子",
        price: "NT$50",
        image: "https://img.pchome.com.tw/cs/items/DEBP03A77482932/000001_1544147486.jpg",
        discount: "買五送一",
      },
      {
        id: 3,
        name: "高麗菜花種子",
        price: "NT$50",
        image: "https://img.pchome.com.tw/cs/items/DEBP03A77497378/000001_1695634793.jpg",
        discount: "買10送二",
      },
      {
        id: 4,
        name: "切葉小白菜種子",
        price: "NT$50",
        image: "https://img.pchome.com.tw/cs/items/DEBP03A77491213/000001_1478265162.jpg",
        discount: "買五送一",
      },
    ],
    盆栽: [
      {
        id: 5,
        name: "素雅橫紋花盆-灰",
        price: "NT$400",
        image: "/images/flowerpot2.jpg",
        discount: "買三送一",
      },
      {
        id: 6,
        name: "帶補水口自動吸水花盆",
        price: "NT$200",
        image: "/images/flowerpot1.jpeg",
        discount: "買五送一",
      },
      {
        id: 7,
        name: "北歐簡約素燒圓形陶瓷花盆",
        price: "NT$780",
        image: "/images/flowerpot3.jpg",
        discount: "買10送二",
      },
    ],
    農具: [
      {
        id: 8,
        name: "手工鍛打農具小鋤頭",
        price: "NT$580",
        image: "/images/tool1.jpg",
        discount: "買三送一",
      },
      {
        id: 9,
        name: "FJ-900 福鹿牌 修枝剪",
        price: "NT$350",
        image: "/images/tool2.jpg",
        discount: "買五送一",
      },
      {
        id: 10,
        name: "CJ-300 雜草抑制蓆",
        price: "NT$600",
        image: "/images/tool3.jpg",
        discount: "買10送二",
      },
    ],
  };

  return (
    <div className="baby">
      <div className="baby-header">
        <Link to="/" className="house-icon">
          <i className="fa-solid fa-house"></i>
        </Link>
        <span className="header-text">▶ 寶貝小物</span>
      </div>
      <div className="baby-container">
        {Object.entries(products).map(([category, items]) => (
          <ProductList key={category} title={category} products={items} />
        ))}
      </div>
    </div>
  );
};

export default Baby;
