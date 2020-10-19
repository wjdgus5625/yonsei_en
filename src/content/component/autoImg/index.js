import React, { useState } from 'react';
import Slider from 'react-slick';

const AutoImg = ({type, list}) => {
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
        <Slider className="doctor-one-wrap department mt-lg-12 mt-md-8" {...settings}>
            {
                list.map((data, index) => {
                    return (
                        <div key={index} className="slider-item bg-whiteblue">
                            <div className="item-cont">
                                <div className="name">
                                    <span className="text-lg">{data.dept_nm}</span>
                                    <div className="float-right">
                                        <span className="mr-1">
                                            <a href="#;" className="btn btn-sm btn-outline-primary">소개</a>
                                        </span>
                                        <span>
                                            <a href="#;" className="btn btn-sm btn-primary" target="_blank" title="새창">진료예약</a>
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
    );
}

export default AutoImg;