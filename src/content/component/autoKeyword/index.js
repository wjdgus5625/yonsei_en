import React from 'react';
import parser from 'html-react-parser';

const AutoKeyword = ({type, list, removeTagList, deleteRecentKeyword, allDeleteRecentKeyword, m_site_cd}) => {
    return (
        <div className="related-search-wrap" style={{display: type !== "recentkeyword" && list.length === 0 ? "none" : ""}}>
            <div className={type === "recentkeyword" ? "search-list bg-white pb-0" : "search-list bg-white"}>
                <div className="custom-scroll" style={{maxHeight: type === "recentkeyword" ? "130px" : "150px"}}>
                    <ul className={type === "recentkeyword" ? "list mb-md-0" : "list"}>
                        {
                            type === "recentkeyword" ? (
                                list.length > 0 ? (
                                    list.map((data, index) => {
                                        return (
                                            <li key={index}>
                                                <a href="#;" style={{width: "98%"}} onMouseDown={(e) => {
                                                    e.preventDefault()
                                                    window.location.href = "/search/result?keyword="+data+"&m_site_cd="+m_site_cd
                                                }}>{data}</a>
                                                <a href="#;" className="float-right" onMouseDown={(e) => {
                                                    e.preventDefault()
                                                    deleteRecentKeyword(data)
                                                }}>
                                                    <i className="ico ico-times-sm"></i>
                                                    <span className="sr-only">삭제</span>
                                                </a>
                                            </li>
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