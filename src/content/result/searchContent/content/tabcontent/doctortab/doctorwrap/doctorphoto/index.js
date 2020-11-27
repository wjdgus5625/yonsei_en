import React, { useEffect, useState } from 'react';

const DoctorPhoto = (props) => {
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        setVisible(true)
    }, [props.src])
    return (
        <div className={visible ? "photo" : "photo none"}>
            {
                visible && props.img_src !== undefined && props.img_src !== null & props.img_src.length > 0 ? (
                    <img src={props.src} 
                        alt="프로필 사진"
                        onError={() => {
                            setVisible(false)
                        }} /> 
                ) : <span className="no-thumb"></span>
            }
        </div>
    )
}

export default DoctorPhoto;