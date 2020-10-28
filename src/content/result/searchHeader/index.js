import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie'

import SearchModal from './modal/index';
import SearchBar from './searchbar/index';
import RelatedBar from './relatedbar/index'

import qs from 'qs';
import Axios from 'axios';

import ApiConfig from '../../../config/apiConfig/index';
import util from '../../../util/util'

const SearchHeader = (props) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [request, setRequest] = useState(props.request);
	const [checked, setChecked] = useState(false);
	const [cookies, setCookie] = useCookies('recentkeyword', [])
	const [keywordMatch, setKeywordMatch] = useState({})

	useEffect(() => {
		setRequest(props.request)
	}, [props.request])

	const getSearch = (type) => {
		if(request.m_site_cd === undefined || (request.m_site_cd !== undefined && request.m_site_cd.length === 0)) {
			alert('기관을 선택해주세요!!')
			return;
		}
		if(request.keyword !== undefined && request.keyword.trim().length > 0) {
			if(cookies.recentkeyword !== undefined) {
                if(cookies.recentkeyword.includes(request.keyword.trim())) {
                    cookies.recentkeyword.splice(cookies.recentkeyword.indexOf(request.keyword.trim()), 1)
                    cookies.recentkeyword.unshift(request.keyword.trim())
                } else {
                    cookies.recentkeyword.unshift(request.keyword.trim())
				}
				
				if(cookies.recentkeyword.length > 8) {
					cookies.recentkeyword = cookies.recentkeyword.slice(0, 8)
				}
                setCookie('recentkeyword', cookies.recentkeyword)
            } else {
                setCookie('recentkeyword', [request.keyword.trim()])
			}
			if(type === "modal") {
				window.location.href = '?' + qs.stringify(util.searchKeywordSetting(request))
			} else {
				window.location.href = '?' + qs.stringify(util.searchKeywordSetting2(request))
			}
		} else {
			alert("검색어를 입력해주세요!!")
			return;
		}
	}

	const getAutoComplete = async (keyword) => {
        if(keyword.length === 0 && cookies.recentkeyword !== undefined) {
            setKeywordMatch({ list: cookies.recentkeyword, type: "recentkeyword" })
        } else {
            const result = await Axios.get(ApiConfig.autocomplete_path + '?keyword=' + keyword + "&m_site_cd=" + request.m_site_cd)
            .then(resp => {
                return resp.data;
			})
			.catch(err => {
				console.log(err)
			})
    
            if(result) {
				setKeywordMatch({ list: result.autocomplete.list, type: "autocomplete", removeTagList: result.autocomplete.removeTagList })
            }
        }
	}

	const changeKeyword = (keyword, type) => {
		if(type === "keyword") {
			setRequest({
				...request,
				keyword: keyword
			})
			getAutoComplete(keyword)
		} else if(type === "must") {
			setRequest({
				...request,
				must: keyword
			})
		} else if(type === "should") {
			setRequest({
				...request,
				should: keyword
			})
		} else if(type === "mustNot") {
			setRequest({
				...request,
				mustNot: keyword
			})
		} else if(type === "reSearchKeyword") {
			setRequest({
				...request,
				reSearchKeyword: keyword
			})
		}
	}

	const allClear = () => {
		setRequest({
			...request,
			keyword: util.clearKeywordSetting(request.keyword),
			must: "",
			mustNot: "",
			should: "",
			board_nm: "all",
			s_site_cd: "all"
		})
	}

	const selectChange = (category) => {
		setRequest({
			...request,
			m_site_cd: category,
			menu_cd: "all"
		})
	}

	const setSubSiteCd = (data) => {
		setRequest({
			...request,
			s_site_cd: data
		})
	}

    return (
        <div id="sub-search" className="bg-darkprimary">
			<div className="container pt-lg-8 pb-lg-9 p-md-3 pt-md-6 pb-md-6">
				<div className="search-area">
					<SearchBar 
						modalOpen={() => setModalOpen(true)} 
						getSearch={() => getSearch()}
						changeKeyword={changeKeyword}
						request={request}
						selectChange={selectChange}
						modalClose={() => setModalOpen(false)}
						checked={checked}
						getAutoComplete={getAutoComplete}
						keywordMatch={keywordMatch}
						setKeywordMatch={setKeywordMatch}
					/>
					<RelatedBar 
						checked={checked}
						onChange={() => setChecked(!checked)}
						m_site_cd={request.m_site_cd_default}
						request={request}
					/>
				</div>
			</div>
			<SearchModal 
				className={modalOpen ? "sub-search-form modal-popup show" : "sub-search-form modal-popup hide"} 
				modalClose={() => setModalOpen(false)} 
				getSearch={getSearch}
				changeKeyword={changeKeyword}
				request={request}
				allClear={allClear}
				setSubSiteCd={setSubSiteCd}
			/>
		</div>
    )
}

export default SearchHeader;