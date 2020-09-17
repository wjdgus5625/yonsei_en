import React from 'react';
import Nodata from '../../../../component/nodata/index'

const centerWrap = ({addClass, result, type}) => {
    return (
        <div className={"center-wrap " + addClass}>
            <ul className="depart-list">
                {
                    result !== undefined && result.list.length > 0 ? result.list.map((data, index) => {
                        if(type === 'all' && index >= 8) return ""; 
                        return (
                            <li key={index}>
                                <div className="line-gray">
                                    <a href="#none" title="새창" target="_blank">
                                        <span>{data.title}</span>
                                    </a>
                                </div>
                            </li>
                        )
                    }) : <Nodata />
                }
            </ul>
            {
                type === 'single' && result !== undefined ? (
                    <div className="text-center mt-lg-11 mt-md-6">
                        <a href="#;" className="btn btn-more">더보기</a>
                    </div>
                ) : ''
            }
        </div>

    )
}

export default centerWrap;