import React from 'react';
import Nodata from '../nodata/index'
import SingleTab from './singletab/index';
import MoreBtn from '../morebtn/index';

import ApiConfig from '../../../../../../../config/apiConfig/index'

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
                                <a className="line-gray" href={ApiConfig.main_host+data.url} target="_blank" rel="noopener noreferrer">
                                    <span>{data.dept_nm}</span>
                                </a>
                            </li>
                        )
                    }) : <Nodata />
                }
            </ul>
            {
                props.type === 'single' && props.result !== undefined && props.result.list !== undefined && props.result.list.length > 0 && props.result.totalSize > props.size ? (
                    <MoreBtn 
                        getSearchMore={props.getSearchMore} 
                        menu_cd={props.menu_cd} 
                        size={props.size}
                        setSize={props.setSize} />
                ) : ''
            }
        </div>

    )
}

export default centerWrap;