import React, { useState, createContext, useEffect } from 'react';

import SearchHeader from './searchHeader/index'
import SearchBody from './searchContent/index'
import Header from '../header/index'
import Footer from '../footer/index'
import SearchViewSetting from '../../config/searchViewSetting/index'
import ApiConfig from '../../config/apiConfig/index';

import Axios from 'axios';
import qs from 'qs';

import util from '../../util/util'

export const RootContext = createContext();

function Content({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

  const [result, setResult] = useState({});
  const [request, setRequest] = useState({
    ...query,
    siteType: util.m_site_cdType(query.m_site_cd), // 검색 결과의 탭부분을 구분하기 위한 사이트타입 필드 추가
    m_site_cd: query.m_site_cd === undefined || (query.m_site_cd !== undefined && query.m_site_cd.length === 0) ? "sev": query.m_site_cd,
    m_site_cd_default: query.m_site_cd === undefined || (query.m_site_cd !== undefined && query.m_site_cd.length === 0) ? "sev": query.m_site_cd // 인기검색어, 연관검색어의 경우 기관선택 select 박스가 변경되더라도 고정시키기 위해 default값 추가 
  });

  const store = {
    request: util.viewKeywordSetting(request),
    setRequest: setRequest,
    result: result,
    setResult: setResult,
    type: "all"
  }

  useEffect(() => {
    console.log('useEffect!')
    console.log(request)
    const getSearch = async () => {
      const result = await Axios.get(ApiConfig.search_path, {params: request})
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
      console.log(result)
      if(result) {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = "통합검색 | " + SearchViewSetting.m_site_cd[request.m_site_cd]
        setResult(result)
      }
    }

    if (request.keyword !== undefined && request.keyword.length > 0) {
      getSearch()
    }
    
  }, [request]);

  return (
      <div className="wrapper">
        <Header m_site_cd={query.m_site_cd} />
        <div id="content">
          <RootContext.Provider value={store}>
            <SearchHeader />
            <SearchBody />
          </RootContext.Provider>
        </div>
        <Footer />
      </div>
  );
}

export default Content;