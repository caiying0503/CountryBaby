// resources/js/AuthContext.jsx
import React, { createContext, useState } from 'react';

// 1. 建立 Context
export const AuthContext = createContext();

// 2. 建立 Provider 元件，包裹整個 App 時使用
export function AuthProvider({ children }) {
  // 初始值用 localStorage（如果 token 存在，就視作已登入）
  const initialLoggedIn = !!localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedIn);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
