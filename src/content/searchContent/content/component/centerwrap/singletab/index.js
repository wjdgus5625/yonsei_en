import React, { useContext } from 'react';
import { RootContext } from '../../../../..';

const SingleTab = () => {
    const rootContext = useContext(RootContext);

    const department = rootContext.request.department;

    const getSearchDepartment = (department) => {
        rootContext.setRequest({
            ...rootContext.request,
            department: department
        })
    }
    return (
        <div className="text-center mt-lg-6 mb-lg-6 mt-md-3">
            <span className="mr-lg-5 mr-md-3">
                <input type="radio" name="radio" id="radio" className="custom-control" onChange={() => getSearchDepartment("전체")} checked={department === undefined || department === "전체" ? true : false} />
                <label htmlFor="radio">전체</label>
            </span>
            <span className="mr-lg-5 mr-md-3">
                <input type="radio" name="radio" id="radio1" className="custom-control" onChange={() => getSearchDepartment("진료과")} checked={department === "진료과" ? true : false} />
                <label htmlFor="radio1">진료과</label>
            </span>
            <span className="mr-lg-5 mr-md-3">
                <input type="radio" name="radio" id="radio2" className="custom-control" onChange={() => getSearchDepartment("센터")} checked={department === "센터" ? true : false} />
                <label htmlFor="radio2">센터</label>
            </span>
            <span>
                <input type="radio" name="radio" id="radio3" className="custom-control" onChange={() => getSearchDepartment("클리닉")} checked={department === "클리닉" ? true : false} />
                <label htmlFor="radio3">클리닉</label>
            </span>
        </div>
    )
}

export default SingleTab;