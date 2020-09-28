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
                return ["content.*"];
            case "recruit" :
                return ["content.*"];
            case "fund" :
                return ["content.*"];
            case "research" :
                return ["content.*"];
            case "about" :
                return ["content.*"];
            case "health" :
                return ["content.*"];
            case "seminar" :
                return ["content.*"];
            case "guide" :
                return ["content.*"];
            case "class" :
                return ["content.*"];
            case "professor" :
                return ["doctor"];
            case "admission" :
                return ["content.*"];
            case "education" :
                return ["content.*"];
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