import React, { useState } from 'react';
import Axios from 'axios';

import SearchModal from './modal/index';
import SearchBar from './searchbar/index';
import RelatedBar from './relatedbar/index'

const SearchHeader = ({searchResult}) => {
	
	const [modalOpen, setModalOpen] = useState(false);
	const [keyword, setKeyword] = useState("");
	const [category1, setCategory1] = useState("기관선택");
	const [category2, setCategory2] = useState("통합검색");
	const [must, setMust] = useState("");
	const [should, setShould] = useState("");
	const [mustNot, setMustNot] = useState("");
	
	const getSearch = () => {
		const request = {
			keyword: keyword,
			category1: category1,
			category2: category2,
			must: must,
			should: should,
			mustNot: mustNot
		}

		console.log(request)

		Axios.get('http://localhost:4000/api', {params: request})
        .then(resp => {
			searchResult(resp.data)
        })
        .catch(err => {
            console.log(err)
        })
	}
	
	const selectChange = (scope, category) => {
		if(scope === 1) {
			setCategory1(category)
		} else if (scope === 2) {
			setCategory2(category)
		}
	}

	const changeKeyword = (keyword, type) => {
		if(type === "keyword") {
			setKeyword(keyword)
		} else if(type === "must") {
			setMust(keyword)
		} else if(type === "should") {
			setShould(keyword)
		} else if(type === "mustNot") {
			setMustNot(keyword)
		}
	}

	const allClear = () => {
		setKeyword("")
		setMust("")
		setMustNot("")
		setShould("")
		setCategory1("기관선택")
		setCategory2("통합검색")
	}

    return (
        <div id="sub-search" className="bg-darkprimary">
		<div className="container pt-lg-17 pb-lg-18 p-md-3 pt-md-6 pb-md-6">
			<div className="search-area">
				<SearchBar 
					modalOpen={() => setModalOpen(true)} 
					getSearch={() => getSearch()}
					selectChange={selectChange}
					category1={category1}
					category2={category2}
					keyword={keyword}
					changeKeyword={changeKeyword}
				/>
				<RelatedBar/>
			</div>
		</div>
		<SearchModal 
			className={modalOpen ? "sub-search-form modal-popup show" : "sub-search-form modal-popup hide"} 
			modalClose={() => setModalOpen(false)} 
			getSearch={() => getSearch()}
			must={must}
			should={should}
			mustNot={mustNot}
			changeKeyword={changeKeyword}
			allClear={() => allClear()}
		/>
		
	</div>
    )
}

export default SearchHeader;

