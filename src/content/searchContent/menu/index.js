import React from 'react';
import SearchViewSetting from '../../../config/searchViewSetting/index'


import qs from 'qs';
import util from '../../../util/util';

const SearchMenu = ({request}) => {
    const tabList = SearchViewSetting.tablist[request.siteType]
    const tabList_kor = SearchViewSetting.tablist[request.siteType+"_kor"]

    const category2 = request.category2 || "all";

    const getCategorySearch = (category2) => {
		if(request.category1 === undefined) {
			alert('기관을 선택해주세요!!')
			return;
		}

		if(request.keyword !== undefined && request.keyword.replace(/[\\ ]/gi, '')) {
            request.category2 = category2
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
                                <li key={index} className={category2 === data ? "on" : ""}>
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