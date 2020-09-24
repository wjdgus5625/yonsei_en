import React, { useContext } from 'react';
import Nodata from '../nodata/index'
import SingleTab from './singletab/index'
import MoreBtn from '../morebtn/index';

import { RootContext } from '../../../..';

const DoctorWrap = ({result, type, getSearchChosung, chosung}) => {
    const rootContext = useContext(RootContext);
    const chosungList = ["ALL", "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]
    const rootChosung = rootContext.request.chosung !== undefined ? rootContext.request.chosung : chosung
    return (
        <div className="search-doctor-wrap">
            {
                result !== undefined && result.list !== undefined && result.list.length > 0 ? (
                    <div className="ordering-wrap">
                        <ul className="ordering-list pb-lg-3">
                            {
                                chosungList.map((data, index) => {
                                    return (
                                        <li key={index}><button type="button" style={{outline: "none"}} 
                                            className={(data === "ALL" ? "all " : "") + (data === "ALL" && rootChosung === undefined ? "on" : "") + (rootChosung !== undefined && rootChosung === data ? "on" : "")} 
                                            onClick={() => getSearchChosung(data, type)}>{data}</button></li>
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
                                                    <dt className="text-title text-lg">{data.nm}</dt>
                                                    <dd className="mb-0">{data.detail_major === undefined || data.detail_major.length === 0 ? "test" : data.detail_major}</dd>
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
                result !== undefined && result.list !== undefined && result.list.length > 0 && type === 'single' && result.totalSize > rootContext.request.size ? (
                    <MoreBtn />
                ) : ""
            }
        </div>
    )
}

export default DoctorWrap;