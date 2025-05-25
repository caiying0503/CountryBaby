import React from 'react';
import '../css/video.css';
import { Link } from 'react-router-dom';

const cardsData = [
  {
    title: '小菜換盆秘笈',
    text: 'HOW TO TRANSPLANT SEEDLINGS',
    image: 'https://i.ibb.co/jrHtfQV/2.png',
    videoSrc: 'https://www.youtube.com/embed/8nZ_jbj1BmY?si=kr49-25goqFTH_Fg'
  },
  {
    title: '小菜澆水的好時機',
    text: 'HOW TO WATER SEEDLINGS',
    image: 'https://i.ibb.co/bQmzVrc/image.jpg',
    videoSrc: 'https://www.youtube.com/embed/PMuiaYawDoQ?si=-AoNyMpWmHGy7GYu'
  },
];

const VideoPage = () => {
  return (
    <div className='video'>
      <div className='video-header'>
          <Link to ="/" className='house-icon'><i className="fa-solid fa-house"></i></Link>
          <span className="header-text">▶ 植栽教學</span>
      </div>
      <div className="video-container">
        <div className="video-header-image">
        </div>
        <div className="video-content">
          <div className="video-section">
            <h2 className="video-section-title">影片教學</h2>
            <p className="video-section-text">
              選擇您感興趣的主題，觀看小菜植栽的簡易教學影片。
            </p>
          </div>
          <div className="video-cards">
            {cardsData.map((card, index) => (
              <div className="video-card" key={index}>
                <img src={card.image} alt="product" className="video-card-image"/>
                <div className="video-card-details">
                {/* <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.text}</p> */}
                <div className="card-video">
                    <iframe
                      width="100%"
                      height="450"
                      src={card.videoSrc}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
