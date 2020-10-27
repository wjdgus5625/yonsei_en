import React from 'react';
import Util from '../../../util/util'
import qs from 'qs';

const ListItem = (props) => {
    return (
        <li>
            <a href="#;" style={{width: "98%"}}
                onMouseDown={(e) => {
                    e.preventDefault()
                    window.location.href = "/search/result?" + qs.stringify(Util.searchKeywordSetting2({
                        m_site_cd: props.m_site_cd,
                        keyword: props.data
                    }))
                }}
            >{props.data}</a>
            <a href="#;" className="float-right" onMouseDown={(e) => {
                e.preventDefault()
                props.deleteRecentKeyword(props.data)
            }}>
                <i className="ico ico-times-sm"></i>
                <span className="sr-only">삭제</span>
            </a>
        </li>
    )
}

export default ListItem;