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
        <span className="float-right"><a href={props.href + (props.menu_cd === "doctor" || props.menu_cd === "professor" ? "&chosung="+ props.chosung + "&cate_cd=department": "")} className="btn btn-sm btn-outline-default">more</a></span>
    } else if(props.type === 'select2') {
        floatRight = 
        <div className="float-right select-box-right mt-md-2">
            <select className="form-control" title="정확도순" 
                    value={props.order === undefined ? "score" : props.order} onChange={(e) => selectOnChange(e.target.value, props.board_nm)}>
                <option value="score">Relevance</option>
                <option value="date">Date</option>
            </select>
        </div>
    }
    
    return (
        <div className={"search-cont-title border-bottom "+props.addClass}>
            <span className="text-lg">{props.title} <span className="text-primary">{props.result !== undefined && props.result.totalSize !== undefined ? props.result.totalSize : 0}</span></span>
            {floatRight}
        </div>
    )
}

export default SearchContentTitle;