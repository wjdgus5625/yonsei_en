const properties = {
    indexName: (cate_cd) => {
        switch (cate_cd) {
            case "department" :
                return "dept";
            case "doctor" :
                return "doctor";
            case "news" :
                return "";
            case "recruit" :
                return "";
            case "fund" :
                return "";
            case "research" :
                return "";
            case "about" :
                return "";
            case "health" :
                return "";
            case "seminar" :
                return "";
            case "guide" :
                return "";
            case "class" :
                return "";
            case "professor" :
                return "";
            case "admission" :
                return "";
            case "education" :
                return "";
            default:
                console.log("존재하지 않는 카테고리 코드입니다!")
                return "";
        }
    }
}

module.exports = properties;