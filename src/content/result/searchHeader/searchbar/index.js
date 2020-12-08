import React, { useState, useRef } from 'react';

import AutoKeyword from '../../../component/autoKeyword/index'

import SearchViewSetting from '../../../../config/searchViewSetting/index';

const SearchBar = (props) => {
    let m_site_cd = props.request.m_site_cd
    let keyword = props.request.keyword || "";
    let reSearchKeyword = props.request.reSearchKeyword || "";

    const m_site_cdList = SearchViewSetting.m_site_cdList;
    const m_site_cdList_en = SearchViewSetting.m_site_cdList_en;

	const [select1Open, setSelect1Open] = useState(false);
	const select1Toggle = () => {
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
    const searchInput = useRef();

    const keywordFocus = () => {
        if(keyword.length === 0 && props.cookies.recentkeyword !== undefined) {
            props.setKeywordMatch({ list: props.cookies.recentkeyword, type: "recentkeyword" })
        } else if(keyword.length === 0 && props.cookies.recentkeyword !== undefined) {
            props.setKeywordMatch({ list: [], type: "recentkeyword" })
        } else if(keyword.length > 0) {
            props.getAutoComplete(keyword)
        }
	}
	
	const deleteRecentKeyword = (keyword) => {
        searchInput.current.focus()
        if(props.cookies.recentkeyword.includes(keyword)) {
            props.cookies.recentkeyword.splice(props.cookies.recentkeyword.indexOf(keyword), 1)
            props.setCookie('recentkeyword', props.cookies.recentkeyword)
            props.setKeywordMatch({ list: props.cookies.recentkeyword, type: "recentkeyword" })
        }
    }

    const allDeleteRecentKeyword = () => {
        searchInput.current.focus()
        props.cookies.recentkeyword = []
        props.setCookie('recentkeyword', [])
        props.setKeywordMatch({ list: [], type: "recentkeyword" })
    }

    return (
        <div className="search-bar">
            <div className={select1Open ? "dropdown-control opened" : "dropdown-control"}>
                <button type="button" className="btn-dropdown text-xl" onClick={select1Toggle}>{m_site_cd === undefined ? "Select" : SearchViewSetting.m_site_cd[m_site_cd] || "Select"}</button>
                <div className="dropdown-list custom-scroll">
                    <ul>
                        {
                            m_site_cdList.map((data, index) => {
                                return (
                                    <SelectList key={data} onClick={() => props.selectChange(data)} addText={m_site_cdList_en[index]}></SelectList>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            
            <div className="input-group mt-md-2" style={{maxWidth: "930px"}}>
                <div>
                    <input type="text" 
                        className="form-control searching" 
                        placeholder="Please enter a search term" 
                        title="Please enter a search term"
                        ref={searchInput}
                        onChange={(e) => props.changeKeyword(e.target.value, props.checked ? "reSearchKeyword" : "keyword")} 
                        value={props.checked ? reSearchKeyword : keyword} 
                        onKeyPress={(e) => e.key === "Enter" ? props.getSearch() : ""}
                        onFocus={() => keywordFocus()}
                        onBlur={() => props.setKeywordMatch({})}
                    />
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
                <span className="input-addon">
                    <button type="button" className="btn btn-input btn-icon" onClick={props.getSearch}>
                        <i className="ico ico-totalsearch-white"></i>
                        <span className="sr-only">Search</span>
                    </button>
                </span>
            </div>
            
        </div>
    )
}

export default SearchBar;