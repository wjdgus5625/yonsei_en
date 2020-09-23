import React, { useContext } from 'react';

import SearchInfo from './info/index'
import SearchContentTitle from './title/index'
import SearchViewSetting from '../../../config/searchViewSetting/index'
import NoticeBoard from './component/noticeboard/index'
import CenterWrap from './component/centerwrap/index'
import DoctorWrap from './component/doctorwrap/index'

import { RootContext } from '../..';

const SearchContent = ({request}) => {
    const rootContext = useContext(RootContext);
    const result = rootContext.result;

    const category2 = request.category2 || "all";
    
    const tabList = SearchViewSetting.tablist[rootContext.request.siteType].slice(1)

    const Content = () => {
        if(category2 === 'all') {
            return (
                <div className="tab-content" id={"tab-content"} style={{display: "block"}}>
                    <SearchInfo keyword={result.keyword} totalSize={result.totalSize}/>
                {
                    tabList.map((data, index) => {
                        return (
                            <div key={index}>
                                <SearchContentTitle 
                                    title={SearchViewSetting.tab[rootContext.request.siteType][data].title} 
                                    addClass={SearchViewSetting.tab[rootContext.request.siteType][data].class} 
                                    result={result[data]}
                                    href={"#tab-content"+(index+2)}
                                    type="default" />
                                { 
                                    data === "department" ? <CenterWrap addClass="mt-lg-6 mt-md-4" result={result.department} type="all"/> : 
                                    data === "doctor" ? <DoctorWrap result={result.doctor} request={result.request} type="all" /> : 
                                                        <NoticeBoard result={result[data]}/>
                                }
                            </div>
                        )
                    })
                }
                 </div>
            )
        } else if (category2 === 'department') {
            return (
                <div className="tab-content" id={"tab-content"} style={{display: "block"}}>
                    <SearchContentTitle 
                        title={SearchViewSetting.tab[rootContext.request.siteType][category2].title} 
                        addClass=""
                        result={result[category2]}
                        href={"#tab-content"}
                        type={SearchViewSetting.tab[rootContext.request.siteType][category2].singletab} />
                    <CenterWrap addClass="mt-lg-6 mt-md-4" result={result.department} type="single" />
                </div>
            )
        } else if (category2 === 'doctor') {
            return (
                <div className="tab-content" id={"tab-content"} style={{display: "block"}}>
                    <SearchContentTitle 
                        title={SearchViewSetting.tab[rootContext.request.siteType][category2].title} 
                        addClass=""
                        result={result[category2]}
                        href={"#tab-content"}
                        type={SearchViewSetting.tab[rootContext.request.siteType][category2].singletab} />
                    <DoctorWrap result={result.doctor} request={result.request} type="single" />
                </div>
            )
        } else {
            return (
                <div className="tab-content" id={"tab-content"} style={{display: "block"}}>
                    <SearchContentTitle 
                        title={SearchViewSetting.tab[rootContext.request.siteType][category2].title} 
                        addClass=""
                        result={result[category2]}
                        href={"#tab-content"}
                        type={SearchViewSetting.tab[rootContext.request.siteType][category2].singletab} />
                    <NoticeBoard result={result[category2]} type="single" />
                </div>
            )
        }
    }

    return (
        <Content />
    )
}

export default SearchContent