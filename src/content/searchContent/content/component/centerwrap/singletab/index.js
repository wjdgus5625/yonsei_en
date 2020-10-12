import React, { useContext } from 'react';
import { RootContext } from '../../../../..';

const SingleTab = () => {
    const rootContext = useContext(RootContext);

    const cate_cd = rootContext.request.cate_cd;

    const getSearchDepartment = (cate_cd) => {
        rootContext.setRequest({
            ...rootContext.request,
            cate_cd: cate_cd
        })
    }
    return (
        <div className="text-center mt-lg-6 mb-lg-6 mt-md-3">
            <span className="mr-lg-5 mr-md-3">
                <input type="radio" name="radio" id="radio" className="custom-control" onChange={() => getSearchDepartment("전체")} checked={cate_cd === undefined || cate_cd === "전체" ? true : false} />
                <label htmlFor="radio">전체</label>
            </span>
            <span className="mr-lg-5 mr-md-3">
                <input type="radio" name="radio" id="radio1" className="custom-control" onChange={() => getSearchDepartment("진료과")} checked={cate_cd === "진료과" ? true : false} />
                <label htmlFor="radio1">진료과</label>
            </span>
            <span className="mr-lg-5 mr-md-3">
                <input type="radio" name="radio" id="radio2" className="custom-control" onChange={() => getSearchDepartment("센터")} checked={cate_cd === "센터" ? true : false} />
                <label htmlFor="radio2">센터</label>
            </span>
            <span>
                <input type="radio" name="radio" id="radio3" className="custom-control" onChange={() => getSearchDepartment("클리닉")} checked={cate_cd === "클리닉" ? true : false} />
                <label htmlFor="radio3">클리닉</label>
            </span>
        </div>
    )
}

export default SingleTab;