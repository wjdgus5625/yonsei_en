import React from 'react';
import Nodata from '../../component/nodata'
import MoreBtn from '../../component/morebtn';
import ApiConfig from '../../../../../../../config/apiConfig/index'
import DoctorPhoto from './doctorphoto'

const DoctorWrap = (props) => {
    return (
        <div className={props.type === "all" ? "search-result-all" : "search-result-single"}>
            <div className="doctor-card-wrap">
                <ul>
                    {
                        props.result !== undefined && props.result.list !== undefined && props.result.list.length > 0 ? props.result.list.map((data, index) => {
                            if(props.type === 'all' && index >= 5) return ""
                            return (
                                <li key={index}>
                                    <a href={ApiConfig.main_host+data.url}
                                        target="_blank" rel="noopener noreferrer">
                                        <div className="doctor-card-box">
                                            <div className="card-view">
                                                <DoctorPhoto 
                                                    img_src={data.thumb}
                                                    src={ApiConfig.main_host + data.thumb}
                                                />
                                                <dl>
                                                    <dt className="text-title text-lg">{data.nm_en}</dt>
                                                    <dd className="mb-0">{data.detail_major_en === undefined || data.detail_major === null || data.detail_major_en.length === 0 ? "" : data.detail_major_en}</dd>
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