import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <a href="#header" id="btn-totop">TOP</a>
            <div className="container">
                <div className="shortcut-link">
                    <a href="#shortcut-network" className="btn btn-toggle">연세의료원 네트워크</a>
                    <div id="shortcut-network" className="shortcut-content">
                        <div className="shortcut-content-inner">
                            <div className="container">
                                <dl>
                                    <dt><a href="#;">연세의료원</a></dt>
                                    <dd>
                                        <ul>
                                            <li><a href="#;">뉴스</a></li>
                                            <li><a href="#;">채용</a></li>
                                            <li><a href="#;">입찰</a></li>
                                            <li><a href="#;">기금</a></li>
                                            <li><a href="#;">연구</a></li>
                                        </ul>
                                    </dd>
                                    <dt><a href="#;">세브란스병원</a></dt>
                                    <dd>
                                        <ul>
                                            <li><a href="#;">재활병원</a></li>
                                            <li><a href="#;">심장혈관병원</a></li>
                                            <li><a href="#;">안과병원</a></li>
                                            <li><a href="#;">어린이병원</a></li>
                                            <li><a href="#;">장례식장</a></li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><a href="#;">연세암병원</a></dt>
                                    <dt><a href="#;">치과대학병원</a></dt>
                                    <dt><a href="#;">강남세브란스병원</a></dt>
                                    <dd>
                                        <ul>
                                            <li><a href="#;">심뇌혈관병원</a></li>
                                            <li><a href="#;">암병원</a></li>
                                            <li><a href="#;">척추병원</a></li>
                                            <li><a href="#;">치과병원</a></li>
                                            <li><a href="#;">장례식장</a></li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><a href="#;">용인세브란스병원</a></dt>
                                    <dd></dd>
                                </dl>
                                <dl>
                                    <dt><a href="#;">연세대학교</a></dt>
                                    <dd>
                                        <ul>
                                            <li><a href="#;">의과대학</a></li>
                                            <li><a href="#;">치과대학</a></li>
                                            <li><a href="#;">간호대학</a></li>
                                            <li><a href="#;">보건대학원</a></li>
                                            <li><a href="#;">약학대학</a></li>
                                            <li><a href="#;">학술정보원</a></li>
                                            <li><a href="#;">의학도서관</a></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                            <button type="button" className="btn btn-shortcut-close">
                                <i className="ico ico-close-white"></i>
                                <span className="sr-only">닫기</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="site-info">
                    <ul className="policy-list">
                        <li><a href="#;">이용약관</a></li>
                        <li><a href="#;"><strong>개인정보처리방침</strong></a></li>
                    </ul>
                    <address className="address">
                        <p className="address-text">03722 서울특별시 서대문구 연세로 50-1</p>
                        <p className="copyright">
                            COPYRIGHT(C) SEVERANCE HOSPITAL.<br className="d-down-md" />
                            ALL RIGHTS RESERVED
                        </p>
                    </address>
                </div>
            </div>
        </footer>
    )
}

export default Footer;