import React, { useState } from 'react';
import SearchViewSetting from '../../../config/searchViewSetting/index';

const SearchBar = ({modalOpen, getSearch, changeKeyword, request, selectChange}) => {
    let category1 = request.category1
    let keyword = request.keyword || "";
    
    const category1List = SearchViewSetting.category1List;
    const category1List_kor = SearchViewSetting.category1List_kor;

	const [select1Open, setSelect1Open] = useState(false);
	

	const select1Toggle = () => {
		select1Open ? setSelect1Open(false) : setSelect1Open(true);
	}

	// const select2Toggle = () => {
	// 	select2Open ? setSelect2Open(false) : setSelect2Open(true);
    // }
    // let category2 = request.category2 || "all";
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
                <button type="button" className="btn-dropdown text-xl" onClick={select1Toggle}>{category1 === undefined ? "기관선택" : SearchViewSetting.category1[category1]}</button>
                <div className="dropdown-list custom-scroll">
                    <ul>
                        {
                            category1List.map((data, index) => {
                                return (
                                    <SelectList key={data} onClick={() => selectChange(data)} addText={category1List_kor[index]}></SelectList>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            {/* <div className={select2Open ? "dropdown-control mt-md-2 opened" : "dropdown-control mt-md-2"}>
                <button type="button" className="btn-dropdown text-xl" onClick={select2Toggle}>{category2 === undefined || category2 === "all" ? "통합검색" : tab_kor[category2].title}</button>
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