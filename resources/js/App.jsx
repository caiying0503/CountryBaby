import { Routes , Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import Header from './Header.jsx';
import ProductGrid from './ProductGrid.jsx';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';
import Famor from './famor.jsx';
import Baby from './baby.jsx';
import VideoPage from './video.jsx';
import About from './about.jsx';
import { Carousel, Bottom, Goals } from './FirstPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<div><Header/><Carousel /><Goals /><Bottom /></div>}></Route>
      <Route path='/ProductGrid' element={<div><Header /><ProductGrid /></div>}></Route>
      <Route path='/LogIn' element={<div><Header/><LogIn/></div>}></Route>
      <Route path='/SignUp' element={<div><Header/><SignUp/></div>}></Route>
      <Route path='/Famor' element={<div><Header/><Famor/></div>}></Route>
      <Route path='/Baby' element={<div><Header/><Baby/></div>}></Route>
      <Route path='/VideoPage' element={<div><Header/><VideoPage/></div>}></Route>
      <Route path='/About' element={<div><Header/><About/></div>}></Route>
    </Routes>
  );
}

export default App;
