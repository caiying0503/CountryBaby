import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/bottom.css';
import '../css/Goals.css';

// 照片輪播
export function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/AD1.png" className="d-block w-100" alt="AD1" />
        </div>
        <div className="carousel-item">
          <img src="/images/AD2.png" className="d-block w-100" alt="AD2" />
        </div>
        <div className="carousel-item">
          <img src="/images/AD3.png" className="d-block w-100" alt="AD3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

// 目標圖
export function Goals() {
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png"
  ];

  return (
    <div id="container">
      {images.map((src, index) => (
        <div id="goal" key={index}>
          <img src={src} alt={`goal${index + 1}`} width="100%" />
        </div>
      ))}
    </div>
  );
}


// 底部資訊
export function Bottom() {
  return (
    <div id="bottom">
      <div className="container">
        {/* 作者資訊 */}
        <div className="column">
          <h4>Author</h4>
          <p>
            智商二甲 C111156109 賴姵岑<br />
            智商二甲 C111156132 呂采縈
          </p>
        </div>
        {/* 聯絡資訊 */}
        <div className="column">
          <h4>Contact</h4>
          <p>
            Email:<br />
            <a href="mailto:C111156109@nkust.edu.tw">C111156109@nkust.edu.tw</a><br />
            <a href="mailto:C111156132@nkust.edu.tw">C111156132@nkust.edu.tw</a>
          </p>
        </div>
        {/* 社群連結 */}
        <div className="column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
