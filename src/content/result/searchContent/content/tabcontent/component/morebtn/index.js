import React from 'react';
const MoreBtn = (props) => {
    let size = Number(props.size)

    const moreBtnClick = () => {
        if(props.menu_cd === "doctor" || props.menu_cd === "professor" || props.menu_cd === "department") {
            props.setSize(size + 8)
            props.getSearchMore(size + 8)
        } else {
            props.setSize(size + 9)
            props.getSearchMore(size + 9)
        }

        
    }
    return (
        <div className="text-center mt-lg-11 mt-md-6">
            <span className="btn btn-more" style={{cursor: "pointer"}} onClick={() => moreBtnClick()}>더보기</span>
        </div>
    )
}

export default MoreBtn;