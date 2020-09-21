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
    const tabList = SearchViewSetting.tablist.hospital;

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
                                    title={SearchViewSetting.tab.hospital[data].title} 
                                    addClass={SearchViewSetting.tab.hospital[data].class} 
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
        } else if (type === 'department') {
            return (
                <div className="tab-content" id={"tab-content"+num} style={num === 1 ? {display: "block"} : {}}>
                    <SearchContentTitle 
                        title={SearchViewSetting.tab.hospital[type].title} 
                        addClass=""
                        result={result[type]}
                        href={"#tab-content"+num}
                        type="select1" />
                    <CenterWrap addClass="mt-lg-6 mt-md-4" result={result.department} type="single" />
                </div>
            )
        } else if (type === 'doctor') {
            return (
                <div className="tab-content" id={"tab-content"+num} style={num === 1 ? {display: "block"} : {}}>
                    <SearchContentTitle 
                        title={SearchViewSetting.tab.hospital[type].title} 
                        addClass=""
                        result={result[type]}
                        href={"#tab-content"+num}
                        type="select1" />
                    <DoctorWrap result={result.doctor} request={result.request} type="single" />
                </div>
            )
        } else {
            return (
                <div className="tab-content" id={"tab-content"+num} style={num === 1 ? {display: "block"} : {}}>
                    <SearchContentTitle 
                        title={SearchViewSetting.tab.hospital[type].title} 
                        addClass=""
                        result={result[type]}
                        href={"#tab-content"+num}
                        type="select3" />
                    <NoticeBoard result={result[type]} type="single" />
                </div>
            )
        }
    }

    return (
        <Content />
    )
}

export default SearchContent