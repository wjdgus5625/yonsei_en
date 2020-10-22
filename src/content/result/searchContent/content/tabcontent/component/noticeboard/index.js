import React, { useEffect, useState } from 'react';
import Nodata from '../nodata/index'
import parser from 'html-react-parser';

import MoreBtn from '../morebtn/index';

const NoticeBoard = (props) => {
    const [result, setResult] = useState(props.result)

    useEffect(() => {
        setResult(props.result)
    }, [props.result])

    return (
        <div className="notice-board">
            <ul className="notice-list">
                {
                    result !== undefined && result.list.length > 0 ? 
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
                result !== undefined && result.list !== undefined && result.list.length > 0 && props.type === 'single' && result.totalSize > props.request.size ? (
                    <MoreBtn />
                ) : ""
            }
        </div>
    )
}

export default NoticeBoard;