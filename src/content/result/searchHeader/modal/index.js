import React from 'react';
import searchViewSetting from '../../../../config/searchViewSetting';

const SearchModal = (props) => {
    let must = props.request.must || "";
	let should = props.request.should || "";
	let mustNot = props.request.mustNot || "";

	const type = "hospital";
	const hospitalList = searchViewSetting.hospitalList[props.request.m_site_cd] || [];

    return (
        <div className={props.className} id="layer-search-pop">
			<div className="dimed d-down-md"></div>
			<div className="popup-inner bg-darkprimary">
				<div className="popup-cont">
					<div className="pop-form">
						{
							type === "hospital" && hospitalList.length > 0 ? (
								<dl>
									<dt className="text-title-md text-normal">검색기관 :</dt>
									<dd className="mb-md-2">
										<div className="radio-box">
											<span key="all" className="mr-lg-5">
												<input 	type="radio" 
														name="sev-selet-all" 
														id="sev-selet-all"
														className="custom-control" 
														checked={props.request.s_site_cd === undefined || props.request.s_site_cd === "전체" ? true : false}
														onChange={() => props.setSubSiteCd("전체")} />
												<label htmlFor="sev-selet-all" className="text-title-md text-normal">전체</label>
											</span>
											{
												hospitalList.map((data, index) => {
													return (
														<span key={index} className={index === (hospitalList.length-1) ? "" : "mr-lg-5"}>
															<input 	type="radio" 
																	name="sev-selet" 
																	id={"sev-selet"+index} 
																	className="custom-control" 
																	checked={props.request.s_site_cd !== undefined && props.request.s_site_cd === data ? true : false}
																	onChange={() => props.setSubSiteCd(data)} />
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
									   onChange={(e) => props.changeKeyword(e.target.value, "must")} value={must}
									   onKeyPress={(e) => e.key === "Enter" ? props.getSearch("modal") : ""}
									   style={{width: "100%", maxWidth: "400px"}} />
                                <input type="text" className="form-control ml-lg-3 mt-md-2" id="search-word1"
									   onChange={(e) => props.changeKeyword(e.target.value, "should")} value={should}
									   onKeyPress={(e) => e.key === "Enter" ? props.getSearch("modal") : ""}
									   placeholder="적어도 하나이상 포함할 단어를 입력해주세요" style={{width: "100%", maxWidth: "400px"}} title="포함할 단어 입력" />
							</dd>
						</dl>
						<dl>
							<dt className="text-title-md text-normal">
								<label htmlFor="del-word">제외단어 :</label></dt>
							<dd>
                                <input type="text" className="form-control" id="del-word" placeholder="검색에서 제외할 단어를 입력해주세요"
									onChange={(e) => props.changeKeyword(e.target.value, "mustNot")} value={mustNot}
									onKeyPress={(e) => e.key === "Enter" ? props.getSearch("modal") : ""}
									style={{width: "100%", maxWidth: "400px"}} />
							</dd>
						</dl>
					</div>
				</div>
				<div className="popup-footer pt-lg-16 pb-md-8 pb-lg-12">
					<div className="text-center">
						<button type="button" className="btn btn-lg bg-secondary text-default" onClick={() => props.getSearch("modal")}>검색</button>
						<button type="button" className="btn btn-lg btn-outline-white" onClick={() => props.allClear()}>초기화</button>
					</div>
				</div>
				<div className="close-area">
					<div>
						<button type="button" className="btn btn-close-popup" onClick={props.modalClose}>닫기</button>
					</div>
				</div>
			</div>
		</div>
    )
}

export default SearchModal;