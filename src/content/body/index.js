import React from 'react';

import SearchMenu from './content/menu/index'
import SearchContent1 from './content/page/page1'
import SearchContent2 from './content/page/page2'
import SearchContent3 from './content/page/page3'

const searchBody = ({result}) => {
    return (
        <div className="content-body mt-lg-16 mt-md-8 ">
            <div className="container">
                <SearchMenu></SearchMenu>
                <SearchContent1 result={result}/>
                <SearchContent2 result={result}/>
                <SearchContent3 result={result}/>
            </div>
        </div>
    )
}

export default searchBody