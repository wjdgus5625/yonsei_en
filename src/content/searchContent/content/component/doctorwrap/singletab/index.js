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
        <div className="doctor-check">
            <span className="mr-5 ml-lg-7">
                <input type="radio" name="radio1" id="radio1-1" className="custom-control" onChange={() => getSearchDepartment("진료과")} checked={department === undefined || department === "진료과" ? true : false} />
                <label htmlFor="radio1-1">진료과</label>
            </span>
            <span className="mr-5">
                <input type="radio" name="radio1" id="radio1-2" className="custom-control" onChange={() => getSearchDepartment("센터")} checked={department === "센터" ? true : false} />
                <label htmlFor="radio1-2">센터</label>
            </span>
            <span>
                <input type="radio" name="radio1" id="radio1-3" className="custom-control" onChange={() => getSearchDepartment("클리닉")} checked={department === "클리닉" ? true : false} />
                <label htmlFor="radio1-3">클리닉</label>
            </span>
        </div>
    )
}

export default SingleTab;