import React from 'react';
import Nodata from '../nodata/index'
import SingleTab from './singletab/index';
import MoreBtn from '../morebtn/index';

const centerWrap = ({addClass, result, type, request, cate_cd, getSearchDepartment}) => {
    return (
        <div className={"center-wrap " + addClass}>
            {
                type === "single" ? <SingleTab cate_cd={cate_cd} getSearchDepartment={getSearchDepartment}/> : ""
            }
            <ul className="depart-list">
                {
                    result !== undefined && result.list.length > 0 ? result.list.map((data, index) => {
                        if(type === 'all' && index >= 8) return ""; 
                        return (
                            <li key={index}>
                                <div className="line-gray">
                                    <a href="#none" title="새창" target="_blank">
                                        <span>{data.dept_nm}</span>
                                    </a>
                                </div>
                            </li>
                        )
                    }) : <Nodata />
                }
            </ul>
            {
                type === 'single' && result !== undefined && result.list !== undefined && result.list.length > 0 && result.totalSize > request.size ? (
                    <MoreBtn />
                ) : ''
            }
        </div>

    )
}

export default centerWrap;