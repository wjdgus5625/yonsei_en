import React, { useContext } from 'react';

import SearchViewSetting from '../../../../config/searchViewSetting/index'

import { RootContext } from '../..';
import qs from 'qs';
import util from '../../../../util/util'
import NoData from './tabcontent/component/nodata';
import TabContent from './tabcontent/index';

const SearchContent = ({request}) => {
    const rootContext = useContext(RootContext);
    const result = rootContext.result;
    const menu_cd = request.menu_cd || "all";
    const tabList = SearchViewSetting.tablist[request.siteType].slice(1)
    const Content = () => {
        if(menu_cd === 'all') {
            return (
                <div className="tab-content" id={"tab-content"} style={{display: "block"}}>
                    {
                        tabList.map((data, index) => {
                            return (
                                result[data] !== undefined && result[data].list !== undefined && result[data].list.length > 0 ? 
                                <div key={index}>
                                    <TabContent 
                                        title={SearchViewSetting.tab[rootContext.request.siteType][data].title} 
                                        addClass={SearchViewSetting.tab[rootContext.request.siteType][data].class}
                                        result={result[data]}
                                        href={'?' + qs.stringify(util.onlyKeywordSetting({
                                            ...request,
                                            menu_cd: data,
                                            size: data === "doctor" || data === "professor" || data === "department" ? 12 : 3
                                        }, request.keyword))}
                                        tabType="default"
                                        type="all" 
                                        request={request}
                                        contentType={data === "department" ? "center" : (data === "doctor" || data === "professor" ? "doctor" : "board")}
                                        menu_cd={data}
                                        chosung={rootContext.request.chosung} 
                                        cate_cd={rootContext.request.cate_cd}
                                        chosungResult={result.chosung}
                                    />
                                </div>
                                : ""
                            )
                        })
                    }
                    {
                        result.totalSize === 0 ? <NoData /> : ""
                    }
                 </div>
            )
        } else if (menu_cd === 'department') {
            return (
                <TabContent 
                    title={SearchViewSetting.tab[rootContext.request.siteType][menu_cd].title} 
                    addClass=""
                    result={result[menu_cd]}
                    href={"#tab-content"}
                    tabType={SearchViewSetting.tab[rootContext.request.siteType][menu_cd].singletab}
                    type="single" 
                    request={request}
                    contentType="center"
                    menu_cd={menu_cd}
                    cate_cd={rootContext.request.cate_cd}
                />
            )
        } else if (menu_cd === 'doctor' || menu_cd === "professor") {
            return (
                <TabContent 
                    title={SearchViewSetting.tab[rootContext.request.siteType][menu_cd].title} 
                    addClass=""
                    result={result[menu_cd]}
                    href={"#tab-content"}
                    tabType={SearchViewSetting.tab[rootContext.request.siteType][menu_cd].singletab}
                    type="single" 
                    request={request}
                    contentType="doctor"
                    menu_cd={menu_cd}
                    chosung={rootContext.request.chosung} 
                    chosungResult={result.chosung}
                    cate_cd={rootContext.request.cate_cd}
                />
            )
        } else {
            let contentTitle = SearchViewSetting.tab[rootContext.request.siteType] !== undefined ? (
                                  SearchViewSetting.tab[rootContext.request.siteType][menu_cd] !== undefined ? 
                                  SearchViewSetting.tab[rootContext.request.siteType][menu_cd] : ""
                               ) : ""
            return (
                <TabContent 
                    title={contentTitle.title} 
                    addClass=""
                    result={result[menu_cd]}
                    href={"#tab-content"}
                    tabType={contentTitle.singletab}
                    type="single" 
                    request={request}
                    contentType="board"
                    menu_cd={menu_cd}
                />
            )
        }
    }

    return (
        <Content />
    )
}

export default SearchContent