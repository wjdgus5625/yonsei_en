import React from 'react';
import SearchViewSetting from '../../../../config/searchViewSetting/index'

import ApiConfig from '../../../../config/apiConfig';

const SearchMenu = (props) => {
    const tabList = SearchViewSetting.tablist[props.request.siteType]
    const tabList_kor = SearchViewSetting.tablist[props.request.siteType+"_kor"]

    const menu_cd = props.request.menu_cd || "all";

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
                                    <a href={"/search/result?keyword=" + props.request.keyword + "&m_site_cd=" + props.request.m_site_cd + "&menu_cd=" + data}>
                                        <span>{tabList_kor[index] + "(" + 
                                        ( data === "all" && props.result.totalSize !== undefined ? props.result.totalSize : // 통합검색
                                            props.result[data] !== undefined && props.result[data].totalSize !== undefined ? (
                                                data === "doctor" ? props.result["chosung"].totalSize : props.result[data].totalSize
                                            ) : 0 ) // 일반메뉴
                                            + ")"}</span>
                                    </a>
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