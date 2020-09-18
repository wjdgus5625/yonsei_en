import React, { useContext } from 'react';
import { RootContext } from '../..';

const SearchModal = ({className, modalClose, getSearch, changeKeyword, allClear}) => {
	const rootContext = useContext(RootContext);
    let must = rootContext.request.must || "";
	let should = rootContext.request.should || "";
	let mustNot = rootContext.request.mustNot || "";

	const type = "hospital";
	const hospitalList = ["세브란스병원", "재활병원", "심장혈관병원", "안과병원", "어린이병원"]

	const setDepartment = (data) => {
		rootContext.setRequest({
			...rootContext.request,
			category3: data
		})
	}

    return (
        <div className={className} id="layer-search-pop">
			<div className="dimed d-down-md"></div>
			<div className="popup-inner bg-darkprimary">
				<div className="popup-cont">
					<div className="pop-form">
						{
							type === "hospital" ? (
								<dl>
									<dt className="text-title-md text-normal">검색기관 :</dt>
									<dd className="mb-md-2">
										<div className="radio-box">
											{
												hospitalList.map((data, index) => {
													return (
														<span key={index}  onClick={() => setDepartment(data)} className={index === (hospitalList.length-1) ? "" : "mr-lg-5"}>
															<input type="radio" name="sev-selet" id={"sev-selet"+index} className="custom-control" />
															<label htmlFor={"sev-selet"+index} className="text-title-md text-normal">{data}</label>
														</span>
													)
												})
											}
										</div>
									</dd>
								</dl>
							) : ""
						}
						<dl>
							<dt className="text-title-md text-normal">
								<label htmlFor="search-word">포함단어 :</label></dt>
							<dd>
                                <input type="text" className="form-control" id="search-word" placeholder="반드시 포함할 단어를 입력해주세요"
                                       onChange={(e) => changeKeyword(e.target.value, "must")} value={must}
									   style={{width: "100%", maxWidth: "400px"}} />
                                <input type="text" className="form-control ml-lg-3 mt-md-2" id="search-word1"
                                       onChange={(e) => changeKeyword(e.target.value, "should")} value={should}
									   placeholder="적어도 하나이상 포함할 단어를 입력해주세요" style={{width: "100%", maxWidth: "400px"}} title="포함할 단어 입력" />
							</dd>
						</dl>
						<dl>
							<dt className="text-title-md text-normal">
								<label htmlFor="del-word">제외단어 :</label></dt>
							<dd>
                                <input type="text" className="form-control" id="del-word" placeholder="검색에서 제외할 단어를 입력해주세요"
                                    onChange={(e) => changeKeyword(e.target.value, "mustNot")} value={mustNot}
									style={{width: "100%", maxWidth: "400px"}} />
							</dd>
						</dl>
					</div>
				</div>
				<div className="popup-footer pt-lg-16 pb-md-8 pb-lg-12">
					<div className="text-center">
						<button type="button" className="btn btn-lg bg-secondary text-default" onClick={getSearch}>검색</button>
						<button type="button" className="btn btn-lg btn-outline-white" onClick={allClear}>초기화</button>
					</div>
				</div>
				<div className="close-area">
					<div>
						<button type="button" className="btn btn-close-popup" onClick={modalClose}>닫기</button>
					</div>
				</div>
			</div>
		</div>
    )
}

export default SearchModal;