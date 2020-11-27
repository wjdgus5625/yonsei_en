import React, { createContext } from 'react';
 
import SearchViewSetting from '../../../../config/searchViewSetting'

import qs from 'qs';
import util from '../../../../util/util'
import NoData from './tabcontent/component/nodata';
import DoctorTab from './tabcontent/doctortab/index'
import CenterTab from './tabcontent/centertab/index'
import BoardTab from './tabcontent/boardtab/index'

export const RootContext = createContext();

const SearchContent = (props) => {
    const result = props.result;
    const request = props.request;
    const menu_cd = props.request.menu_cd || "all";
    const tabList = SearchViewSetting.tablist[props.request.siteType].slice(1)

    const store = {
        request: props.request,
        result: props.result
    }

    const Content = () => {
        if(menu_cd === 'all') {
            return (
                <div className="tab-content" id={"tab-content"} style={{display: "block"}}>
                    {
                        tabList.map((data, index) => {
                            if(result[data] !== undefined && result[data].list !== undefined && result[data].list.length > 0) {
                                if(data === "doctor" || data === "professor") {
                                    return (
                                        <div key={index}>
                                            <DoctorTab 
                                                title={SearchViewSetting.tab[request.siteType][data].title} 
                                                addClass={SearchViewSetting.tab[request.siteType][data].class}
                                                result={result[data]}
                                                href={'/search-en/result?' + qs.stringify(util.searchKeywordSetting2({
                                                    ...request,
                                                    menu_cd: data,
                                                    size: 10
                                                }))}
                                                tabType="default"
                                                type="all" 
                                                request={request}
                                                contentType={"doctor"}
                                                menu_cd={data}
                                                chosung={request.chosung} 
                                                cate_cd={request.cate_cd}
                                                chosungResult={result.chosung}
                                            />
                                        </div>
                                    )
                                } else if(data === "department" || data === "class") {
                                    return (
                                        <div key={index}>
                                            <CenterTab 
                                                title={SearchViewSetting.tab[request.siteType][data].title} 
                                                addClass={SearchViewSetting.tab[request.siteType][data].class}
                                                result={result[data]}
                                                href={'/search-en/result?' + qs.stringify(util.searchKeywordSetting2({
                                                    ...request,
                                                    menu_cd: data,
                                                    size: 12
                                                }))}
                                                tabType="default"
                                                type="all" 
                                                request={request}
                                                contentType={"center"}
                                                menu_cd={data}
                                                cate_cd={request.cate_cd}
                                            />
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={index}>
                                            <BoardTab 
                                                title={SearchViewSetting.tab[request.siteType][data].title} 
                                                addClass={SearchViewSetting.tab[request.siteType][data].class}
                                                result={result[data]}
                                                href={'/search-en/result?' + qs.stringify(util.searchKeywordSetting2({
                                                    ...request,
                                                    menu_cd: data,
                                                    size: 10
                                                }))}
                                                tabType="default"
                                                type="all" 
                                                request={request}
                                                contentType={"board"}
                                                menu_cd={data}
                                            />
                                        </div>
                                    )
                                }
                            } else {
                                return "";
                            }
                        })
                    }
                    {
                        result.totalSize === 0 ? <NoData /> : ""
                    }
                 </div>
            )
        } else if (menu_cd === 'department' || menu_cd === 'class') {
            return (
                <CenterTab 
                    title={SearchViewSetting.tab[request.siteType][menu_cd].title} 
                    addClass=""
                    result={result[menu_cd]}
                    tabType={SearchViewSetting.tab[request.siteType][menu_cd].singletab}
                    type="single" 
                    request={request}
                    menu_cd={menu_cd}
                    cate_cd={request.cate_cd}
                />
            )
        } else if (menu_cd === 'doctor' || menu_cd === "professor") {
            return (
                <DoctorTab 
                    title={SearchViewSetting.tab[request.siteType][menu_cd].title} 
                    addClass=""
                    result={result[menu_cd]}
                    tabType={SearchViewSetting.tab[request.siteType][menu_cd].singletab}
                    type="single" 
                    request={request}
                    contentType="doctor"
                    menu_cd={menu_cd}
                    chosung={request.chosung} 
                    chosungResult={result.chosung}
                    cate_cd={request.cate_cd}
                />
            )
        } else {
            let contentTitle = "";
            if(SearchViewSetting.tab[request.siteType] !== undefined && SearchViewSetting.tab[request.siteType][menu_cd] !== undefined) {
                contentTitle = SearchViewSetting.tab[request.siteType][menu_cd]
            }
            return (
                <BoardTab 
                    title={contentTitle.title} 
                    addClass=""
                    result={result[menu_cd]}
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
        <RootContext.Provider value={store}>
            <Content />
        </RootContext.Provider>
    )
}

export default SearchContent