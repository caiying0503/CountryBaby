// resources/js/App.jsx
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

import axios from 'axios';
axios.defaults.withCredentials = true;

import Header from './Header.jsx';
import ProductGrid from './ProductGrid.jsx';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';
import MemberProfile from './MemberProfile.jsx';
import Famor from './famor.jsx';
import Baby from './baby.jsx';
import AllProducts from './AllProducts.jsx';
import ProductFruits from './ProductFruits.jsx';
import ProductVegetables from './ProductVegetables.jsx';
import VideoPage from './video.jsx';
import About from './about.jsx';
import { Carousel, Bottom, Goals } from './FirstPage.jsx';
import { AuthContext } from './AuthContext.jsx';
import ShoppingCart from './ShoppingCart.jsx';


function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Header />

      <Routes>
        {/* 首頁（所有人可見） */}
        <Route path="/" element={
          <div>
            <Carousel />
            <Goals />
            <Bottom />
          </div>
        } />

        {/* 商品與內容頁（所有人可見） */}
        <Route path="/ProductGrid" element={<ProductGrid />} />
        <Route path="/Famor" element={<Famor />} />
        <Route path="/Baby" element={<Baby />} />
        <Route path='/AllProducts' element={<AllProducts />}></Route>
        <Route path='/ProductVegetables' element={<ProductVegetables/>}></Route>
        <Route path='/ProductFruits' element={<ProductFruits/>}></Route>
        <Route path="/VideoPage" element={<VideoPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />

        {/* 登入／註冊（已登入者強制導回首頁） */}
        <Route path="/LogIn" element={
          isLoggedIn ? <Navigate to="/" replace /> : <LogIn />
        } />

        <Route path="/SignUp" element={
          isLoggedIn ? <Navigate to="/" replace /> : <SignUp />
        } />

        {/* 僅限會員：會員資料頁 */}
        <Route path="/Profile" element={
          isLoggedIn ? <MemberProfile /> : <Navigate to="/LogIn" replace />
        } />

        {/* 其他未知路由 → 導回首頁 */}
        <Route path="*" element={<Navigate to="/" replace />} />


      </Routes>
    </>
  );
}

export default App;
