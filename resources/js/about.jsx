import React from 'react';
// import { Link } from 'react-router-dom';
// import React, { useEffect } from 'react';
import '../css/about.css';
// import './intersectionObserver';

function About(){

    return(
        <div className='about'>
            <br/><br/><br/><br/>
            <img className="circle--square" src="/images/final-logo.png" />
            <h1 className='about-h1'>鄉村寶貝</h1>
            <p className='about-p'>歡迎來到我們的農產品銷售平台，我們致力於為一般大眾提供一個方便且友善的市場，讓所有的農友能夠輕鬆地將自己的農產品上架販售。我們相信，透過直接的銷售方式，可以讓更多的人享受到新鮮、優質的農產品，同時也能讓農友獲得更大的利益。</p>
            <hr className="hr"/>
            <div className="g">
                <div className="line"></div>
                <img src="/images/1.png" alt="goal1"/>
                <p className='about-p'>我們的平台專注於支持小農，讓他們能夠將自己辛勤耕作的農產品直接賣給消費者，避免中間商剝削，確保小農能夠得到應有的報酬。</p>
            </div>

            <hr className="hr"/>
            <div className="g2">
                <div className="line2"></div>
                <img src="/images/2.png" alt="goal2"/>
                <p className='about-p'>通過我們的平台，消費者的每一筆購買都直接回饋給農友。這不僅增加了農友的收入，還激勵他們繼續提供高品質的農產品。</p>
            </div>

            <hr className="hr"/>
            <div className="g">
                <div className="line"></div>
                <img src="/images/3.png" alt="goal3"/>
                <p className='about-p'>我們的市場平台提供自由交易的空間，讓農友和消費者可以自由買賣農產品，無需受限於繁瑣的中間流程，享受最直接的交易體驗。</p>
            </div>

            <hr className="hr"/>
            <div className="g2">
                <div className="line2"></div>
                <img src="/images/4.png" alt="goal4"/>
                <p className='about-p'>我們堅持平台0抽成政策，讓農友可以在不被收取任何手續費的情況下，將自己的產品上架販售，最大化他們的利潤。</p>
            </div>

            <hr className="hr"/>
            <div className="g">
                <div className="line"></div>
                <img src="/images/5.png" alt="goal5"/>
                <p className='about-p'>我們提供直接的銷售通路，讓農友和消費者可以進行點對點的交易，減少中間環節的浪費和延遲，確保產品的新鮮度和品質。</p>
            </div>

            <hr className="hr"/>
            <div className="g2">
                <div className="line2"></div>
                <img src="/images/6.png" alt="goal6"/>
                <p className='about-p'>我們不僅是一個銷售平台，還是一個學習和成長的社群。我們提供從零到有的種植教學，幫助有志於農業的朋友掌握必要的技能，開啟他們的農業之旅。</p>
            </div>
    </div>
    )
}


export default About;
