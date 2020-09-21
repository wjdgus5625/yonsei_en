import React, { useState, createContext, useEffect } from 'react';

import SearchHeader from './searchHeader/index'
import SearchBody from './searchContent/index'
import Header from './header/index'
import Footer from './footer/index'

import Axios from 'axios';
import qs from 'qs';

import util from '../util/util'

export const RootContext = createContext();

function Search({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })
  const [result, setResult] = useState({});
  const [request, setRequest] = useState(query);

  const store = {
    request: util.viewKeywordSetting(request),
    setRequest: setRequest,
    result: result,
    setResult: setResult,
    type: "all"
  }

  useEffect(() => {
    console.log('useEffect!')
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
    getSearch();
  }, [request]);

  return (
    <RootContext.Provider value={store}>
      <div className="wrapper">
        <Header />
        <div id="content">
          <SearchHeader />
          <SearchBody />
        </div>
        <Footer />
      </div>
    </RootContext.Provider>
  );
}

export default Search;