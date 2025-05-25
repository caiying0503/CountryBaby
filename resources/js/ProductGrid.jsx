import React, { useRef } from 'react';
import '../css/ProductGrid.css';
// import './ProductGrid.module.css';


const ProductGrid = () => {

  const allProductsRef = useRef(null);
  const vegetableProductsRef = useRef(null);
  const fruitProductsRef = useRef(null);
  const toolsProductsRef = useRef(null);
  return (
    <div className="main-container">
      <div className="product-sidebar">
        <h2>商品分類</h2>
        <ul>
        <li><a href="#" onClick={() => allProductsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}>全部商品</a></li>
          <li><a href="#" onClick={() => vegetableProductsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}>蔬菜排行</a></li>
          <li><a href="#" onClick={() => fruitProductsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}>水果排行</a></li>
          <li><a href="#" onClick={() => toolsProductsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}>農具排行</a></li>

        </ul>
      </div>

      <div className="content">
      <div ref={allProductsRef} >
        <div className="section">
          <h2>全部商品</h2>
          <div className="products">
            <div className="product">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dU5j46de3N3_6TVP1OMQOIZCtnxaON1Dg&s" alt="product" />
              <div className="product-info">
                <p>愛文芒果 (6公斤/盒 約10顆) 1箱/免運</p>
                <span>怡君開心農場</span>
                <p className="price">NT$890</p>
              </div>
            </div>
            <div className="product">
              <img src="https://img.ltn.com.tw/Upload/food/page/2016/04/10/160410-1242-00-SXDOn.jpg" alt="product" />
              <div className="product-info">
                <p>高山高麗菜 (約8公斤/10顆) </p>
                <span>芳宜農作</span>
                <p className="price">NT$600</p>
              </div>
            </div>
            <div className="product">
              <img src="https://img.ltn.com.tw/Upload/food/page/2018/04/23/180423-7478-0-6UNcA.jpg" alt="product" />
              <div className="product-info">
                <p>台農17號金鑽鳳梨5公斤3顆x1箱(產銷履歷_大顆)</p>
                <span>大熊農場</span>
                <p className="price">NT$790</p>
              </div>
            </div>
          </div>
          <a href="#">查看所有商品</a>
        </div>
        </div>

        <div className="section">
        <div ref={vegetableProductsRef} >
          <h2>蔬菜排行</h2>
          <div className="products">
            <div className="product">
              <img src="https://img.ltn.com.tw/Upload/food/page/2016/04/10/160410-1242-00-SXDOn.jpg" alt="product" />
              <div className="product-info">
                <p>高山高麗菜</p>
                <span>芳宜農作</span>
                <p className="price">NT$600</p>
              </div>
            </div>
            <div className="product">
              <img src="https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/9816216/0/638521502659370000?v=1" alt="product" />
              <div className="product-info">
                <p>白蘿蔔 2500g</p>
                <span>鮮友</span>
                <p className="price">NT$250</p>
              </div>
            </div>
            <div className="product">
              <img src="https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/8873261/0/638518896529400000?v=1" alt="product" />
              <div className="product-info">
                <p>有機蚵仔白菜500g</p>
                <span>山上農樂</span>
                <p className="price">NT$90</p>
              </div>
            </div>
          </div>
          <a href="#">查看所有商品</a>
        </div>
        </div>

        <div className="section">
        <div ref={fruitProductsRef} >
          <h2>水果排行</h2>
          <div className="products">
            <div className="product">
              <img src="https://shoplineimg.com/5d08366e3f64c1000128316b/61692db02b79a70035c26b08/800x.webp?source_format=jpg" alt="product" />
              <div className="product-info">
                <p>社頭冠軍芭樂禮盒[冷藏](珍珠芭樂8斤裝)</p>
                <span>社頭冠軍芭樂</span>
                <p className="price">NT$700</p>
              </div>
            </div>
            <div className="product">
              <img src="https://shoplineimg.com/5d08366e3f64c1000128316b/620240fe2ca2e30029cd4213/800x.webp?source_format=jpg" alt="product" />
              <div className="product-info">
                <p>晶彩巨峰葡萄</p>
                <span>晶彩農作</span>
                <p className="price">NT$600</p>
              </div>
            </div>
            <div className="product">
              <img src="https://shoplineimg.com/5d08366e3f64c1000128316b/664ff7a4cc9ea0000da6cf1b/800x.webp?source_format=jpg" alt="product" />
              <div className="product-info">
                <p>美國加州空運櫻桃2KG</p>
                <span>嘉農蔬果</span>
                <p className="price">NT$2200</p>
              </div>
            </div>
          </div>
          <a href="#">查看所有商品</a>
        </div>
        </div>

        <div className="section">
        <div ref={toolsProductsRef} >
          <h2>農具排行</h2>
          <div className="products">
            <div className="product">
              <img src="https://images.pcone.com.tw/uploads/product_image/7278614/33c47320038d34d71b5cfbd837ca2efc/4927e2d987ff4fd332021ea941314ab9.png" alt="product" />
              <div className="product-info">
                <p>鏟子 挖土工具</p>
                <span>激馬力</span>
                <p className="price">NT$89</p>
              </div>
            </div>
            <div className="product">
              <img src="https://gw.alicdn.com/imgextra/i1/2691566544/O1CN01pzUinw1yDCiKpDEUg_!!2691566544.jpg_Q75.jpg_.webp" alt="product" />
              <div className="product-info">
                <p>平地機整平機四輪拖拉機帶刮板式小型平地機農田整平機土壤整平機</p>
                <span>馬力牌</span>
                <p className="price">NT$8532</p>
              </div>
            </div>
            <div className="product">
              <img src="https://greenorchids.com.tw/wp-content/uploads/2022/06/%E9%9D%9A%E5%9C%9F%E6%92%AD%E7%A8%AE6%E5%85%AC%E5%8D%87_%E7%BB%93%E6%9E%9C-3-scaled.jpg" alt="product" />
              <div className="product-info">
                <p>翠筠靚土培養土 添加有機質肥料 -25公升</p>
                <span>翠筠</span>
                <p className="price">NT$230</p>
              </div>
            </div>
          </div>
          <a href="#">查看所有商品</a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
