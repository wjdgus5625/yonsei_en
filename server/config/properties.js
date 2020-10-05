const properties = {
    indexName: (cate_cd) => {
        switch (cate_cd) {
            case "department" :
                return "dept";
            case "doctor" :
                return "doctor";
            case "news" :
                return "board";
            case "recruit" :
                return "board";
            case "fund" :
                return "board";
            case "research" :
                return "board";
            case "about" :
                return "board";
            case "health" :
                return "board";
            case "seminar" :
                return "board";
            case "guide" :
                return "board";
            case "class" :
                return "board";
            case "professor" :
                return "doctor";
            case "admission" :
                return "board";
            case "education" :
                return "board";
            default:
                console.log("존재하지 않는 카테고리 코드입니다!")
                return "";
        }
    },
    tabList: (m_site_cd) => {
        switch (m_site_cd) {
            case "yuhs": 
                return ["about", "news", "recruit", "fund", "research"]
            case "sev": 
                return ["department", "doctor", "health", "seminar", "news", "guide", "about"]
            case "gs": 
                return ["department", "doctor", "health", "seminar", "news", "guide", "about"]
            case "cancer": 
                return ["department", "doctor", "health", "seminar", "news", "guide", "about"]
            case "dental": 
                return ["department", "doctor", "health", "seminar", "news", "guide", "about"]
            case "ys": 
                return ["department", "doctor", "health", "seminar", "news", "guide", "about"]
            case "medicine": 
                return ["professor", "news", "admission", "education", "about"]
            case "dentistry": 
                return ["professor", "news", "admission", "education", "about"]
            case "nursingcolleage": 
                return ["professor", "news", "admission", "education", "about"]
            case "gsph": 
                return ["professor", "news", "admission", "education", "about"]
            default: 
                return []
        }
    },
    searchFields: (cate_cd) => {
        switch (cate_cd) {
            case "department" :
                return ["dept_nm.*"];
            case "doctor" :
                return ["detail_major.*", "nm.*", "nm_en.*", "intrst_realm.*", "clnic_realm.*"];
            case "news" :
                return ["contents"];
            case "recruit" :
                return ["contents"];
            case "fund" :
                return ["contents"];
            case "research" :
                return ["contents"];
            case "about" :
                return ["contents"];
            case "health" :
                return ["contents"];
            case "seminar" :
                return ["contents"];
            case "guide" :
                return ["contents"];
            case "class" :
                return ["contents"];
            case "professor" :
                return ["doctor"];
            case "admission" :
                return ["contents"];
            case "education" :
                return ["contents"];
            default:
                console.log("존재하지 않는 카테고리 코드입니다!")
                return "not_field";
        }
    },
    stringToCode: (str) => {
        switch (str) {
            case "진료과" :
                return "department";
            case "클리닉" :
                return "clinic";
            case "센터" :
                return "center";
        }
    }
}

module.exports = properties;