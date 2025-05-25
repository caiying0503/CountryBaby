import React, { useState } from 'react';
import '../css/LogIn.css';
import { Link } from 'react-router-dom';

function LogIn() {

  return (
    <div>
      <div className="system_name">
        <h2>歡迎回來 鄉村寶貝</h2>
      </div>

      <div className="login_page">
        <div id="container1" >
          <div className="login">
            <h3>登入 Login</h3>
            <form action="用戶管理.php">
              <input type="text" id="username" name="username" placeholder="帳號" required />
              <div className="tab"></div>
              <input type="password" id="password" name="password" placeholder="密碼" required />
              <div className="tab"></div>
              <input
                type="submit"
                value="登入"
                className="submit"
              />
            </form>
            <h5 ><Link to ='/SignUp' className='signup-link'>註冊帳號</Link></h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
