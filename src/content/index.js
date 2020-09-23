import React, { useState, createContext, useEffect } from 'react';

import SearchHeader from './searchHeader/index'
import SearchBody from './searchContent/index'
import Header from './header/index'
import Footer from './footer/index'

import Axios from 'axios';
import qs from 'qs';

import util from '../util/util'

export const RootContext = createContext();

function Content({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

  const [result, setResult] = useState({});
  const [request, setRequest] = useState({
    ...query,
    siteType: util.category1Type(query.category1)
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
      const result = await Axios.get('http://localhost:4500/api', {params: request})
      .then(resp => {
        return resp.data;
      })
      .catch(err => {
        alert(err.response.data)
      });

      if(result) setResult(result)
    }

    if(request.category1 === undefined) {
      alert("기관을 선택해주세요!")
    } else {
      getSearch();
    }
    
  }, [request]);

  return (
      <div className="wrapper">
        <Header />
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