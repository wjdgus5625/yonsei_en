import React, { useContext } from 'react';

import SearchMenu from './menu/index'
import SearchContent from './content'

import { RootContext } from '..';

const SearchBody = () => {
    const rootContext = useContext(RootContext);
    
    return (
        <div className="content-body mt-lg-16 mt-md-8 ">
            <div className="container">
                <SearchMenu request={rootContext.request} result={rootContext.result} /> 
                <SearchContent 
                    request={rootContext.request} />
            </div>
        </div>
    )
}

export default SearchBody