import React from 'react';

const searchContentTitle = ({title, addClass, result, href, type}) => {
    let count = 0;

    if(result !== undefined && result.totalSize !== undefined) {
        count = result.totalSize;
    }

    let floatRight;

    if(type === 'default') {
        floatRight = <span className="float-right"><a href={href} className="btn btn-sm btn-outline-default">더보기</a></span>
    } else if(type === 'select1') {
        floatRight = <div className="float-right select-box-right mt-md-2"><select className="form-control ml-lg-1" title="갯수"><option>12개</option><option>24개</option><option>36개</option><option>60개</option></select></div>
    }
    
    return (
        <div className={"search-cont-title border-bottom "+addClass}>
            <span className="text-lg">{title} <span className="text-primary">{count}</span> 건</span>
            {floatRight}
        </div>
    )
}

export default searchContentTitle;