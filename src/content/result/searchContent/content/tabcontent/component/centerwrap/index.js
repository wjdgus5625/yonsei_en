import React from 'react';
import Nodata from '../nodata/index'
import SingleTab from './singletab/index';
import MoreBtn from '../morebtn/index';

const centerWrap = (props) => {
    return (
        <div className={"center-wrap " + props.addClass}>
            {
                props.type === "single" ? <SingleTab cate_cd={props.cate_cd} getSearchDepartment={props.getSearchDepartment}/> : ""
            }
            <ul className="depart-list">
                {
                    props.result !== undefined && props.result.list.length > 0 ? props.result.list.map((data, index) => {
                        if(props.type === 'all' && index >= 8) return ""; 
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
                props.type === 'single' && props.result !== undefined && props.result.list !== undefined && props.result.list.length > 0 && props.result.totalSize > props.request.size ? (
                    <MoreBtn cate_cd={props.cate_cd}/>
                ) : ''
            }
        </div>

    )
}

export default centerWrap;