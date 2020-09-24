import React from 'react';
import SearchViewSetting from '../../../config/searchViewSetting/index'


import qs from 'qs';
import util from '../../../util/util';

const SearchMenu = ({request}) => {
    const tabList = SearchViewSetting.tablist[request.siteType]
    const tabList_kor = SearchViewSetting.tablist[request.siteType+"_kor"]

    const cate_cd = request.cate_cd || "all";

    const getCategorySearch = (cate_cd) => {
		if(request.m_site_cd === undefined) {
			alert('기관을 선택해주세요!!')
			return;
		}

		if(request.keyword !== undefined && request.keyword.replace(/[\\ ]/gi, '')) {
            request.cate_cd = cate_cd
            if(request.cate_cd === "doctor" || request.cate_cd === "department" || request.cate_cd === "professor") {
                request.size = 12
            } else {
                request.size = 3
            }
			window.location.href = '?' + qs.stringify(util.onlyKeywordSetting(request, request.keyword))
		} else {
			alert("검색어를 입력해주세요!!")
			return;
		}
    }
    
    return (
        <nav className="tab-menu tab-menu1 tab-menu-search tab-menu-flicking">
            <div className="tab-scroll-container">
                <ul className="tab-list">
                    {
                        tabList.map((data, index) => {
                            return (                               
                                <li key={index} className={cate_cd === data ? "on" : ""}>
                                    <a href={"#;"} onClick={() => getCategorySearch(data)}><span>{tabList_kor[index]}</span></a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default SearchMenu;