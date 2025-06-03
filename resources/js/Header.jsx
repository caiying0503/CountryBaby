import React, { useState } from 'react';
import '../css/Header.css';
import { Link } from "react-router-dom";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <ul className="menu">
        <div className="menu-left">
          <li className="fa-bar" onClick={toggleSidebar}>
            <i className="fa-solid fa-bars"></i>
          </li>
          <div className="logo-container">
            <Link to="/">
              <img src="/images/final-logo.png" className="logo" alt="Logo" />
            </Link>
          </div>
          <li className="dropdown">
            <Link to="/ProductGrid" className="dropdown-toggle">
              全部商品<i></i>
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/ProductVegetables">蔬菜</Link></li>
              <li><Link to="/ProductFruits">水果</Link></li>
            </ul>
          </li>
          <li><Link to="/Famor">小農自賣</Link></li>
          <li><Link to="/Baby">寶貝小物</Link></li>
          <li><Link to="/VideoPage">植栽教學</Link></li>
        </div>
        <div className="flex-spacer"></div>
        <div className="menu-right">
          <li className="search-container">
            <div className="search">
              <input className="search-bar" type="text" placeholder="輸入關鍵字搜尋" />
              <button className="search-btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </li>
          <li className="dropdown user-menu">
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
            <ul className="dropdown-menu">
              <li><Link to="/LogIn">會員登入</Link></li>
              <li><Link to="/SignUp">註冊會員</Link></li>
            </ul>
          </li>
          <li className="cart">
            <Link to="/shopping" className="cart-icon"><i className="fa-solid fa-cart-shopping"></i></Link>
          </li>
        </div>
      </ul>
      {/* 側邊欄 */}
      <div id="mySidebar" className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <a href="#" className="closebtn" onClick={toggleSidebar}>×</a>
        <Link to="/About">About</Link>
      </div>
    </>
  );
}

export default Header;