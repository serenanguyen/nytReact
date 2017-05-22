var axios = require("axios");

var apiKey = "cc67ec052d4d4415aaf0a05c9e60f242";

var helper ={
    runQuery: function(search){

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
        + apiKey + "&q=" + search.topic + "&begin_date=" + search.startYear + "0101&end_date="+ search.endYear +"1231";
        return axios.get(queryURL).then(function(response){
            if(response.data.response.docs){
                var results = [];
                for(var i=0; i<5; i++){
                    results.push(response.data.response.docs[i])
                };

                return results;

            }
                return "";
        });
    },

    postArticle: function(result){
        return axios.post("/api", {
            title: result.headline.main,
            url: result.web_url
        });
    },


    getSaved: function(){
        return axios.get("/api");
    },

    deleteArticle: function(result){
        return axios.delete('/api', {
            params: {
                title: result
            }
        })
    }
};

module.exports = helper;
