import React, { useState, useRef } from 'react';
import { useCookies } from 'react-cookie'

import AutoKeyword from '../../../component/autoKeyword/index'

import SearchViewSetting from '../../../../config/searchViewSetting/index';

const SearchBar = (props) => {
    let m_site_cd = props.request.m_site_cd
    let keyword = props.request.keyword || "";
    let reSearchKeyword = props.request.reSearchKeyword || "";

    const m_site_cdList = SearchViewSetting.m_site_cdList;
    const m_site_cdList_kor = SearchViewSetting.m_site_cdList_kor;

	const [select1Open, setSelect1Open] = useState(false);
	const select1Toggle = () => {
        props.modalClose()
		select1Open ? setSelect1Open(false) : setSelect1Open(true);
	}
    const SelectList = ({onClick, addText}) => {
        const [hover, setHover] = useState(false)
        return (
          <li onClick={onClick} style={{cursor: "pointer", color: hover ? "#0094FB": ""}} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            {addText}
          </li>
        );
    }
    const [cookies, setCookie] = useCookies('recentkeyword', [])
    const searchInput = useRef();

    const keywordFocus = () => {
        if(props.request.keyword.length === 0 && cookies.recentkeyword !== undefined) {
            props.setKeywordMatch({ list: cookies.recentkeyword, type: "recentkeyword" })
        } else if(props.request.keyword.length > 0) {
            props.getAutoComplete(props.request.keyword)
        }
	}
	
	const deleteRecentKeyword = (keyword) => {
        searchInput.current.focus()
        if(cookies.recentkeyword.includes(keyword)) {
            cookies.recentkeyword.splice(cookies.recentkeyword.indexOf(keyword), 1)
            setCookie('recentkeyword', cookies.recentkeyword)
            props.setKeywordMatch({ list: cookies.recentkeyword, type: "recentkeyword" })
        }
    }

    const allDeleteRecentKeyword = () => {
        searchInput.current.focus()
        cookies.recentkeyword = []
        setCookie('recentkeyword', [])
        props.setKeywordMatch({ list: [], type: "recentkeyword" })
    }

    return (
        <div className="search-bar">
            <div className={select1Open ? "dropdown-control opened" : "dropdown-control"}>
                <button type="button" className="btn-dropdown text-xl" onClick={select1Toggle}>{m_site_cd === undefined ? "기관선택" : SearchViewSetting.m_site_cd[m_site_cd] || "기관선택"}</button>
                <div className="dropdown-list custom-scroll">
                    <ul>
                        {
                            m_site_cdList.map((data, index) => {
                                return (
                                    <SelectList key={data} onClick={() => props.selectChange(data)} addText={m_site_cdList_kor[index]}></SelectList>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            
            <div className="input-group mt-md-2" style={{maxWidth: "930px"}}>
                <input type="text" 
                    className="form-control searching" 
                    placeholder="검색어를 입력해주세요" 
                    title="검색어를 입력해주세요"
                    ref={searchInput}
                    onChange={(e) => props.changeKeyword(e.target.value, props.checked ? "reSearchKeyword" : "keyword")} 
                    value={props.checked ? reSearchKeyword : keyword} 
                    onKeyPress={(e) => e.key === "Enter" ? props.getSearch() : ""}
                    onFocus={() => keywordFocus()}
                    onBlur={() => props.setKeywordMatch({})}
                />
                <span className="input-addon">
                    <button type="button" className="btn btn-input btn-icon" onClick={props.getSearch}>
                        <i className="ico ico-totalsearch-white"></i>
                        <span className="sr-only">검색</span>
                    </button>
                    <button type="button" className="btn btn-input btn-icon" onClick={props.modalOpen}>
                        <i className="ico ico-totalsearch-plus-white"></i><span className="sr-only">상세검색</span></button>
                </span>
                {
                    props.keywordMatch.type !== undefined && (props.keywordMatch.type === "recentkeyword" || props.keywordMatch.type === "autocomplete") ? 
                    <AutoKeyword 
                        type={props.keywordMatch.type}
                        list={props.keywordMatch.list !== undefined ? props.keywordMatch.list : []}
                        removeTagList={props.keywordMatch.removeTagList !== undefined ? props.keywordMatch.removeTagList : []}
                        deleteRecentKeyword={deleteRecentKeyword}
                        allDeleteRecentKeyword={allDeleteRecentKeyword}
                        m_site_cd={m_site_cd}
                    /> : "" 
                }
            </div>
        </div>
    )
}

export default SearchBar;