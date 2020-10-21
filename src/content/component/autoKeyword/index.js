import React from 'react';
import parser from 'html-react-parser';

import ListItem from '../ListItem/index'

const AutoKeyword = (props) => {
    return (
        <div className="related-search-wrap" style={{display: props.type !== "recentkeyword" && props.list.length === 0 ? "none" : ""}}>
            <div className={props.type === "recentkeyword" ? "search-list bg-white pb-0" : "search-list bg-white"}>
                <div className="" style={{maxHeight: "243px"}}>
                {/* <div className="custom-scroll" style={{maxHeight: props.type === "recentkeyword" ? "130px" : "150px"}}> */}
                    <ul className={props.type === "recentkeyword" ? "list mb-md-0" : "list"}>
                        {
                            props.type === "recentkeyword" ? (
                                props.list.length > 0 ? (
                                    props.list.map((data, index) => {
                                        return (
                                            <ListItem 
                                                key={index}
                                                data={data}
                                                deleteRecentKeyword={props.deleteRecentKeyword}
                                                m_site_cd={props.m_site_cd}
                                            />
                                        )
                                    })
                                ) : (
                                    <li>최근 검색어가 없습니다.</li>
                                )
                            ) : (
                                props.list.map((data, index) => {
                                    return (
                                        <li key={index}>
                                            <a href="#;" style={{display: "block"}} onMouseDown={(e) => {
                                                e.preventDefault()
                                                window.location.href = "/search/result?keyword="+props.removeTagList[index]+"&m_site_cd="+props.m_site_cd
                                                }}>{parser(data)}
                                            </a>
                                        </li>
                                    )
                                })
                            )
                        }
                    </ul>
                </div>
                {
                    props.type === "recentkeyword" ? (
                        <div className="bg-whiteblue all-del text-center">
                            <a href="#;" style={{display: "block"}} onMouseDown={(e) => {
                                e.preventDefault()
                                props.allDeleteRecentKeyword()
                            }}>일괄 삭제</a>
                        </div>
                    ) : ""
                }
            </div>
        </div>
    );
}

export default AutoKeyword;