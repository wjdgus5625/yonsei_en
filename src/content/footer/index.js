import React from 'react';
import ApiConfig from '../../config/apiConfig/index'

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
                                    <dt><a href={ApiConfig.main_host + "/yuhs/"}>연세의료원</a></dt>
                                    <dd>
                                        <ul>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/news/"}>뉴스</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/fund/"}>후원</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/recruit/"}>채용</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="https://sevit.yuhs.ac/">입찰</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/research/"}>의과학연구처</a></li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><a href={ApiConfig.main_host + "/sev/"}>세브란스병원</a></dt>
                                    <dd>
                                        <ul>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/cancer/"}>연세암병원</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/sev-heart/"}>심장혈관병원</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/sev-children/"}>어린이병원</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/sev-eye/"}>안과병원</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/sev-rehabil/"}>재활병원</a></li>
                                        </ul>
                                    </dd>
                                    <dt><a href={ApiConfig.main_host + "/dental/"}>치과대학병원</a></dt>
                                    
                                </dl>
                                <dl>
                                    <dt><a href={ApiConfig.main_host + "/sev-gs/"}>강남세브란스병원</a></dt>
                                    <dd>
                                        <ul>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/gs-hbv/"}>심뇌혈관병원</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/gs-cancer/"}>암병원</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/gs-spine/"}>척추병원</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/gs-dent/"}>치과병원</a></li>
                                        </ul>
                                    </dd>
                                    <dt><a href={ApiConfig.main_host + "/yi/"}>용인세브란스병원</a></dt>
                                    <dd></dd>
                                </dl>
                                <dl>
                                    <dt><a href="https://www.yonsei.ac.kr/">연세대학교</a></dt>
                                    <dd>
                                        <ul>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/medicine/"}>의과대학</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/dentistry/"}>치과대학</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/nursing/"}>간호대학</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/gsph/"}>보건대학원</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="https://library.yonsei.ac.kr/">학술정보원</a></li>
                                            <li><a target="_blank" rel="noopener noreferrer" href="https://ymlib.yonsei.ac.kr/">의학도서관</a></li>
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
                        <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/member/policy/agreement.do"}>이용약관</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/member/policy/privacy.do"}><strong>개인정보처리방침</strong></a></li>
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