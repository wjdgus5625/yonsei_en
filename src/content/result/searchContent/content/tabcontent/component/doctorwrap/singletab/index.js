import React from 'react';

const SingleTab = (props) => {
    return (
        <div className="doctor-check">
            <span className="mr-5 ml-lg-7">
                <input type="radio" name="radio1" id="radio1-1" className="custom-control" onChange={() => props.getSearchDepartment("department")} checked={props.cate_cd === undefined || props.cate_cd === "" || props.cate_cd === "department" ? true : false} />
                <label htmlFor="radio1-1">진료과</label>
            </span>
            <span className="mr-5">
                <input type="radio" name="radio1" id="radio1-2" className="custom-control" onChange={() => props.getSearchDepartment("center")} checked={props.cate_cd === "center" ? true : false} />
                <label htmlFor="radio1-2">센터</label>
            </span>
            <span>
                <input type="radio" name="radio1" id="radio1-3" className="custom-control" onChange={() => props.getSearchDepartment("clinic")} checked={props.cate_cd === "clinic" ? true : false} />
                <label htmlFor="radio1-3">클리닉</label>
            </span>
        </div>
    )
}

export default SingleTab;