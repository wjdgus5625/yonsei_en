import React, { useContext } from 'react';
import { RootContext } from '../../../..';

const MoreBtn = () => {
    const rootContext = useContext(RootContext);

    const moreBtnClick = () => {
        let plusSize = 9;

        if(rootContext.request.menu_cd === "doctor" || rootContext.request.menu_cd === "professor" || rootContext.request.menu_cd === "department") {
            plusSize = 8;
        }

        rootContext.setRequest({
            ...rootContext.request,
            size: Number(rootContext.request.size) + plusSize
        })
    }
    return (
        <div className="text-center mt-lg-11 mt-md-6">
            <span className="btn btn-more" style={{cursor: "pointer"}} onClick={() => moreBtnClick()}>더보기</span>
        </div>
    )
}

export default MoreBtn;