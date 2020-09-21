import React, { useContext } from 'react';
import SearchViewSetting from '../../../config/searchViewSetting/index'

import { RootContext } from '../..';

const SearchMenu = ({site}) => {
    const tabList = SearchViewSetting.tablist.hospital_kor
    const rootContext = useContext(RootContext);
    const category2 = rootContext.request.category2 || "";
    
    return (
        <nav className="tab-menu tab-menu1 tab-menu-search tab-menu-flicking">
            <div className="tab-scroll-container">
                <ul className="tab-list">
                    {
                        <li className={category2.length === 0 ? "on" : ""}>
                            <a href="#tab-content1"><span>통합검색</span></a>
                        </li>
                    }
                    {
                        tabList.map((data, index) => {
                            return (                               
                                <li key={index} className={category2 === data ? "on" : ""}>
                                    <a href={"#tab-content"+(index+1)}><span>{data}</span></a>
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    site === "hospital" ? (
                        <div className="control start">
                            <button type="button" className="btn-tab-prev">Prev</button>
                            <button type="button" className="btn-tab-next">Next</button>
                        </div>
                    ) : ""
                }
            </div>
        </nav>
    )
}

export default SearchMenu;