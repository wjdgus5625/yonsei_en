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
    const tabList = SearchViewSetting.tablist.yonsei;

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
                                    href={"#tab-content"+(num+1)}
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
                        result={result[type]}
                        href={"#tab-content"+num}
                        type="select1" />
                    <NoticeBoard result={result.noticeboard} />
                </div>
            )
        }
    }

    return (
        // <div></div>
        <Content />

        //  <div className="tab-content" id={"tab-content"+num} style={{display: "block"}}>
        //     {
        //         type === "all" ? <SearchInfo keyword={result.keyword} totalSize={result.totalSize}/> : ""
        //     }
        //     {
        //         tabList["yonsei"].map((data, index) => {
        //             console.log(data)
        //             return (
        //                 <div>
        //                     <SearchContentTitle 
        //                         title={SearchViewSetting["style"][data].title} 
        //                         addClass={SearchViewSetting["style"][data].class} 
        //                         result={result[data]}
        //                         href={"#tab-content"+num+1}
        //                         type="default" />
        //                     {
        //                         data === "center" ? <CenterWrap addClass="mt-lg-6 mt-md-4" result={result.center} type="all"/>  : 
        //                         data === "doctor" ? <DoctorWrap result={result.doctor} request={result.request} type="all" /> : 
        //                                             <NoticeBoard result={result.noticeboard}/>
        //                     }
        //                 </div>
        //                 )
        //         })
        //     }
        
            
        //     {/* <SearchContentTitle 
        //         title={SearchViewSetting.style.center.title} 
        //         addClass={SearchViewSetting.style.center.class} 
        //         result={result.center}
        //         href="#tab-content2"
        //         type="default" />
        //     <CenterWrap addClass="mt-lg-6 mt-md-4" result={result.center} type="all"/>

        //     <SearchContentTitle 
        //         title={SearchViewSetting.style.doctor.title} 
        //         addClass={SearchViewSetting.style.doctor.class} 
        //         result={result.doctor}
        //         href="#tab-content3"
        //         type="default" />
        //     <DoctorWrap result={result.doctor} request={result.request} type="all" />

        //     <SearchContentTitle 
        //         title={SearchViewSetting.style.notice.title[0]} 
        //         addClass={SearchViewSetting.style.notice.class} 
        //         result={result.noticeboard}
        //         href="#tab-content4"
        //         type="default" />
        //     <NoticeBoard result={result.noticeboard}/>

        //     <SearchContentTitle 
        //         title={SearchViewSetting.style.notice.title[1]} 
        //         addClass={SearchViewSetting.style.notice.class} 
        //         result={result.noticeboard}
        //         href="#tab-content5"
        //         type="default" />
        //     <NoticeBoard result={result.noticeboard}/>

        //     <SearchContentTitle 
        //         title={SearchViewSetting.style.notice.title[2]} 
        //         addClass={SearchViewSetting.style.notice.class} 
        //         result={result.noticeboard}
        //         href="#tab-content6"
        //         type="default" />
        //     <NoticeBoard result={result.noticeboard}/>

        //     <SearchContentTitle 
        //         title={SearchViewSetting.style.notice.title[3]} 
        //         addClass={SearchViewSetting.style.notice.class} 
        //         result={result.noticeboard}
        //         href="#tab-content7"
        //         type="default" />
        //     <NoticeBoard result={result.noticeboard}/>

        //     <SearchContentTitle 
        //         title={SearchViewSetting.style.notice.title[4]} 
        //         addClass={SearchViewSetting.style.notice.class} 
        //         result={result.noticeboard}
        //         href="#tab-content8"
        //         type="default" />
        //     <NoticeBoard result={result.noticeboard}/> */}
        // </div>
    )
}

export default SearchContent