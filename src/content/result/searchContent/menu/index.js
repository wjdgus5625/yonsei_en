import React from 'react';
import SearchViewSetting from '../../../../config/searchViewSetting/index'

import util from '../../../../util/util';
import ApiConfig from '../../../../config/apiConfig';
import { Link } from 'react-router-dom';

const SearchMenu = (props) => {
    const tabList = SearchViewSetting.tablist[props.request.siteType]
    const tabList_kor = SearchViewSetting.tablist[props.request.siteType+"_kor"]

    const menu_cd = props.request.menu_cd || "all";

    const getCategorySearch = (menu_cd) => {
        let cate_cd = "";
		if(props.request.m_site_cd === undefined) {
			alert('기관을 선택해주세요!!')
			return;
		}

		if(props.request.keyword !== undefined && props.request.keyword.replace(/[\\ ]/gi, '')) {
            if(menu_cd === "doctor" || menu_cd === "department" || menu_cd === "professor") {
                props.request.size = 12
            } else {
                props.request.size = 3
            }

            if(menu_cd === "doctor") {
                cate_cd = "department"
            } else {
                cate_cd = ""
            }
            props.setRequest(util.searchKeywordSetting2_menu(props.request, menu_cd, cate_cd))
		} else {
			alert("검색어를 입력해주세요!!")
			return;
		}
    }
    
    return (
        <nav className="tab-menu tab-menu-matrix tab-menu-search">
            <ul className="tab-list">
                {
                    tabList.map((data, index) => {
                        if(data === "link1" || data === "link2") {
                            return (
                                <li key={index}>
                                    <a href={ApiConfig[data] + props.request.keyword} target="_blank" rel="noopener noreferrer">
                                        <span>{tabList_kor[index]}<i className="ico ico-external-link ml-1"></i></span>
                                    </a>
                                </li>
                            )
                        } else {
                            return (
                                <li key={index} className={menu_cd === data ? "on" : ""}>
                                    <Link to={"/search/result?keyword="+props.request.keyword+"&m_site_cd="+props.request.m_site_cd+"&menu_cd="+data+"&should="+props.request.should+"&must="+props.request.must+"&mustNot="+props.request.mustNot+"&cate_cd="+(data === "doctor" ? "department" : "")} 
                                        onClick={() => getCategorySearch(data)}>
                                        <span>{tabList_kor[index] + "(" + 
                                        ( props.result[data] !== undefined && props.result[data].totalSize !== undefined ? (
                                                data === "doctor" ? props.result["chosung"].totalSize : props.result[data].totalSize
                                            ) : 0 ) // 의료진의 경우 메뉴탭에서 chosung, cate_cd 값이 필터링 되지 않은 결과수가 들어가야하므로 chosung 검색 결과수를 넣음
                                            + ")"}</span>
                                    </Link>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </nav>
    )
}

export default SearchMenu;