import React ,{ useState }from 'react';
import '../css/SignUp.css';
import { Link } from 'react-router-dom';


function SignUp() {

  return (
    <div className="signup_page">
      <div id="container2">
        <div className="signup">
          <h3>註冊 Sign Up</h3>
          <form action="用戶管理.php">
            <input type="text" id="fullname" name="fullname" placeholder="使用者全名" required />
            <div className="tab"></div>
            <input type="text" id="username2" name="username" placeholder="帳號" required />
            <div className="tab"></div>
            <input type="password" id="password2" name="password" placeholder="密碼" required />
            <div className="tab"></div>
            <input
              type="password"
              id="comfirm_password"
              name="comfirm_password"
              placeholder="確認密碼"
              required
            />
            <div className="tab"></div>
            <input type="submit" value="註冊" className="submit" />
          </form>
          <h5><Link to ='/LogIn' className='login-link'>登入帳號</Link></h5>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

