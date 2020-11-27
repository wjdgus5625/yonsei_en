import React, { useState, useEffect } from 'react';

import SearchHeader from './searchHeader/index'
import SearchBody from './searchContent/index'
import Header from './header/index'
import Footer from './footer/index'
import SearchViewSetting from '../../config/searchViewSetting/index'
import ApiConfig from '../../config/apiConfig/index';
import Loading from '../component/loading'

import Axios from 'axios';
import qs from 'qs';

import util from '../../util/util'

function Content({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })
  const [visible, setVisible] = useState(true);

  const [result, setResult] = useState({});
  const [request, setRequest] = useState({
    ...query,
    siteType: util.m_site_cdType(query.m_site_cd), // 검색 결과의 탭부분을 구분하기 위한 사이트타입 필드 추가
    m_site_cd: query.m_site_cd === undefined || (query.m_site_cd !== undefined && query.m_site_cd.length === 0) ? "sev": query.m_site_cd,
    m_site_cd_default: query.m_site_cd === undefined || (query.m_site_cd !== undefined && query.m_site_cd.length === 0) ? "sev": query.m_site_cd, // 인기검색어, 연관검색어의 경우 기관선택 select 박스가 변경되더라도 고정시키기 위해 default값 추가 
    language: "en"
  });

  const m_site_cd = query.m_site_cd !== undefined ? query.m_site_cd : "sev"

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
        htmlTitle.innerText = "Search | " + SearchViewSetting.m_site_cd[request.m_site_cd]
        setResult(result)
      }
      setVisible(false)
    }

    if (request.keyword !== undefined && request.keyword.length > 0) {
      getSearch()
    }
    
  }, [request]);

  return (
      <div className="wrapper">
        <Header m_site_cd={m_site_cd} />
        <div id="content">
            <SearchHeader request={request} />
            <SearchBody request={request} result={result} setRequest={setRequest}/>
        </div>
        <Footer />
        <Loading visible={visible}/>
      </div>
  );
}

export default Content;