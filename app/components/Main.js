var React = require("react");

// include subcomponents
var Search = require("./children/Search");
var Results = require("./children/Results");
var Saved = require("./children/Saved");

// helper for making ajax requests to our api
var helpers = require("./utils/helpers");

var Main = React.createClass({
    // get initial state of components
    getInitialState: function() {
        return { search: [], results: [], saved: [] };
    },
    // once the page renders, get saved articles
    componentDidMount: function(){
        helpers.getSaved().then(function(response){
            if(response !== this.state.saved){
                this.setState({saved: response.data});
            }
        }.bind(this));
    },

    // when the component changes (search is submitted)
    componentDidUpdate: function(){
        // run query
        helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear)
            // if new results set results state to new results
            .then(function(data){
                if(data !== this.state.results){
                    this.setState({results: data});
                }
            }.bind(this));
    },

    // allows children to update the parent
    setSearch: function(topic, startYear, endYear){
        this.setState({
            topic: topic,
            startYear: startYear,
            endYear: endYear
        });
    },

    // handling saving article
    handleSave: function(saved){
        // send saved article to db
        helpers.postArticle(saved).then(function(){
            // get array of saved articles and compare it to
            // previous array, if different set state to new array
            helpers.getSaved().then(function(newSave){
                if(newSave !== this.state.saved){
                  this.setState({
                      saved: newSave.data
                  });
                }

            }.bind(this))
        }.bind(this));
    },

    // handling deleting saved article
    deleteArticle: function(article){
        // delete article from db
        helpers.deleteArticle(article.title)
            // then get array of saved and compare it to
            // old array
            .then(function(newSave){
                helpers.getSaved().then(function(newSave){
                  if(newSave !== this.state.saved){
                    this.setState({
                      saved: newSave.data
                    });
                  }
                }.bind(this))
            }.bind(this));
    },

    render: function(){
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>NYT REACT</h1>
                    <h3>Search and Annotate Articles</h3>
                    <a href="#/saved" className="btn btn-primary btn-lg">Saved Articles</a>
                    <a href="#/search" className="btn btn-primary btn-lg">Search</a>
                </div>

                <div className="col-md-12">
                <Search  setSearch={this.setSearch}/>
                </div>

                <div className="col-md-12">
                <Results results={this.state.results} handleSave={this.handleSave}/>
                </div>

                <div className="col-md-12">
                <Saved saved={this.state.saved} deleteArticle={this.deleteArticle}/>
                </div>

            </div>
        )
    }
});

// Export the component back for use in other files
module.exports = Main;
