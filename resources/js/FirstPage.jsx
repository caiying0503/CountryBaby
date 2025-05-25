import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './FirstPage.css'
import '../css/bottom.css';
import '../css/Goals.css';


// 照片輪播
export function Carousel() {

  return(
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <br/><br/><br/>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/AD1.png" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="/images/AD2.png" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="/images/AD3.png" className="d-block w-100" alt="..."/>
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
  )

    // return (
    //   <>
    //     <br/><br/><br/>
    //     <div id="carouselExampleSlidesOnly" className="carousel-slide" data-bs-ride="carousel">
    //       <div className="carousel-inner">
    //         <div className="carousel-item active">
    //           <img src="./AD1.png" className="d-block w-100" alt="AD1" />
    //         </div>
    //         <div className="carousel-item">
    //           <img src="./AD2.png" className="d-block w-100" alt="AD2" />
    //         </div>
    //         <div className="carousel-item">
    //           <img src="./AD3.png" className="d-block w-100" alt="AD3" />
    //         </div>
    //       </div>
    //     </div>
    //   </>
    // );
    
}
  
  // 目標圖
export function Goals() {
    return (
    <div id="container">
        <div id="goal"><img src="/images/1.png" alt="goal1" width="100%" /></div>
        <div id="goal"><img src="/images/2.png" alt="goal2" width="100%" /></div>
        <div id="goal"><img src="/images/3.png" alt="goal3" width="100%" /></div>
        <div id="goal"><img src="/images/4.png" alt="goal4" width="100%" /></div>
        <div id="goal"><img src="/images/5.png" alt="goal5" width="100%" /></div>
        <div id="goal"><img src="/images/6.png" alt="goal6" width="100%" /></div>
    </div>
    );
}
  
  // 底部資訊
export function Bottom(){
    return(
    <div id="bottom">
      <div className='author'>
        <h4>- Author -</h4>
        <p>智商二甲 C111156109 賴姵岑<br/>
        智商二甲 C111156132 呂采縈
        </p>
      </div>
      <div className='informations'>
        <h4>- Informations -</h4>
        <p>Email:<br/>
        C111156109@nkust.edu.tw<br/>
        C111156132@nkust.edu.tw<br/>
        </p>
      </div>
    </div>
    );
}



