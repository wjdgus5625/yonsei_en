import React, { useState } from 'react';
import SearchViewSetting from '../../../config/searchViewSetting/index';

const SearchBar = ({modalOpen, getSearch, changeKeyword, request, selectChange}) => {
    let m_site_cd = request.m_site_cd
    let keyword = request.keyword || "";
    
    const m_site_cdList = SearchViewSetting.m_site_cdList;
    const m_site_cdList_kor = SearchViewSetting.m_site_cdList_kor;

	const [select1Open, setSelect1Open] = useState(false);
	

	const select1Toggle = () => {
		select1Open ? setSelect1Open(false) : setSelect1Open(true);
	}

	// const select2Toggle = () => {
	// 	select2Open ? setSelect2Open(false) : setSelect2Open(true);
    // }
    // let cate_cd = request.cate_cd || "all";
    // const tabList = SearchViewSetting.tablist[request.siteType];
    // const tab_kor = SearchViewSetting.tab[request.siteType];
    // const [select2Open, setSelect2Open] = useState(false);
        
    const SelectList = ({onClick, addText}) => {
        return (
          <li onClick={onClick} style={{cursor: "pointer"}}>
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
            {/* <div className={select2Open ? "dropdown-control mt-md-2 opened" : "dropdown-control mt-md-2"}>
                <button type="button" className="btn-dropdown text-xl" onClick={select2Toggle}>{cate_cd === undefined || cate_cd === "all" ? "통합검색" : tab_kor[cate_cd].title}</button>
                <div className="dropdown-list custom-scroll">
                    <ul>
                        {
                            tabList.map((data, index) => {
                                return (
                                    <SelectList key={"2"+index} onClick={() => selectChange(2, data)} addText={data === "all" ? "통합검색" : tab_kor[data].title}/>
                                )
                            })
                        }
                    </ul>
                </div> // maxWidth 초기값 : 580px
            </div> */}
            
            <div className="input-group mt-md-2" style={{maxWidth: "930px"}}>
                <input type="text" className="form-control" placeholder="검색어를 입력해주세요" title="검색어를 입력해주세요"
                    onChange={(e) => changeKeyword(e.target.value, "keyword")} value={keyword} 
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