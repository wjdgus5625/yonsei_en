import React from 'react';
import SearchContentTitle from '../title/index'
import CenterWrap from '../centerwrap/index'
import SingleTabCenter from '../centerwrap/singletab/index'

const searchContent2 = ({result}) => {
    return (
        <div className="tab-content" id="tab-content2">
            <h3 className="sr-only">진료과</h3>
            <SearchContentTitle 
                title="진료과" 
                addClass=""
                type="select1" />
            {
                result !== undefined && result.center !== undefined ? <SingleTabCenter /> : ""
            }
            <CenterWrap
                result={result.center} 
                type="single"
            />
        </div>
    )
}

export default searchContent2;