import React, { useState, createContext, useEffect } from 'react';

import SearchHeader from './searchHeader/index'
import SearchBody from './searchContent/index'

import Axios from 'axios';
import qs from 'qs';

export const RootContext = createContext();

function Search({ location }) {
  console.log('Search')
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })
  const [result, setResult] = useState({});
  const [request, setRequest] = useState(query)

  const store = {
    request: request,
    setRequest: setRequest,
    result: result,
    setResult: setResult,
    type: "all"
  }

  useEffect(() => {
    const getSearch = async () => {
      const result = await Axios.get('http://localhost:4500/api', {params: store.request})
      .then(resp => {
        return resp.data;
      })
      .catch(err => {
        console.log(err)
      });

      if(result) setResult(result)
    }
    getSearch();
  }, [store.request]);

  return (
    <div id="content">
      <RootContext.Provider value={store}>
        <SearchHeader />
        <SearchBody />
      </RootContext.Provider>
    </div>
  );
}

export default Search;