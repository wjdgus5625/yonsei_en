import React, { useContext } from 'react';

import SearchInfo from './info/index'
import SearchContentTitle from './title/index'
import SearchViewSetting from '../../../config/searchViewSetting/index'
import NoticeBoard from './component/noticeboard/index'
import CenterWrap from './component/centerwrap/index'
import DoctorWrap from './component/doctorwrap/index'
import { RootContext } from '../..';

const SearchContent = ({type, num}) => {
    const rootContext = useContext(RootContext);
    const result = rootContext.result;
    const tabList = SearchViewSetting.tablist.test;

    const Content = () => {
        if(type === 'all') {
            return (
                <div className="tab-content" id={"tab-content"+num} style={num === 1 ? {display: "block"} : {}}>
                    <SearchInfo keyword={result.keyword} totalSize={result.totalSize}/>
                {
                    tabList.map((data, index) => {
                        return (
                            <div key={index}>
                                <SearchContentTitle 
                                    title={data === "notice" ? SearchViewSetting["style"][data].title[index-2] : SearchViewSetting["style"][data].title} 
                                    addClass={SearchViewSetting["style"][data].class} 
                                    result={result[data]}
                                    href={"#tab-content"+(index+2)}
                                    type="default" />
                                { 
                                    data === "center" ? <CenterWrap addClass="mt-lg-6 mt-md-4" result={result.center} type="all"/>  : 
                                    data === "doctor" ? <DoctorWrap result={result.doctor} request={result.request} type="all" /> : 
                                                        <NoticeBoard result={result.noticeboard}/>
                                }
                            </div>
                        )
                    })
                }
                 </div>
            )
        } else if (type === 'center') {
            return (
                <div className="tab-content" id={"tab-content"+num} style={num === 1 ? {display: "block"} : {}}>
                    <SearchContentTitle 
                        title={SearchViewSetting["style"][type].title} 
                        addClass=""
                        result={result[type]}
                        href={"#tab-content"+num}
                        type="select1" />
                    <CenterWrap addClass="mt-lg-6 mt-md-4" result={result.center} type="single" />
                </div>
            )
        } else if (type === 'doctor') {
            return (
                <div className="tab-content" id={"tab-content"+num} style={num === 1 ? {display: "block"} : {}}>
                    <SearchContentTitle 
                        title={SearchViewSetting["style"][type].title} 
                        addClass=""
                        result={result[type]}
                        href={"#tab-content"+num}
                        type="select1" />
                    <DoctorWrap result={result.doctor} request={result.request} type="single" />
                </div>
            )
        } else if (type === 'notice') {
            return (
                <div className="tab-content" id={"tab-content"+num} style={num === 1 ? {display: "block"} : {}}>
                    <SearchContentTitle 
                        title={SearchViewSetting["style"][type].title[num-4]} 
                        addClass=""
                        result={result.noticeboard}
                        href={"#tab-content"+num}
                        type="select3" />
                    <NoticeBoard result={result.noticeboard} type="single" />
                </div>
            )
        }
    }

    return (
        <Content />
    )
}

export default SearchContent