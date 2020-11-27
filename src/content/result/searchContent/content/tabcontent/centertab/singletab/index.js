import React from 'react';

const SingleTab = (props) => {
    return (
        <div className="text-center mt-lg-6 mb-lg-6 mt-md-3">
            <span className="mr-lg-5 mr-md-3">
                <input type="radio" name="radio" id="radio" className="custom-control" onChange={() => props.getSearchDepartment("all")} checked={props.cate_cd === undefined || props.cate_cd === "" || props.cate_cd === "all" ? true : false} />
                <label htmlFor="radio">ALL</label>
            </span>
            <span className="mr-lg-5 mr-md-3">
                <input type="radio" name="radio" id="radio1" className="custom-control" onChange={() => props.getSearchDepartment("department")} checked={props.cate_cd === "department" ? true : false} />
                <label htmlFor="radio1">Department</label>
            </span>
            <span className="mr-lg-5 mr-md-3">
                <input type="radio" name="radio" id="radio2" className="custom-control" onChange={() => props.getSearchDepartment("center")} checked={props.cate_cd === "center" ? true : false} />
                <label htmlFor="radio2">Center</label>
            </span>
            <span>
                <input type="radio" name="radio" id="radio3" className="custom-control" onChange={() => props.getSearchDepartment("clinic")} checked={props.cate_cd === "clinic" ? true : false} />
                <label htmlFor="radio3">Clinic</label>
            </span>
        </div>
    )
}

export default SingleTab;