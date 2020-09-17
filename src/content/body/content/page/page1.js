import React from 'react';

import SearchInfo from '../info/index'
import SearchContentTitle from '../title/index'
import SearchViewSetting from '../../../../config/searchViewSetting/index'
import NoticeBoard from '../noticeboard/index'
import CenterWrap from '../centerwrap/index'
import DoctorWrap from '../doctorwrap/index'

const searchContent1 = ({result}) => {
    return (
         <div className="tab-content" id="tab-content1" style={{display: "block"}}>
           <SearchInfo keyword={result.keyword} totalSize={result.totalSize}/>
            <SearchContentTitle 
                title={SearchViewSetting.searchAll.center.title} 
                addClass={SearchViewSetting.searchAll.center.class} 
                result={result.center}
                href="#tab-content2"
                type="default" />
            <CenterWrap addClass="mt-lg-6 mt-md-4" result={result.center} type="all"/>

            <SearchContentTitle 
                title={SearchViewSetting.searchAll.doctor.title} 
                addClass={SearchViewSetting.searchAll.doctor.class} 
                result={result.doctor}
                href="#tab-content3"
                type="default" />
            <DoctorWrap result={result.doctor} request={result.request}/>

            <SearchContentTitle 
                title={SearchViewSetting.searchAll.notice.title[0]} 
                addClass={SearchViewSetting.searchAll.notice.class} 
                result={result.noticeboard}
                href="#tab-content4"
                type="default" />
            <NoticeBoard result={result.noticeboard}/>

            <SearchContentTitle 
                title={SearchViewSetting.searchAll.notice.title[1]} 
                addClass={SearchViewSetting.searchAll.notice.class} 
                result={result.noticeboard}
                href="#tab-content5"
                type="default" />
            <NoticeBoard result={result.noticeboard}/>

            <SearchContentTitle 
                title={SearchViewSetting.searchAll.notice.title[2]} 
                addClass={SearchViewSetting.searchAll.notice.class} 
                result={result.noticeboard}
                href="#tab-content6"
                type="default" />
            <NoticeBoard result={result.noticeboard}/>

            <SearchContentTitle 
                title={SearchViewSetting.searchAll.notice.title[3]} 
                addClass={SearchViewSetting.searchAll.notice.class} 
                result={result.noticeboard}
                href="#tab-content7"
                type="default" />
            <NoticeBoard result={result.noticeboard}/>

            <SearchContentTitle 
                title={SearchViewSetting.searchAll.notice.title[4]} 
                addClass={SearchViewSetting.searchAll.notice.class} 
                result={result.noticeboard}
                href="#tab-content8"
                type="default" />
            <NoticeBoard result={result.noticeboard}/>
        </div>
    )
}

export default searchContent1