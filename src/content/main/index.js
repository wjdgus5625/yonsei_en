import React from 'react';
import Header from '../header/index'
import Footer from '../footer/index'

const Main = () => {
    const recommend_keyword = ["위암", "알레르기", "코로나", "진료예약", "비자신체검사", "건강검진", "광혜원", "후원", "자원봉사", "채용"]
    return (
        <div classNameName="wrapper">
            <Header />
            <div id="content" className="bg-darkprimary">
                <div className="container">
                    <div className="index-cont-wrap">
                        <div className="search-input-wrap">
                            <input type="text" className="form-control searching text-title" placeholder="검색어를 입력해주세요" title="검색어 입력"
                                style={{width: "100%"}} />
                            <span className="btn-icon-box">
                                <button type="button" className="btn"><i className="ico ico-totalsearch-index"></i>
                                    <span className="sr-only">검색</span>
                                </button>
                            </span>
                        </div>
                        <div className="search-keyword-wrap mt-lg-10 mt-md-7">
                            
                            {
                                recommend_keyword.map((data, index) => {
                                    return (
                                        <span key={index} className="keyword-item text-lg text-normal">
                                            <a href="#none">
                                                #{data}
                                            </a>
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
      </div>
    )
}

export default Main;