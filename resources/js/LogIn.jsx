// resources/js/LogIn.jsx
import React, { useState, useContext } from 'react';
import '../css/LogIn.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './AuthContext.jsx';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // 從 Context 拿 setIsLoggedIn
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const response = await axios.post(
        '/api/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      // 後端回傳 { token, user }
      const { token, user } = response.data;

      // 把 token & user 存到 localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // 更新 Context：標記為已登入
      setIsLoggedIn(true);

      // 顯示「登入成功」小視窗，並在 1 秒後關閉並導回首頁
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate('/');
      }, 1000);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setErrorMsg('帳號或密碼錯誤');
      } else if (err.response && err.response.status === 422) {
        setErrorMsg('請填寫正確的 email 與 password');
      } else {
        console.error('登入失敗', err);
        setErrorMsg('登入時發生錯誤，請稍後再試');
      }
    }
  };

  return (
    <div>
      <div className="system_name">
        <h2>歡迎回來 鄉村寶貝</h2>
      </div>

      <div className="login_page">
        <div id="container1">
          <div className="login">
            <h3>登入 Login</h3>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="電子郵件"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="tab"></div>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="密碼"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="tab"></div>

              {errorMsg && <p className="error-msg">{errorMsg}</p>}

              <input type="submit" value="登入" className="submit" />
            </form>
            <h5>
              <Link to="/SignUp" className="signup-link">
                註冊帳號
              </Link>
            </h5>
          </div>
        </div>
      </div>

      {/* Login 成功 Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px 30px',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: 0, fontSize: '1rem', color: '#b2c89e' }}>
              登入成功！
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LogIn;
