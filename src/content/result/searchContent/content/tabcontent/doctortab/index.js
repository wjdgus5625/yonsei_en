import React, { useState, useContext } from 'react';
import SearchContentTitle from '../component/title'
import DoctorWrap from './doctorwrap'
import Axios from 'axios';
import ApiConfig from '../../../../../../config/apiConfig/index'
import SingleTab from './singletab'

import { RootContext } from '../..';

const DoctorTab = (props) => {
    const [result, setResult] = useState(props.result)
    const [chosung, setChosung] = useState(props.chosung !== undefined ? props.chosung : "ALL")
    const [cate_cd, setCate_cd] = useState(props.cate_cd !== undefined ? props.cate_cd : "")
    const [size, setSize] = useState(props.request.size)

    const rootContext = useContext(RootContext);
    const chosungList = ["ALL", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const rootChosung = chosung !== undefined ? chosung : rootContext.request.chosung

    const getSearchChosung = async (chosung) => {
        console.log({
            ...props.request,
            chosung: chosung,
            cate_cd: cate_cd,
            size: size
        })
        const getSearchResult = await Axios.get(ApiConfig.search_path, {params: {
            ...props.request,
            chosung: chosung,
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
            setChosung(chosung)
            setResult(getSearchResult[props.menu_cd === "all" ? "doctor" : props.menu_cd])
        }
    }

    const getSearchDepartment = async (cate_cd) => {
        console.log({
            ...props.request,
            chosung: chosung,
            cate_cd: cate_cd,
            size: size
        })
        const getSearchResult = await Axios.get(ApiConfig.search_path, {params: {
            ...props.request,
            chosung: chosung,
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
        console.log({
            ...props.request,
            chosung: chosung,
            cate_cd: cate_cd,
            size: size
        })
        const getSearchResult = await Axios.get(ApiConfig.search_path, {params: {
            ...props.request,
            chosung: chosung,
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
                menu_cd={props.menu_cd}
                chosung={chosung} />
            {
                props.result !== undefined && props.result.list !== undefined ? (
                    <div className="search-doctor-wrap">
                        <div className="ordering-wrap en">
                            <ul className="ordering-list">
                                {
                                    chosungList.map((data, index) => {
                                        return (
                                            <li key={index}><button type="button" disabled={props.chosungResult.chosung.indexOf(data) > -1 || data === "ALL" ? false : true} style={{outline: "none"}} 
                                                className={(data === "ALL" ? "all " : "") + (data === "ALL" && rootChosung === undefined ? "on" : "") + (rootChosung !== undefined && rootChosung === data ? "on" : "")} 
                                                onClick={() => getSearchChosung(data)}>{data}</button></li>
                                        )
                                    })
                                }
                            </ul>
                            {
                                props.type === 'single' && rootContext.request.menu_cd === 'doctor' ? 
                                    <SingleTab 
                                        cate_cd={cate_cd}
                                        getSearchDepartment={getSearchDepartment}
                                    /> : ""
                            }
                        </div>
                    </div>
                ) : ""
            }
            <DoctorWrap 
                result={result} 
                type={props.type} 
                menu_cd={props.menu_cd}
                size={size}
                setSize={setSize}
                getSearchMore={getSearchMore} />
        </div>
    )
}

export default DoctorTab;