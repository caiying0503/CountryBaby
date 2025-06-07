// resources/js/MemberProfile.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/MemberProfile.css';

function MemberProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // 若沒有 user → 導回登入頁
      navigate('/LogIn');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // 若你改成用 Context 也可在這裡呼叫 setIsLoggedIn(false)
    navigate('/LogIn');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h2>會員資料</h2>
        <div className="profile-info">
          <label>名稱：</label>
          <span>{user.name}</span>
        </div>
        <div className="profile-info">
          <label>電子郵件：</label>
          <span>{user.email}</span>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          登出
        </button>
      </div>
    </div>
  );
}

export default MemberProfile;
