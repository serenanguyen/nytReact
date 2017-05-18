var axios = require("axios");

var apiKey = "cc67ec052d4d4415aaf0a05c9e60f242";

var helper ={
    runQuery: function(topic){
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
        + apiKey + "&q=" + topic + "&begin_date=" + startDate +"0101"+ "&end_date="+ endDate+ "1231";
        return axios.get(queryURL).then(function(response){
            if(response.data.results){
                return response.data.results.formatted;
            }
                return "";
        });
    },

    getSaved: function(){
        return axios.get("/api");
    }
};

module.exports = helper;