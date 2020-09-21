import React from 'react';

import SearchMenu from './menu/index'
import SearchContent from './content'

const SearchBody = () => {
    // const tabList = ["all", "about", "news", "recruit", "fund", "research"]
    const tabList = ["all", "department", "doctor", "health", "seminar", "news", "guide", "about"]
    return (
        <div className="content-body mt-lg-16 mt-md-8 ">
            <div className="container">
                <SearchMenu site="hospital"/> 
                {
                    tabList.map((data, index) => {
                        return (
                            <SearchContent key={index} type={data} num={index+1} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchBody