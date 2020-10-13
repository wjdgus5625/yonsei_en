import React, { useState, useEffect } from 'react';
import Header from '../header/index'
import Footer from '../footer/index'

import qs from 'qs';
import Axios from 'axios';

import ApiConfig from '../../config/apiConfig/index'

const Main = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    const [recommend, setRecommend] = useState([]) 
    const m_site_cd = query.m_site_cd !== undefined && query.m_site_cd.length > 0 && query.m_site_cd !== "undefined" ? query.m_site_cd : "sev"
    const [keyword, setKeyword] = useState("");

    const getSearch = () => {
		if(keyword !== undefined && keyword.replace(/[\\ ]/gi, '').length > 0) {
			window.location.href = '/search/result?m_site_cd=' + m_site_cd + '&keyword=' + keyword;
		} else {
			alert("검색어를 입력해주세요!!")
			return;
		}
    }

    useEffect(() => {
        console.log('recommend useEffect')
        const getPopKeyword = async () => {
          const result = await Axios.get(ApiConfig.recommend_path + '?m_site_cd=' + m_site_cd)
          .then(resp => {
            return resp.data;
          })
          .catch(err => {
            if(err.response === undefined) {
              alert(err.message)
            } else {
              alert(err.response.data.message)
            }
            
          });
          if(result) setRecommend(result)
        }
    
        if(m_site_cd !== undefined && m_site_cd.length > 0) {
            getPopKeyword();
        }
        
    }, [m_site_cd]);

    return (
        <div className="wrapper">
            <Header m_site_cd={m_site_cd}/>
            <div id="content" className="bg-darkprimary">
                <div className="container">
                    <div className="index-cont-wrap">
                        <div className="search-input-wrap">
                            <input type="text" 
                                   className="form-control searching text-title" 
                                   placeholder="검색어를 입력해주세요" 
                                   title="검색어 입력"
                                   style={{width: "100%"}}
                                   onChange={(e) => setKeyword(e.target.value)} value={keyword} 
                                   onKeyPress={(e) => e.key === "Enter" ? getSearch() : ""}
                            />
                            <span className="btn-icon-box">
                                <button type="button" className="btn" onClick={() => getSearch()}>
                                    <i className="ico ico-totalsearch-index"></i>
                                    <span className="sr-only">검색</span>
                                </button>
                            </span>
                        </div>
                        <div className="search-keyword-wrap mt-lg-10 mt-md-7">
                            
                            {
                                recommend.map((data, index) => {
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