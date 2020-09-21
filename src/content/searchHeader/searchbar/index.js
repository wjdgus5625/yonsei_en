import React, { useState } from 'react';
import SearchViewSetting from '../../../config/searchViewSetting/index';

const SearchBar = ({modalOpen, getSearch, changeKeyword, request, selectChange}) => {
    let category1 = request.category1
    let category2 = request.category2
    let keyword = request.keyword || "";
    const tabList = SearchViewSetting.tablist.hospital_kor;

	const [select1Open, setSelect1Open] = useState(false);
	const [select2Open, setSelect2Open] = useState(false);

	const select1Toggle = () => {
		select1Open ? setSelect1Open(false) : setSelect1Open(true);
	}

	const select2Toggle = () => {
		select2Open ? setSelect2Open(false) : setSelect2Open(true);
    }
        
    const SelectList = ({onClick, addText}) => {
        return (
          <li onClick={onClick}>
            <a href="#;">{addText}</a>
          </li>
        );
    }


    return (
        <div className="search-bar">
            <div className={select1Open ? "dropdown-control opened" : "dropdown-control"}>
                <button type="button" className="btn-dropdown text-xl" onClick={select1Toggle}>{category1 === undefined ? "기관선택" : category1}</button>
                <div className="dropdown-list custom-scroll">
                    <ul>
                        {
                            [...Array(12)].map((n, index) => {
                                return (
                                    <SelectList key={"1"+index} onClick={() => selectChange(1, "기관"+index)} addText={"기관"+index}></SelectList>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={select2Open ? "dropdown-control mt-md-2 opened" : "dropdown-control mt-md-2"}>
                <button type="button" className="btn-dropdown text-xl" onClick={select2Toggle}>{category2 === undefined ? "통합검색" : category2}</button>
                <div className="dropdown-list custom-scroll">
                    <ul>
                        {
                            tabList.map((data, index) => {
                                return (
                                    <SelectList key={"2"+index} onClick={() => selectChange(2, data)} addText={data}></SelectList>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="input-group mt-md-2" style={{maxWidth: "580px"}}>
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