import React, { useContext, useEffect, useState } from 'react';

import SearchContentTitle from './title/index'
import SearchViewSetting from '../../../../config/searchViewSetting/index'
import ApiConfig from '../../../../config/apiConfig/index';
import NoticeBoard from './component/noticeboard/index'
import CenterWrap from './component/centerwrap/index'
import DoctorWrap from './component/doctorwrap/index'

import { RootContext } from '../..';
import qs from 'qs';
import util from '../../../../util/util'
import Axios from 'axios';
import NoData from './component/nodata';

const SearchContent = ({request}) => {
    const rootContext = useContext(RootContext);
    const result = rootContext.result;
    const [searchResult, setSearchResult] = useState({})
    const menu_cd = request.menu_cd || "all";
    const tabList = SearchViewSetting.tablist[request.siteType].slice(1)

    useEffect(() => {
        setSearchResult(result)
    }, [result, request])
    
    const [chosung, setChosung] = useState(rootContext.request.chosung !== undefined ? rootContext.request.chosung : "ALL")
    const getSearchChosung = async (chosung) => {
        console.log({
            ...rootContext.request,
            chosung: chosung,
            cate_cd: cate_cd
        })
        const getSearchResult = await Axios.get(ApiConfig.search_path, {params: {
            ...rootContext.request,
            chosung: chosung,
            cate_cd: cate_cd
        }})
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            alert(err.response.data)
        });
        if(getSearchResult) {
            setChosung(chosung)
            setSearchResult(getSearchResult)
        }
    }

    const [cate_cd, setCate_cd] = useState("")
    const getSearchDepartment = async (cate_cd) => {
        console.log({
            ...rootContext.request,
            chosung: chosung,
            cate_cd: cate_cd
        })
        const getSearchResult = await Axios.get(ApiConfig.search_path, {params: {
            ...rootContext.request,
            chosung: chosung,
            cate_cd: cate_cd
        }})
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            alert(err.response.data)
        });
        if(getSearchResult) {
            setCate_cd(cate_cd)
            setSearchResult(getSearchResult)
        }
    }

    const Content = () => {
        if(menu_cd === 'all') {
            return (
                <div className="tab-content" id={"tab-content"} style={{display: "block"}}>
                    {
                        tabList.map((data, index) => {
                            return (
                                result[data] !== undefined && result[data].list !== undefined && result[data].list.length > 0 ? 
                                <div key={index}>
                                    <SearchContentTitle 
                                        title={SearchViewSetting.tab[rootContext.request.siteType][data].title} 
                                        addClass={SearchViewSetting.tab[rootContext.request.siteType][data].class} 
                                        result={data === "doctor" || data === "professor" ? searchResult[data] : result[data]}
                                        href={'?' + qs.stringify(util.onlyKeywordSetting({
                                            ...request,
                                            menu_cd: data,
                                            size: data === "doctor" || data === "professor" || data === "department" ? 12 : 3
                                        }, request.keyword))}
                                        chosung={chosung}
                                        menu_cd={data}
                                        type="default" />
                                    { 
                                        data === "department" ? 
                                            <CenterWrap 
                                                addClass="mt-lg-6 mt-md-4" 
                                                result={result.department} 
                                                type="all" 
                                                request={request}
                                                cate_cd={cate_cd}
                                                getSearchDepartment={getSearchDepartment}
                                            /> : 
                                        data === "doctor" || data === "professor" ? 
                                            <DoctorWrap 
                                                result={searchResult[data]} 
                                                type="all" 
                                                getSearchChosung={getSearchChosung} 
                                                chosung={chosung} 
                                                chosungResult={result.chosung} 
                                                cate_cd={cate_cd}
                                                getSearchDepartment={getSearchDepartment}
                                            /> : 
                                            <NoticeBoard 
                                                result={result[data]} 
                                                type="all" 
                                                request={request} 
                                            />
                                    }
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
                <div className="tab-content" id={"tab-content"} style={{display: "block"}}>
                    <SearchContentTitle 
                        title={SearchViewSetting.tab[rootContext.request.siteType][menu_cd].title} 
                        addClass=""
                        result={searchResult[menu_cd]}
                        href={"#tab-content"}
                        type={SearchViewSetting.tab[rootContext.request.siteType][menu_cd].singletab} />
                    <CenterWrap 
                        addClass="mt-lg-6 mt-md-4" 
                        result={searchResult[menu_cd]} 
                        type="single" 
                        request={request} 
                        cate_cd={cate_cd}
                        getSearchDepartment={getSearchDepartment}
                    />
                </div>
            )
        } else if (menu_cd === 'doctor' || menu_cd === "professor") {
            return (
                <div className="tab-content" id={"tab-content"} style={{display: "block"}}>
                    <SearchContentTitle 
                        title={SearchViewSetting.tab[rootContext.request.siteType][menu_cd].title} 
                        addClass=""
                        result={searchResult[menu_cd]}
                        href={"#tab-content"}
                        type={SearchViewSetting.tab[rootContext.request.siteType][menu_cd].singletab} />
                    <DoctorWrap 
                        result={searchResult[menu_cd]} 
                        type="single" 
                        getSearchChosung={getSearchChosung} 
                        chosung={chosung} 
                        chosungResult={result.chosung}
                        cate_cd={cate_cd}
                        getSearchDepartment={getSearchDepartment}
                    />
                </div>
            )
        } else {
            let contentTitle = SearchViewSetting.tab[rootContext.request.siteType] !== undefined ? (
                                  SearchViewSetting.tab[rootContext.request.siteType][menu_cd] !== undefined ? 
                                  SearchViewSetting.tab[rootContext.request.siteType][menu_cd] : ""
                               ) : ""
            return (
                <div className="tab-content" id={"tab-content"} style={{display: "block"}}>
                    <SearchContentTitle 
                        title={contentTitle.title} 
                        addClass=""
                        result={result[menu_cd]}
                        href={"#tab-content"}
                        type={contentTitle.singletab} />
                    <NoticeBoard result={result[menu_cd]} type="single" request={request} />
                </div>
            )
        }
    }

    return (
        <Content />
    )
}

export default SearchContent