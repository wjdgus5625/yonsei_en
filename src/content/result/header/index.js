import React from 'react';

const Header = (props) => {
    return (
        <header id="header">
            <div className="gnb-area container">
            <h1 id="logo">
                <a href={"/search-en?m_site_cd="+props.m_site_cd}>
                    <img src="/search-en/yuhs/search-en/img/common/search-logo@2x.png" alt="Search" />
                </a>
            </h1>
        </div>
        </header>
    )
}

export default Header;