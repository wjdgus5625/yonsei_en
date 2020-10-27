import React, { useState } from 'react';
import Slider from 'react-slick';
import ApiConfig from '../../../config/apiConfig/index'

const AutoImg = (props) => {
    const [selectDots, setSelectDots] = useState(0)
    const settings = {
        dots: true,
		infinite: true,
		speed: 300,
		arrows: false,
		slidesToShow: 1,
        adaptiveHeight: true,
        appendDots: (dots) => {
            return (
                <ul className="slick-dots">
                    {
                        dots.map((item, index) => {
                            return (
                                <li key={index} className={index === selectDots ? "slick-active" : ""} onMouseDown={(e) => {
                                    setSelectDots(index)
                                    e.preventDefault();
                                }}>
                                    {item.props.children}
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }
    }
    return (
        props.type === "dept" ? (
            <Slider className="doctor-one-wrap department mt-lg-12 mt-md-8" {...settings}>
                {   
                    props.list.map((data, index) => {
                        return (
                            <div key={index} className="slider-item bg-whiteblue">
                                <div className="item-cont">
                                    <div className="name">
                                        <span className="text-lg">{data.dept_nm}</span>
                                        <div className="float-right">
                                            <span className="mr-1">
                                                <a href={ApiConfig.main_host + data.page} className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer"
                                                    onMouseDown={(e) => {
                                                        e.preventDefault()
                                                    }}>소개</a>
                                            </span>
                                            <span>
                                                <a href={ApiConfig.main_host + "/online/online.do"} className="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer"
                                                    onMouseDown={(e) => {
                                                        e.preventDefault()
                                                    }}>진료예약</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="sumery">강남세브란스 심뇌혈관병원</div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        ) : ""
    );
}

export default AutoImg;