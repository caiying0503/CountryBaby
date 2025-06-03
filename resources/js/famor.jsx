import React from 'react';
import '../css/famor.css';
import { Link } from 'react-router-dom';

const famors = [
    {
        title: '大力水手菠菜！有機栽種!',
        farmer: '劉德正農舍',
        description: '台灣本土菠菜，採無農藥種植、環境永續，遠續發展小番茄在這裡',
        imageUrl:'https://cdn.hk01.com/di/media/images/cis/5dd787365272b81167ca51ae.jpg/UL6hMM6n8fL4iH8xfSa4ZTf0BwHcnPenhOG6b4Thum8?v=w1920',
        farmerImageUrl:'https://i.pinimg.com/564x/ec/c2/f4/ecc2f4794c6c72493186bafc03731c18.jpg',
    },
    {
        title: '芒果界LV 草生夏雪芒果',
        farmer: '楊敏志',
        description: '濃郁香氣細緻口感，芒果季節不一樣的選擇！',
        imageUrl: 'https://i.pinimg.com/564x/f0/25/3b/f0253baa7b8f5e61cdcf6aacfc10fe59.jpg',
        farmerImageUrl: 'https://i.pinimg.com/564x/67/81/e7/6781e7c93ba2a36849c9a1beafce18a1.jpg',
    },
    {
        title: '有機小番茄 甜蜜雙享',
        farmer: '美意田舍',
        description: '稀有軟嫩蜜甜的番茄，無使用任何農藥！走過路過不要錯過',
        imageUrl: 'https://www.foodnext.net/dispPageBox/getFile/GetImg.aspx?FileLocation=%2FPJ-FOODNEXT%2FFiles%2F&FileName=photo-63533-i.jpg',
        farmerImageUrl: 'https://i.pinimg.com/564x/2b/96/21/2b9621ec2a5d20bac60d8b17a9623aba.jpg',
    },
    {
        title: '夏天必吃小玉西瓜',
        farmer: '安安田農場',
        description: '清甜多汁，每一口都是夏日的清涼享受!還在等待什麼馬上下訂吧',
        imageUrl: 'https://i.pinimg.com/564x/53/70/ea/5370ea6b87f62f950f83726d9bc56b8c.jpg',
        farmerImageUrl: 'https://i.pinimg.com/564x/e5/41/2e/e5412e4326624e73af60cf5cc2ba5a56.jpg',
    },
    {
        title: '香甜哈蜜瓜禮盒',
        farmer: '高山綠農場',
        description: '新鮮採摘，口感細膩香甜，讓您感受夏日的清涼與甜美',
        imageUrl: 'https://i.pinimg.com/564x/ce/69/47/ce694700a40cbd657548abcdf05d51e2.jpg',
        farmerImageUrl: 'https://i.pinimg.com/564x/81/4a/7e/814a7e27a782c8776ae97cc70203bcd5.jpg',
    },
    {
        title: '鮮甜鳳梨禮盒',
        farmer: '日光農場',
        description: '黃金甜度，每一口都是熱帶風情的美味享受!今年夏天的最好選擇',
        imageUrl: 'https://rs.joo.com.tw/website/uploads/fckeditor/032/image/2016_5_10_Chen_Nong_6_3.jpg',
        farmerImageUrl: 'https://cdn.ftvnews.com.tw/manasystem/FileData/News/54bd7712-406d-4208-af37-cb5b995169e3.jpg',
    },
    {
        title: '天然葡萄禮盒',
        farmer: '山泉農場',
        description: '粒粒飽滿，香甜多汁，享受自然原味的幸福滋味',
        imageUrl: 'https://i.pinimg.com/564x/b2/84/60/b28460fb874108942bfbda5facc9cfd0.jpg',
        farmerImageUrl: 'https://khh.travel/image/15101/original',
    },
    {
        title: '奇異果禮盒',
        farmer: '山田田山莊',
        description: '補充維他命的最好選擇，享受無與倫比的幸福',
        imageUrl: 'https://blog.vitabox.com.tw/wp-content/uploads/2018/12/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7-2018-12-26-%E4%B8%8B%E5%8D%882.38.27-1.png',
        farmerImageUrl: 'https://voicefriend.blisswisdom.org/images/friend_book/f119/f119-05.jpg',
    },
];

function Famor() {
    return (
        <div className="App">
            <header>
                <div className='header'>
                    <Link to ="/" className='house-icon'><i className="fa-solid fa-house"></i></Link>
                    <span className="header-text">▶ 小農自賣</span>
                </div>
            </header>
            <div className="famor-list">
                {famors.map((famor, index) => (
                    <div className="famor-card" key={index}>
                        <img src={famor.imageUrl} alt={famor.title} className="famor-image" />
                        <h2>{famor.title}</h2>
                        <p>{famor.description}</p>
                        <div className="farmer-info">
                            <img src={famor.farmerImageUrl} alt={famor.farmer} className="farmer-image" />
                            <p className="farmer-name">{famor.farmer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Famor;


