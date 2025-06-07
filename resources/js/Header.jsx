import React, { useState, useContext, useEffect } from 'react';
import '../css/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext.jsx';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/LogIn');
  };

  useEffect(() => {}, [isLoggedIn]);

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
              全部商品
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
          </li>
          <li className="dropdown user-menu">
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
            <ul className="dropdown-menu">
              {isLoggedIn ? (
                <>
                  <li><Link to="/Profile">我的資料</Link></li>
                  <li><button className="logout-btn" onClick={handleLogout}>登出</button></li>
                </>
              ) : (
                <>
                  <li><Link to="/LogIn">會員登入</Link></li>
                  <li><Link to="/SignUp">註冊會員</Link></li>
                </>
              )}
            </ul>
          </li>

          <li className="cart">
            <Link to="/ShoppingCart" className="cart-icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </div>
      </ul>

      <div id="mySidebar" className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <a href="#" className="closebtn" onClick={toggleSidebar}>×</a>
        <Link to="/About">About</Link>
      </div>
    </>
  );
}

export default Header;
