import React, { useState } from 'react';
import SearchContentTitle from '../component/title'
import CenterWrap from './centerwrap'
import SingleTab from './singletab'
import Axios from 'axios';
import ApiConfig from '../../../../../../config/apiConfig/index'

const CenterTab = (props) => {
    const [result, setResult] = useState(props.result)
    const [cate_cd, setCate_cd] = useState(props.cate_cd !== undefined ? props.cate_cd : "")
    const [size, setSize] = useState(props.request.size)

    const getSearchDepartment = async (cate_cd) => {
        // console.log({
        //     ...props.request,
        //     cate_cd: cate_cd,
        //     size: size
        // })
        const getSearchResult = await Axios.get(ApiConfig.search_path, {params: {
            ...props.request,
            cate_cd: cate_cd,
            size: size
        }})
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            alert(err.response.data)
        });
        if(getSearchResult) {
            setCate_cd(cate_cd)
            setResult(getSearchResult[props.menu_cd])
        }
    }

    const getSearchMore = async (size) => {
        // console.log({
        //     ...props.request,
        //     cate_cd: cate_cd,
        //     size: size
        // })
        const getSearchResult = await Axios.get(ApiConfig.search_path, {params: {
            ...props.request,
            cate_cd: cate_cd,
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
                menu_cd={props.menu_cd} />
            {
                props.type === "single" && props.menu_cd !== "class" ? <SingleTab cate_cd={cate_cd} getSearchDepartment={getSearchDepartment}/> : ""
            }
            <CenterWrap 
                addClass="mt-lg-6 mt-md-4" 
                result={result} 
                type={props.type} 
                request={props.request} 
                cate_cd={cate_cd}
                menu_cd={props.menu_cd}
                size={size}
                setSize={setSize}
                getSearchDepartment={getSearchDepartment}
                getSearchMore={getSearchMore}
            />
        </div>
    )
}

export default CenterTab;