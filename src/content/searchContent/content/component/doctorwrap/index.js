import React, { useState } from 'react';
import Nodata from '../nodata/index'
import SingleTab from './singletab/index'

import Axios from 'axios';

const DoctorWrap = ({result, request, type}) => {
    const [searchResult, setSearchResult] = useState(result);

    // console.log('DoctorWrap\t', result, '\t', type)

    const getSearchChosung = (chosung) => {
        let requestParam = request !== undefined ? request : {}
        requestParam.chosung = chosung

        Axios.get('http://localhost:4000/api', {params: requestParam})
        .then(resp => {
			setSearchResult(resp.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="search-doctor-wrap">
            {
                result !== undefined ? (
                    <div className="ordering-wrap">
                        <ul className="ordering-list pb-lg-3">
                            <li><button type="button" className="all on" onClick={() => getSearchChosung('all')}>ALL</button></li>
                            <li><button type="button" onClick={() => getSearchChosung('ㄱ')}>ㄱ</button></li>
                            <li><button type="button" onClick={() => getSearchChosung('ㄴ')}>ㄴ</button></li>
                            <li><button type="button" onClick={() => getSearchChosung('ㄷ')}>ㄷ</button></li>
                            <li><button type="button" onClick={() => getSearchChosung('ㄹ')}>ㄹ</button></li>
                            <li><button type="button" onClick={() => getSearchChosung('ㅁ')}>ㅁ</button></li>
                            <li><button type="button" onClick={() => getSearchChosung('ㅂ')}>ㅂ</button></li>
                            <li><button type="button" onClick={() => getSearchChosung('ㅅ')}>ㅅ</button></li>
                            <li><button type="button" onClick={() => getSearchChosung('ㅐ')}>ㅇ</button></li>
                            <li><button type="button" onClick={() => getSearchChosung('ㅈ')}>ㅈ</button></li>
                            <li><button type="button" onClick={() => getSearchChosung('ㅊ')}>ㅊ</button></li>
                            <li><button type="button" disabled>ㅋ</button></li>
                            <li><button type="button" disabled>ㅌ</button></li>
                            <li><button type="button" onClick={() => getSearchChosung('ㅍ')}>ㅍ</button></li>
                            <li><button type="button" onClick={() => getSearchChosung('ㅎ')}>ㅎ</button></li>
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
                        searchResult !== undefined && searchResult.list.length > 0 ? searchResult.list.map((data, index) => {
                            if(type === 'all' && index >= 8) console.log('ghh') 
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
                        }) : result !== undefined && result.list.length > 0 ? result.list.map((data, index) => {
                            if(type === 'all' && index >= 8) return ""; 
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
                result !== undefined && type === 'single' ? (
                    <div className="text-center mt-lg-11 mt-md-6">
                        <a href="#;" className="btn btn-more">더보기</a>
                    </div>
                ) : ""
            }
        </div>
    )
}

export default DoctorWrap;