let util = {
    isEmpty: (v) => {
        if (v === "" || v === undefined || v === null) {
          return true;
        } else {
          return false;
        }
    },
    searchKeywordSetting2: (request) => {
        if(request.menu_cd === "doctor" || request.menu_cd === "department" || request.menu_cd === "professor") {
            return {
                keyword: request.keyword.trim(),
                m_site_cd: request.m_site_cd,
                s_site_cd: request.s_site_cd,
                menu_cd: request.menu_cd,
                siteType: request.siteType,
                size: request.size,
                cate_cd: request.cate_cd,
                language: "en"
            }
        } else {
            return {
                keyword: request.keyword.trim(),
                m_site_cd: request.m_site_cd,
                s_site_cd: request.s_site_cd,
                menu_cd: request.menu_cd,
                siteType: request.siteType,
                size: request.size,
                language: "en"
            }
        }

    },
    searchKeywordSetting2_menu: (request, menu_cd, cate_cd) => {
        if(menu_cd === "doctor" || menu_cd === "department" || menu_cd === "professor") {
            return {
                keyword: request.keyword.trim(),
                m_site_cd: request.m_site_cd,
                s_site_cd: request.s_site_cd,
                menu_cd: menu_cd,
                siteType: request.siteType,
                size: request.size,
                cate_cd: cate_cd,
                language: "en"
            }
        } else {
            return {
                keyword: request.keyword.trim(),
                m_site_cd: request.m_site_cd,
                s_site_cd: request.s_site_cd,
                menu_cd: menu_cd,
                siteType: request.siteType,
                size: request.size,
                language: "en"
            }
        }
    },
    onlyKeywordSetting: (request, keyword) => {
        const reSearchKeyword = request.reSearchKeyword || "";
        let searchKeyword = keyword || "";
        if(reSearchKeyword.length > 0) {
            searchKeyword = keyword + " +" + reSearchKeyword
        }

        if(request.menu_cd === "doctor" || request.menu_cd === "department" || request.menu_cd === "professor") {
            return {
                keyword: searchKeyword.trim(),
                m_site_cd: request.m_site_cd,
                s_site_cd: request.s_site_cd,
                menu_cd: request.menu_cd,
                siteType: request.siteType,
                size: request.size,
                cate_cd: request.cate_cd,
                language: "en"
            }
        } else {
            return {
                keyword: searchKeyword.trim(),
                m_site_cd: request.m_site_cd,
                s_site_cd: request.s_site_cd,
                menu_cd: request.menu_cd,
                siteType: request.siteType,
                size: request.size,
                language: "en"
            }
        }
    },
    m_site_cdType: (m_site_cd) => {
        switch (m_site_cd) {
            case "yuhs": 
                return "hospital"
            case "sev": 
                return "hospital"
            case "gs": 
                return "hospital"
            case "cancer": 
                return "hospital"
            case "dental": 
                return "hospital"
            case "yi": 
                return "hospital"
            case "medicine": 
                return "school"
            case "dentistry": 
                return "school"
            case "nursing": 
                return "school"
            case "gsph": 
                return "school"
            default: 
                return "hospital"
        }
    },
    linkWrite: (request, menu_cd) => {
        let cate_cd = "";
        let size = 3;

        if(menu_cd === "doctor" || menu_cd === "professor" || menu_cd === "department") {
            size = 12;
        }

        if(menu_cd === "doctor") {
            cate_cd = "department"
        }

        return {
            ...request,
            menu_cd: menu_cd,
            cate_cd: cate_cd,
            size: size
        }
    },
    keywordType: (keyword, type) => {
        let reKeyword = "";
        keyword.split(' ').forEach(d => {
            if(type === "keyword") {
                if(d.indexOf('+') !== 0 && d.indexOf('-') !== 0 && d.indexOf('|') !== 0) {
                    reKeyword += " " + d
                }
            } else if (type === "must") {
                if(d.indexOf('+') === 0) {
                    reKeyword += " " + d.substring(1, d.length)
                }
            } else if (type === "mustNot") {
                if(d.indexOf('-') === 0) {
                    reKeyword += " " + d.substring(1, d.length)
                }
            } else if (type === "should") {
                if(d.indexOf('|') === 0) {
                    reKeyword += " " + d.substring(1, d.length)
                }
            }
        })
        return reKeyword.trim();
    },
    setSrhKeyword: (keyword, must, mustNot, should) => {
        let srhKeyword = ""

        srhKeyword += keyword

        must.split(' ').forEach(data => {
            if(data.length > 0) {
                srhKeyword += " +" + data
            }
        })
        mustNot.split(' ').forEach(data => {
            if(data.length > 0) {
                srhKeyword += " -" + data
            }
        })
        should.split(' ').forEach(data => {
            if(data.length > 0) {
                srhKeyword += " |" + data
            }
        })

        return srhKeyword
    }
}

export default util;