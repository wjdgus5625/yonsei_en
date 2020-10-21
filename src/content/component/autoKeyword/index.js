import React from 'react';
import parser from 'html-react-parser';

import ListItem from '../ListItem/index'

const AutoKeyword = ({type, list, removeTagList, deleteRecentKeyword, allDeleteRecentKeyword, m_site_cd, listFocus, setListFocus}) => {
    return (
        <div className="related-search-wrap" style={{display: type !== "recentkeyword" && list.length === 0 ? "none" : ""}}>
            <div className={type === "recentkeyword" ? "search-list bg-white pb-0" : "search-list bg-white"}>
                <div className="" style={{maxHeight: type === "recentkeyword" ? "243px" : "243px"}}>
                    <ul className={type === "recentkeyword" ? "list mb-md-0" : "list"}>
                        {
                            type === "recentkeyword" ? (
                                list.length > 0 ? (
                                    list.map((data, index) => {
                                        return (
                                            <ListItem 
                                                key={index}
                                                data={data}
                                                deleteRecentKeyword={deleteRecentKeyword}
                                                m_site_cd={m_site_cd}
                                                focus={listFocus === index ? true : false}
                                                listFocus={listFocus}
                                                setListFocus={setListFocus}
                                            />
                                        )
                                    })
                                ) : (
                                    <li>최근 검색어가 없습니다.</li>
                                )
                            ) : (
                                list.map((data, index) => {
                                    return (
                                        <li key={index}>
                                            <a href="#;" style={{display: "block"}} onMouseDown={(e) => {
                                                e.preventDefault()
                                                window.location.href = "/search/result?keyword="+removeTagList[index]+"&m_site_cd="+m_site_cd
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
                    type === "recentkeyword" ? (
                        <div className="bg-whiteblue all-del text-center">
                            <a href="#;" style={{display: "block"}} onMouseDown={(e) => {
                                e.preventDefault()
                                allDeleteRecentKeyword()
                            }}>일괄 삭제</a>
                        </div>
                    ) : ""
                }
            </div>
        </div>
    );
}

export default AutoKeyword;