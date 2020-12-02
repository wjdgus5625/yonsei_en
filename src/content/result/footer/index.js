import React from 'react';
import SearchViewSetting from '../../../config/searchViewSetting'

const Footer = (props) => {
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
                                        <dt><a href="https://www.severance.healthcare/severance-en" target="_blank" rel="noopener noreferrer">Severance</a></dt>
                                        <dt><a href="https://yuhs.severance.healthcare/yuhs-en" target="_blank" rel="noopener noreferrer">Yonsei University Health System</a></dt>
                                        <dt><a href="https://sev.severance.healthcare/sev-en" target="_blank" rel="noopener noreferrer">Severance Hospital</a></dt>
                                        <dd>
                                            <ul>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://cancer.severance.healthcare/cancer-en">Yonsei Cancer Center Hospital</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://sev-heart.severance.healthcare/sev-heart-en">Severance Cardiovascular Hospital</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://sev-children.severance.healthcare/sev-children-en">Severance Children's Hospital</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://sev-eye.severance.healthcare/sev-eye-en">Severance EYE Hospital</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://sev-rehabil.severance.healthcare/sev-rehabil-en">Severance Rehabilitation Hospital</a></li>
                                            </ul>
                                        </dd>
                                        
                                        
                                    </dl>
                                    <dl>
                                    <dt><a href="https://dental.severance.healthcare/dental-en" target="_blank" rel="noopener noreferrer">Yonsei University Dental Hospital</a></dt>
                                        <dt><a href="https://gs.severance.healthcare/gs-en" target="_blank" rel="noopener noreferrer">Gangnam Severance Hospital</a></dt>
                                        <dd>
                                            <ul>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://gs-hbv.severance.healthcare/gs-hbv-en">Gangnam Severance Heart Brain Vascular Hospital</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://gs-cancer.severance.healthcare/gs-cancer-en">Gangnam Severance Cancer Hospital</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://gs-spine.severance.healthcare/gs-spine-en">Gangnam Severance Spine Hospital</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://gs-dent.severance.healthcare/gs-dent-en">Gangnam Severance Dental Hospital</a></li>
                                            </ul>
                                        </dd>
                                        <dt><a href="https://yi.severance.healthcare/yi-en" target="_blank" rel="noopener noreferrer">Yongin Severance Hospital</a></dt>
                                        <dd></dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="https://www.yonsei.ac.kr/en_sc/" target="_blank" rel="noopener noreferrer">Yonsei University</a></dt>
                                        <dd>
                                            <ul>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://medicine.severance.healthcare/medicine-en">Yonsei University College of Medicine</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://dentistry.severance.healthcare/dentistry-en">Yonsei University College of Dentistry</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://nursing.severance.healthcare/nursing-en">Yonsei University College of Nursing</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://gsph.severance.healthcare/gsph-en">Graduate School of Public Health Yonsei University</a></li>
                                                <li><a target="_blank" rel="noopener noreferrer" href="https://ymlib.yonsei.ac.kr/en/">Yonsei University Medical Library</a></li>
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
                    {
                        props.m_site_cd !== undefined && props.s_site_cd !== undefined && SearchViewSetting.footer[props.m_site_cd] !== undefined && SearchViewSetting.footer[props.m_site_cd][props.s_site_cd] !== undefined ? (
                            <address className="address">
                                <p className="address-text">{SearchViewSetting.footer[props.m_site_cd][props.s_site_cd].addr}</p>
                                <p className="copyright">
                                    COPYRIGHT(C) {SearchViewSetting.footer[props.m_site_cd][props.s_site_cd].hospital_nm}.&nbsp;<br className="d-down-md" />
                                    ALL RIGHTS RESERVED
                                </p>
                            </address>
                        ) : (
                            <address className="address">
                                <p className="address-text">50-1, Yonsei-Ro, Seodaemun-gu, Seoul 03722, Republic of Korea</p>
                                <p className="copyright">
                                    COPYRIGHT(C) SEVERANCE HOSPITAL.&nbsp;<br className="d-down-md" />
                                    ALL RIGHTS RESERVED
                                </p>
                            </address>
                        )
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer;