import React, { useContext } from 'react';
import Nodata from '../nodata/index'
import SingleTab from './singletab/index'
import MoreBtn from '../morebtn/index';

import { RootContext } from '../../../..';
import util from '../../../../../util/util'
import qs from 'qs';

const DoctorWrap = ({result, type}) => {
    const rootContext = useContext(RootContext);
    const chosung = ["ALL", "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]

    const getSearchChosung = (chosung) => {
        if(type === "single") {
            rootContext.setRequest({
                ...rootContext.request,
                chosung: chosung
            })
        } else {
            let request = rootContext.request;
            request.category2 = request.siteType === "hospital" ? "doctor" : "professor"
            window.location.href = '?' + qs.stringify(util.onlyKeywordSetting(request, request.keyword)) + "&chosung=" + chosung + "&department=진료과"
        }
    }

    return (
        <div className="search-doctor-wrap">
            {
                result !== undefined && result.list !== undefined && result.list.length > 0 ? (
                    <div className="ordering-wrap">
                        <ul className="ordering-list pb-lg-3">
                            {
                                chosung.map((data, index) => {
                                    return (
                                        <li key={index}><button type="button" style={{outline: "none"}} 
                                            className={(data === "ALL" ? "all " : "") + (data === "ALL" && rootContext.request.chosung === undefined ? "on" : "") + (rootContext.request.chosung !== undefined && rootContext.request.chosung === data ? "on" : "")} 
                                            onClick={() => getSearchChosung(data)}>{data}</button></li>
                                    )
                                })
                            }
                        </ul>
                        {
                            type === 'single' ? 
                                <SingleTab /> : ""
                        }
                    </div>
                ) : ""
            }

            <div className="doctor-card-wrap">
                <ul>
                    {
                        result !== undefined && result.list !== undefined && result.list.length > 0 ? result.list.map((data, index) => {
                            if(type === 'all' && index >= 4) return ""
                            return (
                                <li key={index}>
                                    <a href="#none" target="_blank" title="새창">
                                        <div className="doctor-card-box">
                                            <div className="card-view">
                                                <div className="photo">
                                                    <img src="/_share/img/common/_profile-thumb1.png" alt="프로필 사진" />
                                                </div>
                                                <dl>
                                                    <dt className="text-title text-lg">{data.name}</dt>
                                                    <dd className="mb-0">{data.content}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            )
                        }) : <Nodata />
                    }
                </ul>
            </div>
            {
                result !== undefined && result.list !== undefined && result.list.length > 0 && type === 'single' ? (
                    <MoreBtn />
                ) : ""
            }
        </div>
    )
}

export default DoctorWrap;