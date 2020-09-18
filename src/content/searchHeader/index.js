import React, { useState, useContext } from 'react';
import Axios from 'axios';

import SearchModal from './modal/index';
import SearchBar from './searchbar/index';
import RelatedBar from './relatedbar/index'
import { RootContext } from '..';

const SearchHeader = () => {

	const rootContext = useContext(RootContext);
	const [modalOpen, setModalOpen] = useState(false);
	
	const getSearch = () => {
		const request = rootContext.request;

		console.log(request)

		Axios.get('http://localhost:4500/api', {params: request})
        .then(resp => {
			rootContext.setResult(resp.data)
        })
        .catch(err => {
            console.log(err)
        })
	}

	const changeKeyword = (keyword, type) => {
		if(type === "keyword") {
			rootContext.setRequest({
				...rootContext.request,
				keyword: keyword
			})
		} else if(type === "must") {
			rootContext.setRequest({
				...rootContext.request,
				must: keyword
			})
		} else if(type === "should") {
			rootContext.setRequest({
				...rootContext.request,
				should: keyword
			})
		} else if(type === "mustNot") {
			rootContext.setRequest({
				...rootContext.request,
				mustNot: keyword
			})
		}
	}

	const allClear = () => {
		rootContext.setRequest({
			keyword: ""
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
				/>
				<RelatedBar/>
			</div>
		</div>
		<SearchModal 
			className={modalOpen ? "sub-search-form modal-popup show" : "sub-search-form modal-popup hide"} 
			modalClose={() => setModalOpen(false)} 
			getSearch={() => getSearch()}
			changeKeyword={changeKeyword}
			allClear={() => allClear()}
		/>
		
	</div>
    )
}

export default SearchHeader;

