import React, { useContext, useEffect, useState } from 'react';

import SearchInfo from './info/index'
import SearchContentTitle from './title/index'
import SearchViewSetting from '../../../config/searchViewSetting/index'
import NoticeBoard from './component/noticeboard/index'
import CenterWrap from './component/centerwrap/index'
import DoctorWrap from './component/doctorwrap/index'

import { RootContext } from '../..';
import qs from 'qs';
import util from '../../../util/util'
import Axios from 'axios';

const SearchContent = ({request}) => {
    const rootContext = useContext(RootContext);
    const result = rootContext.result;
    const [searchResult, setSearchResult] = useState({})
    const cate_cd = request.cate_cd || "all";
    const tabList = SearchViewSetting.tablist[rootContext.request.siteType].slice(1)

    useEffect(() => {
        setSearchResult(result[request.siteType === "hospital" ? "doctor" : "professor"])
    }, [result, request])
    
    const [chosung, setChosung] = useState("ALL")
    const getSearchChosung = async (chosung, type) => {
        if(type === "single") {
            rootContext.setRequest({
                ...rootContext.request,
                chosung: chosung
            })
        } else {
            console.log({
                ...rootContext.request,
                chosung: chosung
            })
            // const getSearchResult = await Axios.get('http://10.9.32.17:19700/search', {params: {
            const getSearchResult = await Axios.get('http://localhost:19700/search', {params: {
                ...rootContext.request,
                chosung: chosung
            }})
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
                alert(err.response.data)
            });
            if(getSearchResult) {
                setChosung(chosung)
                setSearchResult(getSearchResult[rootContext.request.siteType === "hospital" ? "doctor" : "professor"])
            }
        }
    }

    const Content = () => {
        if(cate_cd === 'all') {
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
                                    result={data === "doctor" || data === "professor" ? searchResult : result[data]}
                                    href={'?' + qs.stringify(util.onlyKeywordSetting({
                                        ...request,
                                        cate_cd: data,
                                        size: data === "doctor" || data === "professor" || data === "department" ? 12 : 3
                                    }, request.keyword))}
                                    chosung={chosung}
                                    cate_cd={data}
                                    type="default" />
                                { 
                                    data === "department" ? <CenterWrap addClass="mt-lg-6 mt-md-4" result={result.department} type="all" request={request}/> : 
                                    data === "doctor" ? <DoctorWrap result={searchResult} type="all" getSearchChosung={getSearchChosung} chosung={chosung} chosungResult={result.chosung} /> : 
                                                        <NoticeBoard result={result[data]} type="all" request={request} />
                                }
                            </div>
                        )
                    })
                }
                 </div>
            )
        } else if (cate_cd === 'department') {
            return (
                <div className="tab-content" id={"tab-content"} style={{display: "block"}}>
                    <SearchContentTitle 
                        title={SearchViewSetting.tab[rootContext.request.siteType][cate_cd].title} 
                        addClass=""
                        result={result[cate_cd]}
                        href={"#tab-content"}
                        type={SearchViewSetting.tab[rootContext.request.siteType][cate_cd].singletab} />
                    <CenterWrap addClass="mt-lg-6 mt-md-4" result={result.department} type="single" request={request} />
                </div>
            )
        } else if (cate_cd === 'doctor') {
            return (
                <div className="tab-content" id={"tab-content"} style={{display: "block"}}>
                    <SearchContentTitle 
                        title={SearchViewSetting.tab[rootContext.request.siteType][cate_cd].title} 
                        addClass=""
                        result={result[cate_cd]}
                        href={"#tab-content"}
                        type={SearchViewSetting.tab[rootContext.request.siteType][cate_cd].singletab} />
                    <DoctorWrap result={searchResult} type="single" getSearchChosung={getSearchChosung} chosung={chosung} chosungResult={result.chosung} />
                </div>
            )
        } else {
            let contentTitle = SearchViewSetting.tab[rootContext.request.siteType] !== undefined ? (
                       SearchViewSetting.tab[rootContext.request.siteType][cate_cd] !== undefined ? 
                       SearchViewSetting.tab[rootContext.request.siteType][cate_cd] : ""
                       ) : ""
            return (
                <div className="tab-content" id={"tab-content"} style={{display: "block"}}>
                    <SearchContentTitle 
                        title={contentTitle.title} 
                        addClass=""
                        result={result[cate_cd]}
                        href={"#tab-content"}
                        type={contentTitle.singletab} />
                    <NoticeBoard result={result[cate_cd]} type="single" request={request} />
                </div>
            )
        }
    }

    return (
        <Content />
    )
}

export default SearchContent