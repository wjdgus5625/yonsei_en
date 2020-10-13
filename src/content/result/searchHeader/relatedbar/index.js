import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import qs from 'qs';

import util from '../../../../util/util';
import ApiConfig from '../../../../config/apiConfig/index'

const ReatedBar = ({checked, onChange, m_site_cd, request}) => {

    const [popKeyword, setPopKeyword] = useState([]);

    useEffect(() => {
        console.log('popKeyword useEffect')
        const getPopKeyword = async () => {
          const result = await Axios.get(ApiConfig.pop_path + '?m_site_cd=' + m_site_cd)
          .then(resp => {
            return resp.data;
          })
          .catch(err => {
            if(err.response === undefined) {
              alert(err.message)
            } else {
              alert(err.response.data.message)
            }
            
          });
          if(result) setPopKeyword(result)
        }
    
        if(m_site_cd !== undefined && m_site_cd.length > 0) {
            getPopKeyword();
        }
        
    }, [m_site_cd]);

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
                                popKeyword.map((data) => {
                                    return (
                                        <li key={data.rank}>{data.query}</li>
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
                            popKeyword.map((data) => {
                                return (
                                    <li key={data.rank}>
                                        <a href={'?' + qs.stringify(util.onlyKeywordSetting(request, data.query))}><span className="bg-secondary mr-lg-4 mr-md-2">{data.rank}</span>
                                            <p>{data.query}</p>
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
                <input type="checkbox" id="re-search" className="custom-control search-check" checked={checked} onChange={onChange} />
                <label htmlFor="re-search" className="text-lg text-normal">결과내재검색</label>
            </div>
        </div>
    )
}

export default ReatedBar;