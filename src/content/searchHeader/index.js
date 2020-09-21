import React, { useState, useContext } from 'react';

import SearchModal from './modal/index';
import SearchBar from './searchbar/index';
import RelatedBar from './relatedbar/index'
import { RootContext } from '..';

import qs from 'qs';

import util from '../../util/util'

const SearchHeader = () => {

	const rootContext = useContext(RootContext);
	const [modalOpen, setModalOpen] = useState(false);
	const [request, setRequest] = useState(rootContext.request);
	
	const getSearch = () => {
		if(request.category1 === undefined) {
			alert('기관을 선택해주세요!!')
			return;
		}
		if(request.category2 === undefined) {
			setRequest({
				...request,
				category2: "통합검색"
			})
		}
		if(request.keyword !== undefined && request.keyword.replace(/[\\ ]/gi, '')) {
			if(modalOpen) {
				window.location.href = '?' + qs.stringify(util.searchKeywordSetting(request))
			} else {
				window.location.href = '?' + qs.stringify(util.onlyKeywordSetting(request, request.keyword))
			}
		} else {
			alert("검색어를 입력해주세요!!")
			return;
		}
		
	}

	const changeKeyword = (keyword, type) => {
		if(type === "keyword") {
			setRequest({
				...request,
				keyword: keyword
			})
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
		}
	}

	const allClear = () => {
		setRequest({
			keyword: ""
		})
	}

	const selectChange = (scope, category) => {
		if(scope === 1) {
			setRequest({
				...request,
				category1: category
			})
		} else if (scope === 2) {
			setRequest({
				...request,
				category2: category
			})
		}
	}

	const setDepartment = (data) => {
		setRequest({
			...request,
			category3: data
		})
	}

    return (
        <div id="sub-search" className="bg-darkprimary">
			<div className="container pt-lg-17 pb-lg-18 p-md-3 pt-md-6 pb-md-6">
				<div className="search-area">
					<SearchBar 
						modalOpen={() => setModalOpen(true)} 
						getSearch={() => getSearch()}
						changeKeyword={changeKeyword}
						request={request}
						selectChange={selectChange}
					/>
					<RelatedBar/>
				</div>
			</div>
			<SearchModal 
				className={modalOpen ? "sub-search-form modal-popup show" : "sub-search-form modal-popup hide"} 
				modalClose={() => setModalOpen(false)} 
				getSearch={() => getSearch()}
				changeKeyword={changeKeyword}
				request={request}
				allClear={() => allClear()}
				setDepartment={setDepartment}
			/>
		</div>
    )
}

export default SearchHeader;

