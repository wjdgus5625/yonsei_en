import React from 'react';
import ApiConfig from '../../../config/apiConfig/index'

const Footer = () => {
    return (
        <footer id="footer">
            <a href="#header" id="btn-totop">TOP</a>
            <div className="container">
                <div className="link-wrap">
                    <div className="shortcut-link">
                        <a href="#shortcut-network" className="btn btn-toggle">YUHS Network</a>
                        <div id="shortcut-network" className="shortcut-content">
                            <div className="shortcut-content-inner">
                                <div className="container">
                                    <dl>
                                        <dt><a href={ApiConfig.main_host + "/yuhs-en/"} target="_blank" rel="noopener noreferrer">Yonsei University Health System</a></dt>
                                        <dt><a href={ApiConfig.main_host + "/sev-en/"} target="_blank" rel="noopener noreferrer">Severance Hospital</a></dt>
                                        <dd>
                                            <ul>
                                                <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/cancer-en/"}>Yonsei Cancer Center Hospital</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/sev-heart-en/"}>Severance Cardiovascular Hospital</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/sev-children-en/"}>Severance Children's Hospital</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/sev-eye-en/"}>Severance EYE Hospital</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/sev-rehabil-en/"}>Severance Rehabilitation Hospital</a></li>
                                            </ul>
                                        </dd>
                                        <dt><a href={ApiConfig.main_host + "/dental-en/"} target="_blank" rel="noopener noreferrer">Yonsei University Dental Hospital</a></dt>
                                        
                                    </dl>
                                    <dl>
                                        <dt><a href={ApiConfig.main_host + "/gs-en/"} target="_blank" rel="noopener noreferrer">Gangnam Severance Hospital</a></dt>
                                        <dd>
                                            <ul>
                                                <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/gs-hbv-en/"}>Gangnam Severance Heart Brain Vascular Hospital</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/gs-cancer-en/"}>Gangnam Severance Cancer Hospital</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/gs-spine-en/"}>Gangnam Severance Spine Hospital</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/gs-dent-en/"}>Gangnam Severance Dental Hospital</a></li>
                                            </ul>
                                        </dd>
                                        <dt><a href={ApiConfig.main_host + "/yi-en/"} target="_blank" rel="noopener noreferrer">Yongin Severance Hospital</a></dt>
                                        <dd></dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="https://www.yonsei.ac.kr/" target="_blank" rel="noopener noreferrer">Yonsei University</a></dt>
                                        <dd>
                                            <ul>
                                                <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/medicine-en/"}>Yonsei University College of Medicine</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/dentistry-en/"}>Yonsei University College of Dentistry</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/nursing-en/"}>Yonsei University College of Nursing</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href={ApiConfig.main_host + "/gsph-en/"}>Graduate School of Public Health Yonsei University</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://ymlib.yonsei.ac.kr/">Yonsei University Medical Library</a></li>
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
                </div>
                <div className="site-info">
                    <address className="address">
                        <p className="address-text">50-1, Yonsei-Ro, Seodaemun-gu, Seoul 03722, Republic of Korea </p>
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