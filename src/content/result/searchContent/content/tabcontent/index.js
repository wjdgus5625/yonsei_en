import React, { useState } from 'react';
import SearchContentTitle from './title/index'
import NoticeBoard from './component/noticeboard'
import CenterWrap from './component/centerwrap'
import DoctorWrap from './component/doctorwrap'
import Axios from 'axios';
import ApiConfig from '../../../../../config/apiConfig/index'

const TabContent = (props) => {
    const [result, setResult] = useState(props.result)
    const [chosung, setChosung] = useState(props.chosung !== undefined ? props.chosung : "ALL")
    const [cate_cd, setCate_cd] = useState(props.cate_cd !== undefined ? props.cate_cd : "")

    const getSearchBoardNm = async (board_nm, order) => {
        console.log({
            ...props.request,
            board_nm: board_nm,
            order: order
        })
        const getSearchResult = await Axios.get(ApiConfig.search_path, {params: {
            ...props.request,
            board_nm: board_nm,
            order: order
        }})
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            alert(err.response.data)
        });
        if(getSearchResult) {
            setResult(getSearchResult[props.request.menu_cd])
        }
    }

    const getSearchChosung = async (chosung) => {
        console.log({
            ...props.request,
            chosung: chosung,
            cate_cd: cate_cd
        })
        const getSearchResult = await Axios.get(ApiConfig.search_path, {params: {
            ...props.request,
            chosung: chosung,
            cate_cd: cate_cd
        }})
        .then(resp => {
            console.log(resp.data)
            return resp.data;
        })
        .catch(err => {
            alert(err.response.data)
        });
        if(getSearchResult) {
            setChosung(chosung)
            setResult(getSearchResult[props.request.menu_cd === "all" ? "doctor" : props.request.menu_cd])
        }
    }

    const getSearchDepartment = async (cate_cd, size) => {
        console.log({
            ...props.request,
            chosung: chosung,
            cate_cd: cate_cd,
            size: size
        })
        const getSearchResult = await Axios.get(ApiConfig.search_path, {params: {
            ...props.request,
            chosung: chosung,
            cate_cd: cate_cd
        }})
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            alert(err.response.data)
        });
        if(getSearchResult) {
            setCate_cd(cate_cd)
            setResult(getSearchResult[props.request.menu_cd])
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
                chosung={chosung}
                getSearchBoardNm={getSearchBoardNm} />
            {
                props.contentType === "doctor" ? 
                    <DoctorWrap 
                        result={result} 
                        type={props.type} 
                        getSearchChosung={getSearchChosung} 
                        chosung={chosung} 
                        chosungResult={props.chosungResult}
                        cate_cd={cate_cd}
                        getSearchDepartment={getSearchDepartment} /> : 
                    (
                    props.contentType === "center" ? 
                        <CenterWrap 
                            addClass="mt-lg-6 mt-md-4" 
                            result={result} 
                            type={props.type} 
                            request={props.request} 
                            cate_cd={cate_cd}
                            getSearchDepartment={getSearchDepartment}
                        /> : 
                        <NoticeBoard 
                            result={result}
                            type={props.type}
                            request={props.request} />
                    )
            }
        </div>
    )
}

export default TabContent;