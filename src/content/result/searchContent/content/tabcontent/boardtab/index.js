import React, { useState } from 'react';
import SearchContentTitle from '../component/title'
import NoticeBoard from './noticeboard'
import Axios from 'axios';
import ApiConfig from '../../../../../../config/apiConfig/index'

const BoardTab = (props) => {
    const [result, setResult] = useState(props.result)
    const [order, setOrder] = useState("score")
    const [board_nm, setBoard_nm] = useState("all")
    const [size, setSize] = useState(props.request.size)
    const getSearchBoardNm = async (board_nm, order) => {
        // console.log({
        //     ...props.request,
        //     board_nm: board_nm,
        //     order: order,
        //     size: size
        // })
        const getSearchResult = await Axios.get(ApiConfig.search_path, {params: {
            ...props.request,
            board_nm: board_nm,
            order: order,
            size: size
        }})
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            alert(err.response.data)
        });
        if(getSearchResult) {
            setBoard_nm(board_nm)
            setOrder(order)
            setResult(getSearchResult[props.menu_cd])
        }
    }

    const getSearchMore = async (size) => {
        // console.log({
        //     ...props.request,
        //     board_nm: board_nm,
        //     order: order,
        //     size: size
        // })
        const getSearchResult = await Axios.get(ApiConfig.search_path, {params: {
            ...props.request,
            board_nm: board_nm,
            order: order,
            size: size
        }})
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            alert(err.response.data)
        });
        if(getSearchResult) {
            setSize(size)
            setResult(getSearchResult[props.menu_cd])
        }
    }

    return (
        <div className="tab-content" id={"tab-content"} style={{display: "block"}}>
            <SearchContentTitle 
                title={props.title} 
                addClass={props.addClass}
                result={result}
                href={props.href}
                type={props.tabType}
                menu_cd={props.menu_cd}
                order={order}
                setOrder={setOrder}
                board_nm={board_nm}
                setBoard_nm={setBoard_nm}
                getSearchBoardNm={getSearchBoardNm} />
            <NoticeBoard 
                result={result}
                type={props.type}
                menu_cd={props.menu_cd}
                size={size}
                setSize={setSize}
                request={props.request}
                getSearchMore={getSearchMore} />
        </div>
    )
}

export default BoardTab;