var React = require("react");
var helpers = require("../utils/helpers");

var Results = React.createClass({
    handleClick: function(result){
      this.props.handleSave(result)
    },
    render: function(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Results</h3>
                </div>
                <div className="panel-body text-center">
                    {this.props.results.map(function(result, i) {
                        return (
                        <div key={i}>
                            <p>
                                <a href={result.web_url}>{result.headline.main}</a>
                                <br /> Publication Date: {result.pub_date}
                                <span><button className="btn btn-primary btn-lg"
                                              type="button"
                                              onClick={this.handleClick.bind(this, result)}
                                             >
                                    Save
                                </button></span>
                            </p>
                        </div>


                        )
                    }.bind(this))}
                </div>
            </div>
        )
    }
});

module.exports = Results;