import React from 'react';
import SearchContentTitle from '../title/index'
import DoctorWrap from '../doctorwrap/index'

const searchContent3 = ({result}) => {
    return (
        <div className="tab-content" id="tab-content3">
            <h3 className="sr-only">의료진</h3>
            <SearchContentTitle 
                title="의료진" 
                addClass=""
                type="select1" />
            <DoctorWrap 
                result={result.doctor} 
                request={result.request} 
                type="single"/>
        </div>
    )
}

export default searchContent3