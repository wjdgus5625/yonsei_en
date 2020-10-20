import React, { useState, useEffect, useRef } from 'react';
import Header from '../header/index'
import Footer from '../footer/index'

import qs from 'qs';
import Axios from 'axios';
import { useCookies } from 'react-cookie'
import AutoKeyword from '../component/autoKeyword/index'
import AutoImg from '../component/autoImg/index'
import RecommendKeyword from '../component/recommendKeyword/index'

import ApiConfig from '../../config/apiConfig/index'
import SearchViewSetting from '../../config/searchViewSetting/index'

const Main = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    const [cookies, setCookie] = useCookies('recentkeyword', [])
    const [recommend, setRecommend] = useState([]) 
    const [keyword, setKeyword] = useState("")
    const [keywordMatch, setKeywordMatch] = useState({})
    const searchInput = useRef();
    const m_site_cd = query.m_site_cd !== undefined && query.m_site_cd.length > 0 && query.m_site_cd !== "undefined" ? query.m_site_cd : "sev"
    const getSearch = () => {
		if(keyword !== undefined) {
            if(cookies.recentkeyword !== undefined) {
                if(cookies.recentkeyword.includes(keyword)) {
                    cookies.recentkeyword.splice(cookies.recentkeyword.indexOf(keyword), 1)
                    cookies.recentkeyword.unshift(keyword)
                } else {
                    cookies.recentkeyword.unshift(keyword)
                }
                setCookie('recentkeyword', cookies.recentkeyword)
            } else {
                setCookie('recentkeyword', [keyword])
            }
            
			window.location.href = '/search/result?m_site_cd=' + m_site_cd + '&keyword=' + keyword;
		} else {
			alert("검색어를 입력해주세요!!")
			return;
		}
    }

    const getAutoComplete = async (keyword) => {
        if(keyword.length === 0 && cookies.recentkeyword !== undefined) {
            setKeywordMatch({ list: cookies.recentkeyword, type: "recentkeyword" })
        } else {
            const result = await Axios.get(ApiConfig.autocomplete_path + '?keyword=' + keyword + "&m_site_cd=" + m_site_cd)
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
				console.log(err)
			})
    
            if(result) {
                if(result.doctor !== undefined && result.doctor.list !== undefined && result.doctor.list.length > 0) {
                    setKeywordMatch({ list: result.doctor.list, type: "doctor" })
                } else if(result.dept !== undefined && result.dept.list !== undefined && result.dept.list.length > 0) {
                    setKeywordMatch({ list: result.dept.list, type: "dept" })
                } else {
                    setKeywordMatch({ list: result.autocomplete.list, type: "autocomplete", removeTagList: result.autocomplete.removeTagList })
                }
            }
        }
    }

    const keywordChange = (keyword) => {
        setKeyword(keyword)
        getAutoComplete(keyword)
    }

    const keywordFocus = () => {
        if(keyword.length === 0 && cookies.recentkeyword !== undefined) {
            setKeywordMatch({ list: cookies.recentkeyword, type: "recentkeyword" })
        } else if(keyword.length > 0) {
            getAutoComplete(keyword)
        }
    }

    const deleteRecentKeyword = (keyword) => {
        searchInput.current.focus()
        if(cookies.recentkeyword.includes(keyword)) {
            cookies.recentkeyword.splice(cookies.recentkeyword.indexOf(keyword), 1)
            setCookie('recentkeyword', cookies.recentkeyword)
            setKeywordMatch({ list: cookies.recentkeyword, type: "recentkeyword" })
        }
    }

    const allDeleteRecentKeyword = () => {
        searchInput.current.focus()
        cookies.recentkeyword = []
        setCookie('recentkeyword', [])
        setKeywordMatch({ list: [], type: "recentkeyword" })
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
                                ref={searchInput}
                                onChange={(e) => keywordChange(e.target.value)} value={keyword} 
                                onKeyPress={(e) => e.key === "Enter" ? getSearch() : ""}
                                onFocus={() => keywordFocus()}
                                onBlur={() => setKeywordMatch({})}
                            />
                            <span className="btn-icon-box">
                                <button type="button" className="btn" onClick={() => getSearch()} >
                                    <i className="ico ico-totalsearch-index"></i>
                                    <span className="sr-only">검색</span>
                                </button>
                            </span>
                        </div>
                        {
                            keywordMatch.type !== undefined && (keywordMatch.type === "recentkeyword" || keywordMatch.type === "autocomplete") ? 
                                <AutoKeyword 
                                    type={keywordMatch.type}
                                    list={keywordMatch.list !== undefined ? keywordMatch.list : []}
                                    removeTagList={keywordMatch.removeTagList !== undefined ? keywordMatch.removeTagList : []}
                                    deleteRecentKeyword={deleteRecentKeyword}
                                    allDeleteRecentKeyword={allDeleteRecentKeyword}
                                    m_site_cd={m_site_cd}
                                /> : "" 
                        }
                        {
                            keywordMatch.type !== undefined && (keywordMatch.type === "dept" || keywordMatch.type === "doctor") ? 
                                <AutoImg 
                                    type={keywordMatch.type}
                                    list={keywordMatch.list !== undefined ? keywordMatch.list : []}
                                /> : "" 
                        }
                        <RecommendKeyword
                            recommend={recommend}
                            style={{display: keywordMatch.list !== undefined && keywordMatch.list.length > 0 ? "none": ""}}
                            m_site_cd={m_site_cd}
                        />
                    </div>
                </div>
            </div>
            <Footer />
      </div>
    )
}

export default Main;