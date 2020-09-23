import React from 'react';
import Nodata from '../nodata/index'
import parser from 'html-react-parser';

import MoreBtn from '../morebtn/index';

const noticeBoard = ({result, type}) => {
    return (
        <div className="notice-board">
            <ul className="notice-list">
                {
                    result !== undefined && result.list.length > 0 ? result.list.map((data, index) => {
                        return (
                            <li key={index}>
                                <div className="notice-wrap">
                                    <div className="img-area">
                                        <img src="/_share/img/common/_sample.jpg" alt="이미지" />
                                    </div>
                                    <div className="notice-cont ml-lg-6 ml-md-3">
                                        <a href="#none" target="_blank" title="새창" className="text-title">
                                            {data.title}
                                        </a>
                                        <p className="text-area">{parser(data.content)}</p>
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
                result !== undefined && result.list !== undefined && result.list.length > 0 && type === 'single' ? (
                    <MoreBtn />
                ) : ""
            }
        </div>
    )
}

export default noticeBoard;