import React, { useState, createContext } from 'react';
import SearchHeader from './header/index'
import SearchBody from './body/index'

export const RootContext = createContext();

function Search() {

    const [result, setResult] = useState({})

    const searchResult = (result) => {
        setResult(result)
    }

    return (
      <div id="content">
        <RootContext.Provider value={""}>
          <SearchHeader searchResult={searchResult}></SearchHeader>
          <SearchBody 
              result={result}
          />
        </RootContext.Provider>
      </div>
    );
  }
  
  export default Search;