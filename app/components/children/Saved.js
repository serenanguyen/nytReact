var React = require("react");
var helpers = require("../utils/helpers");

var Saved = React.createClass({
    render: function(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Saved Articles</h3>
                </div>
                <div className="panel-body text-center">
                    {this.props.saved.map(function(savedArticle, i){
                        return (
                            <div key={i}>
                                <a href={savedArticle.url} target="_blank">{savedArticle.title}</a>
                                <span><button className="btn btn-primary btn-lg"
                                    type="button"
                                    onClick={this.props.deleteArticle.bind(this, savedArticle)}
                                    >
                                    Delete
                                </button></span>
                            </div>
                            );
                    }.bind(this))}
                </div>
            </div>
        )
    }
});

module.exports = Saved;