import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie'

import SearchBar from './searchbar/index';

import qs from 'qs';
import Axios from 'axios';

import ApiConfig from '../../../config/apiConfig/index';
import util from '../../../util/util'

const SearchHeader = (props) => {
	const [request, setRequest] = useState(props.request);
	const [cookies, setCookie] = useCookies('recentkeyword', [])
	const [keywordMatch, setKeywordMatch] = useState({})

	useEffect(() => {
		setRequest(props.request)
	}, [props.request])

	const getSearch = (type) => {
		if(request.m_site_cd === undefined || (request.m_site_cd !== undefined && request.m_site_cd.length === 0)) {
			alert('Please select an hospital!')
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
			alert("Please enter a search term!")
			return;
		}
	}

	const getAutoComplete = async (keyword) => {
        if(keyword.length === 0 && cookies.recentkeyword !== undefined) {
            setKeywordMatch({ list: cookies.recentkeyword, type: "recentkeyword" })
        } else if (keyword.length === 0 && cookies.recentkeyword === undefined) {
            setKeywordMatch({ list: [], type: "recentkeyword" })
        } else {
            const result = await Axios.get(ApiConfig.autocomplete_path, {
				params: {
					keyword: keyword,
					m_site_cd: request.m_site_cd,
					language: "en"
				}
			})
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
		}
	}

	const selectChange = (category) => {
		setRequest({
			...request,
			m_site_cd: category,
			menu_cd: "all"
		})
	}

    return (
        <div id="sub-search" className="bg-darkprimary">
			<div className="container pt-lg-8 pb-lg-9 p-md-3 pt-md-6 pb-md-6">
				<div className="search-area">
					<SearchBar 
						getSearch={() => getSearch()}
						changeKeyword={changeKeyword}
						request={request}
						selectChange={selectChange}
						getAutoComplete={getAutoComplete}
						keywordMatch={keywordMatch}
						setKeywordMatch={setKeywordMatch}
						cookies={cookies}
						setCookie={setCookie}
					/>
				</div>
			</div>
		</div>
    )
}

export default SearchHeader;