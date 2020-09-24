let queryBody = {
    multi_match: (keyword, fields, operator) => {
        return {
            multi_match: {
                query: keyword,
                fields: fields,
                type: "cross_fields",
                operator
            }
        }
    },
    filter_term: (field, value) => {
        let body = { term: {} };
        body.term[field]= value
        return body;
    }
}

module.exports = queryBody;