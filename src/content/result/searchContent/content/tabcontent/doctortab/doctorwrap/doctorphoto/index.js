import React from 'react';

const DoctorPhoto = (props) => {
    return (
        <div className={props.img_src !== undefined && props.img_src !== null && props.img_src.length > 0 ? "photo" : "photo none"}>
            {
                props.img_src !== undefined && props.img_src !== null && props.img_src.length > 0 ? (
                    <img src={props.src} 
                        alt="profile_photo"
                        onError={(e) => {
                            e.target.className = 'none';
                            e.target.src = '/search-en/yuhs/_share/img/common/no-thumb.png'
                            e.target.onerror = null;
                        }} 
                        onLoad={(e) => {
                            e.target.className = e.target.src.indexOf('/search-en/yuhs/_share/img/common/no-thumb.png') > -1 ? 'none' : ''
                        }} /> 
                ) : <span className="no-thumb"></span>
            }
        </div>
    )
}

export default DoctorPhoto;