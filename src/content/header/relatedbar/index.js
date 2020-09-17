import React from 'react';

const ReatedBar = () => {
    return (
        <div className="related-keyword-bar mt-lg-10">
            <div className="relat-item">
                <a href="#none" className="click-area">
                    <span className="bg-secondary mr-lg-2 mr-md-1">연관</span>
                    <div className="text-title">
                        <ul className="ticker">
                            {
                                [...Array(9)].map((n, index) => {
                                    return (
                                        <li key={index}>{index+1}소아백혈병{index+1}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <i className="ico ico-util-plus-white"></i>
                </a>
                <div className="item-list-box">
                    <p className="text-title-md">연관검색어</p>
                    <ol className="list mb-md-0">
                        {
                            [...Array(9)].map((n, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#none"><span className="bg-secondary mr-lg-4 mr-md-2">{index+1}</span>
                                            <p>소아백혈병{index+1}</p>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ol>
                    <button type="button" className="btn btn-close-keyword">
                        <i className="ico ico-times-md"></i>
                        <span className="sr-only">닫기</span>
                    </button>
                </div>
            </div>
            <div className="relat-item ml-lg-6 ml-md-2">
                <a href="#none" className="click-area">
                    <span className="bg-secondary mr-lg-2 mr-md-1">인기</span>
                    <div className="text-title">
                        <ul className="ticker">
                            {
                                [...Array(9)].map((n, index) => {
                                    return (
                                        <li key={index}>{index+1}소아백혈병{index+1}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <i className="ico ico-util-plus-white"></i>
                </a>
                <div className="item-list-box">
                    <p className="text-title-md">인기검색어</p>
                    <ol className="list mb-md-0">
                        {
                            [...Array(9)].map((n, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#none"><span className="bg-secondary mr-lg-4 mr-md-2">{index+1}</span>
                                            <p>소아백혈병{index+1}</p>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ol>
                    <button type="button" className="btn btn-close-keyword">
                        <i className="ico ico-times-md"></i>
                        <span className="sr-only">닫기</span>
                    </button>
                </div>
            </div>
            <div className="float-right sorting-check">
                <input type="checkbox" id="re-search" className="custom-control search-check" />
                <label htmlFor="re-search" className="text-lg text-normal">결과내재검색</label>
            </div>
        </div>
    )
}

export default ReatedBar;