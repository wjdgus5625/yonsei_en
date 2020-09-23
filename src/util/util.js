let util = {
    isEmpty: (v) => {
        if (v === "" || v === undefined || v === null) {
          return true;
        } else {
          return false;
        }
    },
    viewKeywordSetting: (request) => {
        let must = "";
        let mustNot = "";
        let should = "";
        let keyword = request.keyword;

        keyword.split(' ').forEach(d => {
            if(d.indexOf('+') === 0) {
                must += " " + d.replace('+','');
            } else if(d.indexOf('-') === 0) {
                mustNot += " " + d.replace('-','');
            } else if(d.indexOf('|') === 0) {
                should += " " + d.replace('|','');
            }
        });

        const result = {
            ...request,
            keyword: keyword.trim(),
            must: must.trim(),
            mustNot: mustNot.trim(),
            should: should.trim()
        }

        return result;
    },
    searchKeywordSetting: (request) => {
        const keyword = request.keyword || "";
        const afterMust = request.must || "";
        const afterMustNot = request.mustNot || "";
        const afterShould = request.should || "";
        let afterKeyword = "";

        let onlyKeyword = "";

        keyword.split(' ').forEach(d => {
            if(d.indexOf('+') !== 0 && d.indexOf('-') !== 0 && d.indexOf('|') !== 0) {
                onlyKeyword += " " + d.trim();
            }
        })

        afterKeyword += onlyKeyword;

        afterMust.split(' ').forEach(d => {
            if(d !== undefined && d.length > 0) {
                afterKeyword += " +" + d
            }
        })
        afterMustNot.split(' ').forEach(d => {
            if(d !== undefined && d.length > 0) {
                afterKeyword += " -" + d
            }
        })
        afterShould.split(' ').forEach(d => {
            if(d !== undefined && d.length > 0) {
                afterKeyword += " |" + d
            }
        })

        const result = {
            ...request,
            keyword: afterKeyword,
            must: afterMust,
            mustNot: afterMustNot,
            should: afterShould
        }

        return result
    },
    onlyKeywordSetting: (request, keyword) => {
        return {
            keyword: keyword,
            category1: request.category1,
            category2: request.category2,
            siteType: request.siteType,
            size: request.size
        }
    },
    category1Type: (category1) => {
        switch (category1) {
            case "yuhs": 
                return "headquarter"
            case "sev": 
                return "hospital"
            case "gs": 
                return "hospital"
            case "cancer": 
                return "hospital"
            case "dental": 
                return "hospital"
            case "ys": 
                return "hospital"
            case "medicine": 
                return "school"
            case "dentistry": 
                return "school"
            case "nursingcolleage": 
                return "school"
            case "gsph": 
                return "school"
            default: 
                return "hospital"
        }
    }
}

export default util;