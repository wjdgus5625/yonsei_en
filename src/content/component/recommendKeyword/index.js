import React from 'react';

const RecommendKeyword = (props) => {
    return (
        <div className="search-keyword-wrap mt-lg-10 mt-md-7">
            {
                props.recommend.map((data, index) => {
                    return (
                        <span key={index} className="keyword-item text-lg text-normal">
                            <a href={"/search/result?keyword="+data+"&m_site_cd="+props.m_site_cd}>
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