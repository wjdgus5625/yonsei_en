import React, { useContext } from 'react';
import Nodata from '../nodata/index'
import SingleTab from './singletab/index'
import MoreBtn from '../morebtn/index';
import ApiConfig from '../../../../../../../config/apiConfig/index'

import { RootContext } from '../../../../..';

const DoctorWrap = (props) => {
    const rootContext = useContext(RootContext);
    const chosungList = ["ALL", "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]
    const rootChosung = props.chosung !== undefined ? props.chosung : rootContext.request.chosung
    return (
        <div className="search-doctor-wrap">
            {
                props.result !== undefined && props.result.list !== undefined ? (
                    <div className="ordering-wrap">
                        <ul className="ordering-list pb-lg-3">
                            {
                                chosungList.map((data, index) => {
                                    return (
                                        <li key={index}><button type="button" disabled={props.chosungResult.chosung.indexOf(data) > -1 || data === "ALL" ? false : true} style={{outline: "none"}} 
                                            className={(data === "ALL" ? "all " : "") + (data === "ALL" && rootChosung === undefined ? "on" : "") + (rootChosung !== undefined && rootChosung === data ? "on" : "")} 
                                            onClick={() => props.getSearchChosung(data)}>{data}</button></li>
                                    )
                                })
                            }
                        </ul>
                        {
                            props.type === 'single' && rootContext.request.menu_cd === 'doctor' ? 
                                <SingleTab 
                                    cate_cd={props.cate_cd}
                                    getSearchDepartment={props.getSearchDepartment}
                                /> : ""
                        }
                    </div>
                ) : ""
            }

            <div className="doctor-card-wrap">
                <ul>
                    {
                        props.result !== undefined && props.result.list !== undefined && props.result.list.length > 0 ? props.result.list.map((data, index) => {
                            if(props.type === 'all' && index >= 4) return ""
                            return (
                                <li key={index}>
                                    <a href={ApiConfig.server_img_host+"/"+data.site_id+"/doctor/doctor-view.do?empNo="+data.emp_no+"&deptSeq="+data.dept_seq}
                                        target="_blank" title="새창" rel="noopener noreferrer">
                                        <div className="doctor-card-box">
                                            <div className="card-view">
                                                <div className="photo">
                                                    {
                                                        data.atch_flpth !== undefined ? 
                                                            <img src={ApiConfig.server_img_host + data.atch_flpth + data.atchmnfl_physicl_nm} alt="프로필 사진" /> 
                                                            : <span className="no-thumb"></span>
                                                    }
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
                props.result !== undefined && props.result.list !== undefined && props.result.list.length > 0 && props.type === 'single' && props.result.totalSize > props.size ? (
                    <MoreBtn 
                        getSearchMore={props.getSearchMore} 
                        menu_cd={props.menu_cd} 
                        size={props.size}
                        setSize={props.setSize} />
                ) : ""
            }
        </div>
    )
}

export default DoctorWrap;