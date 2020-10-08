import React, { useContext } from 'react';
import { RootContext } from '../../..';

const SearchContentTitle = ({title, addClass, result, href, type, chosung, cate_cd}) => {
    const rootContext = useContext(RootContext);
    const size = rootContext.request.size;
    const order = rootContext.request.order;
    const board_nm = rootContext.request.board_nm;
    const selectOnChange = (size, order, board_nm) => {
        rootContext.setRequest({
            ...rootContext.request,
            size,
            order,
            board_nm
        })
    }

    let floatRight;

    if(type === 'default') {
        floatRight = 
        <span className="float-right"><a href={href + (cate_cd === "doctor" || cate_cd === "professor" ? "&chosung="+chosung : "")} className="btn btn-sm btn-outline-default">더보기</a></span>
    } else if(type === 'select2') {
        floatRight = 
        <div className="float-right select-box-right mt-md-2">
            <select className="form-control" title="정확도순" 
                    value={order === undefined ? "score" : order} onChange={(e) => selectOnChange(size, e.target.value, board_nm)}>
                <option value="score">정확도순</option>
                <option value="date">최신날짜순</option>
            </select>
        </div>
    } else if(type === 'select3') {
        floatRight = 
        <div className="float-right select-box-right mt-md-2">
            <select className="form-control" title="전체" 
                    value={board_nm === undefined ? "all" : board_nm} onChange={(e) => selectOnChange(size, order, e.target.value)}>
                <option value="all">전체</option>
                <option value="질병정보">질병정보</option>
                <option value="검사/치료정보">검사/치료정보</option>
                <option value="생활속 건강관리">생활속 건강관리</option>
                <option value="건강한 영양관리">건강한 영양관리</option>
                <option value="어린이 건강관리">어린이 건강관리</option>
                <option value="건강카드뉴스">건강카드뉴스</option>
                <option value="건강동영상">건강동영상</option>
                <option value="의료진칼럼">의료진칼럼</option>
                <option value="건강도서추천">건강도서추천</option>
            </select>
            <select className="form-control ml-lg-1" title="정확도순"
                    value={order === undefined ? "score" : order} onChange={(e) => selectOnChange(size, e.target.value, board_nm)}>
                <option value="score">정확도순</option>
                <option value="date">최신날짜순</option>
            </select>
        </div>
    }
    
    return (
        <div className={"search-cont-title border-bottom "+addClass}>
            <span className="text-lg">{title} <span className="text-primary">{result !== undefined && result.totalSize !== undefined ? result.totalSize : 0}</span> 건</span>
            {floatRight}
        </div>
    )
}

export default SearchContentTitle;