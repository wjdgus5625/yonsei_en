import React from 'react';

const SingleTab = () => {
    return (
        <div className="doctor-check">
            <span className="mr-5 ml-lg-7">
                <input type="radio" name="radio1" id="radio1-1" className="custom-control" />
                <label htmlFor="radio1-1">진료과</label>
            </span>
            <span className="mr-5">
                <input type="radio" name="radio1" id="radio1-2" className="custom-control" />
                <label htmlFor="radio1-2">센터</label>
            </span>
            <span>
                <input type="radio" name="radio1" id="radio1-3" className="custom-control" />
                <label htmlFor="radio1-3">클리닉</label>
            </span>
        </div>
    )
}

export default SingleTab;