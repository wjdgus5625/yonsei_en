import React from 'react';

const searchMenu = () => {
    return (
        <nav className="tab-menu tab-menu1 tab-menu-search tab-menu-flicking">
            <div className="tab-scroll-container">
                <ul className="tab-list">
                    <li className="on"><a href="#tab-content1"><span>통합검색</span></a></li>
                    <li><a href="#tab-content2"><span>진료과</span></a></li> 
                    <li><a href="#tab-content3"><span>의료진</span></a></li>
                    <li><a href="#tab-content4"><span>건강정보</span></a></li>
                    <li><a href="#tab-content5"><span>세미나/강좌</span></a></li>
                    <li><a href="#tab-content6"><span>뉴스/소식</span></a></li>
                    <li><a href="#tab-content7"><span>이용안내</span></a></li>
                    <li><a href="#tab-content8"><span>병원소개</span></a></li>
                </ul>
                <div className="control start">
                    <button type="button" className="btn-tab-prev">Prev</button>
                    <button type="button" className="btn-tab-next">Next</button>
                </div>
            </div>
        </nav>
    )
}

export default searchMenu;