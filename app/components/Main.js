var React = require("react");

// include subcomponents
var Search = require("./children/Search");
var Results = require("./children/Results");
var Saved = require("./children/Saved");

// helper for making ajax requests to our api
var helpers = require("./utils/helpers");

var Main = React.createClass({
    getInitialState: function() {
        return { search: [], results: [], saved: [] };
    },

    componentDidMount: function(){
        helpers.getSaved().then(function(response){
            if(response !== this.state.saved){
                this.setState({saved: response.data});
            }
        }.bind(this));
    },


    componentDidUpdate: function(){
        helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear)
            .then(function(data){
                if(data !== this.state.results){
                    this.setState({results: data});

                    helpers.getSaved().then(function(response){
                        this.setState({saved: response.data});
                    }.bind(this));
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


    render: function(){
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>NYT REACT</h1>
                    <h3>Search and Annotate Articles</h3>
                </div>

                <div className="col-md-12">
                    <Search  setSearch={this.setSearch}/>
                </div>

                <div className="col-md-12">
                    <Results results={this.state.results}/>
                </div>

                <div className="col-md-12">
                    <Saved saved={this.state.saved}/>
                </div>

            </div>
        )
    }
});

// Export the component back for use in other files
module.exports = Main;