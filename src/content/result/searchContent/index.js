import React from 'react';

import SearchMenu from './menu/index'
import SearchContent from './content'

const SearchBody = (props) => {
    return (
        <div className="content-body mt-lg-8 mt-md-8 ">
            <div className="container">
                <SearchMenu request={props.request} result={props.result} setRequest={props.setRequest} /> 
                <SearchContent request={props.request} result={props.result} />
            </div>
        </div>
    )
}

export default SearchBody