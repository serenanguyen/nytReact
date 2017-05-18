var React = require("react");

// include subcomponents
var Search = require("./children/Search");
var Results = require("./children/Results");
var Saved = require("./children/Saved");

// helper for making ajax requests to our api
var helpers = require("./utils/helpers");

var Main = React.createClass({
    // getInitialState: function() {
    //     return { search: [], results: [], saved: [] };
    // },
    // // the moment the page renders get saved
    // componentDidMount: function(){
    //     helpers.getSaved().then(function(response){
    //         if(response !== this.state.saved){
    //             this.setState({saved: response.data})
    //         }
    //     }.bind(this));
    // },

    render: function(){
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>NYT REACT</h1>
                    <h3>Search and Annotate Articles</h3>
                </div>

                <div className="col-md-12">
                    <Search  />
                </div>

                <div className="col-md-12">
                    <Results />
                </div>

                <div className="col-md-12">
                    <Saved  />
                </div>

            </div>
        )
    }
});

// Export the component back for use in other files
module.exports = Main;