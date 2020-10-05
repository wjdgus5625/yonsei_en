import React from 'react';

const searchInfo = ({keyword, totalSize}) => {
    return (
       totalSize > 0 ? 
        <div>
            <h3 className="sr-only">통합검색</h3>
            <p className="text-lg text-center text-normal total-search mb-lg-12 mb-md-6">검색어 “
            <span className="text-primary">{keyword}</span>”에 대한 총 <br className="d-down-md" />
            <span className="text-primary">{totalSize === undefined ? 0 : totalSize}</span>건의검색결과를 찾았습니다.</p>
        </div>
        : 
        <div>
            <h3 className="sr-only">통합검색</h3>
            <p className="text-lg text-center text-normal total-search mb-lg-12 mb-md-6">검색어 “
            <span className="text-primary">{keyword}</span>”에 대한 <br className="d-down-md" />
            검색결과가 존재하지 않습니다.</p>
        </div>
    )
}

export default searchInfo;