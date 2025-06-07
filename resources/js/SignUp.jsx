// resources/js/SignUp.jsx
import React, { useState } from 'react';
import '../css/SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

const handleSignUp = async (e) => {
  e.preventDefault();
  setErrors({});

  if (password !== confirmPassword) {
    setErrors({ confirmPassword: '密碼與確認密碼不一致' });
    return;
  }

  try {
    await axios.post(
      '/api/register',
      {
        name: fullName,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // 註冊成功 → 顯示 modal，延遲跳轉登入頁
    setShowModal(true);
    setTimeout(() => {
      navigate('/LogIn');
    }, 1000);
  } catch (err) {
    if (err.response && err.response.status === 422) {
      setErrors(err.response.data.errors); // Laravel 預設是 `errors`
    } else {
      console.error('註冊失敗', err);
    }
  }
};


  return (
    <div className="signup_page">
      <div id="container2">
        <div className="signup">
          <h3>註冊 Sign Up</h3>
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="使用者全名"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <div className="tab"></div>

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
              placeholder="密碼 (至少 6 碼)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="tab"></div>

            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="確認密碼"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className="tab"></div>

            {/* 顯示錯誤訊息（紅色） */}
            {errors.name && <p className="error">{errors.name[0]}</p>}
            {errors.email && <p className="error">{errors.email[0]}</p>}
            {errors.password && <p className="error">{errors.password[0]}</p>}
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}

            <input type="submit" value="註冊" className="submit" />
          </form>
          <h5>
            <Link to="/LogIn" className="login-link">登入帳號</Link>
          </h5>
        </div>
      </div>

      {/* 註冊成功 Modal */}
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
              註冊成功！
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
