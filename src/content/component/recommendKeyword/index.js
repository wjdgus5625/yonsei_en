import React from 'react';

const RecommendKeyword = ({recommend, style, m_site_cd}) => {
    return (
        <div className="search-keyword-wrap mt-lg-10 mt-md-7" style={style}>
            {
                recommend.map((data, index) => {
                    return (
                        <span key={index} className="keyword-item text-lg text-normal">
                            <a href={"/search/result?keyword="+data+"&m_site_cd="+m_site_cd}>
                                #{data}
                            </a>
                        </span>
                    )
                })
            }
        </div>
    )
}

export default RecommendKeyword;