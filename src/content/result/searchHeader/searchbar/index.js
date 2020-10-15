import React, { useState } from 'react';
import SearchViewSetting from '../../../../config/searchViewSetting/index';

const SearchBar = ({modalOpen, getSearch, changeKeyword, request, selectChange, modalClose, checked}) => {
    let m_site_cd = request.m_site_cd
    let keyword = request.keyword || "";
    let reSearchKeyword = request.reSearchKeyword || "";
    
    const m_site_cdList = SearchViewSetting.m_site_cdList;
    const m_site_cdList_kor = SearchViewSetting.m_site_cdList_kor;

	const [select1Open, setSelect1Open] = useState(false);

	const select1Toggle = () => {
        modalClose()
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

    return (
        <div className="search-bar">
            <div className={select1Open ? "dropdown-control opened" : "dropdown-control"}>
                <button type="button" className="btn-dropdown text-xl" onClick={select1Toggle}>{m_site_cd === undefined ? "기관선택" : SearchViewSetting.m_site_cd[m_site_cd] || "기관선택"}</button>
                <div className="dropdown-list custom-scroll">
                    <ul>
                        {
                            m_site_cdList.map((data, index) => {
                                return (
                                    <SelectList key={data} onClick={() => selectChange(data)} addText={m_site_cdList_kor[index]}></SelectList>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            
            <div className="input-group mt-md-2" style={{maxWidth: "930px"}}>
                <input type="text" className="form-control" placeholder="검색어를 입력해주세요" title="검색어를 입력해주세요"
                    onChange={(e) => changeKeyword(e.target.value, checked ? "reSearchKeyword" : "keyword")} value={checked ? reSearchKeyword : keyword} 
                    onKeyPress={(e) => e.key === "Enter" ? getSearch() : ""}
                />
                <span className="input-addon">
                    <button type="button" className="btn btn-input btn-icon" onClick={getSearch}>
                        <i className="ico ico-totalsearch-white"></i>
                        <span className="sr-only">검색</span>
                    </button>
                    <button type="button" className="btn btn-input btn-icon" onClick={modalOpen}>
                        <i className="ico ico-totalsearch-plus-white"></i><span className="sr-only">상세검색</span></button>
                </span>
            </div>
        </div>
    )
}

export default SearchBar;