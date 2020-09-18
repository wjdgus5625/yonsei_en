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
    } else if(type === 'select2') {
        floatRight = <div class="float-right select-box-right mt-md-2"><select class="form-control" title="정확도순"><option>최신날짜순</option><option>정확도순</option></select><select class="form-control ml-lg-1" title="갯수"><option>10개</option><option>20개</option><option>30개</option><option>50개</option><option>100개</option></select></div>
    } else if(type === 'select3') {
        floatRight = 
        <div class="float-right select-box-right mt-md-2">
            <select class="form-control" title="전체">
                <option>전체</option>
                <option>질병정보</option>
                <option>검사/치료정보</option>
                <option>생활속 건강관리</option>
                <option>건강한 영양관리</option>
                <option>어린이 건강관리</option>
                <option>건강카드뉴스</option>
                <option>건강동영상</option>
                <option>의료진칼럼</option>
                <option>건강도서추천</option>
            </select>
            <select class="form-control ml-lg-1" title="정확도순">
                <option>정확도순</option>
                <option>최신날짜순</option>
            </select>
            <select class="form-control ml-lg-1" title="갯수">
                <option>10개</option>
                <option>20개</option>
                <option>30개</option>
                <option>50개</option>
                <option>100개</option>
            </select>
        </div>
    }
    
    return (
        <div className={"search-cont-title border-bottom "+addClass}>
            <span className="text-lg">{title} <span className="text-primary">{count}</span> 건</span>
            {floatRight}
        </div>
    )
}

export default searchContentTitle;