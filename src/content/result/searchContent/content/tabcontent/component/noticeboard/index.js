import React from 'react';
import Nodata from '../nodata/index'
import parser from 'html-react-parser';

import MoreBtn from '../morebtn/index';

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
                                        <div className="img-area">
                                            <img src="/search/yuhs/_share/img/common/_sample.jpg" alt="이미지" />
                                        </div>
                                        <div className="notice-cont ml-lg-6 ml-md-3">
                                            <a href="#none" target="_blank" title="새창" className="text-title">
                                                {data.title}
                                            </a>
                                            <p className="text-area">{data.contents !== undefined ? parser(data.contents) : ""}</p>
                                            <p className="route">
                                                <a href="#none" target="_blank" title="새창">{data.boardPath}</a>
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