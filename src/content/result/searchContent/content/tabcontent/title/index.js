import React from 'react';

const SearchContentTitle = (props) => {
    const selectOnChange = (order, board_nm) => {
        props.setBoard_nm(board_nm)
        props.setOrder(order)
        props.getSearchBoardNm(board_nm, order)
    }

    let floatRight;

    if(props.type === 'default') {
        floatRight = 
        <span className="float-right"><a href={props.href + (props.menu_cd === "doctor" || props.menu_cd === "professor" ? "&chosung="+ props.chosung : "")} className="btn btn-sm btn-outline-default">더보기</a></span>
    } else if(props.type === 'select2') {
        floatRight = 
        <div className="float-right select-box-right mt-md-2">
            <select className="form-control" title="정확도순" 
                    value={props.order === undefined ? "score" : props.order} onChange={(e) => selectOnChange(e.target.value, props.board_nm)}>
                <option value="score">정확도순</option>
                <option value="date">최신날짜순</option>
            </select>
        </div>
    } else if(props.type === 'select3') {
        floatRight = 
        <div className="float-right select-box-right mt-md-2">
            <select className="form-control" title="전체" 
                    value={props.board_nm === undefined ? "all" : props.board_nm} onChange={(e) => selectOnChange(props.order, e.target.value)}>
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
                    value={props.order === undefined ? "score" : props.order} onChange={(e) => selectOnChange(e.target.value, props.board_nm)}>
                <option value="score">정확도순</option>
                <option value="date">최신날짜순</option>
            </select>
        </div>
    }
    
    return (
        <div className={"search-cont-title border-bottom "+props.addClass}>
            <span className="text-lg">{props.title} <span className="text-primary">{props.result !== undefined && props.result.totalSize !== undefined ? props.result.totalSize : 0}</span> 건</span>
            {floatRight}
        </div>
    )
}

export default SearchContentTitle;