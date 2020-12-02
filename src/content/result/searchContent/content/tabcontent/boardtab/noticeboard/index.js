import React from 'react';
import Nodata from '../../component/nodata'
import parser from 'html-react-parser';

import MoreBtn from '../../component/morebtn';
import ApiConfig from '../../../../../../../config/apiConfig/index'

const NoticeBoard = (props) => {
    return (
        <div className="notice-board">
            <ul className="notice-list">
                {
                    props.result !== undefined && props.result.list !== undefined && props.result.list.length > 0 ? 
                        props.result.list.map((data, index) => {
                            if(props.type === 'all' && index >= 3) return ""
                            return (
                                <li key={index}>
                                    <div className="notice-wrap">
                                        <div className="notice-cont">
                                            <a href={ApiConfig.main_host + data.url} target="_blank" className="text-title" rel="noopener noreferrer">
                                                {data.title} 
                                            </a>
                                            <p className="text-area">{data.contents !== undefined ? parser(data.contents) : ""}</p>
                                            <p className="route">
                                                <a href={ApiConfig.main_host + data.page} target="_blank" rel="noopener noreferrer">{data.navigation}</a>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            )
                        }) : <Nodata />
                }
            </ul>
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

export default NoticeBoard;