import React, { useState, useEffect } from 'react';
import Header from '../header/index'
import Footer from '../footer/index'

import qs from 'qs';
import Axios from 'axios';
import parser from 'html-react-parser';
import { useCookies } from 'react-cookie'


import ApiConfig from '../../config/apiConfig/index'
import SearchViewSetting from '../../config/searchViewSetting/index'

const Main = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    const [cookies, setCookie] = useCookies(['recentkeyword'])
    console.log(cookies)
    const [recommend, setRecommend] = useState([]) 
    const [keyword, setKeyword] = useState("");
    const [autocomplete, setAutocomplete] = useState([]);
    const [keywordMatch, setKeywordMatch] = useState([]);

    const m_site_cd = query.m_site_cd !== undefined && query.m_site_cd.length > 0 && query.m_site_cd !== "undefined" ? query.m_site_cd : "sev"

    const getSearch = () => {
		if(keyword !== undefined && keyword.replace(/[\\ ]/gi, '').length > 0) {
            if(cookies.recentkeyword !== undefined) {
                setCookie('recentkeyword', cookies.recentkeyword += ',' + keyword)
            } else {
                setCookie('recentkeyword', keyword)
            }
            
			window.location.href = '/search/result?m_site_cd=' + m_site_cd + '&keyword=' + keyword;
		} else {
			alert("검색어를 입력해주세요!!")
			return;
		}
    }

    const getAutoComplete = async (keyword) => {
		const result = await Axios.get(ApiConfig.autocomplete_path + '?keyword=' + keyword)
        .then(resp => {
            return resp.data;
        })

        if(result) {
            setAutocomplete(result.autocomplete.list)
            if(result.doctor.list.length > 0) {
                setKeywordMatch(result.doctor.list)
            } else if(result.dept.list.length > 0) {
                setKeywordMatch(result.dept.list)
            }
        }
    }

    const keywordChange = (keyword) => {
        setKeyword(keyword)
        getAutoComplete(keyword)
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
          if(result) {
            const htmlTitle = document.querySelector("title");
            htmlTitle.innerText = "통합검색 | " + SearchViewSetting.m_site_cd[m_site_cd]
            setRecommend(result)
          }
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
                                   onChange={(e) => keywordChange(e.target.value)} value={keyword} 
                                   onKeyPress={(e) => e.key === "Enter" ? getSearch() : ""}
                            />
                            <span className="btn-icon-box">
                                <button type="button" className="btn" onClick={() => getSearch()}>
                                    <i className="ico ico-totalsearch-index"></i>
                                    <span className="sr-only">검색</span>
                                </button>
                            </span>
                        </div>
                        <div>
                            {
                                <ul>
                                {
                                    keywordMatch.length === 0 ? (
                                        autocomplete.map((data, index) => {
                                            return (
                                                <li key={index}>{parser(data[0])}</li>
                                            )
                                        })
                                    ) : (
                                        keywordMatch.map((data, index) => {
                                            return (
                                                <li key={index}>{data.dept_nm} 키워드 매칭</li>
                                            )
                                        })
                                    )
                                }
                                </ul>
                            }
                        </div>
                        <div className="search-keyword-wrap mt-lg-10 mt-md-7">
                            {
                                recommend.map((data, index) => {
                                    return (
                                        <span key={index} className="keyword-item text-lg text-normal">
                                            <a href={"/search/result?keyword="+data+"&m_site_cd="+m_site_cd}>
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